# todo-app
It is an easy project to practice the integration between vue, vuex and Element.ui. 

###### Demo: https://oussamaalouat.github.io/vue-todo-app/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
#### Deploy on heroku server
1. Create server.js file on your root app's directory.
2. Sure that "express" and "serve-static" dependencies are installed.
3. Install heroku on your machine (instructions) --> https://devcenter.heroku.com/articles/heroku-cli
4. Heroku steps (do the next steps on your terminal).
    +    heroku login
    +    heroku create vue-todo-app
    +    git init (Only if your project not have git repo)   
    +    heroku git:remote -a vue-todo-app
    +    git add .
    +    git commit -am "Heroku deployment"
    +    git push heroku master    
5. Your app is ready you can see all heroku steps on heroku's documentation.

  My app on heroku: https://vue-todo-test.herokuapp.com/

#### Github pages

To have github pages on any vue project:
1. deploy.sh file --> Add this file to root app's folder.
```bash
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:OussamaAlouat/vue-todo-app.git master:gh-pages

cd -
```
2. vue.config.js --> Add this file to root's app. *(I decide put '/vue-todo-app' because is my github project name. You put there your github project name)*
```javascript
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/vue-todo-app/'
        : '/'
}
```


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![](https://img.shields.io/github/issues/OussamaAlouat/vue-todo-app.svg)
![](https://img.shields.io/github/stars/OussamaAlouat/vue-todo-app.svg)
