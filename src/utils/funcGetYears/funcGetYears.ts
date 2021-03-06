/**
 * @description util, aggregates the launch years from the list
 * @param {Array} arrLaunches launches list
 * @returns {Array} array of launched years, recent first
 */
const funcGetYears = (arrLaunches: Record<string, any>[]): number[] => {
  const arrYearsWithDuplicates = arrLaunches.map((objLaunch) =>
    parseInt(objLaunch["launch_year"])
  );

  return [...(new Set(arrYearsWithDuplicates) as any)].sort((a, b) => b - a);
};

export default funcGetYears;
