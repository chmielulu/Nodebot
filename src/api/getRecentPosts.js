const getRecentPosts = async (link, page) => {
   try {
      const recentPosts = await page.$$(link);

      return recentPosts;
   } catch (err) {
      console.log(err);
   }
}

module.exports = getRecentPosts;
