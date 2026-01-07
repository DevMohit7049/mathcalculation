interface StatisticsProps {
  correctAnswers: number;
  incorrectAnswers: number;
  totalProblems: number;
  accuracy: number;
  timeSpent?: number;
}

export const Statistics = ({
  correctAnswers,
  incorrectAnswers,
  totalProblems,
  accuracy,
  timeSpent,
}: StatisticsProps) => {
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    const parts = [];
    if (hours > 0) parts.push(String(hours).padStart(2, "0"));
    parts.push(String(minutes).padStart(2, "0"));
    parts.push(String(secs).padStart(2, "0"));
    return parts.join(":");
  };

  const columns = timeSpent !== undefined ? 5 : 4;
  const gridColsClass = columns === 5 ? "sm:grid-cols-5" : "sm:grid-cols-4";

  return (
    <div
      className={`grid grid-cols-2 ${gridColsClass} gap-2 sm:gap-3 lg:gap-4`}
    >
      <div className="text-center">
        <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium mb-1 sm:mb-2">
          Correct Answers
        </p>
        <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-600">
          {correctAnswers}
        </p>
      </div>
      <div className="text-center">
        <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium mb-1 sm:mb-2">
          Incorrect Answers
        </p>
        <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-red-600">
          {incorrectAnswers}
        </p>
      </div>
      <div className="text-center">
        <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium mb-1 sm:mb-2">
          Total Problems
        </p>
        <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-slate-700">
          {totalProblems}
        </p>
      </div>
      <div className="text-center">
        <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium mb-1 sm:mb-2">
          Accuracy
        </p>
        <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-green-600">
          {accuracy}%
        </p>
      </div>
      {timeSpent !== undefined && (
        <div className="text-center">
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium mb-1 sm:mb-2">
            Time Spent
          </p>
          <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-purple-600">
            {formatTime(timeSpent)}
          </p>
        </div>
      )}
    </div>
  );
};
