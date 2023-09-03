#!/bin/bash
echo -e "\e[30;46mRunning 'npm create vite@latest react-app -- --template react'\e[0m"
npm create vite@latest react-app -- --template react
echo -e "\e[30;46mRunning 'cd react-app'\e[0m"
cd react-app
echo -e "\e[30;46mRunning 'npm install -D tailwindcss postcss autoprefixer'\e[0m"
npm install -D tailwindcss postcss autoprefixer
echo -e "\e[30;46mRunning 'npx tailwindcss init -p'\e[0m"
npx tailwindcss init -p
echo -e "\e[30;46mRunning 'echo "/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}"
'\e[0m"
echo "/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}"

echo -e "\e[30;46mRunning 'cd src && echo '@tailwind base; @tailwind components;  @tailwind utilities;' > index.css'\e[0m"
cd src && echo '@tailwind base; @tailwind components;  @tailwind utilities;' > index.css
echo -e "\e[30;46mRunning 'npm run dev'\e[0m"
npm run dev
read -n1 -r -p "Press any key to exit" key
