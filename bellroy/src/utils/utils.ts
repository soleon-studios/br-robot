import { Direction, RobotCharacter } from '../packages/Robot/RobotContext';

export const getTransformationStyle = (direction: Direction) => {
  switch (direction) {
    case 'N':
      return 'scaleY(-1) rotate(-90deg)';
    case 'E':
      return 'scaleX(-1) rotate(0deg)';
    case 'S':
      return 'scaleY(1) rotate(-90deg)';
    case 'W':
      return 'scaleX(1) rotate(0deg)';
    default:
      return 'scaleX(1) rotate(0deg)';
  }
};

export const getRobotCharacter = (robot: RobotCharacter) => {
  switch (robot) {
    case 'Transit-Backpack':
      return 'https://bellroy-product-images.imgix.net/bellroy_dot_com_gallery_image/AUD/BTBA-BLK-204/0?auto=format&amp;fit=max&amp;w=750';
    case 'Pixel-Case':
      return 'https://bellroy-product-images.imgix.net/bellroy_dot_com_gallery_image/AUD/WTFB-CAR-301/0?auto=format&amp;fit=max&amp;w=750';
    case 'Travel-Folio':
      return 'https://bellroy-product-images.imgix.net/bellroy_dot_com_gallery_image/AUD/PCFH-STU-134/0?auto=format&amp;fit=max&amp;w=750';
    default:
      return 'default';
  }
};
