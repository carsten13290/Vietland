import { useEffect, useState } from 'react';
import ListingItem from '../components/ListingItem';

export default function ItemList() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
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

    fetchOfferListings();
  }, []);

  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {offerListings.map((listing) => (
          <ListingItem key={listing._id} listing={listing} />
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {rentListings.map((listing) => (
          <ListingItem key={listing._id} listing={listing} />
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {saleListings.map((listing) => (
          <ListingItem key={listing._id} listing={listing} />
        ))}
      </div>
    </div>
  );
}

