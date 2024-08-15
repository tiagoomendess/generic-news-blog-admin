'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
    async findBySlug(ctx) {
        const { slug } = ctx.params;

        console.log('Slug Controller:', slug);

        // Fetch the article with the given slug
        const entity = await strapi.service('api::article.article').findBySlug(slug);

        if (!entity) {
            return ctx.notFound('Article not found');
        }

        return ctx.send({
            data: entity,
            meta: {},
        });
    },
}));
