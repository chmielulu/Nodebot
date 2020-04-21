/* eslint-disable no-await-in-loop */
const domElements = require('../dom/domElements');
const info = require('../info/info')();

const comment = async (
   page,
   { commentsPerHashtag, breakBetweenComments, comments },
) => {
   try {
      await page.waitFor(1000);

      const posts = await page.$$(domElements.hashtag.recentPosts);

      for (let i = 0; i <= commentsPerHashtag - 1; i += 1) {
         const post = posts[i];

         await post.click();

         await page.waitFor(domElements.hashtag.dialogPost);
         await page.waitFor(10000);

         const isCommentable = await page.$(
            domElements.hashtag.commentTextArea,
         );

         if (isCommentable) {
            await page.type(domElements.hashtag.commentTextArea, comments[0], {
               delay: 150,
            });

            await page.waitFor(2000);

            await page.click(domElements.hashtag.commentButton);

            await console.log(info.commentPost + page.url());
         }

         await page.waitFor(6000);

         await page.click(domElements.hashtag.closeButton);

         await page.waitFor(breakBetweenComments);
      }
   } catch (err) {
      console.log(info.error);
      process.exit(1);
   }
};

module.exports = comment;
