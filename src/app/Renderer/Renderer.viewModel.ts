import { useState, useEffect, useMemo } from "react";
import { DataType, Progress } from "../types";
import history from "../history/history";

export const useRedererViewModel = () => {
  const migrationDates = Object.keys(history);
  const lastDate: string = migrationDates[migrationDates.length - 1];
  const lastData = history[lastDate];

  const [data, setData] = useState<DataType>(lastData);
  const [rangeIndex, setRangeIndex] = useState(migrationDates.length - 1);
  const [selectedDate, setSelectedDate] = useState(lastDate);
  const [animationTimeout, setAnimationTimeout] =
    useState<NodeJS.Timeout | null>(null);

  const handleChangeDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDate = e.target.value;
    setData(history[newDate]);
    setSelectedDate(newDate);
    setRangeIndex(migrationDates.indexOf(newDate));
  };

  const handleChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex: number = parseInt(e.target.value);
    setData(history[migrationDates[newIndex]]);
    setSelectedDate(migrationDates[newIndex]);
    setRangeIndex(newIndex);
  };

  const setSelectedByIndex = (index: number) => {
    const newDate = migrationDates[index];
    setData(history[newDate]);
    setSelectedDate(newDate);
    setRangeIndex(index);
  };
  const chainAnimation = (index: number) => {
    if (index >= migrationDates.length) {
      stopAnimation();
      return;
    }

    const timeout = setTimeout(() => {
      setSelectedByIndex(index);
      chainAnimation(index + 1);
    }, 200);
    setAnimationTimeout(timeout);
  };

  const animateProgress = () => {
    if (!migrationDates.length) {
      return;
    }

    setSelectedByIndex(0);
    chainAnimation(1);
  };

  const stopAnimation = () => {
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
    setAnimationTimeout(null);
  };

  const allDone = Object.values((data as DataType).sections).every(
    (section) => {
      const areAllElementsDone = Object.values(section.elements).every(
        (element) => {
          const isElementDone = element.progress === Progress.done;

          if (!element.elements) return isElementDone;

          const areAllSubelementsDone = Object.values(element.elements).every(
            (subElement) => subElement.progress === Progress.done
          );

          return areAllSubelementsDone && isElementDone;
        }
      );

      return areAllElementsDone;
    }
  );

  useEffect(() => {
    return () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    };
  }, [animationTimeout]);

  const handleAnimationButtonClick = () => {
    if (animationTimeout) {
      stopAnimation();
    } else {
      animateProgress();
    }
  };

  const animateButtonText = useMemo(
    () => (animationTimeout ? "Stop" : "Animate progress"),
    [animationTimeout]
  );

  return {
    migrationDates: migrationDates,
    allDone,
    selectedDate,
    rangeIndex,
    animateButtonText,
    data,
    handleChangeDate,
    handleChangeRange,
    handleAnimationButtonClick,
  };
};
