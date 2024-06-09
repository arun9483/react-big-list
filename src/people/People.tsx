import React, { useEffect, useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

import { apiClient, Person as PersonType } from './../api-client';
import { Person } from './person';
import peopleStyle from './People.module.css';

interface PeopleProps {
  people: PersonType[];
}

// Create the row component
const Row: React.FC<{
  index: number;
  data: PersonType[];
  style: React.CSSProperties;
}> = ({ index, data, style }) => {
  const person = data[index];
  return (
    <div style={style} className={peopleStyle.rowContent}>
      <Person person={person} />
    </div>
  );
};

const PeopleList: React.FC<PeopleProps> = ({ people }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [listHeight, setListHeight] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      setListHeight(containerRef.current.clientHeight);
    }
  }, [containerRef]);

  return (
    <div ref={containerRef} className={peopleStyle.listContainer}>
      {listHeight > 0 && (
        <List
          itemData={people} // array of Persons
          height={listHeight} // Height of the list
          itemCount={people.length} // Number of items in the list
          itemSize={80} // Height of each row item
        >
          {Row}
        </List>
      )}
    </div>
  );
};

export function People() {
  const [people, setPeople] = useState<PersonType[]>([]);

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
  return <PeopleList people={people} />;
}
