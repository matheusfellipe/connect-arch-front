import { ROLE } from '../../../../redux/features/auth/auth';

export default interface Props {
  roles: Array<ROLE>;
  collapsed: boolean;
  openKeys: string[];
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenChange: (openKeys: string[]) => void;
}
