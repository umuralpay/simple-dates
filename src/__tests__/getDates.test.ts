import { getUTCDate } from '../index';

test('Getting UTC date', () => {
  const date = getUTCDate();
  expect(date).toBeDefined();
});

test('Getting UTC date as epoch', () => {
  const date = getUTCDate(true);
  expect(date).toBeDefined();
});