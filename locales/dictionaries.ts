import 'server-only'
 
const dictionaries = {
  en: () => import('./resources/en.json').then((module) => module.default),
  ar: () => import('./resources/ar.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en' | 'ar') =>
  dictionaries[locale]()