const domElements = require('../dom/domElements');

const tryLogin = async (page, username, password) => {
   await page.type(domElements.loginForm.username, username, { delay: 100 });
   await page.type(domElements.loginForm.password, password, { delay: 100 });
   await page.click(domElements.loginForm.submit);

   await page.waitFor(domElements.home.searchInput);
   const isLogged = page.$(domElements.home.searchInput);

   if (!isLogged) {
      return false;
   }

   return true;
};

const login = async (page, { username, password = 'klaudiA16483' }) => {
   console.log('Try login');

   await tryLogin(page, username, password)
      .then(() => {
         console.log('Logged');
      })
      .catch(() => {
         console.log(
            'Something went wrong. You have bad connection or you put bad username/password',
         );
      });
};

module.exports = login;
