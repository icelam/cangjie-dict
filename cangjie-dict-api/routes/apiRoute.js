const router = require('express').Router();

const chineseCharacterController = require('../controllers/chineseCharacterController');

router.get('/all', chineseCharacterController.list);
router.get('/word/:word', chineseCharacterController.searchByWord);
router.get('/jyutping/:jyutping', chineseCharacterController.searchByJyutping);

module.exports = router;
