const addDateSuffix = (date) => {
  // Function to add appropriate suffix to the date
  let dateStr = date.toString();

  const lastChar = dateStr.charAt(dateStr.length - 1);

  if (lastChar === '1' && dateStr !== '11') {
    dateStr = `${dateStr}st`;
  } else if (lastChar === '2' && dateStr !== '12') {
    dateStr = `${dateStr}nd`;
  } else if (lastChar === '3' && dateStr !== '13') {
    dateStr = `${dateStr}rd`;
  } else {
    dateStr = `${dateStr}th`;
  }

  return dateStr;
};

module.exports = (
  timestamp,
  { monthLength = 'short', dateSuffix = true } = {}
) => {
  // Function to format a timestamp into a human-readable string

  // Define short and long month names
  const months = {
    0: monthLength === 'short' ? 'Jan' : 'January',
    1: monthLength === 'short' ? 'Feb' : 'February',
    2: monthLength === 'short' ? 'Mar' : 'March',
    3: monthLength === 'short' ? 'Apr' : 'April',
    4: monthLength === 'short' ? 'May' : 'May',
    5: monthLength === 'short' ? 'Jun' : 'June',
    6: monthLength === 'short' ? 'Jul' : 'July',
    7: monthLength === 'short' ? 'Aug' : 'August',
    8: monthLength === 'short' ? 'Sep' : 'September',
    9: monthLength === 'short' ? 'Oct' : 'October',
    10: monthLength === 'short' ? 'Nov' : 'November',
    11: monthLength === 'short' ? 'Dec' : 'December',
  };

  // Create a Date object from the timestamp
  const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];

  // Format the day of the month with or without a suffix
  const dayOfMonth = dateSuffix
    ? addDateSuffix(dateObj.getDate())
    : dateObj.getDate();

  // Get the year, hour, minutes, and period of the day
  const year = dateObj.getFullYear();
  let hour =
    dateObj.getHours() > 12
      ? Math.floor(dateObj.getHours() - 12)
      : dateObj.getHours();

  // Adjust hour for 12-hour format and midnight
  if (hour === 0) {
    hour = 12;
  }

  // Format minutes with leading zero if needed
  const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

  // Determine if it's AM or PM
  const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';

  // Construct the final formatted timestamp string
  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

  return formattedTimeStamp;
};
