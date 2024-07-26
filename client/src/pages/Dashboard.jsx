import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashComments from '../components/DashComments';
import DashLinks from '../components/DashLinks'; // Thêm dòng này
import DashPosts from '../components/DashPosts';
import DashProfile from '../components/DashProfile';
import DashSidebar from '../components/DashSidebar';
import DashUsers from '../components/DashUsers';
import DashboardComp from '../components/DashboardComp';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
      {/* posts... */}
      {tab === 'posts' && <DashPosts />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* comments  */}
      {tab === 'comments' && <DashComments />}
      {/* dashboard comp */}
      {tab === 'dash' && <DashboardComp />}
      {/* links */}
      {tab === 'links' && <DashLinks />}  {/* Thêm dòng này */}
    </div>
  );
}