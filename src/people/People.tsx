import React from 'react';
import { Person as PersonType } from './../api-client';

import { Person } from './person';
import styles from './People.module.css';

interface PeopleProps {
  people: PersonType[];
}

export const People: React.FC<PeopleProps> = ({ people }) => {
  return (
    <div className={styles.list}>
      {people.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
};
