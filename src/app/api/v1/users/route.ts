import userModel from '@/models/user-model';
import contract from '@/rest-api/contracts';
import { userSchema } from '@/rest-api/schemas/user-schema';
import { createNextHandler } from '@ts-rest/serverless/next';
import { z } from 'zod';

const handler = createNextHandler(
  contract.users,
  {
    findAll: async () => {
      const users = await userModel.findAll();
      return {
        status: 200,
        body: z.array(userSchema).parse(users),
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

