export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Build a Dungeon Wiki",
  shortName: "Build a Dungeon",
  logoText: "BD",
  tagline: "Complete Guides, Codes, Updates & Simulator Tips",
  description: "Build a Dungeon Wiki provides dungeon building guides, gameplay tips, codes, updates, and complete information to help players create stronger fantasy dungeons.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://build-a-dungeon.wiki",
  supportEmail: "support@build-a-dungeon.wiki",
  gameUrl: "https://www.roblox.com/",
  heroVideoId: "0wJvHkVJykc", // Build a Dungeon gameplay video
  social: {
    discord: "https://discord.com/",
    youtube: "https://www.youtube.com/",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
