const puppeteer = require('puppeteer');

const initBrowser = async (debug) => {
   const browser = await puppeteer.launch({
      headless: !debug,
   });

   const page = await browser.newPage();

   return page;
};

module.exports = initBrowser;
