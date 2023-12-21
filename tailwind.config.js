/** @type {import('tailwindcss').Config} */
import daisy from 'daisyui'
export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './**/*.html'
    ],
    plugins: [daisy],
    theme: {
        extend: {
            fontFamily: {
                'lexend': ['Lexend']
        }
    }
    }
}