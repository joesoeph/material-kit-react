import { userSchema } from '@/restapi/schemas/user-schema';
import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const employeeContract = c.router({
  findAll: {
    method: 'GET',
    path: '/api/v1/employees',
    responses: {
      200: z.array(userSchema),
    },
  },
});

export { employeeContract };
