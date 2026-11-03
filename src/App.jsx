import { Outlet } from 'react-router-dom';
import { SignupProvider } from '@/features/signup/SignupContext';

export default function App() {
  return (
    <SignupProvider>
      <Outlet />
    </SignupProvider>
  );
}
