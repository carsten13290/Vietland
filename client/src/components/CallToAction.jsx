import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
               Bạn muốn mua nội thất ?
            </h2>
            <p className='text-gray-500 my-2'>
                Hãy vào trang web Nội Thất Xuân Thanh Chợ Gạo nhé
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.noithatxuanthanhchogao.com" target='_blank' rel='noopener noreferrer'>
                Nội Thất Xuân Thanh Chợ Gạo
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://i.pinimg.com/originals/70/43/74/70437488959520.jpg" />
        </div>
    </div>
  )
}