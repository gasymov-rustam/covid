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
