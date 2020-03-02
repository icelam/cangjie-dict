const chineseCharacterModel = require('../models/chineseCharacterModel.js');

const chineseCharacterController = {
  list: (req, res) => {
    chineseCharacterModel.find((err, chineseCharacters) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          message: 'Error listing chinese characters'
        });
      }

      return res.json(chineseCharacters);
    });
  },
  searchByWord: (req, res) => {
    const { word } = req.params;
    const decodedCharacter = decodeURIComponent(word);

    // Check code format to prevent attacks
    if (decodedCharacter.length !== 1) {
      return res.status(400).json({
        status: 400,
        message: 'Incorrect parameters'
      });
    }

    chineseCharacterModel.findOne({ word: decodedCharacter }, (err, chineseCharacter) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          message: 'Error finding specific chinese character'
        });
      }

      if (!chineseCharacter) {
        return res.status(404).json({
          status: 404,
          message: 'No such chinese character'
        });
      }

      return res.json(chineseCharacter);
    });
  },
  searchByJyutping: (req, res) => {
    const { jyutping } = req.params;

    const validJyutping = new RegExp(/^[a-zA-Z]+$/).test(jyutping);
    if (!validJyutping) {
      return res.status(400).json({
        status: 400,
        message: 'Incorrect parameters'
      });
    }

    chineseCharacterModel.find({ jyutping }, (err, chineseCharacter) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          message: 'Error finding specific chinese character'
        });
      }

      if (!chineseCharacter) {
        return res.status(404).json({
          status: 404,
          message: 'No such chinese character'
        });
      }

      return res.json(chineseCharacter);
    });
  }
};

module.exports = chineseCharacterController;
