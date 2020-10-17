import axios from 'axios';

const params = new URLSearchParams([['api-key', process.env.REACT_APP_API_KEY]]);
params.append('order-by', 'newest');
params.append('show-fields', 'thumbnail,trailText');

export const source = axios.CancelToken.source();

export const fetchArticles = async (api, dataSetter, errorSetter = null, section = null) => {
  if (section) {
    params.append('section', section);
  }
  try {
    errorSetter(false);

    const {
      data: {
        response: { results },
      },
    } = await axios(api, { params, cancelToken: source.token });

    dataSetter(results);
  } catch (error) {
    errorSetter(true);
  }
};
