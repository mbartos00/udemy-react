import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Events, { eventsLoader } from './pages/Events';
import EventDetails, {
  eventDeleteAction,
  eventDetailsLoader,
} from './pages/EventDetails';
import NewEvent from './pages/NewEvent';
import { manipulateEventAction } from './components/EventForm';
import EditEvent from './pages/EditEvent';
import Root from './pages/Root';
import EventsNavigationRoot from './pages/EventsNavigationRoot';
import Error from './pages/Error';
import Newsletter, { newsletterAction } from './pages/Newsletter';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'events',
        element: <EventsNavigationRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: eventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetails />,
                action: eventDeleteAction,
              },
              {
                path: 'edit',
                element: <EditEvent />,
                action: manipulateEventAction,
              },
            ],
          },
          { path: 'new', element: <NewEvent />, action: manipulateEventAction },
        ],
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
