import { I18N_DEFAULT_LOCALE } from '@/constants/i18n';
import { TLocale } from '@/types/i18n';
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = (store.get('locale')?.value as TLocale) || I18N_DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
