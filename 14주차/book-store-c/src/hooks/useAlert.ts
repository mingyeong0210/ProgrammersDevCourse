import { useCallback } from "react"

export const useAlert = () => {
    const showAlert = useCallback((massage: string) => {
        window.alert(massage);
    }, []);

    const showConfirm = useCallback((message: string, onConfirm: () => void) => {
        if (window.confirm(message)) {
            onConfirm();
        }
    }, []);

    return { showAlert, showConfirm };
};