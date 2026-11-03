import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login';
import Survey from '@/pages/Survey';
import MakeBattle from '@/pages/MakeBattle';
import Battle from '@/pages/Battle';
import Info from '@/pages/Info';
import WaitBattle from '@/pages/WaitBattle';
import Result from '@/pages/Result';
import Main from '@/pages/Main';
import Profile from '@/pages/Profile';
import GenderSelection from '@/pages/GenderSelection';
import CategorySelection from '@/pages/CategorySelection';
import AgeSelection from '@/pages/AgeSelection';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      { path: 'login', element: <Login /> },
      { path: 'survey', element: <Survey /> },
      { path: 'make-battle', element: <MakeBattle /> },
      { path: 'wait-battle', element: <WaitBattle /> },
      { path: 'battle', element: <Battle /> },
      { path: 'info', element: <Info /> },
      { path: 'result/:id', element: <Result /> },
      { path: 'signup/profile', element: <Profile /> },
      { path: 'signup/gender', element: <GenderSelection /> },
      { path: 'signup/category', element: <CategorySelection /> },
      { path: 'signup/age', element: <AgeSelection /> },
      { path: '*', element: <Navigate to='/' replace /> }
    ]
  }
]);
