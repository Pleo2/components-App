/** @type {import('tailwindcss').Config} */
const { Colors } = require('./constants/Colors');

module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./presentation/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                dark: {
                    primary: Colors.dark.primary,
                    secondary: Colors.dark.secondary,
                    tertiary: Colors.dark.tertiary,
                    background: Colors.dark.background,
                    surface: Colors.dark.surface,
                    error: Colors.dark.error,
                    text: Colors.dark.text,
                    background: Colors.dark.background,
                },
                light: {
                    primary: Colors.light.primary,
                    secondary: Colors.light.secondary,
                    tertiary: Colors.light.tertiary,
                    background: Colors.light.background,
                    surface: Colors.light.surface,
                    error: Colors.light.error,
                    text: Colors.dark.text,
                    background: Colors.dark.background,
                }
            }
        }
    },
    plugins: []
};
