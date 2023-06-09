import { Divider } from 'antd';

import Props from './interface';
import { MenuCustom, SiderCustom } from './style';

import { customerItems } from './MenuItens/customerItems';
import { architectItems } from './MenuItens/architectItems';
import { selectCurrentUser } from '../../../redux/features/auth/authSlice';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideMenu = ({
  roles,
  collapsed,
  openKeys,
  setCollapsed,
  onOpenChange,
}: Props) => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  return (
    <SiderCustom
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={240}
    >
      <MenuCustom
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={
          user && roles.includes(user.role) ? customerItems : architectItems
        }
        onClick={({ key }) => {
          if (key) {
            navigate(key);
          }
        }}
      />
      <Divider />
    </SiderCustom>
  );
};

export default SideMenu;
