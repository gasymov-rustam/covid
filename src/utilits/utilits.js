export function createArrow(number) {
  const arrow =
    number === 0 ? (
      "-"
    ) : number > 0 ? (
      <span>&#129045;&#32;{number}</span>
    ) : (
      <span>&#129047;&#32;{number}</span>
    );
  return arrow;
}

export function createSum(data, key) {
  return data.reduce((total, item) => {
    total += item[key];
    return total;
  }, 0);
}

export function sortBy(array, key, order) {
  if (array.length > 0) {
    if (key === "label") {
      return (a, b) => a[key]["uk"].localeCompare(b[key]["uk"]) * order;
    } else {
      return (a, b) => (a[key] - b[key]) * order;
    }
  }
}
