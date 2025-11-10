import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src="https://cdn.poehali.dev/files/efc27d4e-a303-44d8-b8bc-a91a2c4cf8b9.png" 
              alt="Dark Blade Logo" 
              className="w-32 h-32 animate-pulse-glow"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 neon-glow tracking-wider">
            DARK BLADE
          </h1>
          <p className="text-2xl md:text-3xl text-accent neon-pink-glow mb-8">
            WARFACE CHAMPIONSHIPS
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="text-lg px-6 py-2 border-primary text-primary hover:bg-primary/20 transition-colors">
              1x1
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2 border-primary text-primary hover:bg-primary/20 transition-colors">
              2x2
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2 border-primary text-primary hover:bg-primary/20 transition-colors">
              3x3
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2 border-primary text-primary hover:bg-primary/20 transition-colors">
              4x4
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2 border-primary text-primary hover:bg-primary/20 transition-colors">
              5x5
            </Badge>
          </div>
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/80 neon-border transition-all">
            <Icon name="Trophy" className="mr-2" size={20} />
            Регистрация в турнир
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
