const puppeteer = require('puppeteer');
const info = require('../info/info')();

const initBrowser = async (debug, userAgent = null) => {
   console.log(info.tryOpenBrowser);

   const browser = await puppeteer.launch({
      headless: !debug,
   });

   const page = await browser
      .newPage()
      .then((page) => {
         console.log(info.openBrowser);
         return page;
      })
      .catch((err) => {
         console.log(info.error);
         process.exit();
      });

   if (userAgent) {
      await page.setUserAgent(userAgent);
   }

   return page;
};

module.exports = initBrowser;
