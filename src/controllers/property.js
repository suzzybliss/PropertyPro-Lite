import models from '../models';

const { Property } = models;

export default {
  create: (req, res) => {
    const { body: { type, price, description }, user: { userId } } = req;

    const property = {
      id: Property.list.length + 1,
      userId,
      status,
      price,
      city,
      address,
      type,
      created_on,
      image_url,
      description
      
    };

    // persist property to database
    Property.create(property);
    return res.jsend.success(property);
  },
}
