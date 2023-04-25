export function useDebounce(callback: (...args: any) => void, delay: number): () => void {
    let timer: NodeJS.Timeout;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
