import { isLater } from '../index';

test('Compare dates which the second one is later', () => {
  const date1 = new Date();
  const date2 = new Date();
  date2.setMinutes(date2.getMinutes() + 30);
  expect(isLater(date1, date2)).toBe(false);
});

test('Compare dates which the first one is later', () => {
  const date1 = new Date();
  const date2 = new Date();
  date1.setMinutes(date1.getMinutes() + 30);
  expect(isLater(date1, date2)).toBe(true);
});

test('Compare 2 dates created at the same time', () => {
  const date1 = new Date();
  const date2 = new Date();
  expect(isLater(date2, date1)).toBe(false);
});