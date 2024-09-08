import React, { memo, useCallback } from 'react';
import { useRobotContext } from '../../packages/Robot/RobotContext';
import { Robot } from '../index';
import './styles.css';

type CellProps = {
  x: number;
  y: number;
};

const Cell = ({ x, y }: CellProps) => {
  const { isRobotPresent } = useRobotContext();

  const isRobot = useCallback(
    () => isRobotPresent(x, y),
    [isRobotPresent, x, y]
  );

  return (
    <div role='cell' className='cell'>
      {isRobot() && <Robot />}
    </div>
  );
};

export default memo(Cell);
