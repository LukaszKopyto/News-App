import axios from 'axios';

axios.defaults.headers.get.Accept = 'application/json';

const params = new URLSearchParams([
  ['api-key', process.env.REACT_APP_API_KEY],
  ['page', 1],
  ['page-size', 10],
  ['order-by', 'newest'],
  ['show-fields', 'thumbnail,trailText'],
]);

export const source = axios.CancelToken.source();

export const fetchArticles = async (api, dataSetter, errorSetter, section = null, page = 1) => {
  params.set('page', page);
  if (section) {
    params.set('section', section);
  } else {
    params.delete('section');
  }
  try {
    errorSetter(false);

    const {
      data: { response },
    } = await axios(api, { params });

    dataSetter(response.results);
  } catch (error) {
    // console.log(error);
    errorSetter(true);
  }
};
