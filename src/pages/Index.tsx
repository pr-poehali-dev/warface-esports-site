import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

interface Leader {
  rank: number;
  name: string;
  wins: number;
  losses: number;
  winRate: string;
  points: number;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('tournaments');

  const tournaments: Tournament[] = [
    { id: 1, format: '5x5', date: '15.11.2025', time: '18:00', prize: '50 000 ₽', status: 'active', participants: 8, maxParticipants: 16 },
    { id: 2, format: '2x2', date: '16.11.2025', time: '19:00', prize: '20 000 ₽', status: 'upcoming', participants: 12, maxParticipants: 16 },
    { id: 3, format: '1x1', date: '17.11.2025', time: '20:00', prize: '15 000 ₽', status: 'upcoming', participants: 24, maxParticipants: 32 },
    { id: 4, format: '3x3', date: '18.11.2025', time: '18:00', prize: '30 000 ₽', status: 'upcoming', participants: 6, maxParticipants: 12 },
    { id: 5, format: '4x4', date: '19.11.2025', time: '19:00', prize: '40 000 ₽', status: 'upcoming', participants: 4, maxParticipants: 12 },
  ];

  const leaders: Leader[] = [
    { rank: 1, name: 'PhantomStrike', wins: 127, losses: 23, winRate: '84.7%', points: 2450 },
    { rank: 2, name: 'DarkAssassin', wins: 115, losses: 35, winRate: '76.7%', points: 2280 },
    { rank: 3, name: 'ShadowHunter', wins: 108, losses: 42, winRate: '72.0%', points: 2150 },
    { rank: 4, name: 'BloodReaper', wins: 98, losses: 52, winRate: '65.3%', points: 1980 },
    { rank: 5, name: 'NightRaven', wins: 92, losses: 58, winRate: '61.3%', points: 1850 },
    { rank: 6, name: 'IronWolf', wins: 85, losses: 65, winRate: '56.7%', points: 1720 },
    { rank: 7, name: 'SteelViper', wins: 78, losses: 72, winRate: '52.0%', points: 1590 },
    { rank: 8, name: 'ThunderBolt', wins: 71, losses: 79, winRate: '47.3%', points: 1460 },
  ];

