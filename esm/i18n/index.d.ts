import '/public/locale/zh-CN.js';
type Language = string;
interface Locale {
    [key: string]: Locale | string | any;
}
interface WebDicomViewLocal {
    [key: string]: {
        name: string;
        locale: Locale;
        language: string;
    };
}
declare const getLanguage: () => string;
declare const getLocale: (lang?: Language) => Locale;
declare const isZh: () => boolean;
declare const setLanguage: (lang: Language, persist?: boolean) => void;
declare const setLanguageDefault: (lang: Language) => void;
/** @deprecated  Use is not recommended, please use useAppStore => getLocale. */
declare const translate: (key: string, lang?: Language) => any;
export { Language, Locale, WebDicomViewLocal };
export { getLanguage, getLocale, setLanguage, setLanguageDefault, translate, isZh };
