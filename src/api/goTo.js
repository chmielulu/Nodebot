const info = require('../info/info')();

const goTo = async (url, page) => {
   page.waitFor(10000);
   
   console.log(info.tryConnect + url);

   await page
      .goto(url, {
         waitUntil: 'networkidle2',
      })
      .then(() => {
         console.log(info.successfulConnect);
      })
      .catch(() => {
         Error(info.error);
      });

   await page.waitFor(3000);
};

module.exports = goTo;
