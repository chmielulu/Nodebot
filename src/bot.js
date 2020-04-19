const initBrowser = require('./api/initBrowser');
const goTo = require('./api/goTo');

const bot = async (config) => {
   const page = await initBrowser(config.debug);
   await goTo(page);
};

module.exports = bot;
