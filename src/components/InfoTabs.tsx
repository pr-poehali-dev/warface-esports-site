import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Leader {
  rank: number;
  name: string;
  wins: number;
  losses: number;
  winRate: string;
  points: number;
}

interface ScheduleItem {
  time: string;
  match: string;
  format: string;
  stage: string;
}

interface InfoTabsProps {
  leaders: Leader[];
  schedule: ScheduleItem[];
}

const InfoTabs = ({ leaders, schedule }: InfoTabsProps) => {
  return (
    <>
      {/* Schedule Section */}
      <div id="schedule-content">
        <Card className="bg-card/80 border-primary/30 neon-border">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Icon name="Calendar" size={32} />
              Расписание на сегодня
            </CardTitle>
            <CardDescription>15 ноября 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {schedule.map((match, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-6 p-4 rounded-lg bg-muted/50 border border-primary/20 hover:border-primary/50 transition-all"
                >
                  <div className="text-2xl font-bold text-accent min-w-[80px]">
                    {match.time}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{match.match}</div>
                    <div className="text-muted-foreground">{match.stage}</div>
                  </div>
                  <Badge variant="outline" className="text-lg px-4 py-1">
                    {match.format}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leaderboard Section */}
      <div id="leaderboard-content">
        <Card className="bg-card/80 border-primary/30 neon-border">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Icon name="Trophy" size={32} className="text-accent" />
              Таблица лидеров
            </CardTitle>
            <CardDescription>Топ игроки сезона</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaders.map((leader) => (
                <div 
                  key={leader.rank}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                    leader.rank <= 3 
                      ? 'bg-gradient-to-r from-accent/20 to-primary/20 border-accent/50 neon-border' 
                      : 'bg-muted/30 border-primary/20 hover:border-primary/40'
                  }`}
                >
                  <div className={`text-3xl font-bold min-w-[50px] text-center ${
                    leader.rank === 1 ? 'text-accent neon-pink-glow' : 
                    leader.rank === 2 ? 'text-primary' : 
                    leader.rank === 3 ? 'text-secondary' : 
                    'text-muted-foreground'
                  }`}>
                    #{leader.rank}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-xl">{leader.name}</div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>Побед: {leader.wins}</span>
                      <span>Поражений: {leader.losses}</span>
                      <span className="text-primary">Винрейт: {leader.winRate}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{leader.points}</div>
                    <div className="text-xs text-muted-foreground">очков</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default InfoTabs;
