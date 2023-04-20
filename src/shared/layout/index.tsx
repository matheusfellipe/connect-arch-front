import { Layout, MenuProps } from 'antd';
import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './Menu';

import { ContentCustom, LayoutCustom } from './style';

import TopBar from './TopBar';
import { ROLE } from '../../redux/features/auth/auth';

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <>
      <LayoutCustom>
        <SideMenu
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          onOpenChange={onOpenChange}
          openKeys={openKeys}
          roles={[ROLE.DROGARIA]}
        />
        <Layout>
          <TopBar collapsed={collapsed} setCollapsed={setCollapsed} />
          <ContentCustom>
            <Outlet />
          </ContentCustom>
        </Layout>
      </LayoutCustom>
    </>
  );
};

export default MainLayout;
