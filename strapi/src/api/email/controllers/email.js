module.exports = {
    async send(ctx) {
      const { email, username } = ctx.request.body;
      await strapi.service('api::email.email').sendEmail(email, username);
    },

    async sendVerificationEmail(ctx) {
      const { email, code } = ctx.request.body;
      await strapi.service('api::email.email').sendVerificationEmail(email, code);
    },
  };