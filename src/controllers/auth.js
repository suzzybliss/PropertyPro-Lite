import bcrypt from 'bcrypt';
import cloudinary from 'cloudinary';
import _ from 'lodash';
import jwt from 'jsonwebtoken';
import db from '../config/db';

const secret = process.env.JWT_SECRET;

const generateToken = async (item, code, res) => {
  const data = _.omit(item, ['password']);
  const payload = _.pick(item, ['id', 'is_admin']);
  const token = await jwt.sign(payload, secret, { expiresIn: 3600000 });
  res.status(code).send({ status: 'success', data: { token, ...data } });
};

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
    return generateToken(rows[0], 201, res);
  } catch (error) {

    res.status(400).send({ status: 'error', error: 'Oops! something went wrong' });
  }
};

export const signIn = async ({ body: { email, password } }, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM users where email=$1', [email]);
    if (!rows[0]) return res.status(404).send({ status: 'error', error: 'Invalid username and password' });

    const validPass = await bcrypt.compare(password, rows[0].password);
    if (!validPass) return res.status(404).send({ status: 'error', error: 'Invalid username and password' });

    return generateToken(rows[0], 200, res);
  } catch (error) {
    res.status(404).send({ status: 'error', error: 'Oops! something went wrong' });
  }
};
