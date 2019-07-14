# Cangjie Dictionary API #

Retrieve Cangjie code of a Chinese character from MongoDB via Mongoose.

## Setup ##

### Import data to MongoDB ###
1. Follow the [official tutorial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) to install MongoDB.
2. Import `../raw/dataset.json` to MongoDB by the following command: ` mongoimport --host <HOST> --ssl --username <USERNAME> --db <DATABASE_NAME> --collection <COLLECTION_NAME> --file <FILE_PATH> --authenticationDatabase <AUTH_DB_NAME> --jsonArray`

### Specifying MongoDB Host ###
Specify `process.env.MONGO_DB_PATH` in order to start the application correctly. This can be done either:
1. Adding `MONGO_DB_PATH='<MONGO_DB_HOST>'` to `.env`
2. Setting configuration variables in your cloud hosting (e.g. Heroku)

## Preview on local machine ##

### Node version ###
* Develop in Node.js 10, supports Node.js >= 7.7.3

### Install project dependencies ###
* `npm install`

### Start development server ###
* `npm run dev`

### Start server ###
* `npm start`

## Deploy application to Heroku ##
1. **Install and Login [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)**
`brew tap heroku/brew && brew install heroku` and `heroku login`

2. **Create Heroku App**
`cd cangjie-dict-api && heroku create cangjie-dict-api --remote heroku-backend`

3. **Create a `Procfile` file for `cangjie-dict-api`**
In the file, specify the startup command by adding `web: node ./bin/www`. (This file is already include in the codebase, you may skip this step)

4. **Add build pack for Node.js**
`heroku buildpacks:add -a cangjie-dict-api heroku/nodejs`

5. **Add build pack to support monorepo**
`heroku buildpacks:add -a cangjie-dict-api -i 1 https://github.com/lstoll/heroku-buildpack-monorepo`

6. **Configure the app base**
`heroku config:set APP_BASE=cangjie-dict-api --app cangjie-dict-api`

7. **Commit all your code**
`git push heroku-backend master`

## Routes ##
1. `/api/v1/all` - List all words
2. `/api/v1/word/:word` - Search by word
3. `/api/v1/jyutping/:jyutping` - Search by Jyutping
