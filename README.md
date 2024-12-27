npx create-react-app assignment
cd assignment
npm install tailwindcss postcss autoprefixer
npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
npm install chart.js react-chartjs-2 
To make it responsive, you can add Tailwind’s breakpoint classes like this:
add api key in either env or directly in components/ArticleList/index.js
<nav className="bg-[#0096ff] text-white w-[60%] h-screen max-w-[200px] text-[20px] sm:w-[50%] md:w-[40%]">
