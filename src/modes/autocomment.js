/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const initBrowser = require('../api/initBrowser');
const goTo = require('../api/goTo');
const login = require('../api/login');
const comment = require('../api/comment');

const InstagramUrl = 'https://instagram.com/';
const InstagramHashtag = (hashtag) =>
   `https://www.instagram.com/explore/tags/${hashtag}/`;

const autocomment = async (config) => {
   const page = await initBrowser(InstagramUrl);
   await goTo(InstagramUrl, page);

   await login(page, {
      username: config.username,
      password: config.password,
   });

   await page.waitFor(30000);

   for (const hashtag of config.hashtags) {
      await goTo(InstagramHashtag(hashtag), page);

      await page.waitFor(4000);

      await comment(page, {
         commentsPerHashtag: config.commentsPerHashtag,
         breakBetweenComments: config.breakBetweenComments,
         comments: config.comments,
      });

      await page.waitFor(config.breakBeetwenHashtags);
   }
};

module.exports = autocomment;
