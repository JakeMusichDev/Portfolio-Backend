'use strict';

/**
 * Photographyproject.js controller
 *
 * @description: A set of functions called "actions" for managing `Photographyproject`.
 */

module.exports = {

  /**
   * Retrieve photographyproject records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.photographyproject.fetchAll(ctx.query);
  },

  /**
   * Retrieve a photographyproject record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.photographyproject.fetch(ctx.params);
  },

  /**
   * Create a/an photographyproject record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.photographyproject.add(ctx.request.body);
  },

  /**
   * Update a/an photographyproject record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.photographyproject.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an photographyproject record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.photographyproject.remove(ctx.params);
  }
};
