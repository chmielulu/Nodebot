/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

const initBrowser = require('./api/initBrowser');
const goTo = require('./api/goTo');
const login = require('./api/login');
const liker = require('./api/liker');

const InstagramUrl = 'https://instagram.com/';
const InstagramHashtag = (hashtag) =>
   `https://www.instagram.com/explore/tags/${hashtag}/`;

const bot = async (config) => {
   const page = await initBrowser(config.debug);
   await goTo(InstagramUrl, page);

   await login(page, {
      username: config.username,
      password: config.password,
   });

   for (let hashtag of config.hashtags) {
      await goTo(InstagramHashtag(hashtag), page);

      await liker(page, {
         likesPerHashtag: config.likesPerHashtag,
         breakBetweenLikes: config.breakBetweenLikes,
      });

      await page.waitFor(config.breakBetweenHashtags);
   }
};

module.exports = bot;
