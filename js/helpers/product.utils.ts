import {COLORS} from '../../themes/colors';

export const getFavIconStyle = ({isFavourite}: {isFavourite: boolean}) => {
  switch (isFavourite) {
    case true:
      return {
        fill: COLORS.ROSE_100,
        stroke: undefined,
      };
    default:
      return {};
  }
};
