import { useCallback } from "react"

export const useAlert = () => {
    const showAlert = useCallback((massage: string) => {
        window.alert(massage);
    }, []);

    return showAlert;
};