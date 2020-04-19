module.exports = {
   loginForm: {
      username: 'input[name="username"]',
      password: 'input[name="password"]',
      submit: 'button[type="submit"]',
   },
   home: {
      searchInput: 'nav input[placeholder="Search"]',
   },
   hashtag: {
      recentPosts: 'article > div:nth-of-type(2) img',
      dialogPost: 'div[role="dialog"] article > div img',
      likeButton: 'button > svg[aria-label="Like"]',
      closeButton: 'button > svg[aria-label="Close"]',
   },
};
