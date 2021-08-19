const { createProxyMiddleware } = require('http-proxy-middleware');

//this is the proxy module which proxies requests from /api to the openWeatherMap origin
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