  const schedule = [
    { time: '18:00', match: 'PhantomStrike vs DarkAssassin', format: '1x1', stage: 'Финал' },
    { time: '19:30', match: 'Team Alpha vs Team Omega', format: '5x5', stage: 'Полуфинал' },
    { time: '21:00', match: 'ShadowHunter vs BloodReaper', format: '1x1', stage: 'Полуфинал' },
    { time: '22:30', match: 'Dark Squad vs Night Raiders', format: '3x3', stage: '1/4 финала' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#1a0b2e] to-[#0a0118]">
      {/* Hero Section */}
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-card/50 border border-primary/30 mb-8">
            <TabsTrigger value="tournaments" className="data-[state=active]:bg-primary/20">
              <Icon name="Swords" className="mr-2" size={18} />
              Турниры
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-primary/20">
              <Icon name="Calendar" className="mr-2" size={18} />
              Расписание
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-primary/20">
              <Icon name="Trophy" className="mr-2" size={18} />
              Лидеры
            </TabsTrigger>
            <TabsTrigger value="registration" className="data-[state=active]:bg-primary/20">
              <Icon name="UserPlus" className="mr-2" size={18} />
              Регистрация
            </TabsTrigger>
            <TabsTrigger value="report" className="data-[state=active]:bg-primary/20">
              <Icon name="Flag" className="mr-2" size={18} />
              Жалобы
            </TabsTrigger>
          </TabsList>

          {/* Tournaments Tab */}
          <TabsContent value="tournaments" className="space-y-6 animate-fade-in">
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
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="animate-fade-in">
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
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="animate-fade-in">
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
          </TabsContent>

          {/* Report Tab */}
          <TabsContent value="report" className="animate-fade-in">
            <Card className="bg-card/80 border-primary/30 neon-border max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Flag" size={32} className="text-destructive" />
                  Подать жалобу
                </CardTitle>
                <CardDescription>Сообщите о нарушении правил турнира</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="reporter-nickname">Ваш игровой ник</Label>
                    <Input 
                      id="reporter-nickname" 
                      placeholder="Введите ваш ник"
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="violator-nickname">Ник нарушителя</Label>
                    <Input 
                      id="violator-nickname" 
                      placeholder="Ник игрока, нарушившего правила"
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tournament-id">ID турнира</Label>
                    <Input 
                      id="tournament-id" 
                      placeholder="Например: #1234"
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="violation-type">Тип нарушения</Label>
                    <select 
                      id="violation-type"
                      className="w-full px-3 py-2 bg-muted/50 border border-primary/30 rounded-md focus:border-primary focus:outline-none"
                    >
                      <option value="">Выберите тип нарушения</option>
                      <option value="cheating">Использование читов</option>
                      <option value="toxicity">Токсичное поведение</option>
                      <option value="teamkilling">Убийство союзников</option>
                      <option value="afk">AFK / Саботаж</option>
                      <option value="matchfixing">Договорные матчи</option>
                      <option value="rules">Другое нарушение правил</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="proof">Ссылка на доказательства</Label>
                    <Input 
                      id="proof" 
                      type="url"
                      placeholder="Ссылка на скриншот/видео (YouTube, Imgur и т.д.)"
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                    <p className="text-xs text-muted-foreground">Рекомендуется прикладывать видео или скриншоты</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Описание инцидента</Label>
                    <textarea 
                      id="description"
                      rows={6}
                      placeholder="Подробно опишите ситуацию: что произошло, когда, какие были последствия..."
                      className="w-full px-3 py-2 bg-muted/50 border border-primary/30 rounded-md focus:border-primary focus:outline-none resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">Контакт для связи (Discord/Email)</Label>
                    <Input 
                      id="contact" 
                      placeholder="username#1234 или email@example.com"
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                    <div className="flex gap-3">
                      <Icon name="AlertTriangle" size={20} className="text-destructive mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <p className="font-semibold text-destructive mb-1">Важно:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Ложные жалобы влекут санкции</li>
                          <li>Рассмотрение может занять до 48 часов</li>
                          <li>Решение администрации окончательное</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-destructive hover:bg-destructive/80 text-lg py-6">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить жалобу
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Registration Tab */}
          <TabsContent value="registration" className="animate-fade-in">
            <Card className="bg-card/80 border-primary/30 neon-border max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="UserPlus" size={32} />
                  Регистрация в турнир
                </CardTitle>
                <CardDescription>Заполните форму для участия</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nickname">Игровой ник</Label>
                    <Input 
                      id="nickname" 
                      placeholder="Введите ваш ник в Warface"
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="discord">Discord</Label>
                    <Input 
                      id="discord" 
                      placeholder="username#1234"
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="format">Формат турнира</Label>
                    <select 
                      id="format"
                      className="w-full px-3 py-2 bg-muted/50 border border-primary/30 rounded-md focus:border-primary focus:outline-none"
                    >
                      <option value="">Выберите формат</option>
                      <option value="1x1">1x1</option>
                      <option value="2x2">2x2</option>
                      <option value="3x3">3x3</option>
                      <option value="4x4">4x4</option>
                      <option value="5x5">5x5</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="team">Название команды (для 2x2 и выше)</Label>
                    <Input 
                      id="team" 
                      placeholder="Название вашей команды"
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teammates">Состав команды</Label>
                    <textarea 
                      id="teammates"
                      rows={4}
                      placeholder="Укажите ники участников команды (каждый с новой строки)"
                      className="w-full px-3 py-2 bg-muted/50 border border-primary/30 rounded-md focus:border-primary focus:outline-none resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/80 neon-border text-lg py-6">
                    <Icon name="Check" className="mr-2" size={20} />
                    Зарегистрироваться
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t border-primary/30 mt-20 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold text-xl mb-3 text-primary">Dark Blade</h3>
              <p className="text-muted-foreground">
                Киберспортивная организация по проведению турниров Warface
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3 text-primary">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Mail" size={16} />
                  <span>info@darkblade.gg</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="MessageCircle" size={16} />
                  <span>Discord: DarkBlade#1337</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3 text-primary">Правила</h3>
              <p className="text-muted-foreground">
                Участие в турнирах только для игроков 18+. Читы запрещены.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-primary/20 text-muted-foreground">
            © 2025 Dark Blade. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;