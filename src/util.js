export const roundIfDecimal = (num) => {
  if (num % 1 !== 0) {
    // Check if there are decimal places
    return num.toFixed(1); // Round the number if it has decimal places
  }
  return num; // Return the original number if it's already a whole number
};

export const monthMapping = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const getDateTime = (dateString) => {
  const dateObj = new Date(dateString);

  // Extracting components
  const year = dateObj.getFullYear();
  const month = monthMapping[dateObj.getMonth() + 1]; // Month is zero-based, so add 1
  const date = dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = String(dateObj.getMinutes()).padStart(2, "0"); // Pad minute with leading zero if needed
  const ampm = hour >= 12 ? "PM" : "AM"; // Determine AM/PM
  const day = dateObj.toLocaleDateString("en-US", { weekday: "long" }); // Get day of the week

  // Convert hour to 12-hour format
  let hour12 = hour % 12 || 12; // Ensure 12 is displayed instead of 0 for 12 AM/PM
  hour12 = String(hour12).padStart(2, "0"); // Pad hour with leading zero if needed

  return {
    year,
    month,
    day,
    date,
    hour: hour12,
    minute,
    ampm,
  };
};

export const calculateTimeDifference = (date1, date2) => {
  const diffMs = Math.abs(date2 - date1);
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  if (diffDays >= 30) {
    return `${diffDays} days`;
  } else if (diffDays >= 1) {
    return `${diffDays} days, ${diffHours.toString().padStart(2, "0")} hours`;
  } else {
    return `${diffHours} hours, ${diffMinutes
      .toString()
      .padStart(2, "0")} minutes`;
  }
};
