import React, { useEffect, useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

import { Person as PersonType } from './../api-client';
import { Person } from './person';
import peopleStyle from './People.module.css';
import useQueryGetPeople from './useQueryGetPeople';

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
  const { isError, isLoading, data = [] } = useQueryGetPeople();

  if (isError) {
    return <p>Unable to fetch people data, something went wrong!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <PeopleList people={data} />;
}
