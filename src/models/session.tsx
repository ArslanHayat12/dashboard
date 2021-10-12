import { AreaChartOutlined,AppstoreOutlined } from '@ant-design/icons'
export type Session = {
  isAuthenticated?: boolean;
  role?: 'user'|'admin';
  redirectPath: string;
}

export const initialSession: Session = {
  redirectPath: '/dashboard',
  role:"admin"
};

export const roleBasedRoutes = {
  user:{
    routes:[{name:"About Us",path:'/about',icon:<AreaChartOutlined />}],
    redirectPath:'/about'
  },
  admin:{
    routes:[{name:"Dashboard",path:'/dashboard',icon:<AppstoreOutlined />}],
    redirectPath:'/dashboard'
  }
};
