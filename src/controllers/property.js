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
    res.status(400).send({ status: 'error', error: 'Oops! something went wrong' });
  }
};
export const getAllProperty = async (req, res) => {
  try {

    const text = 'SELECT A.*, B.email as owner_email, B.phone_number as owner_phone_number '
      + ' FROM property A INNER JOIN users B ON A.owner=B.id';
    let { rows } = await db.query(text);
    if (req.query.type) rows = rows.filter(p => p.type.toLowerCase() === req.query.type.toLowerCase())
    if (!rows.length) return res.status(404).send({ status: 'error', error: 'Not Found' });
    return res.status(200).send({ status: 'success', data: rows });
  } catch (error) {
    res.status(400).send({ status: 'error', error: 'Oops! something went wrong' });
  }
};
export const getProperty = async (req, res) => {
  try {

    const text = 'SELECT A.*, B.email as owner_email, B.phone_number as owner_phone_number '
      + ' FROM property A INNER JOIN users B ON A.owner=B.id WHERE A.id=$1';
    let { rows } = await db.query(text, [req.params.property_id]);

    if (!rows[0]) return res.status(404).send({ status: 'error', error: 'Not Found' });
    return res.status(200).send({ status: 'success', data: rows[0] });
  } catch (error) {
    res.status(400).send({ status: 'error', error: 'Oops! something went wrong' });
  }
};
export const markPropertyAsSold = async (req, res) => {
  try {

    const text = 'UPDATE property SET status=$1 WHERE id=$2 AND owner=$3 RETURNING *';
    let { rows } = await db.query(text, ['sold',req.params.property_id, req.user.id]);

    if (!rows[0]) return res.status(404).send({ status: 'error', error: 'Not Found' });
    return res.status(200).send({ status: 'success', data: rows[0] });
  } catch (error) {
    res.status(400).send({ status: 'error', error: 'Oops! something went wrong' });
  }
};