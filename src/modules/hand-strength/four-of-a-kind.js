import groupBy from 'lodash.groupby';

export function isFourOfAKind(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = keys.some(key => groups[key].length === 4);

  const value = parseInt(keys.find(key => groups[key].length === 4));

  const kickers = keys
    .filter(key => parseInt(key) !== value)
    .map(kicker => parseInt(kicker))
    .sort((a, b) => b - a);

  return criteria && {
    values: [value],
    kickers
  };
}

export function hasFourOfAKind(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = keys.some(key => groups[key].length === 4);

  const value = keys
    .filter(key => groups[key].length === 4)
    .map(value => parseInt(value))
    .sort((a,b) => b-a)

  console.log(value)

  const kickers = keys
    .filter(key => groups[key].length !== 4)
    .map(kicker => parseInt(kicker))
    .sort((a,b) => b-a)

  return criteria && {
    values: value,
    kickers
  };
}
