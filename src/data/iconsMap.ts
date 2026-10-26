import { config } from "@/config.ts";

// derive type từ mảng config.collections
export type CollectionType = typeof config.collections[number];

export const ICONS_MAP: Record<CollectionType, Record<string, string>> = {
  eatery: {
    "Giới thiệu": "📍️️",
    "Chưa phân loại": "📍️",
    categorized: "🥗",
  },

  places: {
    "Giới thiệu": "📍",
    "Chưa phân loại": "📍",
    categorized: "🚩",
  },

  pagodas: {
    "Giới thiệu": "📍",
    "Chưa phân loại": "📍",
    categorized: "⛩️",
  },

  buddhas: {
    "Giới thiệu": "☀️",
    "Chưa phân loại": "☀️",
    categorized: "☀️",
  },

  bodhisattvas: {
    "Giới thiệu": "☀️",
    "Chưa phân loại": "☀️",
    categorized: "🪷",
  },

  enlighteners: {
    "Giới thiệu": "💫",
    "Chưa phân loại": "💫",
    categorized: "🌟",
  },

  layman: {
    "Giới thiệu": "☃️",
    "Chưa phân loại": "☃️",
    categorized: "⭐️",
  },

  kings: {
    "Giới thiệu": "👑",
    "Chưa phân loại": "👑",
    categorized: "🤴",
  },

  faqs: {
    "Giới thiệu": "❓",
    "Chưa phân loại": "❓",
    categorized: "❓",
  },

  koans: {
    "Giới thiệu": "🪨",
    "Chưa phân loại": "🪨",
    categorized: "⚡️",
  },

  speeches: {
    "Giới thiệu": "💭",
    "Chưa phân loại": "💭",
    categorized: "💬",
  },

  teachings: {
    "Giới thiệu": "💭",
    "Chưa phân loại": "💭",
    categorized: "💬",
  },

  practices: {
    "Giới thiệu": "🎯",
    "Chưa phân loại": "🧩",
    categorized: "⏰",
  },

  blogs: {
    "Giới thiệu": "🪧",
    "Chưa phân loại": "📰",
    categorized: "📑",
  },

  merits: {
    "Giới thiệu": "🌈",
    "Chưa phân loại": "✋🏻",
    categorized: "🙌",
  },

  symptoms: {
    "Giới thiệu": "‍🌀",
    "Chưa phân loại": "🌀",
    categorized: "🌀",
    "TRIỆU CHỨNG TỐT": "✅",
    "THIỀN BỆNH": "❌",
  },

  sutras: {
    "Giới thiệu": "📚",
    "Chưa phân loại": "📚",
    categorized: "📒",
  },

  precepts: {
    "Giới thiệu": "📓",
    "Chưa phân loại": "📓",
    categorized: "📙",
  },

  textBooks: {
    "Giới thiệu": "📓",
    "Chưa phân loại": "📓",
    categorized: "📕",
  },

  films: {
    "Giới thiệu": "🎬",
    "Chưa phân loại": "🎬",
    categorized: "🎥",
  },
};
