import axios from 'axios';

export type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPosts = async () =>
  (await axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')).data;
