import axios from 'axios';

axios.defaults.headers.get.Accept = 'application/json';

const params = new URLSearchParams([['api-key', process.env.REACT_APP_API_KEY]]);
params.append('order-by', 'newest');
params.append('show-fields', 'thumbnail,trailText');

export const source = axios.CancelToken.source();

export const fetchArticles = async (api, dataSetter, errorSetter, section = null) => {
  if (section) {
    params.set('section', section);
  } else {
    params.delete('section');
  }
  try {
    errorSetter(false);

    const {
      data: {
        response: { results },
      },
    } = await axios(api, { params });

    dataSetter(results);
  } catch (error) {
    // console.log(error);
    errorSetter(true);
  }
};
