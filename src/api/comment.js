const comment = async (
   { commentTextArea, commentSendButton, comments },
   page,
) => {
   try {
      const isCommentable = !!(await page.$(commentTextArea));
      const randomComment =
         comments[Math.floor(Math.random() * comments.length)];

      if (isCommentable) {
         await page.type(commentTextArea, randomComment);

         await page.waitFor(6000);

         await page.click(commentSendButton);
      }

   } catch (err) {
      console.log(err);
   }
};

module.exports = comment;
