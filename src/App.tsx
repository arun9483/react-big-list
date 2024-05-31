import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { People, PersonType } from './people';

const url = 'http://localhost:3000/people';

function PeopleRoot() {
  const [people, setPeople] = useState<PersonType[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchPeople() {
      try {
        const resp = await fetch(url, {
          signal: abortController.signal,
        });
        const result: PersonType[] = (await resp.json()) as PersonType[];
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
