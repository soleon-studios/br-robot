import React from 'react';
import {
  Direction,
  RobotCharacter,
  useRobotContext,
} from '../../packages/Robot/RobotContext';

const Robot = () => {
  const {
    robotState: { direction, robot },
  } = useRobotContext();

  const getTransformationStyle = (direction: Direction) => {
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

  const getRobotCharacter = (robot: RobotCharacter) => {
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

  if (getRobotCharacter(robot) === 'default') {
    return (
      <svg
        className='robot-svg'
        style={{
          transform: getTransformationStyle(direction),
          fill: '#e15a1d',
        }}
        viewBox='36.571 14.2 25.859 29.6'
        height='48'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M 41.03 18.9 C 40.33 18.9 39.73 19.5 39.73 20.2 C 39.73 20.9 40.43 21.6 41.23 21.4 C 41.53 22.5 42.13 23.5 43.03 24.2 L 43.43 24.4 L 43.83 24.1 C 44.53 23.5 45.23 22.4 45.53 21.3 L 45.83 21.3 C 46.53 21.3 47.13 20.7 47.13 20 C 47.13 19.3 46.43 18.8 45.73 18.8 C 44.93 18.8 44.43 19.4 44.43 20.1 C 44.43 21 43.93 22.2 43.33 23 C 42.73 22.3 42.33 21.2 42.23 20.1 C 42.33 19.5 41.73 18.9 41.03 18.9 Z M 57.53 30.5 C 55.03 24.3 51.43 22.5 49.93 21.9 C 50.03 21.5 50.03 21.2 50.03 20.7 C 50.03 17.1 47.03 14.2 43.43 14.2 C 39.93 14.2 37.13 17 36.63 20.6 C 35.93 29.3 41.63 34.1 44.43 36.3 C 46.03 37.5 46.83 38.4 45.93 39.9 C 45.33 40.7 44.73 41.9 44.13 42.1 C 42.53 42.4 42.03 43.4 42.03 43.4 L 43.43 43.4 C 45.23 43.4 45.73 43.3 47.53 40.4 C 49.23 37.5 46.53 35.9 45.43 35 C 42.63 32.9 37.43 28.6 38.13 20.8 L 38.13 20.7 C 38.43 17.7 40.63 15.5 43.53 15.5 C 47.502 15.467 50.02 19.746 48.063 23.203 C 47.836 23.604 47.555 23.973 47.23 24.3 C 46.33 25.3 45.03 25.8 43.63 25.8 C 43.13 25.8 42.73 25.7 42.33 25.6 C 40.93 25.2 40.33 26.2 40.33 26.2 L 40.23 26.3 L 40.33 26.4 C 41.23 27 42.53 27.3 43.63 27.3 C 45.43 27.3 47.03 26.7 48.23 25.4 C 48.83 24.8 49.33 24.1 49.63 23.4 C 50.83 23.9 54.03 25.5 56.33 31.1 C 56.93 32.5 57.43 33.9 57.93 35.1 C 56.13 35.1 49.83 34.9 46.73 30 C 45.93 28.7 44.63 29 44.63 29 C 47.83 36.7 56.93 36.5 58.63 36.6 C 59.43 38.6 60.13 40.2 60.43 41.1 C 59.73 41.1 58.33 40.8 56.73 39.4 C 55.349 38.115 53.515 37.432 51.63 37.5 L 47.63 43.8 C 47.63 43.8 49.53 43.8 50.33 42.6 L 52.53 39.1 C 53.63 39.2 54.73 39.7 55.83 40.6 C 57.93 42.3 59.23 42.5 60.53 42.5 C 61.73 42.6 62.43 42.2 62.43 42.2 C 62.43 42.2 60.03 36.6 57.53 30.5 Z' />
      </svg>
    );
  }

  return (
    <img
      alt='transit-backpack-robot'
      height='70'
      src={getRobotCharacter(robot)}
      title=''
      width='70'
      style={{
        borderRadius: '5px',
        transform: getTransformationStyle(direction),
      }}
    ></img>
  );
};

export default Robot;
