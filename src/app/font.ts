import { Figtree, Inter, Outfit, Young_Serif } from "next/font/google";

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

export { youngSerif, outFit, inter, figtree };
