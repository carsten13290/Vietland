import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import ListingItem from '../components/ListingItem';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resPosts = await fetch('/api/post/getPosts');
      const dataPosts = await resPosts.json();
      setPosts(dataPosts.posts);
    };

    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
    fetchOfferListings();
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>
          Chào mừng tới Xuân Thanh's blog
        </h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Tại đây, bạn sẽ tìm thấy nhiều bài viết và hướng dẫn về các chủ đề như áp dụng Thực hành nông nghiệp tốt (GAP) trong sản xuất nông nghiệp.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          Xem toàn bộ bài viết
        </Link>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {/* Hiển thị các PostCard */}
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Bài viết gần đây</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to='/search'
              className='text-lg text-teal-500 hover:underline text-center'
            >
              Xem toàn bộ bài viết
            </Link>
          </div>
        )}

        {/* Hiển thị các ListingItem */}
        <div className='my-10'>
          {offerListings && offerListings.length > 0 && (
            <div className=''>
              <h2 className='text-2xl font-semibold text-center'>
                Các ưu đãi gần đây
              </h2>
              <div className='flex flex-wrap gap-4'>
                {offerListings.map((listing) => (
                  <ListingItem key={listing._id} listing={listing} />
                ))}
              </div>
              <Link
                to='/search?offer=true'
                className='text-sm text-blue-800 hover:underline text-center'
              >
                Xem thêm các ưu đãi
              </Link>
            </div>
          )}

          {rentListings && rentListings.length > 0 && (
            <div className=''>
              <h2 className='text-2xl font-semibold text-center'>
                Các nơi cho thuê gần đây
              </h2>
              <div className='flex flex-wrap gap-4'>
                {rentListings.map((listing) => (
                  <ListingItem key={listing._id} listing={listing} />
                ))}
              </div>
              <Link
                to='/search?type=rent'
                className='text-sm text-blue-800 hover:underline text-center'
              >
                Xem thêm các nơi cho thuê
              </Link>
            </div>
          )}

          {saleListings && saleListings.length > 0 && (
            <div className=''>
              <h2 className='text-2xl font-semibold text-center'>
                Các nơi bán gần đây
              </h2>
              <div className='flex flex-wrap gap-4'>
                {saleListings.map((listing) => (
                  <ListingItem key={listing._id} listing={listing} />
                ))}
              </div>
              <Link
                to='/search?type=sale'
                className='text-sm text-blue-800 hover:underline text-center'
              >
                Xem thêm các nơi bán
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
