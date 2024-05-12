import React, { createContext, useContext, useState, useEffect } from 'react';
import './AldoAlertProvider.css'; // Import your CSS file

const ToastContext = createContext();

export const useAldoAlert = () => useContext(ToastContext);

export const AldoAlertProvider = ({ children }) => {
    const [toast, setToast] = useState(null);
    const [visible, setVisible] = useState(false);

    const showAldoAlert = (message, type = 'info') => {
        setToast({ message, type });
        setVisible(true);
        setTimeout(() => {
            setToast(null);
            setVisible(false);
        }, 3000); // Auto dismiss after 3 seconds
    };

    return (
        <ToastContext.Provider value={{ showAldoAlert }}>
            {children}
            <div className={`toast-container ${visible ? 'toast-container-visible' : ''}`}>
                {toast && (
                    <div className={`toast toast-${toast.type}`}>
                        <p>{toast.message}</p>
                    </div>
                )}

            </div>
        </ToastContext.Provider>
    );
};
