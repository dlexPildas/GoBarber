import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(400).json('User already exist');
    }
    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
