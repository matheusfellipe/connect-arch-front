import React from 'react'
import ToggleButton from '../../components/ToggleButton'
import { HeaderCustom } from './style'
import ProfileAvatar from './avatar'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
   
  } from '@ant-design/icons';
import Props from './interface';



const TopBar = ({collapsed,setCollapsed}: Props) => {
  return (
    <HeaderCustom>
    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      className: 'trigger',
      onClick: () => setCollapsed(!collapsed),
    })}
    <ToggleButton/>
    <ProfileAvatar/>
  </HeaderCustom>
  )
}

export default TopBar