'use strict';

/**
 * article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article.article', ({ strapi }) =>  ({
    // Custom method to get article by slug
    async findBySlug(slug) {
        const entity = await strapi.query('api::article.article').findOne({
            where: { slug: slug },
            populate: ['picture', 'category', 'tags', 'localizations'],
          });

        if (!entity) {
            return null;
        }

        return entity;
    },
}));
