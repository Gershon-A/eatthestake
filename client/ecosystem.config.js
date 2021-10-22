module.exports = {
  apps : [{
    name   : "eatthestake",
    script : "serve",
    watch: true,
    env_production: {
       NODE_ENV: "production",
       HOST: '0.0.0.0',
       PM2_SERVE_PATH: 'build',
       PM2_SERVE_PORT: 4000,
       PM2_SERVE_HOMEPAGE: '/index.html'
    },
    env_development: {
       NODE_ENV: "development",
       PM2_SERVE_PATH: 'build',
       PM2_SERVE_PORT: 4000,
       PM2_SERVE_HOMEPAGE: '/index.html'
    },
    env_staging: {
      NODE_ENV: "staging",
    },
  }] 
 /* ToDO 
  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    development : {
      'pre-deploy-local': 'yarn build',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env development',
      'pre-setup': ''
    }
  }*/
};
