import React from 'react';
import { useEffect } from 'react';
import { useRobotContext } from '../../packages/Robot/RobotContext';
import './styles.css';

const Controls = () => {
  const { handleKeyDown, rotateRobot, moveRobot } = useRobotContext();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className='controls-container'>
      <div className='controls'>
        <button onClick={rotateRobot}>ROTATE</button>
        <button onClick={moveRobot}>MOVE</button>
      </div>
      <div className='bellroy-orange'>
        <p>
          You can also use your keyboard Spacebar to move the bellroy bot and
          letter R to rotate
        </p>
      </div>
    </div>
  );
};

export default Controls;
