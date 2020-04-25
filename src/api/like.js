const like = async (likeButton, page) => {
   try {
      const isLikeable = !!(await page.$(likeButton));

      if (isLikeable) {
         await page.click(likeButton);
      }
   } catch (err) {
      console.log(err);
   }
};

module.exports = like;
