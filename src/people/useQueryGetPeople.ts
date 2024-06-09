import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api-client';

const useQueryGetPeople = () => {
  return useQuery({
    queryKey: ['people'],
    queryFn: async () => await apiClient.getPeople(),
  });
};

export default useQueryGetPeople;
