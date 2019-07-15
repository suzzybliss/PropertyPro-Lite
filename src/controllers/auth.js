import bcrypt from 'bcrypt';
import cloudinary from 'cloudinary';
import _ from 'lodash';
import jwt from 'jsonwebtoken';
import db from '../config/db';

const secret = process.env.JWT_SECRET;

export const signUp = async (req, res) => {
  try {
    let image_url;
    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      image_url = result.secure_url;
    }
    const {
      email, first_name, last_name, password, phone_number, address,
    } = req.body;
    const text = 'INSERT INTO users(email, first_name, last_name, password, phone_number, address, image_url) '
      + ' VALUES($1, $2, $3,$4, $5, $6, $7) RETURNING *';

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const { rows } = await db.query(text, [
      email,
      first_name,
      last_name,
      hashed,
      phone_number,
      address,
      image_url,
    ]);
    const data = _.omit(rows[0], ['password']);
    const payload = _.pick(rows[0], ['id']);
    const token = await jwt.sign(payload, secret, { expiresIn: 3600000 });
    res.status(201).send({ status: 'success', data: { token, ...data } });
  } catch (error) {
    res.status(404).send({ status: 'error', error: 'Oops! something went wrong' });
  }
};
