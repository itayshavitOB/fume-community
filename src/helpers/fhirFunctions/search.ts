import { getFhirClient } from '../fhirServer';

export const search = async (query: string, params?: Record<string, any>): Promise<Record<string, any> | undefined> => {
  const url: string = encodeURI(query);
  const res = await getFhirClient().search(url, params);
  return res;
};
