[JS101: Programming Foundations with JavaScript](https://launchschool.com/courses/804d1cae/home)

# Resources
- [SPOT Wiki](https://www.notion.so/SPOT-Wiki-1b4fe53778f34614b28a8e76ce028782)
- [JS101 Exercises](https://www.notion.so/JS101-085f4f55ed5e41cb9003d9f0a3aa48ef)

# How to set up npm
https://launchschool.com/books/javascript/read/input_output#commandlineinput
1. Use the ls command to see if there is a `package.json` file in the current directory.
2. If there is not one, create one with `npm init -y`.
3. Install what you need, e.g., `npm install readline-sync --save`

# How to set up ESLint
https://launchschool.com/gists/9ad96eed
1. Install: ```npm install eslint@7.12.1 eslint-cli babel-eslint --save-dev```
2. Check version: ```npx eslint -v```
3. Put your default `.eslintrc.yml` file in a directory that contains all of your projects as subdirectories. Alternatively, you can put the file in each project directory and customize it as needed.
4. run eslint: ```npx eslint test.js```