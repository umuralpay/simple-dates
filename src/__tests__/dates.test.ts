import { getUTCDate } from '../index';

test('Getting UTC date', () => {
  const date = getUTCDate();
  console.log(date);
  expect(date).toBeDefined();
});

test('Getting UTC date as epoch', () => {
  const date = getUTCDate(true);
  console.log(date);
  expect(date).toBeDefined();
});