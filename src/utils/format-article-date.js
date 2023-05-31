export const formatDate = (dateTime) => {
  const date = new Date(dateTime);

  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
};
