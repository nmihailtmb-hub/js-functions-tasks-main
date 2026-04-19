const convert = (...dateArrays) => {
  if (dateArrays.length === 0) return [];
  return dateArrays.map(([year, month, day]) => {
    const date = new Date(year, month, day); // без вычитания 1
    return date.toDateString();
  });
};

export default convert;