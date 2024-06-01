import { Configuration, DefaultApi } from './src';

const apiConfig = new Configuration({
  basePath: 'http://localhost:3000',
});

export const apiClient = new DefaultApi(apiConfig);
