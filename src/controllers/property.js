import cloudinary from 'cloudinary';
import db from '../config/db';

export const newProperty = async (req, res) => {
  try {
    let image_url;
    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      image_url = result.secure_url;
    }
    const {
      price, state, city, address, type
    } = req.body;
    const text = 'INSERT INTO property(owner, price, state,city, address, type, image_url) '
      + ' VALUES($1, $2, $3,$4, $5, $6, $7) RETURNING *';



    const { rows } = await db.query(text, [
      req.user.id,
      price,
      state,
      city,
      address,
      type,
      image_url
    ]);
    return res.status(201).send({ status: 'success', data: rows[0] });
  } catch (error) {
    console.log(error)
    res.status(400).send({ status: 'error', error: 'Oops! something went wrong' });
  }
};