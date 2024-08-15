module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/articles/slug/:slug([a-z0-9-]+)',
            handler: 'article.findBySlug',
            config: {
                policies: [],
            },
        },
    ],
};
