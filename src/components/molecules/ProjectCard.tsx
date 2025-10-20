import { Github, ExternalLink } from 'lucide-react';
import Card from '../atoms/Card';
import Text from '../atoms/Text';

interface ProjectCardProps {
  project: {
    name: string;
    type: string;
    description: string;
    githubUrl: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col h-full hover:scale-105 transition-transform duration-300">
      <div className="flex-1 space-y-4">
        <div className="flex items-start justify-between gap-2">
          <Text variant="h3" className="flex-1">{project.name}</Text>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
            aria-label="Ver repositorio en GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
        
        <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
          <Text variant="small" className="text-primary font-medium">
            {project.type}
          </Text>
        </div>
        
        <Text variant="body" className="text-muted-foreground">
          {project.description}
        </Text>
      </div>
      
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
      >
        Ver en GitHub
        <ExternalLink className="w-4 h-4" />
      </a>
    </Card>
  );
};

export default ProjectCard;
