export const FormatDate = (dateString: string): string => {
  // Handle dd/MM/yyyy format from backend
  let date: Date;

  if (dateString.includes("/")) {
    const [day, month, year] = dateString.split("/");
    // Create date in ISO format: yyyy-MM-dd
    date = new Date(`${year}-${month}-${day}`);
  } else {
    date = new Date(dateString);
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const TimeAgo = (dateString: string) => {
  let date: Date;

  if (dateString.includes("/")) {
    const parts = dateString.split(" ");
    const datePart = parts[0];
    const timePart = parts[1] || "00:00:00";

    const [day, month, year] = datePart.split("/");
    // Add 'Z' to indicate UTC time
    date = new Date(`${year}-${month}-${day}T${timePart}Z`);
  } else {
    date = new Date(dateString);
  }

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 60) return `${seconds} seconds ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;

  const days = Math.floor(hours / 24);
  return `${days} days ago`;
};

export const Paginate = <T>(
  items: T[],
  currentPage: number,
  itemsPerPage: number
): T[] => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
};
