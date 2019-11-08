import axios from 'axios';

export const yelp = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer soodslzr8K36nV3fgvYD5o2JP5enlYvkUPUV3czN2EYI1yEn6OsznX7HXpnmdcYqstF6ig03g-xHPnDJR-eCwe-mplGPikJRPukiYlNZDvi7mER8lmsDfCg0r5O1XXYx`,
  },
});

export const searchYelp = (limit, term, location): any =>
  yelp.get(`/search`, {
    params: {
      limit,
      term,
      location,
    },
  });

export const getResultsById = (id): any => yelp.get(`/${id}`);
