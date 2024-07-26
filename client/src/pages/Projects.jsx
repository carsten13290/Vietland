import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>VIỆT LAND</h1>
      <p className='text-md text-gray-500'>
        Bạn có đam mê về Bất Động Sản và muốn đồng hành cùng Viet Land ?<br />
        Hãy cùng tham gia và trở thành đối tác của chúng tôi nhé.
      </p>
      <CallToAction />
    </div>
  );
}
