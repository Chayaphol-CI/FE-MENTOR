import {
  Figtree,
  Fraunces,
  Hanken_Grotesk,
  Inter,
  Manrope,
  Outfit,
  Work_Sans,
  Young_Serif,
} from "next/font/google";

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const outFit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["700", "400"],
});

const figtree = Figtree({
  variable: "--figtree",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export {
  youngSerif,
  outFit,
  inter,
  figtree,
  workSans,
  fraunces,
  manrope,
  hankenGrotesk,
};
