import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import AssetsReducer from './assets_reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  assets: AssetsReducer
});
export default rootReducer;
