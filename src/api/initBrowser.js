const puppeteer = require('puppeteer');

const initBrowser = async (debug) => {
   console.log('Opening browser...');

   const browser = await puppeteer.launch({
      headless: !debug,
   });

   const page = await browser
      .newPage()
      .then((page) => {
         console.log('Browser open!');
         return page;
      })
      .catch((err) => {
         console.log('Something went wrong :(');
         return err;
      });

   return page;
};

module.exports = initBrowser;
