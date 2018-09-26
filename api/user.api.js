const User = require('../models/user.model');

module.exports = {

  async getUser(id) {
    try {
      return await User.findById(id);
    } catch(err) {
      console.log(err);
      throw err;
    }
  }
}