import axios from 'axios';

const params = new URLSearchParams([['api-key', process.env.REACT_APP_API_KEY]]);
params.append('order-by', 'newest');

export const fetchArticles = async (api, dataSetter) => {
  try {
    const {
      data: {
        response: { results },
      },
    } = await axios(api, { params });

    dataSetter(results);
  } catch (error) {
    console.log(error);
  }
};
