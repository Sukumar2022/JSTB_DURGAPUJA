import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import PujaLoader from '../component/PujaLoader';

const AppLayout = () => {
  const navigation = useNavigation();

  // Checks if React Router is actively loading data or fetching a route
  const isLoading = navigation.state === 'loading';

  return (
    <div className="min-h-screen flex flex-col bg-[#4a0303] text-[#fbeee0] selection:bg-[#e5a93c] selection:text-[#4a0303]">
      {/* Display Fullscreen Loader during Page Transitions */}
      {isLoading && <PujaLoader text="Preparing Celebration..." />}

      {/* Header Navigation */}
      <Navbar />

      {/* Dynamic Page Content Wrapper */}
      <main className="flex-grow w-full relative">
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AppLayout;
