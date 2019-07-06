import PropertyModel from '../models/Property';

const Property = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} property object 
   */
  create(req, res) {
    if (!req.body.success && !req.body.lowPoint && !req.body.takeAway) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const reflection = PropertyModel.create(req.body);
    return res.status(201).send(property);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} properties array
   */
  getAll(req, res) {
    const Properties = PropertyModel.findAll();
    return res.status(200).send(property);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} reflection object
   */
  getOne(req, res) {
    const property = PropertyModel.findOne(req.params.id);
    if (!property) {
      return res.status(404).send({'message': 'property not found'});
    }
    return res.status(200).send(property);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated property
   */
  update(req, res) {
    const property = ReflectionModel.findOne(req.params.id);
    if (!property) {
      return res.status(404).send({'message': 'property not found'});
    }
    const updatedProperty = PropertyModel.update(req.params.id, req.body)
    return res.status(200).send(updatedProperty);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete(req, res) {
    const property = PropertyModel.findOne(req.params.id);
    if (!property) {
      return res.status(404).send({'message': 'property not found'});
    }
    const ref = PropertyModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Property;
