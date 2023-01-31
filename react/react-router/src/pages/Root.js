import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigations';
const RootLayout = () => {
  return <>
    <MainNavigation />
    <main >
      <Outlet />
    </main>
  </>;
};

export default RootLayout;
