import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../api-client';

const useQueryGetPerson = (id: string) => {
  return useQuery({
    queryKey: ['person', id],
    queryFn: async () => apiClient.getPerson({ id }),
  });
};

export default useQueryGetPerson;
