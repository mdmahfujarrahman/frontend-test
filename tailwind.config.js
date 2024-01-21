/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#020138cc",
                secondary: "#2FA2EF",
                ternary: "#8DD1FF",
            },
        },
    },
    plugins: [],
};
