import User from '../models/user.model';

module.exports = {
  getUser(id) {
    return User.findById(id);
  }
}