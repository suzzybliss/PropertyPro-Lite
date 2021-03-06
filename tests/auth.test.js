import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app';

describe('/api/v1/auth', () => {
  let user;
  let user2;
  before(async () => {
    const filePath = `${__dirname}/testdata/user.jpg`;
    user = await request(app)
      .post('/api/v1/auth/signup')
      .field('email', 'sussy@gmail.com')
      .field('first_name', 'susan')
      .field('last_name', 'ogori')
      .field('password', 'susan')
      .field('phone_number', '0803774644')
      .field('address', 'kogi akure');

    user2 = await request(app)
      .post('/api/v1/auth/signup')
      .field('email', 'user2@gmail.com')
      .field('first_name', 'user2')
      .field('last_name', 'user2')
      .field('password', 'user2')
      .field('phone_number', '0803774644')
      .field('address', 'user2 address')
      .attach('image_url', filePath);
  });
  describe('POST /signup', () => {
    it('should return 201 if pass a valid data ', () => {
      expect(user.status).to.equal(201);
    });
    it('should return 201 if passed a valid data with image', () => {
      expect(user2.status).to.equal(201);
    });
  });
  describe('POST /signIn', () => {
    it('should return 400 if no record matches the email address ', async () => {
      const res = await request(app)
        .post('/api/v1/auth/signin')
        .set('Content-Type', 'application/json')
        .send({ email: 'inval@invalid', password: 'invalid' });
    });
    it('should return 400 if password is not valid ', async () => {
      const res = await request(app)
        .post('/api/v1/auth/signin')
        .set('Content-Type', 'application/json')
        .send({ email: user.body.data.email, password: 'invalid' });
    });
    it('should return 200 if email and password are valid ', async () => {
      const res = await request(app)
        .post('/api/v1/auth/signin')
        .set('Content-Type', 'application/json')
        .send({ email: user.body.data.email, password: 'susan' });
    });
  });
});
