/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      letterSpacing: {
        'most-widest' : "0.9rem",
      },
      backgroundImage: {
        'hero': "url('https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412561/E-commerce%20landing%20page/header/header-image_3x.jpg')",
        'article_1': "/src/images/article.jpg",
      },
    },
  },
  plugins: [],
}

