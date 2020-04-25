const waitFor = async (item, page) => {
   try {
      await page.waitFor(item);
   } catch (err) {
      console.log(err);
   }
};

module.exports = waitFor;
