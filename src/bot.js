const autolike = require('./modes/autolike');
const autocomment = require('./modes/autocomment');

const bot = async (config) => {
   if (config.mode === 'autolike') {
      await autolike(config);
   } else if (config.mode === 'autocomment') {
      await autocomment(config);
   } else {
      console.log('Bad configuration!');
   }
};

module.exports = bot;
