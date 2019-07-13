const mongoose = require('mongoose');

const { Schema } = mongoose;

const chineseCharacterModel = new Schema({
  word: String,
  cangjie: String,
  jyutping: [{
    type: String
  }]
});

module.exports = mongoose.model('words', chineseCharacterModel);
