const initBrowser = require('./api/initBrowser');
const goTo = require('./api/goTo');
const login = require('./api/login');

const InstagramUrl = 'https://instagram.com/';

const bot = async (config) => {
   const page = await initBrowser(config.debug);

   await goTo(InstagramUrl, page);

   await login(page, { username: config.username, password: config.password });
};

module.exports = bot;
