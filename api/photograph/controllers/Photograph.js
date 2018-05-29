'use strict';

/**
 * Photograph.js controller
 *
 * @description: A set of functions called "actions" for managing `Photograph`.
 */

module.exports = {

  /**
   * Retrieve photograph records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.photograph.fetchAll(ctx.query);
  },

  /**
   * Retrieve a photograph record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.photograph.fetch(ctx.params);
  },

  /**
   * Create a/an photograph record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.photograph.add(ctx.request.body);
  },

  /**
   * Update a/an photograph record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.photograph.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an photograph record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.photograph.remove(ctx.params);
  }
};
