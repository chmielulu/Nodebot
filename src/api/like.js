/* eslint-disable no-await-in-loop */
const domElements = require('../dom/domElements');

const like = async (page, { likesPerHashtag, breakBetweenLikes }) => {
   await page.waitFor(1000);

   const posts = await page.$$(domElements.hashtag.recentPosts);

   for (let i = 0; i <= likesPerHashtag - 1; i += 1) {
      const post = posts[i];

      await post.click();

      await page.waitFor(domElements.hashtag.dialogPost);
      await page.waitFor(5000);

      const isLikeable = await page.$(domElements.hashtag.likeButton);

      if (isLikeable) {
         await page.click(domElements.hashtag.likeButton);
         await console.log(`Liked post ${page.url()}`);
      }

      await page.waitFor(4000);

      await page.click(domElements.hashtag.closeButton);

      await page.waitFor(breakBetweenLikes);
   }
};

module.exports = like;
