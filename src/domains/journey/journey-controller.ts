import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { JourneyService } from './journey-service';
import { JourneyResponse } from './api/@types';

export const createJourneyController = (journeyService: JourneyService) => {
  const useMyJourney = (options?: Omit<UseQueryOptions<JourneyResponse, Error>, 'queryKey' | 'queryFn'>) => {
    return useQuery({
      queryKey: ['journey'],
      queryFn: async () => {
        const response = await journeyService.getJourney();
        if (!response) throw new Error('Journey not found');
        return response;
      },
      staleTime: 1000 * 60 * 5,
      ...options,
    });
  };

  return {
    useMyJourney,
  };
};

