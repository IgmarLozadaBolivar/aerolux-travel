/** @type {path.PlatformPath | path} */
const path = require("path");

module.exports = {
    darkMode: 'class',
    content: [
        path.join(__dirname, "src/**/*.{astro,js,jsx,ts,tsx}"),
        path.join(__dirname, "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"),
    ],
    theme: {
        extend: {
            fontFamily: {
                reaktifSemibold: ['"Reaktif Semibold"', 'sans-serif'],
                reaktifBold: ['"Reaktif Bold"', 'sans-serif'],
                reaktifNews: ['"Reaktif News"', 'sans-serif'],
                cabinRegular: ['"Cabin Regular"', 'sans-serif'],
                cabinBold: ['"Cabin Bold"', 'sans-serif'],
            }
        }
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ["light", "dark"],
        logs: true
    },
}