import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'f2evo7iw3459';
const API_TOKEN = '88c3fb5fb45926e1bcc5b979591d2e0a0aedd54d1af89de047f7aad53c3db454';

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=post`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
