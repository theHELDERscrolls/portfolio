interface GitHubLanguagesProps {
  topLanguages: {
    name: string;
    bytes: number;
  }[];
}

export const GitHubLanguages = ({ topLanguages }: GitHubLanguagesProps) => {
  const totalBytes = topLanguages.reduce(
    (total, language) => total + language.bytes,
    0
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 h-50.5 w-66 py-2 font-bold border sm:px-8 border-amber-500/10 bg-amber-800/10 rounded-xl hover:shadow-[0_0_5px_#FFB900] transition-all duration-300 ease-in-out">
      <h3 className="text-amber-400">Most used languages:</h3>

      {topLanguages.map((language) => {
        const percentage =
          totalBytes > 0 ? Math.round((language.bytes / totalBytes) * 100) : 0;

        return (
          <div
            key={language.name}
            className="flex items-center justify-between flex-1 w-full gap-2"
          >
            <span>{language.name}</span>
            <span className="text-amber-200">{percentage}%</span>
          </div>
        );
      })}
    </div>
  );
};
