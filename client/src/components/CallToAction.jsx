import { Button } from 'flowbite-react';
import localImage from '../assets/VietLandLogo.jpg'; // Thay đổi 'your-image.jpg' thành tên ảnh thực tế của bạn

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
               Bạn muốn trở thành đối tác của Việt Land 
            </h2>
            <p className='text-gray-500 my-2'>
                Hãy vào trang web cộng tác viên Việt Land bạn nhé
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.noithatxuanthanhchogao.com" target='_blank' rel='noopener noreferrer'>
                Cộng tác viên Việt Land
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={localImage} alt="Việt Land" />
        </div>
    </div>
  );
}
