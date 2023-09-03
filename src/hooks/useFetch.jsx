import { useState, useEffect } from 'react';
//hooks personalizado que ejecuta una peticion fetch y retorna la data,el error y el estado de la carga de la peticion   
export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            setLoading(true);   //estado de carga
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    let err = new Error("Error en la peticion");
                    err.status = res.status || "00";
                    err.statusText = res.statusText || "Ocurrio un error";
                    throw err;
                }
                const json = await res.json();
                if (!signal.aborted) {
                    setData(json);  //respuesta de la peticion data
                    setError(null);
                }

            } catch (error) {
                if (!signal.aborted) {
                    setData(null);
                    setError(error);
                }
            } finally {
                if (!signal.aborted) {  //Espera para visualizar el renderizado del Loader
                    setTimeout(() => {
                        if (!signal.aborted) {
                            setLoading(false);
                        }
                    }, 3000);
                }
            }
        };

        fetchData();

        return () => abortController.abort();   //cuando desmonta el elmento con el return en el effect ejecuta la muerte de la solicitud


    }, [url]);

    return { data, error, loading }
};

