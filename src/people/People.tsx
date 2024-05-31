import React from 'react';
import { Person } from './person';
import styles from './People.module.css';

export interface PersonType {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
}

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
