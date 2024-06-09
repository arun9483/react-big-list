import React from 'react';
import { useNavigate } from 'react-router-dom';

import ReactCountryFlag from 'react-country-flag';
import styles from './Person.module.css';
import { Person as PersonType } from './../../api-client';

interface PersonProps {
  person: PersonType;
}

export const Person: React.FC<PersonProps> = ({ person }) => {
  const navigate = useNavigate();
  const { id, title, firstName, lastName, email, countryCode } = person;
  const profileInitial = firstName.charAt(0).toUpperCase();
  const handleItemClick = () => {
    navigate(`/people/${id}`);
  };
  return (
    <div className={styles.card} onClick={handleItemClick}>
      <div className={styles['profile-picture']}>{profileInitial}</div>
      <div className={styles.details}>
        <div className={styles.name}>
          <h3 className={styles.title}>
            {title} {firstName} {lastName}
          </h3>
          <ReactCountryFlag
            className={styles.country}
            countryCode={countryCode}
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
