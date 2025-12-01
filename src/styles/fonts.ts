import {
  Fraunces,
  Inter,
  Playfair_Display,
  Source_Sans_3,
  Cormorant_Garamond,
  Manrope,
  Syne,
  Space_Grotesk,
  Red_Hat_Display,
  Red_Hat_Text,
  Outfit,
  Sora,
  Plus_Jakarta_Sans,
  IBM_Plex_Serif,
  IBM_Plex_Sans,
  Merriweather,
  Work_Sans,
  JetBrains_Mono,
  Poppins,
  DM_Serif_Display,
  Open_Sans,
  Lexend,
  Raleway,
  Nunito_Sans,
  Bebas_Neue,
} from "next/font/google";

// ============================================================================
// FONT INSTANCES
// ============================================================================

// Display Fonts
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true, // Preload default display font
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
});

export const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

// Body Fonts (Optimized with preload and fallback)
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true, // Preload primary body font
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Mono Font
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"], // Limit to commonly used weights
  preload: true, // Preload mono font for code blocks
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
});

// ============================================================================
// FONT PAIR DEFINITIONS
// ============================================================================

export type FontPair = {
  id: string;
  name: string;
  displayFont: ReturnType<typeof Space_Grotesk>;
  bodyFont: ReturnType<typeof Inter>;
  tone: string;
  description: string;
};

export const FONT_PAIRS: Record<string, FontPair> = {
  fraunces_inter: {
    id: "fraunces_inter",
    name: "Fraunces × Inter",
    displayFont: fraunces,
    bodyFont: inter,
    tone: "Elegant & Modern",
    description: "Sophisticated serif headlines with clean sans-serif body",
  },
  playfair_source: {
    id: "playfair_source",
    name: "Playfair × Source Sans 3",
    displayFont: playfairDisplay,
    bodyFont: sourceSans3,
    tone: "Editorial & Refined",
    description: "Classic editorial style with excellent readability",
  },
  cormorant_manrope: {
    id: "cormorant_manrope",
    name: "Cormorant × Manrope",
    displayFont: cormorantGaramond,
    bodyFont: manrope,
    tone: "Sophisticated & Humanist",
    description: "Elegant serif with warm, geometric sans-serif",
  },
  syne_inter: {
    id: "syne_inter",
    name: "Syne × Inter",
    displayFont: syne,
    bodyFont: inter,
    tone: "Bold & Geometric",
    description: "Contemporary geometric headlines with versatile body",
  },
  space_inter: {
    id: "space_inter",
    name: "Space Grotesk × Inter",
    displayFont: spaceGrotesk,
    bodyFont: inter,
    tone: "Futuristic & Tech",
    description: "Modern tech aesthetic with clean readability",
  },
  redhat_redhat: {
    id: "redhat_redhat",
    name: "Red Hat Display × Text",
    displayFont: redHatDisplay,
    bodyFont: redHatText,
    tone: "Cohesive & Clean",
    description: "Unified type family with excellent hierarchy",
  },
  outfit_sora: {
    id: "outfit_sora",
    name: "Outfit × Sora",
    displayFont: outfit,
    bodyFont: sora,
    tone: "Minimal & Futuristic",
    description: "Sleek geometric design with smooth curves",
  },
  jakarta_inter: {
    id: "jakarta_inter",
    name: "Plus Jakarta × Inter",
    displayFont: plusJakartaSans,
    bodyFont: inter,
    tone: "Neutral & Professional",
    description: "Balanced modern design for business contexts",
  },
  ibmplex_ibmplex: {
    id: "ibmplex_ibmplex",
    name: "IBM Plex Serif × Sans",
    displayFont: ibmPlexSerif,
    bodyFont: ibmPlexSans,
    tone: "Corporate & Structured",
    description: "Professional IBM design system aesthetic",
  },
  merriweather_work: {
    id: "merriweather_work",
    name: "Merriweather × Work Sans",
    displayFont: merriweather,
    bodyFont: workSans,
    tone: "Classic & Human",
    description: "Timeless serif with approachable sans-serif",
  },
  poppins_inter: {
    id: "poppins_inter",
    name: "Poppins × Inter",
    displayFont: poppins,
    bodyFont: inter,
    tone: "Modern & Versatile",
    description: "Popular geometric font with clean, readable body",
  },
  dm_opensans: {
    id: "dm_opensans",
    name: "DM Serif Display × Open Sans",
    displayFont: dmSerifDisplay,
    bodyFont: openSans,
    tone: "Elegant & Classic",
    description: "High-contrast serif with universally readable sans",
  },
  lexend_manrope: {
    id: "lexend_manrope",
    name: "Lexend × Manrope",
    displayFont: lexend,
    bodyFont: manrope,
    tone: "Tech-Friendly & Balanced",
    description: "Designed for readability with modern geometric body",
  },
  raleway_nunito: {
    id: "raleway_nunito",
    name: "Raleway × Nunito Sans",
    displayFont: raleway,
    bodyFont: nunitoSans,
    tone: "Friendly & Professional",
    description: "Elegant display with warm, approachable body",
  },
  bebas_inter: {
    id: "bebas_inter",
    name: "Bebas Neue × Inter",
    displayFont: bebasNeue,
    bodyFont: inter,
    tone: "Bold & Creative",
    description: "Condensed all-caps headlines with versatile body",
  },
};

export const DEFAULT_FONT_PAIR = "space_inter";
