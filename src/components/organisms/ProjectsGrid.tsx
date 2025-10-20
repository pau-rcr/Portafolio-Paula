import ProjectCard from '../molecules/ProjectCard';

interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Lo quieres te lo vendo",
    type: "Página Web",
    description: "Página para la tienda Lo Quieres Te Lo Vendo, diseño simple en HTML con JavaScript.",
    githubUrl: "https://github.com/pau-rcr/LoQuieresTeloVendo/tree/main/LQTLV"
  },
  {
    id: 2,
    name: "Mutantes",
    type: "Backend",
    description: "Proyecto de prueba generado con Java, detecta mutantes según su código de ADN. ",
    githubUrl: "https://github.com/pau-rcr/mutantes"
  },
  {
    id: 3,
    name: "PocketCardsDB",
    type: "Base de datos",
    description: "Sistema de base de datos para complementar la aplicación Pokèmon Trading Cards Game Pocket, mostrando estadísticas que ayudan a la jugabilidad. ",
    githubUrl: "https://github.com/usuario/pocketcardsdb"
  }
];

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
