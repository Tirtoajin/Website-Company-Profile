/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warna Palet Baru Anda
        primary: "#EE3539", // Merah
        secondary: "#FAA954", // Oranye
        accent: "#FFD991", // Kuning Muda

        // Warna Netral untuk Background Gelap
        dark: "#111827", // Hitam kebiruan (elegan)
        darker: "#0B0F19", // Hitam pekat
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Pastikan font terlihat modern
      },
    },
  },
  plugins: [],
};
