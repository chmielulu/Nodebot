const config = require('./config/config');
const bot = require('./src/bot');

(async () => {
   await bot(config);
})();
