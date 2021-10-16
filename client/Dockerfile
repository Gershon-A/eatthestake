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

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# PM2 wrap your applications into a proper Node.js production environment. 
# dotenv-cli to manage envarioments
RUN npm install pm2 dotenv-cli -g
# Bundle app source
COPY . .

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT  ["sh","docker-entrypoint.sh"]