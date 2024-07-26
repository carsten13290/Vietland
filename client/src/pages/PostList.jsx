import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resPosts = await fetch('/api/post/getPosts');
      const dataPosts = await resPosts.json();
      setPosts(dataPosts.posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Danh sách bài viết</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
