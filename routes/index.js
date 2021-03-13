const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<img src='https://media.giphy.com/media/3ohzdQ1IynzclJldUQ/source.gif'>")
});

module.exports = router;