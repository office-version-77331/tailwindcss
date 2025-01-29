/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {mullish : ["Mulish", "sans-serif" ], 
      },
      container: {
        center: true, 
      },
      colors: {
        deepblue:  "#02042a",
        lightBlue: "#2b84ea", 
        lightBlue300: "#4b94ed", 
        lightBlue500: "#0b72e7", 
        greenLight: "#61cea6", 
        grayText: "#818597", 
        lightGray: "#e2e2e2", 
        grayBlue: "#344a6c", 
        gray2: "#525a76", 
        deepBlueHead: "#162f56",
      },
    },
  },
  plugins: [],
}

