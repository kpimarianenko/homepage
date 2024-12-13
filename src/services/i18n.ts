import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/assets/translations/en.json';
import uk from '@/assets/translations/uk.json';

const translations = {
  en,
  uk,
};

export type LanguageCode = keyof typeof translations;
type Translation = typeof en;
type I18NextResources = {
  [code in LanguageCode]?: {
    translation: Translation;
  };
};
type TOptions = {
  [key: string]: string | number;
};

abstract class I18N {
  public abstract get currentLanguage(): LanguageCode;
  public abstract t(key: string): string;
  public abstract changeLanguage(code: LanguageCode): void;
}

class I18Next extends I18N {
  private static languageLocalStorageCode = 'lng';

  public get currentLanguage() {
    return i18next.language as LanguageCode;
  }

  constructor() {
    super();

    const resources = Object.entries(translations).reduce<I18NextResources>((acc, [key, value]) => {
      acc[key as LanguageCode] = { translation: value };
      return acc;
    }, {});

    i18next
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        detection: {
          order: ['localStorage', 'navigator'],
          lookupLocalStorage: I18Next.languageLocalStorageCode,
        },
        resources,
        fallbackLng: 'en',
      });
  }

  public t = (key: string, options?: TOptions) => i18next.t(key, options);

  public changeLanguage = (code: string) => {
    i18next.changeLanguage(code, err => {
      if (!err) {
        localStorage.setItem(I18Next.languageLocalStorageCode, code);
      }
    });
  };
}

export const i18n = new I18Next();
