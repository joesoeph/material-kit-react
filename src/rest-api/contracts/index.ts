import { employeeContract } from '@/rest-api/contracts/employee-contract';
import { userContract } from '@/rest-api/contracts/user-contract';
import { initContract } from '@ts-rest/core';

const c = initContract();

const contract = c.router(
  {
    users: userContract,
    employees: employeeContract,
  },
  {
    strictStatusCodes: true,
  }
);

export default contract;
