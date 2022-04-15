export function changeDate(date) {
  let splitDate = date.split('-');
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let tempMonth = '';
  let splitMonth = splitDate[1].split('');

  if (splitMonth[0] === '0') {
    tempMonth = splitMonth[1];
  } else {
    tempMonth = splitMonth.join('');
  }

  let day = splitDate[2];
  let month = months[Number(tempMonth - 1)];
  let year = splitDate[0];

  return day + ' ' + month + ' ' + year;
}
