import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/pages/Home';
import Test from '@/pages/Test';
import Login from '@/pages/Login';
import Survey from '@/pages/Survey';
import MakeBattle from '@/pages/MakeBattle';
import Battle from '@/pages/Battle';
import Info from '@/pages/Info';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'test',
        element: <Test />
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
        path: 'info',
        element: <Info />
      }
    ]
  }
]);
