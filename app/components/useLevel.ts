import { useState, useMemo } from 'react';

export const useLevel = (xp: number) => {
  const levels = [150, 400, 700, 1050];
  const [currentLevel, setCurrentLevel] = useState(1);
  const [xpForNextLevel, setXpForNextLevel] = useState(levels[0]);

  const progress = useMemo(() => {
    let xpProgress = 0;
    for (let i = 0; i < levels.length; i++) {
      if (xp < levels[i]) {
        setXpForNextLevel(levels[i]);
        break;
      }
      setCurrentLevel(i + 2);
    }

    const previousLevelXp = currentLevel === 1 ? 0 : levels[currentLevel - 2];
    xpProgress = (xp - previousLevelXp) / (xpForNextLevel - previousLevelXp);

    return Math.min(1, Math.max(0, xpProgress));
  }, [xp, currentLevel, xpForNextLevel]);

  return { currentLevel, xpForNextLevel, progress };
};
