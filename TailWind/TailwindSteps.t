#0. Add cdn to head <script src="https://cdn.tailwindcss.com"></script>

#1. npm init -y

#2. npm install -D tailwindcss postcss autoprefixer

#3. npx tailwindcss init

#4. Configure Tailwind CSS

      Open tailwind.config.js and specify the paths to your templates
          module.exports = {
            content: ["./src/**/*.{html,js}"],
            theme: {
           extend: {},
        },
          plugins: [],
    }

#5. create css file and add these to it // we create Tailwind1.css
       @tailwind base;
       @tailwind components;
       @tailwind utilities;

#6. Run Command npx tailwindcss -i ./Tailwind1.css -o ./dist/output.css --watch

#7. Link to HTML ----> <link href="./dist/output.css" rel="stylesheet">
  

  <<<--------------------->>> ALL SET START USING TAILWING <<<------------------------>>>