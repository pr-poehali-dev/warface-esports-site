import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Tournament {
  id: number;
  format: string;
  date: string;
  time: string;
  prize: string;
  status: 'active' | 'upcoming' | 'ended';
  participants: number;
  maxParticipants: number;
}

interface TournamentsTabProps {
  tournaments: Tournament[];
}

const TournamentsTab = ({ tournaments }: TournamentsTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tournaments.map((tournament) => (
        <Card key={tournament.id} className="bg-card/80 border-primary/30 hover:border-primary/60 transition-all hover:scale-105 neon-border">
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <Badge 
                variant={tournament.status === 'active' ? 'default' : 'secondary'}
                className={tournament.status === 'active' ? 'bg-accent animate-pulse-glow' : ''}
              >
                {tournament.status === 'active' ? 'Идет набор' : 'Скоро'}
              </Badge>
              <Badge variant="outline" className="text-2xl font-bold border-primary">
                {tournament.format}
              </Badge>
            </div>
            <CardTitle className="text-2xl">{tournament.prize}</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              <div className="flex items-center gap-2 mt-2">
                <Icon name="Calendar" size={16} />
                {tournament.date} в {tournament.time}
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Участники:</span>
                <span className="text-primary font-semibold">
                  {tournament.participants}/{tournament.maxParticipants}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all"
                  style={{ width: `${(tournament.participants / tournament.maxParticipants) * 100}%` }}
                ></div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/80 neon-border">
                Зарегистрироваться
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TournamentsTab;
