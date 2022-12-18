import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { BaseApi } from "../api/BaseApi"

export const useEntities = <T, >(api: BaseApi<T>): [T[] | undefined, Dispatch<SetStateAction<T[] | undefined>>, () => void] => {
    const [entities, setEntities] = useState<T[]>()

    const refresh = () => {
        return api.findAll()
            .then(res => setEntities(res))
    }

    useEffect(() => {
        refresh()
    }, [])

    return [entities, setEntities, refresh]
}