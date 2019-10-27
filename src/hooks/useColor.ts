import { useState } from 'react';

const useColor = () => {
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);

  const handleColor = (color: string, change: number): void | null => {
    switch (color) {
      case 'red':
        return red + change > 255 || red + change < 0
          ? null
          : setRed(red + change);
      case 'green':
        return green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
      case 'blue':
        return blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
      default:
        return null;
    }
  };
  const color: string = `rgb(${red}, ${green}, ${blue})`;
  return { color, handleColor };
};

export default useColor;
