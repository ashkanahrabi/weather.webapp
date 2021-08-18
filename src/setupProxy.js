const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    const baseApiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    const apiKey = `&appid=${process.env.REACT_APP_API_KEY}`;
    app.use(
        '/api',
        createProxyMiddleware({
            target: baseApiEndpoint + 'forecast?q=M%C3%BCnchen,DE' + apiKey,
            changeOrigin: true,
        })
    );
};