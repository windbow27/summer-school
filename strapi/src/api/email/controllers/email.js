module.exports = {
    async send(ctx) {
      const { email, username } = ctx.request.body;
      await strapi.service('api::email.email').sendEmail(email, username);
    },
  };