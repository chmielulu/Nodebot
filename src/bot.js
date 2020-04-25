/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const initBrowser = require('./api/initBrowser');
const domElements = require('./dom/domElements');
const goTo = require('./api/goTo');
const login = require('./api/login');
const like = require('./api/like');
const comment = require('./api/comment');
const waitFor = require('./api/waitFor');
const getRecentPosts = require('./api/getRecentPosts');
const openPost = require('./api/openPost');
const closePost = require('./api/closePost');
const randomTime = require('./api/randomTime');

const InstagramUrl = 'https://instagram.com/';
const InstagramHashtag = (hashtag) => `${InstagramUrl}explore/tags/${hashtag}/`;

const bot = async (config) => {
   const page = await initBrowser(config.debug, config.userAgent);

   await goTo(InstagramUrl, page);

   await login(page, {
      username: config.username,
      password: config.password,
   });

   await waitFor(30000, page);

   for (;;) {
      const randomHashtag =
         config.hashtags[Math.floor(Math.random() * config.hashtags.length)];
      await goTo(InstagramHashtag(randomHashtag), page);

      const recentPosts = await getRecentPosts(
         domElements.hashtag.recentPosts,
         page,
      );

      for (const i = 0; i <= config.likesPerHashtag - 1; i++) {
         await waitFor(
            randomTime(
               config.breakBetweenActions[0],
               config.breakBetweenActions[1],
            ),
            page,
         );

         await openPost(recentPosts[i]);
         await waitFor(domElements.hashtag.dialogPost, page);

         await waitFor(
            randomTime(
               config.breakBetweenActions[0],
               config.breakBetweenActions[1],
            ),
            page,
         );

         for (const mode of config.mode) {
            if (mode === 'autolike')
               await like(domElements.hashtag.likeButton, page);

            if (mode === 'autocomment')
               await comment(
                  {
                     commentTextArea: domElements.hashtag.commentTextArea,
                     commentSendButton: domElements.hashtag.commentSendButton,
                     comments: config.comments,
                  },
                  page,
               );

            await waitFor(
               randomTime(
                  config.breakBetweenActions[0],
                  config.breakBetweenActions[1],
               ),
               page,
            );
         }

         await closePost(domElements.hashtag.closeButton, page);
      }

      await waitFor(config.breakBetweenHashtags, page);
   }
};

module.exports = bot;
