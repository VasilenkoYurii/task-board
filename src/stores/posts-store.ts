import { makeAutoObservable, runInAction } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';

import { Posts, getPosts } from '../api/getPosts';

class PostsStore {
  posts?: IPromiseBasedObservable<Posts[]>;

  constructor() {
    makeAutoObservable(this);
  }

  getPostsAction = () => {
    this.posts = fromPromise(getPosts());
  };
}

export default PostsStore;
