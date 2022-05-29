'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('todo-list')
      .service('myService')
      .getWelcomeMessage();
  },
};
