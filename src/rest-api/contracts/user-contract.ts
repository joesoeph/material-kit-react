import { userSchema } from '@/rest-api/schemas/user-schema';
import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const userContract = c.router({
  findAll: {
    method: 'GET',
    path: '/api/v1/users',
    responses: {
      200: z.array(userSchema),
    },
  },
});

export { userContract };
