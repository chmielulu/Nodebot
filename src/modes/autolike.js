/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const initBrowser = require('../api/initBrowser');
const goTo = require('../api/goTo');
const login = require('../api/login');
const like = require('../api/like');

const InstagramUrl = 'https://instagram.com/';
const InstagramHashtag = (hashtag) =>
   `https://www.instagram.com/explore/tags/${hashtag}/`;

const autolike = async (config) => {
   const page = await initBrowser(config.debug, config.userAgent);
   await goTo(InstagramUrl, page);

   await login(page, {
      username: config.username,
      password: config.password,
   });

   for (let hashtag of config.hashtags) {
      await goTo(InstagramHashtag(hashtag), page);

      await like(page, {
         likesPerHashtag: config.likesPerHashtag,
         breakBetweenLikes: config.breakBetweenLikes,
      });

      await page.waitFor(config.breakBetweenHashtags);
   }
};

module.exports = autolike;
