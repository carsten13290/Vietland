import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import CreateListing from './pages/CreateListing';
import CreatePost from './pages/CreatePost';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ItemList from './pages/ItemList';
import Listing from './pages/Listing';
import PostList from './pages/PostList';
import PostPage from './pages/PostPage';
import Projects from './pages/Projects';
import Search from './pages/Search';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UpdateListing from './pages/UpdateListing';
import UpdatePost from './pages/UpdatePost';
import PrivacyPolicy from './pages/privacypolicy'; // Import PrivacyPolicy
import TermsAndConditions from './pages/termsandconditions'; // Import TermsAndConditions

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route path='/itemlist' element={<ItemList  />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/update-listing/:listingId' element={<UpdateListing />} />
        <Route path='/posts' element={<PostList />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} /> 
        <Route path='/termsandconditions' element={<TermsAndConditions />} /> 
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path='/projects' element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
