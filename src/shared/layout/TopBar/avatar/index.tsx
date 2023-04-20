import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import React from 'react';
import MenuDropdown from '../../../components/MenuDropdown';
import { IconAvatar } from './style';

import { itemsProfileMenu } from '../MenuItems/itens-menu';

const ProfileAvatar: React.FC = () => {
  return (
    <IconAvatar>
      <MenuDropdown items={itemsProfileMenu}>
        <Avatar size="large" icon={<UserOutlined />} />
      </MenuDropdown>
    </IconAvatar>
  );
};

export default ProfileAvatar;
