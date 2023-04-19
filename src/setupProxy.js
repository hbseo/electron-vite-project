const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        }),
    );
};
