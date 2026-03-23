import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className='my-6'>
      <h2 className='text-2xl font-bold my-2'>Featured Posts</h2>
      <div className="w-[182px] border-2 mb-4"/>
      <PostsGrid posts={posts} />
    </section>
  );
}
