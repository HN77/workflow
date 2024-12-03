import request from 'supertest';
import app from '../server.js';

describe('Users API', () => {
  it('should return an empty array initially', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('should add a new user', async () => {
    const newUser = { name: 'John Doe', age: 30 };
    const res = await request(app).post('/api/users').send(newUser);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(newUser.name);
    expect(res.body.age).toBe(newUser.age);
  });

  it('should return a 400 error if name or age is missing', async () => {
    const res = await request(app).post('/api/users').send({ name: 'Jane' });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error', 'Name and age are required');
  });
});
