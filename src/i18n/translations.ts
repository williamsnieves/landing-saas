import en from './locales/en.json';
import es from './locales/es.json';
import de from './locales/de.json';
import pt from './locales/pt.json';
import fr from './locales/fr.json';
import zh from './locales/zh.json';

export const languages = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  pt: 'Português',
  fr: 'Français',
  zh: '中文',
};

export const defaultLang = 'en';

export const ui = {
  en,
  es,
  de,
  pt,
  fr,
  zh,
} as const;
