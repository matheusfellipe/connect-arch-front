import { Divider } from 'antd';

import Props from './interface';
import { MenuCustom, SiderCustom } from './style';

import { pharmaceuticalsItems } from './MenuItens/customerItems';
import { admItems } from './MenuItens/architectItems';
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
  console.log(user && roles.includes(user.role));
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
          user && roles.includes(user.role) ? pharmaceuticalsItems : admItems
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
