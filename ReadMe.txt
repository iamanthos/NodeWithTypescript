npm init

npm install -D typescript
npm install -g -D tslint

npm install express -S
npm install @types/express -D

ADDING tslint.json

tslint init --Important as the project will not build

tslint.json

{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"],
  "jsRules": {},
  "rules": {
    "no-console": false --add for console log debugging
  },
  "rulesDirectory": []
}

UPDATING package.json file

"scripts": {
    "start": "tsc && node dist/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

SETTING UP FOLDER STRUCTURE

mkdir src
cd src

npm install touch-cli -g

touch app.ts

npm install ts-express-decorators --save

npm install mssql --save

npm install routing-controllers --save

npm install reflect-metadata --save



