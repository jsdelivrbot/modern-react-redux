import _ from 'lodash';

import { FETCH_POSTS, GET_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case DELETE_POST:
    return _.omit(state, action.paylod);
  case GET_POST:
    const post = action.payload.data;
    return { ...state, [post.id]: post };
  case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id')
  default:
    return state;
  }
}
