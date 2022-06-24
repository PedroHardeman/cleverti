import { getMovies } from '../src/services/pageServices';

test('endpoint is returning at least one movie?', async () => {
  const response = await getMovies();
  expect(response?.data?.length).toBeGreaterThanOrEqual(1);
});