const goTo = async (url, page) => {
   console.log(`Try connect with ${url}`);

   await page
      .goto(url, {
         waitUntil: 'networkidle2',
      })
      .then(() => {
         console.log('Connected');
      })
      .catch(() => {
         Error('Something went wrong!');
      });
   
   await page.waitFor(3000);
};

module.exports = goTo;
