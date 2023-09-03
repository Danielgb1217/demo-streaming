import React, { useState } from 'react';

export const useModal = (initialValue = false) => { //control de la apertura y cierre del modal /popup

    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return ([
        isOpen,
        openModal,
        closeModal
    ])
}
