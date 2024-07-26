import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTiktok, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
               Việt
              </span>
              Land
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Về chúng tôi' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://noithatxuanthanhchogao.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                 Cộng tác với Việt Land
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Giới thiệu
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Trang liên kết' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/carsten13290?tab=repositories'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='https://noithatxuanthanhchogao.blogspot.com/'>BlogSpot</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Chính sách' />
              <Footer.LinkGroup col>
                <Footer.Link href='/privacypolicy'>Chính sách bảo mật</Footer.Link>
                <Footer.Link href='/termsandconditions'>Điều khoản &amp; Điều kiện</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Việt Land"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/profile.php?id=100063700112350&mibextid=LQQJ4d' icon={BsFacebook}/>
            <Footer.Icon href='https://www.instagram.com/noithatxuanthanhchogao/' icon={BsInstagram}/>
            <Footer.Icon href='https://www.youtube.com/@NoiThatXuanThanhChoGao' icon={BsYoutube}/>
            <Footer.Icon href='https://github.com/carsten13290' icon={BsGithub}/>
            <Footer.Icon href='https://www.tiktok.com/@noithatxuanthanhchogao' icon={BsTiktok}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}