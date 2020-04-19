const autolike = require('./modes/autolike');

const bot = async (config) => {
   if (config.mode === 'autolike') {
      await autolike(config);
   } else {
      console.log('Bad configuration!');
   }
};

module.exports = bot;
