const InstagramUrl = 'https://instagram.com/';

const goTo = async (page) => {
   await page.goto(InstagramUrl, {
      waitUntil: 'networkidle2',
   });
};

module.exports = goTo;
