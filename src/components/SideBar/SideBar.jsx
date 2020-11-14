import React from 'react'
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu
} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from 'react-router-dom'
import LogoSN from '../../logosn.jpg'

const SideBar = ({ children }) => {
  return (
    <div className='row'>
      <div className='col col-md-2 mr-3'>
        <ProSidebar>
          <SidebarHeader>
            {/* <p className='ml-5 mt-3'>Juzgado de Faltas</p > */}
            <img src={LogoSN} style={{ marginLeft: '10px', height: '75px' }} />
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape='square'>
              <MenuItem>
                <Link to='/homepage'>Dashboard</Link>
              </MenuItem>
              <SubMenu title='Components'>
                <MenuItem>
                  <Link to='/1'>Component 1</Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/2'>Component 2</Link>
                </MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <p className='text-center mt-3'>Muni SN @ 2020</p>
          </SidebarFooter>
        </ProSidebar>
      </div>
      <div className='col col-md-8'>
        {children}
      </div>
    </div>
  )
}

export { SideBar }
