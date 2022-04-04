const ls = window.localStorage

export default class Storage {
    static getItem = (key: string) => ls.getItem(key)
    static setItem = (key: string, value: string) => ls.setItem(key, value)
    static removeItem = (key: string) => ls.removeItem(key)
}
