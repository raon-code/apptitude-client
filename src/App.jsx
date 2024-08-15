import { Outlet } from 'react-router-dom';
import { getData } from '@/server/apiService';

export default function App() {
  getData('/tests').then((data) => {
    console.log(data);
  });

  return (
    <>
      <Outlet />
    </>
  );
}
