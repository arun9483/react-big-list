import React from 'react';
import Flag from 'react-world-flags';
import styles from './Person.module.css';

import { Person as PersonType } from './../../api-client';

interface PersonProps {
  person: PersonType;
}

export const Person: React.FC<PersonProps> = ({ person }) => {
  const { title, firstName, lastName, email, countryCode } = person;
  const profileInitial = firstName.charAt(0).toUpperCase();

  return (
    <div className={styles.card}>
      <div className={styles['profile-picture']}>{profileInitial}</div>
      <div className={styles.details}>
        <div className={styles.name}>
          <h3 className={styles.title}>
            {title} {firstName} {lastName}
          </h3>
          <Flag
            className={styles.country}
            code={countryCode}
            alt={countryCode}
          />
        </div>
        <a className={styles.email} href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </div>
  );
};
