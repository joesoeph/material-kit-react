import userModel from '@/models/user-model';
import contract from '@/restapi/contracts';
import { userSchema } from '@/restapi/schemas/user-schema';
import { createNextHandler } from '@ts-rest/serverless/next';
import { z } from 'zod';

const handler = createNextHandler(
  contract.employees,
  {
    findAll: async () => {
      const employees = await userModel.findAll();
      return {
        status: 200,
        body: z.array(userSchema).parse(employees),
      };
    },
  },
  {
    jsonQuery: true,
    handlerType: 'app-router',
    responseValidation: true,
  }
);

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT
};

