import { Button, Modal, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DashLinks = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [userListings, setUserListings] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [listingIdToDelete, setListingIdToDelete] = useState('');
  const [showListingsError, setShowListingsError] = useState(false);

  const formatCurrency = (amount) => {
    if (!amount) return "0 VNĐ";
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  }

  useEffect(() => {
    const fetchUserListings = async () => {
      if (!currentUser) return;
      try {
        const res = await fetch(`/api/user/listings/${currentUser._id}`);
        const data = await res.json();
        if (data.success === false) {
          setShowListingsError(true);
        } else {
          setUserListings(data);
          if (data.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        setShowListingsError(true);
      }
    };
    fetchUserListings();
  }, [currentUser]);

  const handleShowMore = async () => {
    const startIndex = userListings.length;
    try {
      const res = await fetch(`/api/user/listings/${currentUser._id}?startIndex=${startIndex}`);
      const data = await res.json();
      if (data.success) {
        setUserListings((prev) => [...prev, ...data]);
        if (data.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleListingDelete = async () => {
    setShowModal(false);
    try {
      const res = await fetch(`/api/listing/delete/${listingIdToDelete}`, { method: 'DELETE' });

      const data = await res.json();
      if (data.success) {
        setUserListings((prev) => prev.filter((listing) => listing._id !== listingIdToDelete));
      } else {
        console.error('Failed to delete listing');
      }
    } catch (error) {
      console.error('Error deleting listing', error);
    }
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser && userListings.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Ngày cập nhật</Table.HeadCell>
              <Table.HeadCell>Ảnh sản phẩm</Table.HeadCell>
              <Table.HeadCell>Tiêu đề</Table.HeadCell>
              <Table.HeadCell>Giá</Table.HeadCell>
              <Table.HeadCell>Xoá</Table.HeadCell>
              <Table.HeadCell>Sửa</Table.HeadCell>
            </Table.Head>
            {userListings.map((listing) => (
              <Table.Body className='divide-y' key={listing._id}>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>{new Date(listing.updatedAt).toLocaleDateString()}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/listing/${listing._id}`}>
                      <img
                        src={listing.imageUrls[0]}
                        alt={listing.name}
                        className='w-20 h-10 object-cover bg-gray-500'
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link className='font-medium text-gray-900 dark:text-white' to={`/listing/${listing._id}`}>
                      {listing.name}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{formatCurrency(listing.discountPrice)}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setListingIdToDelete(listing._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Xoá
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link className='text-teal-500 hover:underline' to={`/update-listing/${listing._id}`}>
                      Sửa
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button onClick={handleShowMore} className='w-full text-teal-500 self-center text-sm py-7'>
              Hiển thị thêm
            </button>
          )}
        </>
      ) : (
        <p>Bạn chưa có sản phẩm nào !</p>
      )}
      <Modal show={showModal} onClose={() => setShowModal(false)} popup size='md'>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Bạn có chắc muốn xoá sản phẩm này?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleListingDelete}>
                Vâng, tôi chắc chắn
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                Không, đừng xoá
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {showListingsError && (
        <p className='text-red-500 mt-5'>Lỗi khi hiển thị sản phẩm!</p>
      )}
    </div>
  );
}

export default DashLinks;
