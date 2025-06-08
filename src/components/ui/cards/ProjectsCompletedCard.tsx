import { useGithubRepos } from "../../../hooks";
import { InfoCard } from "../templates";

const ProjectsCompletedCard = () => {
  const { repos, loading, error } = useGithubRepos("theHELDERscrolls");
  return (
    <InfoCard
      value={loading ? "..." : error ? "!" : `+${repos}`}
      label="projects completed"
    />
  );
};

export default ProjectsCompletedCard;
