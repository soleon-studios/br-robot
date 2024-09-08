import React, { memo, useMemo, CSSProperties, ReactNode } from 'react';
import { useRobotContext } from '../../packages/Robot/RobotContext';
import Cell from '../Cell/Cell';
import './styles.css';

const Grid = () => {
  const { gridSize } = useRobotContext();

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${gridSize}, 70px)`,
    gridTemplateRows: `repeat(${gridSize}, 70px)`,
  };

  const grid = useMemo(() => {
    const cells: ReactNode[] = [];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        cells.push(<Cell key={`${x}-${y}`} x={x} y={y} />);
      }
    }
    return cells;
  }, [gridSize]);

  return (
    <div role='grid' className='grid-container'>
      <div className='grid' style={gridStyle}>
        {grid}
      </div>
    </div>
  );
};

export default memo(Grid);
