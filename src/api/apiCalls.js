import request from 'superagent';

export const put = ({url, data}) => (
  request.put(url)
    .set('Content-Type', 'application/json')
    .send(data)
);