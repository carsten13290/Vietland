import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');
  const [contactToLandlord, setContactToLandlord] = useState(true); // Mặc định gửi tin nhắn cho chủ nhà

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  // Hàm gửi email cho chủ nhà
  const sendEmailToLandlord = () => {
    window.location.href = `mailto:${landlord.email}?subject=Về bất động sản ${listing.name}&body=${message}`;
  };

  // Hàm gửi email cho Việt Land làm người môi giới
  const sendEmailToVietLand = () => {
    window.location.href = `mailto:tipofthanh@gmail.com?subject=Hợp tác với Việt Land - ${listing.name}&body=${message}`;
  };

  return (
    <>
      {landlord && (
        <div className='flex flex-col gap-2 items-center'>
          <p>
            Liên hệ <span className='font-semibold'>{landlord.username}</span>{' '}
            để lấy thông tin{' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Hãy nhập tin nhắn & số điện thoại của bạn vào đây...'
            className='w-full border p-3 rounded-lg'
          ></textarea>

          <div className='flex gap-4 mt-4'>
            <button
              onClick={sendEmailToLandlord}
              className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95 flex items-center gap-2'
            >
              Gửi tin nhắn cho chủ nhà
            </button>

            <button
              onClick={sendEmailToVietLand}
              className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95 flex items-center gap-2'
            >
              Gửi tin nhắn cho Việt Land
            </button>
          </div>
        </div>
      )}
    </>
  );
}

Contact.propTypes = {
  listing: PropTypes.shape({
    userRef: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
