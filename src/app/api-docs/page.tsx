'use client';

import contract from '@/restapi/contracts';
import { generateOpenApi } from '@ts-rest/open-api';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function Component() {
  const spec = generateOpenApi(contract, {
    info: {
      title: 'API Docs',
      version: '1.0.0',
    },
  });

  return <SwaggerUI spec={spec} />;
}
