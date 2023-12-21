import { colors } from './colors';

type BorderType = 's' | 'd'; //only solid or dashed

// return type
interface BorderDetails {
  borderWidth: number;
  borderColor: string;
  borderStyle: 'solid' | 'dashed';
}

//only choose from global colors
type ColorValues = typeof colors;
type BorderColor = ColorValues[keyof ColorValues];

// border functions
export const borders = (
  borderType: BorderType,
  borderColor: BorderColor,
): BorderDetails => {
  return {
    borderWidth: 1,
    borderColor: borderColor,
    borderStyle: borderType === 's' ? 'solid' : 'dashed',
  };
};
