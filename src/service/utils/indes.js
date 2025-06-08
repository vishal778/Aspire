export const getRandomColor = () => {
  let color;
  do {
    color = `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')}`;
  } while (parseInt(color.replace('#', ''), 16) > 0xf0f0f0); // avoid very light colors
  return color;
};
