import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
// import { MobCounter } from './MobCounter';
// import CounterStore from '../../stores/counter-store';
import PostsStore from '../../stores/posts-store';

// const counter1 = new CounterStore();
// const counter2 = new CounterStore();
const postStore = new PostsStore();

export const Wrapper = observer(() => {
  const { getPostsAction, posts } = postStore;

  useEffect(() => {
    getPostsAction();
  }, []);

  console.log(posts);

  if (!posts) {
    return null;
  }

  return posts.case({
    pending: () => <div>Loading...</div>,
    rejected: () => <div>Erroe</div>,
    fulfilled: value => <div>{value[0].body}</div>,
  });

  //   if (posts?.state === 'pending') {
  //     return <div>Loading...</div>;
  //   }

  //   if (posts?.state === 'rejected') {
  //     return <div>Error</div>;
  //   }

  //   return <div>{posts?.value[0].body}</div>;

  //   return (
  //     <>
  //       {/* <MobCounter {...counter1} total={counter1.total} />
  //       <MobCounter {...counter2} total={counter2.total} /> */}
  //     </>
  //   );
});
