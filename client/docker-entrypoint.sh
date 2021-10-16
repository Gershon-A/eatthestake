#!bin/sh 
 #           :docker-entrypoint.sh
 #description     :This script will run process with PM based on ENV
 #author          : AdilM
 #date            :20190930
 #version         :0.1
 #usage           :ENTRYPOINT  ["sh","docker-entrypoint.sh"]
 
 if [ $NODE_ENV = "development" ]; then                                        # start process with pm2 in development environment to restart application on change
     pm2-dev ecosystem.config.js --env development
 else
     # start process with node in production or any other environment
     pm2-runtime ecosystem.config.js --env production
 fi 

#Replacing pm2-runtime with pm2-dev will enable the watch and restart features. This is quite interesting in a development container when the host files are exposed to the container as a VOLUME.
