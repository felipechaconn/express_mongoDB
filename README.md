## First steps NodeJS

1. Create package.JSON
    -  `npm init -y`
2. instal dependencies
    - `npm i express express-handlebars mongoose morgan`
        - express: Framework to work with nodejs (to work with HTTPS)
        - express-handlebars: used to render html in server site
        - mongoose: MongoDB straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building.
        - morgan: Allow watch petitions http in console
3. Create folder src and index.js
4. Install babel to use new js commands and Babel will interpet to old js structure and Nodemon, nodemon refresh code in files.
    - `npm i -D @babel/core @babel/cli @babel/node @babel/preset-env nodemon`
    - Create file to work with babel .babelrc 
5. We need to run `npx babel-node src/index.js` because we use import on index.js
6. Create a startup script in package.json 'start:dev': "nodemon src/index.js --exec babel-node"
7. We need to install dotenv module to works with .env
    - `npm i dotenv`


## NOTES


Partials are handelbars templates that you could call and reuse them


methodOverride node js =  changes the method get to put or delete from frontend.