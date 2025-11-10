import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/HeroSection';
import TournamentsTab from '@/components/TournamentsTab';
import InfoTabs from '@/components/InfoTabs';
import RegistrationForms from '@/components/RegistrationForms';

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
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-card/50 border border-primary/30 mb-8">
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
            <TabsTrigger value="dispute" className="data-[state=active]:bg-primary/20">
              <Icon name="Scale" className="mr-2" size={18} />
              Споры
            </TabsTrigger>
            <TabsTrigger value="report" className="data-[state=active]:bg-primary/20">
              <Icon name="Flag" className="mr-2" size={18} />
              Жалобы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tournaments" className="space-y-6 animate-fade-in">
            <TournamentsTab tournaments={tournaments} />
          </TabsContent>

          <TabsContent value="schedule" className="animate-fade-in">
            <InfoTabs leaders={leaders} schedule={schedule} />
          </TabsContent>

          <TabsContent value="leaderboard" className="animate-fade-in">
            <InfoTabs leaders={leaders} schedule={schedule} />
          </TabsContent>

          <TabsContent value="registration" className="animate-fade-in">
            <RegistrationForms />
          </TabsContent>

          <TabsContent value="dispute" className="animate-fade-in">
            <RegistrationForms />
          </TabsContent>

          <TabsContent value="report" className="animate-fade-in">
            <RegistrationForms />
          </TabsContent>
        </Tabs>
      </div>

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
