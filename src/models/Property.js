const Property = {
  create: property => Property.list.push(property),
  findAll: userId => Property.list.filter(property => property.userId === userId),
  findOne: propertyId => Property.list.find(property => property.id === propertyId),
  list: []
};

export default Property;
