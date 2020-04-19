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
         console.log('Something went wrong :(');
      });
};

module.exports = goTo;
