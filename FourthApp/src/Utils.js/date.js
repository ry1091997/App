export function getFormattedDate(date) {
  return date.toISOString().slice(0,10);
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

// var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
// .toLocaleDateString('hi-IN',options)

