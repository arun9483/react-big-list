import React from 'react';
import Flag from 'react-world-flags';
import styles from './Person.module.css';

interface PersonProps {
  person: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    countryCode: string;
  };
}

const getCountryFlag = (countryCode: string) => {
  return `https://www.countryflags.io/${countryCode}/flat/16.png`;
};

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
