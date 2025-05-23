import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';

export const locales = ['en', 'pt-br'] as const;
export const defaultLocale = 'pt-br';

export function getLocale(request: NextRequest) {
  const acceptLanguageHeader = request.headers.get('accept-language');
  const languages = new Negotiator({ headers: { 'accept-language': acceptLanguageHeader } }).languages();

  return match(languages, locales as any, defaultLocale);
}