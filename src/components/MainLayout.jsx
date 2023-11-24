import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const MainLayout = () => {
    return (
        <div className='container mx-auto main grid grid-cols-4 gap-4 py-4'>
                  {/* Left Sidebar  Column */}
                    <Sidebar/>

                     {/* Main Content Column */}
                     <MainContent/>

        </div>
    );
};

export default MainLayout;