import Text from '../atoms/Text';

interface SkillLevelProps {
  skill: string;
  level: number;
}

const SkillLevel = ({ skill, level }: SkillLevelProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <Text variant="body" className="font-medium">{skill}</Text>
        <Text variant="small">{level}%</Text>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillLevel;
