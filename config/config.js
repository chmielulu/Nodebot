module.exports = {
   debug: true /* True means visible browser, false unvisible */,
   lang: 'en' /* Log's language in console */,
   userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:70.0) Gecko/20100101 Firefox/70.0' /* Optional */,
   username: 'chmielewski.testing1' /* username */,
   password: 'lovepolanD123' /* password */,
   hashtags: ['cars', 'warsaw', 'szczecin'] /* hashtags */,
   likesPerHashtag: 5 /* likes for one hashtag */,
   breakBetweenActions: [15000, 20000] /* breakdown between likes. The first value means minimum time and the second maximum time  */,
   breakBetweenHashtags: [50000, 90000] /* breakdown between hashtags */,
   commentsPerHashtag: 5,
   comments: ['Nice!', 'Looks good!'],
   mode: [
      'autolike',
      'autocomment',
   ] /* Currently only available autolike and autocomment */,
};
