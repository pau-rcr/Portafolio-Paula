import Card from '../atoms/Card';
import Text from '../atoms/Text';
import profilePhoto from '@/assets/profile-photo.jpg';

const ProfileCard = () => {
  const skills = ['Fullstack', 'Python', 'Pandas', 'React', 'TypeScript', 'CSS/Tailwind', 'Inglés'];
  const certifications = ['B2 First (First Certificate in English) - Cambridge English', 'Fundamentos de Python 1 - Cisco Academy'];
  return <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
      <Card>
        <div className="text-center mb-6">
          <img 
            src={profilePhoto} 
            alt="Paula Caro - Foto de perfil" 
            className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-primary shadow-lg"
          />
          <Text variant="h2" className="mb-2">Paula Caro</Text>
          <Text variant="body" className="text-muted-foreground">Estudiante Ingeniería Informática</Text>
        </div>
        
        <div className="prose max-w-none">
          <Text variant="h3" className="mb-4">Carta de Presentación</Text>
          <Text variant="body" className="mb-4">Me llamo Paula y soy estudiante de Ingeniería Informática en DUOC UC. Me considero responsable, con gran interés por la tecnología y el desarrollo de software. Siento especial motivación por la ciencia de datos y el análisis de información, ya que me apasiona descubrir cómo los datos pueden aportar soluciones innovadoras a distintos desafíos. Disfruto aprender nuevas herramientas y participar en proyectos que unan tecnología y ciencia.</Text>
          
        </div>
      </Card>

      <div className="space-y-6">
        <Card>
          <Text variant="h3" className="mb-4">Áreas de Conocimiento</Text>
          <ul className="space-y-3">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <Text variant="body">{skill}</Text>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <Text variant="h3" className="mb-4">Certificaciones</Text>
          <ul className="space-y-3">
            {certifications.map((cert, index) => <li key={index} className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <Text variant="body">{cert}</Text>
              </li>)}
          </ul>
        </Card>
      </div>
    </div>;
};
export default ProfileCard;