import { StorageEnum } from "../../models/enuns/app/storage/storage.enum";

export const useStorage = () => {

    const getStorage = (key: StorageEnum) => {
        return JSON.parse(localStorage.getItem(StorageEnum[key].toString()) || '{}');
    } 

    const setStorage = (key: StorageEnum, object: any) => {
        return localStorage.setItem(StorageEnum[key].toString(), JSON.stringify(object))
    }

    const removeStorage = (key: StorageEnum) => {
        return localStorage.removeItem(StorageEnum[key].toString())
    }

    return {
        getStorage,
        setStorage,
        removeStorage,
    }
}