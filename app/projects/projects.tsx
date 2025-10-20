import ProjectsGrid from '../../src/components/organisms/ProjectsGrid';

const ProjectsScreen = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Mis Proyectos
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explora mi portafolio de proyectos personales y profesionales
        </p>
      </div>
      <ProjectsGrid />
    </div>
  );
};

export default ProjectsScreen;
