FROM node:14

LABEL version="1.0"
LABEL description="This is the base docker image for the eatthestake frontend react app."
LABEL maintainer = ["gershon.webgate@gmail.com", "gershon@medooza.io"]

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
# make sure you're doing a clean install of your dependencies.
RUN npm ci --silent

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

RUN npm install pm2 dotenv-cli -g
# Bundle app source
COPY . .
# Build the app
RUN npm run build

# Build the app
RUN npm run build

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT  ["sh","docker-entrypoint.sh"]