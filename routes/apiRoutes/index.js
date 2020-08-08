const router = require('express').Router();
const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes');
router.use(zookeeperRoutes);
const animalRoutes = require('../apiRoutes/animalRoutes');
router.use(animalRoutes);
module.exports = router;
