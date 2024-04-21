import { config } from '@/config';
import { createLogger } from '@/libs/logger';

export const logger = createLogger({ level: config.logLevel });
