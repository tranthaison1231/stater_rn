import { get } from './utils';

export const getFlatListApi = (page): void =>
  get(`/photos?_limit=10&_page=${page}`);
