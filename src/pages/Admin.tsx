import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

interface Dispute {
  id: number;
  tournament: string;
  team1: string;
  team2: string;
  matchDate: string;
  matchTime: string;
  reason: string;
  description: string;
  proofUrl: string;
  contact: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

interface Report {
  id: number;
  reporter: string;
  violator: string;
  tournamentId: string;
  violationType: string;
  proofUrl: string;
  description: string;
  contact: string;
  status: 'pending' | 'reviewed' | 'closed';
  submittedAt: string;
}

const Admin = () => {
  const [disputes, setDisputes] = useState<Dispute[]>([
    {
      id: 1,
      tournament: 'Dark Blade 5x5 Championship #15',
      team1: 'Phoenix Squad',
      team2: 'Dark Wolves',
      matchDate: '2025-11-14',
      matchTime: '18:30',
      reason: 'wrong-score',
      description: 'Счёт был засчитан как 10:8 в пользу соперника, но по факту мы выиграли 11:9. Есть скриншоты финального результата.',
      proofUrl: 'https://imgur.com/proof123',
      contact: 'phoenixcap#1234',
      status: 'pending',
      submittedAt: '2025-11-14 20:15'
    },
    {
      id: 2,
      tournament: 'Dark Blade 2x2 Tournament #42',
      team1: 'Shadow Duo',
      team2: 'Night Hunters',
      matchDate: '2025-11-13',
      matchTime: '21:00',
      reason: 'technical',
      description: 'Во время матча у нас случились проблемы с сервером, игра зависла на 5 минут. После переподключения счёт был сброшен.',
      proofUrl: 'https://youtube.com/video456',
      contact: 'shadowking#5678',
      status: 'pending',
      submittedAt: '2025-11-13 22:30'
    }
  ]);

  const [reports, setReports] = useState<Report[]>([
    {
      id: 1,
      reporter: 'CleanPlayer',
      violator: 'SuspiciousGuy',
      tournamentId: '#1234',
      violationType: 'cheating',
      proofUrl: 'https://youtube.com/cheat-proof',
      description: 'Игрок использовал аимбот, видно по резким движениям прицела и 100% попаданиям в голову.',
      contact: 'cleanplayer#9999',
      status: 'pending',
      submittedAt: '2025-11-14 19:45'
    }
  ]);

  const [chatMessage, setChatMessage] = useState('');
  const [selectedItem, setSelectedItem] = useState<{type: 'dispute' | 'report', id: number} | null>(null);

  const handleDisputeAction = (id: number, action: 'approved' | 'rejected') => {
    setDisputes(disputes.map(d => d.id === id ? { ...d, status: action } : d));
  };

  const handleReportAction = (id: number, action: 'reviewed' | 'closed') => {
    setReports(reports.map(r => r.id === id ? { ...r, status: action } : r));
  };

  const handleSendMessage = () => {
    if (chatMessage.trim() && selectedItem) {
      alert(`Сообщение отправлено: "${chatMessage}"`);
      setChatMessage('');
      setSelectedItem(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="border-accent text-accent">Ожидает</Badge>;
      case 'approved':
        return <Badge variant="outline" className="border-green-500 text-green-500">Одобрено</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="border-destructive text-destructive">Отклонено</Badge>;
      case 'reviewed':
        return <Badge variant="outline" className="border-primary text-primary">Рассмотрено</Badge>;
      case 'closed':
        return <Badge variant="outline" className="border-muted text-muted-foreground">Закрыто</Badge>;
      default:
        return null;
    }
  };

  const getReasonLabel = (reason: string) => {
    const labels: Record<string, string> = {
      'wrong-score': 'Неверный счёт',
      'technical': 'Технические проблемы',
      'opponent-cheat': 'Читы соперника',
      'disconnect': 'Отключение от сервера',
      'rules': 'Нарушение правил',
      'other': 'Другое',
      'cheating': 'Использование читов',
      'toxicity': 'Токсичное поведение',
      'teamkilling': 'Убийство союзников',
      'afk': 'AFK / Саботаж',
      'matchfixing': 'Договорные матчи'
    };
    return labels[reason] || reason;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#1a0b2e] to-[#0a0118]">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold neon-glow mb-2">Панель администратора</h1>
          <p className="text-muted-foreground">Управление апелляциями и жалобами</p>
        </div>

        <Tabs defaultValue="disputes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-card/50 border border-primary/30 mb-8">
            <TabsTrigger value="disputes" className="data-[state=active]:bg-primary/20">
              <Icon name="Scale" className="mr-2" size={18} />
              Споры ({disputes.filter(d => d.status === 'pending').length})
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-primary/20">
              <Icon name="Flag" className="mr-2" size={18} />
              Жалобы ({reports.filter(r => r.status === 'pending').length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="disputes" className="space-y-4">
            {disputes.map((dispute) => (
              <Card key={dispute.id} className="bg-card/80 border-primary/30 neon-border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">Апелляция #{dispute.id}</CardTitle>
                        {getStatusBadge(dispute.status)}
                      </div>
                      <CardDescription className="text-base">
                        Подана: {dispute.submittedAt}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg border border-primary/20">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Турнир</p>
                      <p className="font-semibold">{dispute.tournament}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Матч</p>
                      <p className="font-semibold">{dispute.team1} vs {dispute.team2}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Дата и время</p>
                      <p className="font-semibold">{dispute.matchDate} в {dispute.matchTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Причина</p>
                      <p className="font-semibold text-accent">{getReasonLabel(dispute.reason)}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Описание проблемы:</p>
                    <p className="text-foreground p-3 bg-muted/20 rounded border border-primary/20">
                      {dispute.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon name="Link" size={16} className="text-muted-foreground" />
                    <a 
                      href={dispute.proofUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent underline"
                    >
                      Посмотреть доказательства
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MessageCircle" size={16} />
                    <span>Контакт: {dispute.contact}</span>
                  </div>

                  {dispute.status === 'pending' && (
                    <div className="flex gap-3 pt-4 border-t border-primary/20">
                      <Button 
                        onClick={() => handleDisputeAction(dispute.id, 'approved')}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        <Icon name="Check" className="mr-2" size={18} />
                        Одобрить
                      </Button>
                      <Button 
                        onClick={() => handleDisputeAction(dispute.id, 'rejected')}
                        variant="destructive"
                        className="flex-1"
                      >
                        <Icon name="X" className="mr-2" size={18} />
                        Отказать
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline"
                            className="flex-1 border-primary hover:bg-primary/20"
                            onClick={() => setSelectedItem({type: 'dispute', id: dispute.id})}
                          >
                            <Icon name="MessageSquare" className="mr-2" size={18} />
                            Написать
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-card border-primary/30">
                          <DialogHeader>
                            <DialogTitle>Отправить сообщение</DialogTitle>
                            <DialogDescription>
                              Сообщение будет отправлено в Discord: {dispute.contact}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <Textarea
                              placeholder="Введите ваше сообщение..."
                              value={chatMessage}
                              onChange={(e) => setChatMessage(e.target.value)}
                              rows={6}
                              className="bg-muted/50 border-primary/30"
                            />
                            <Button 
                              onClick={handleSendMessage}
                              className="w-full bg-primary hover:bg-primary/80"
                            >
                              <Icon name="Send" className="mr-2" size={18} />
                              Отправить
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {disputes.filter(d => d.status === 'pending').length === 0 && (
              <Card className="bg-card/80 border-primary/30">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Icon name="CheckCircle" size={48} className="text-green-500 mb-4" />
                  <p className="text-xl text-muted-foreground">Нет активных споров</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            {reports.map((report) => (
              <Card key={report.id} className="bg-card/80 border-primary/30 neon-border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">Жалоба #{report.id}</CardTitle>
                        {getStatusBadge(report.status)}
                      </div>
                      <CardDescription className="text-base">
                        Подана: {report.submittedAt}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg border border-destructive/20">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Заявитель</p>
                      <p className="font-semibold">{report.reporter}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Нарушитель</p>
                      <p className="font-semibold text-destructive">{report.violator}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Турнир</p>
                      <p className="font-semibold">{report.tournamentId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Тип нарушения</p>
                      <p className="font-semibold text-destructive">{getReasonLabel(report.violationType)}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Описание нарушения:</p>
                    <p className="text-foreground p-3 bg-muted/20 rounded border border-destructive/20">
                      {report.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon name="Link" size={16} className="text-muted-foreground" />
                    <a 
                      href={report.proofUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent underline"
                    >
                      Посмотреть доказательства
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MessageCircle" size={16} />
                    <span>Контакт: {report.contact}</span>
                  </div>

                  {report.status === 'pending' && (
                    <div className="flex gap-3 pt-4 border-t border-primary/20">
                      <Button 
                        onClick={() => handleReportAction(report.id, 'reviewed')}
                        className="flex-1 bg-primary hover:bg-primary/80"
                      >
                        <Icon name="Check" className="mr-2" size={18} />
                        Рассмотрено
                      </Button>
                      <Button 
                        onClick={() => handleReportAction(report.id, 'closed')}
                        variant="outline"
                        className="flex-1 border-muted"
                      >
                        <Icon name="X" className="mr-2" size={18} />
                        Закрыть
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline"
                            className="flex-1 border-primary hover:bg-primary/20"
                            onClick={() => setSelectedItem({type: 'report', id: report.id})}
                          >
                            <Icon name="MessageSquare" className="mr-2" size={18} />
                            Написать
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-card border-primary/30">
                          <DialogHeader>
                            <DialogTitle>Отправить сообщение</DialogTitle>
                            <DialogDescription>
                              Сообщение будет отправлено в Discord: {report.contact}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <Textarea
                              placeholder="Введите ваше сообщение..."
                              value={chatMessage}
                              onChange={(e) => setChatMessage(e.target.value)}
                              rows={6}
                              className="bg-muted/50 border-primary/30"
                            />
                            <Button 
                              onClick={handleSendMessage}
                              className="w-full bg-primary hover:bg-primary/80"
                            >
                              <Icon name="Send" className="mr-2" size={18} />
                              Отправить
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {reports.filter(r => r.status === 'pending').length === 0 && (
              <Card className="bg-card/80 border-primary/30">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Icon name="CheckCircle" size={48} className="text-green-500 mb-4" />
                  <p className="text-xl text-muted-foreground">Нет активных жалоб</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
