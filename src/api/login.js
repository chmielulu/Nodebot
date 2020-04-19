const domElements = require('../dom/domElements');
const info = require('../info/info')();

const tryLogin = async (page, username, password) => {
   await page.type(domElements.loginForm.username, username, { delay: 200 });

   await page.waitFor(5000);

   await page.type(domElements.loginForm.password, password, { delay: 200 });

   await page.waitFor(3000);

   await page.click(domElements.loginForm.submit);

   await page.waitFor(domElements.home.searchInput);

   const isLogged = await page.$(domElements.home.searchInput);

   if (!isLogged) {
      return false;
   }

   return true;
};

const login = async (page, { username, password }) => {
   console.log(info.tryLogin);

   await tryLogin(page, username, password)
      .then(() => {
         console.log(info.successfulLogin);
      })
      .catch((err) => {
         console.log(info.failedLogin);

         process.exit(1);
      });

   page.waitFor(5000);
};

module.exports = login;
