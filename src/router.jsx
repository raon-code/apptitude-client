import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login';
import Survey from '@/pages/Survey';
import MakeBattle from '@/pages/MakeBattle';
import Battle from '@/pages/Battle';
import Info from '@/pages/Info';
import WaitBattle from './pages/WaitBattle';
import Result from './pages/Result';
import Main from '@/pages/Main';
import GenderSelection from './pages/GenderSelection';
import Profile from './pages/Profile';
import CategorySelection from './pages/CategorySelection';
import AgeSelection from './pages/AgeSelection';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'survey',
        element: <Survey />
      },
      {
        path: 'battle',
        element: <Battle />
      },
      {
        path: 'makeBattle',
        element: <MakeBattle />
      },
      {
        path: 'waitBattle',
        element: <WaitBattle />
      },
      {
        path: 'info',
        element: <Info />
      },
      {
        path: 'result/:id',
        element: <Result />
      },
      {
        path: 'GenderSelection',
        element: <GenderSelection />
      },
      {
        path: 'Profile',
        element: <Profile />
      },
      {
        path: 'CategorySelection',
        element: <CategorySelection />
      },
      {
        path: 'AgeSelection',
        element: <AgeSelection />
      }
    ]
  }
]);
