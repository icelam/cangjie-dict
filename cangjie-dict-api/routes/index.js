const router = require('express').Router();
const cors = require('cors');

const chineseCharacterController = require('../controllers/chineseCharacterController');

// Allow CORS for all routes
router.use(cors());

router.get('/api/v1/all', chineseCharacterController.list);
router.get('/api/v1/word/:word', chineseCharacterController.searchByWord);
router.get('/api/v1/jyutping/:jyutping', chineseCharacterController.searchByJyutping);

module.exports = router;
