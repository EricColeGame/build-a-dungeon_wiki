import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import en from "@/locales/en.json";
import pt from "@/locales/pt.json";
import es from "@/locales/es.json";
import de from "@/locales/de.json";

const messagesMap = {
  "en": en,
  "pt": pt,
  "es": es,
  "de": de,
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: messagesMap[locale as keyof typeof messagesMap] || en,
  };
});
