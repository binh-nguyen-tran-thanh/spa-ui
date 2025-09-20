import { I18N_LOCALES } from '@/constants/i18n';
import messages from './src/messages/en.json';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof I18N_LOCALES)[number];
    Messages: typeof messages;
  }
}
