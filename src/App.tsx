import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { apiClient, Person } from './api-client';
import { People } from './people';

function PeopleRoot() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchPeople() {
      try {
        const result = await apiClient.getPeople({
          signal: abortController.signal,
        });
        setPeople(result);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            // Aborting a fetch throws an error
            // So we can't update state afterwards
            console.log('Fetch aborted');
          } else {
            // Handle other errors
            console.error('Fetch failed:', error.message);
          }
        } else {
          // Handle case where error is not an instance of Error
          console.error('An unknown error occurred');
        }
      }
    }
    void fetchPeople();

    return () => {
      abortController.abort();
    };
  }, []);
  return <People people={people} />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <PeopleRoot />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
