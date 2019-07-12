import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import models from '../models';

const { Users } = models;

export default {
  signup: async (req, res) => {
    const {
      firstname, lastname, email, password
    } = req.body;

    // check for existence
    const foundUser = Users.list.find(user => user.email === email);
    if (foundUser) return res.jsend.fail('Email address already exists.');

    const user = {
      id: Users.list.length + 1,
      email,
      firstname,
      lastname,
      email,
      password: await bcrypt.hash(password, 10),
      phoneNumber,
      address,
      is_admin
    };

    // persist user to database
    Users.create(user);

    // sign jwt and wrap in a cookie
    const token = jwt.sign({ userId: user.id }, process.env.SECRET);
    res.cookie('token', token, { expires: new Date(Date.now() + 3600000), httpOnly: true });

    return res.jsend.success(token);
  },

}
