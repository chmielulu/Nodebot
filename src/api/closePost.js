const closePost = async (closeButton, page) => {
   try {
      await page.click(closeButton);
   } catch (err) {
      console.log(err);
   }
};

module.exports = closePost;
