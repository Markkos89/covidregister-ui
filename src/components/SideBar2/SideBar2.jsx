import React, { useState } from 'react';

var Sidebar = require('react-sidebar').default;

const SideBar2 = () => {
  const [sidebarOpen,setSidebarOpen]= useState(false)

  const onSetSidebarOpen = () => {
    setSidebarOpen(true)
  }

   
    var sidebarContent = <b>Sidebar content</b>;

    return (
      <Sidebar sidebar={sidebarContent}
               open={sidebarOpen}
               onSetOpen={onSetSidebarOpen}>
        <b>Main content</b>
      </Sidebar>
    );
  
};

export {SideBar2}