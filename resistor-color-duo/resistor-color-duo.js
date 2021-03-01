const colorCode = color => COLORS.indexOf(color);

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export const decodedValue = (colors) => {
  return Number.parseInt(
    colors
      .slice(0,2)
      .map(color => colorCode(color))
      .join('')
  )
};
