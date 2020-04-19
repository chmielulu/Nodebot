const config = require('../../config/config');

const info = () => {
   try {
      const lang = require(`../../lang/${config.lang}`);
      return lang;
   } catch (err) {
      console.log(
         'This language is not currently supported. Automate use english.',
      );
      const lang = require('../../lang/en');
      return lang;
   }
};

module.exports = info;
