import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import format from 'date-fns/format';

const result = eachDayOfInterval({
  // start: new Date(2018, 7, 1),
  // end: new Date(2018, 7, 4),
  start: new Date('2018-08-01'),
  end: new Date('2018-08-04'),
});

console.log(result);

for (const date of result) {
  console.log(format(date, 'dd.MM.yyyy'));
}
