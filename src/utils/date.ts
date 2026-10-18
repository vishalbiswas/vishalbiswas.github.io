const formatter = new Intl.DurationFormat('en-IN', { style: 'long' });

function getYearsAndMonths(d1: Date, d2: Date) {
  const start = d1 < d2 ? d1 : d2;
  const end = d1 < d2 ? d2 : d1;

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  // If the end day is less than the start day, a full month hasn't passed yet
  if (end.getDate() < start.getDate()) {
    months--;
  }

  // Handle negative months by rolling back a year
  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months };
}

export function getDuration(d1: Date, d2: Date) {
  return formatter.format(getYearsAndMonths(d1, d2));
}

export function getDurationTillNow(startDate: Date) {
  return getDuration(startDate, new Date());
}
