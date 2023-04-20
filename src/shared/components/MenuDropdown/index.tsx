
import React from 'react';
import {MenuProps} from './types/MenuPropsType'
import { Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';

interface Props {
  items: MenuProps['items'];
  children: JSX.Element;
}

const MenuDropdown: React.FC<Props> = ({ items, children }: Props) => {
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  };

  return (
    <>
      <Dropdown
        menu={{ items, onClick }}
        placement="bottomLeft"
        arrow
        trigger={['click']}
      >
        <a onClick={(e) => e.preventDefault()}>{children}</a>
      </Dropdown>
    </>
  );
};

export default MenuDropdown;
