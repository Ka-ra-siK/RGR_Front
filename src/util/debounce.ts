import { useEffect, useState } from "react"

export const useDebounceApi = (value: any, timeout: number, handler: (value: any) => void) => {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const t = setTimeout(() => {
            setDebounced(value);
        }, timeout)

        return () => clearTimeout(t)

    }, [value])

    useEffect(() => handler(debounced), [debounced])
}