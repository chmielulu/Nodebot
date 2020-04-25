const openPost = async (post) => {
   try {
      await post.click();
   } catch (err) {
      console.log(err);
   }
};

module.exports = openPost;
