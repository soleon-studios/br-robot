import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';

export type Direction = 'N' | 'E' | 'S' | 'W';
type ActionType = 'Rotate' | 'Move';

type Position = {
  x: number;
  y: number;
};

export type RobotCharacter =
  | 'Transit-Backpack'
  | 'Pixel-Case'
  | 'Travel-Folio'
  | 'Bellroy-Owl';

type RobotState = {
  position: Position;
  direction: Direction;
  robot: RobotCharacter;
};

type RobotContextType = {
  gridSize: number;
  robotState: RobotState;
  isRobotPresent: (x: number, y: number) => boolean;
  rotateRobot: () => void;
  moveRobot: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleRobotChange: (robot: RobotCharacter) => void;
};

const RobotContext = createContext<RobotContextType | undefined>(undefined);

export const useRobotContext = (): RobotContextType => {
  const context = useContext(RobotContext);
  if (!context) {
    throw new Error('useRobotContext must be used within RobotProvider');
  }
  return context;
};

const actionMap: Record<string, ActionType> = {
  KeyR: 'Rotate',
  Space: 'Move',
};

const getNextDirection = (currentDirection: Direction): Direction => {
  switch (currentDirection) {
    case 'N':
      return 'E';
    case 'E':
      return 'S';
    case 'S':
      return 'W';
    case 'W':
      return 'N';
    default:
      return 'E';
  }
};

const getNextPosition = (
  currentDirection: Direction,
  { x, y }: Position,
  gridSize: number
): Position => {
  switch (currentDirection) {
    case 'N':
      return { x, y: y > 0 ? y - 1 : y };
    case 'E':
      return { x: x < gridSize - 1 ? x + 1 : x, y };
    case 'S':
      return { x, y: y < gridSize - 1 ? y + 1 : y };
    case 'W':
      return { x: x > 0 ? x - 1 : x, y };
    default:
      return { x, y };
  }
};

type RobotProviderProps = {
  children: ReactNode;
};

export const RobotProvider = ({ children }: RobotProviderProps) => {
  const gridSize = 5;
  const [robotState, setRobotState] = useState<RobotState>({
    position: { x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) },
    direction: 'W',
    robot: 'Bellroy-Owl',
  });

  const rotateRobot = useCallback(() => {
    setRobotState((prevState) => {
      const newDirection = getNextDirection(prevState.direction);
      return { ...prevState, direction: newDirection };
    });
  }, []);

  const moveRobot = useCallback(() => {
    setRobotState((prevState) => ({
      ...prevState,
      position: getNextPosition(
        prevState.direction,
        prevState.position,
        gridSize!
      ),
    }));
  }, [gridSize]);

  const setRobotCharacter = useCallback((newRobot: RobotCharacter) => {
    setRobotState((prevState) => ({
      ...prevState,
      robot: newRobot,
    }));
  }, []);

  const handleRobotChange = useCallback(
    (robot: RobotCharacter) => {
      setRobotCharacter(robot);
    },
    [setRobotCharacter]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const action = actionMap[event.code];
      if (action === 'Rotate') {
        rotateRobot();
      }
      if (action === 'Move') {
        moveRobot();
      }
    },
    [moveRobot, rotateRobot]
  );

  const isRobotPresent = useCallback(
    (x: number, y: number) => {
      return robotState.position.x === x && robotState.position.y === y;
    },
    [robotState.position]
  );

  return (
    <RobotContext.Provider
      value={{
        gridSize,
        robotState,
        isRobotPresent,
        rotateRobot,
        moveRobot,
        handleKeyDown,
        handleRobotChange,
      }}
    >
      {children}
    </RobotContext.Provider>
  );
};
