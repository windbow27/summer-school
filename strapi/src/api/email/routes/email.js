const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    "routes": [
        {
          "method": "POST",
          "path": "/email",
          "handler": "email.send",
          "config": {
            "policies": []
          }
        }
    ]
};