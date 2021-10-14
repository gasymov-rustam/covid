export function createArrow(number) {
  const arrow =
    number === 0 ? "-" : number > 0 ? <>&#129045;&#32;{number}</> : <>&#129047;&#32;{number}</>;
  return arrow;
}

export function createSum(data, key) {
  return data.reduce((total, item) => {
    total += item[key];
    return total;
  }, 0);
}

export function sortBy(array, key, order) {
  if (array) {
    if (typeof array[0][key] === "string") return (a, b) => a[key].localeCompare(b[key]) * order;
    if (typeof array[0][key] !== "string") return (a, b) => (a[key] - b[key]) * order;
  }
}
