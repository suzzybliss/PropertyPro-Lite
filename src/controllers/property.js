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
  findAll: (req, res) => {
    const { user: { userId } } = req;
    const listOfProperty = Property.findAll(userId);
    return res.jsend.success(listOfProperty);
  },
  findOne: (req, res) => {
    const { params: { propertyId }, user: { userId } } = req;
    const property = Property.findOne(+propertyId);

    if (!property) return res.jsend.error('Property does not exist');
    if (property.userId !== userId) return res.jsend.error('You cannot access this property');

    return res.jsend.success(property);
  }
}

