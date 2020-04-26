async function autoScroll(page) {
   await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
         let totalHeight = 0;
         const distance = 10;
         const timer = setInterval(() => {
            let scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight) {
               clearInterval(timer);
               resolve();
            }
         }, 100);
      });
   });
}

module.exports = autoScroll;