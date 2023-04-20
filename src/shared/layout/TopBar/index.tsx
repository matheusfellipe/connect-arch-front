import React from 'react';

import { HeaderCustom } from './style';
import ProfileAvatar from './avatar';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Props from './interface';

const TopBar = ({ collapsed, setCollapsed }: Props) => {
  return (
    <HeaderCustom>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}

      <ProfileAvatar />
    </HeaderCustom>
  );
};

export default TopBar;
