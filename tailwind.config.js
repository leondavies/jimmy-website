/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {

        extend: {
            backgroundImage: {
                'hero-image': "url('/public/assets/images/PlaceholderPic.jpg'), linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.49950419620973385) 50%, rgba(0,0,0,1) 100%)"

                
            },
            colors: {
                'orange-btn' : "#ea580c"
            },
        
        },
    },
    plugins: [],
}