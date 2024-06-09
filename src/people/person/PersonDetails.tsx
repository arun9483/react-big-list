import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Person as PersonType, apiClient } from './../../api-client';

export const PersonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [person, setPerson] = useState<PersonType>();

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchPerson() {
      try {
        if (id) {
          const result = await apiClient.getPerson(
            {
              id,
            },
            {
              signal: abortController.signal,
            }
          );
          setPerson(result);
        }
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
    void fetchPerson();

    return () => {
      abortController.abort();
    };
  }, [id]);

  if (!person) {
    return <p>Loading...</p>;
  }

  const {
    id: personId,
    title,
    firstName,
    lastName,
    email,
    countryCode,
  } = person;

  return (
    <div>
      <h1>People Details for ID: {personId}</h1>
      <p>
        <strong>Title:</strong> {title}
      </p>
      <p>
        <strong>First Name:</strong> {firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Country Code:</strong> {countryCode}
      </p>
    </div>
  );
};
