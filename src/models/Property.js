import moment from 'moment';
import uuid from 'uuid';

class Property {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.properties = [];
  }
  /**
   * 
   * @returns {object} reflection object
   */
  create(data) {
    const newProperty = {
      id: uuid.v4(),
      success: data.success || '',
      lowPoint: data.lowPoint || '',
      takeAway: data.takeAway || '',
      createdDate: moment.now(),
      modifiedDate: moment.now()
    };
    this.reflections.push(newProperty);
    return newProperty
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} property object
   */
  findOne(id) {
    return this.properties.find(propert => propert.id === id);
  }
  /**
   * @returns {object} returns all properties
   */
  findAll() {
    return this.properties;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const property = this.findOne(id);
    const index = this.properties.indexOf(property);
    this.properties[index].success = data['success'] || reflection.success;
    this.properties[index].lowPoint = data['lowPoint'] || property.lowPoint;
    this.properties[index].takeAway = data['takeAway'] || property.takeAway;
    this.propertirs[index].modifiedDate = moment.now()
    return this.properties[index];
  }
  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const property = this.findOne(id);
    const index = this.properties.indexOf(property);
    this.reflections.splice(index, 1);
    return {};
  }
}
export default new Property();