import { useEffect } from "react";
const useKeyDown = (keyCode, callback) => {
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.code === keyCode) {
                callback();
            }
        }
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [keyCode, callback]);
};

export default useKeyDown;