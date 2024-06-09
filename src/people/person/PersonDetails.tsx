import { useParams } from 'react-router-dom';

import useQueryGetPerson from './useQueryGetPerson';

export const PersonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isError, isLoading, data } = useQueryGetPerson(id ?? '');

  if (isError) {
    return <p>Unable to fetch people data, something went wrong!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  } else {
    const {
      id: personId,
      title,
      firstName,
      lastName,
      email,
      countryCode,
    } = data;

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
  }
};
