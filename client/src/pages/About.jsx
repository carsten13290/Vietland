import localImage from '../assets/VietLandTeam.jpg';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font-semibold text-center my-7'>
            CÔNG TY CỔ PHẦN ĐẦU TƯ BĐS VIỆT LAND
          </h1>
          <img src={localImage} alt='Viet Land Team' className='w-full h-auto mb-6' />
          <div className='text-md text-gray-500 flex flex-col gap-6 text-left'>
            <p>
              CÔNG TY CỔ PHẦN ĐẦU TƯ BĐS VIỆT LAND chuyên về lĩnh vực môi giới cho thuê và mua bán nhà phố khu vực trung tâm Sài Gòn. 
              Chúng tôi tự hào có đội ngũ nhân sự với hơn 10 năm kinh nghiệm trong nghề, làm việc uy tín và luôn hỗ trợ khách hàng hết mình.
            </p>
            <p>
              Công ty chúng tôi có MST: 0315459686, ngày đăng ký kinh doanh: 04/01/2019, địa chỉ: 
              243 Huỳnh Văn Bánh, Phường 11, Quận Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam, 
              ngành nghề chính: Tư vấn, môi giới, đấu giá bất động sản, đấu giá quyền sử dụng đất.
            </p>
            <p>
              Ngoài ra, hệ thống của chúng tôi còn sở hữu lượng dữ liệu bất động sản lớn, hoàn chỉnh và chính chủ khu vực trung tâm Sài Gòn. 
              Đây là nền tảng để chúng tôi mang lại dịch vụ tốt nhất tới khách hàng, giúp họ tìm được ngôi nhà mơ ước hoặc đầu tư bất động sản hiệu quả.
            </p>

            <p>
              Với cam kết về uy tín và chất lượng, chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu. 
              Hãy đến với CÔNG TY CỔ PHẦN ĐẦU TƯ BĐS VIỆT LAND để trải nghiệm dịch vụ chuyên nghiệp và tận tâm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
