const router = require('express').Router();
const cors = require('cors');

const apiRoutes = require('./apiRoute');
const swaggerRoutes = require('./swaggerRoute');

// Allow CORS for all routes
router.use(cors());

router.use('/api/v1', apiRoutes);
router.use('/api-docs', swaggerRoutes);

module.exports = router;
