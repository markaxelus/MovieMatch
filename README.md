# MovieMatch
## Dependencies
### Django
```
pip install django djangorestframework mysqlclient django-filter
```
### Decouple
```
pip install python-decouple
```
### MacOS [SQL]
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install mysql
brew services start mysql
mysql --version
```
### Frontend
```
# do cd frontend, then run below
npm install 
```

### Additional
```
# Add a .gitignore file in frontend folder, then copy paste below into it

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```
