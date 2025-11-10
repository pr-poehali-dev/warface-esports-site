import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const RegistrationForms = () => {
  return (
    <>
      {/* Registration Form */}
      <div id="registration-content">
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
      </div>

      {/* Dispute Form */}
      <div id="dispute-content">
        <Card className="bg-card/80 border-primary/30 neon-border max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Icon name="Scale" size={32} className="text-accent" />
              Оспорить результат матча
            </CardTitle>
            <CardDescription>Подайте апелляцию, если считаете результат несправедливым</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="dispute-tournament">Название турнира</Label>
                <Input 
                  id="dispute-tournament" 
                  placeholder="Например: Dark Blade 5x5 Championship #15"
                  className="bg-muted/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="team1">Ваша команда</Label>
                  <Input 
                    id="team1" 
                    placeholder="Название вашей команды"
                    className="bg-muted/50 border-primary/30 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="team2">Команда соперника</Label>
                  <Input 
                    id="team2" 
                    placeholder="Название команды противника"
                    className="bg-muted/50 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="match-date">Дата матча</Label>
                  <Input 
                    id="match-date" 
                    type="date"
                    className="bg-muted/50 border-primary/30 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="match-time">Время матча</Label>
                  <Input 
                    id="match-time" 
                    type="time"
                    className="bg-muted/50 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dispute-reason">Причина оспаривания</Label>
                <select 
                  id="dispute-reason"
                  className="w-full px-3 py-2 bg-muted/50 border border-primary/30 rounded-md focus:border-primary focus:outline-none"
                >
                  <option value="">Выберите причину</option>
                  <option value="wrong-score">Неверно засчитан счёт</option>
                  <option value="technical">Технические проблемы</option>
                  <option value="opponent-cheat">Соперник использовал читы</option>
                  <option value="disconnect">Отключение от сервера</option>
                  <option value="rules">Нарушение правил соперником</option>
                  <option value="other">Другая причина</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dispute-description">Подробное описание</Label>
                <textarea 
                  id="dispute-description"
                  rows={6}
                  placeholder="Опишите подробно ситуацию: что произошло, почему вы считаете результат несправедливым, какие у вас есть доказательства..."
                  className="w-full px-3 py-2 bg-muted/50 border border-primary/30 rounded-md focus:border-primary focus:outline-none resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dispute-proof">Доказательства (фото/видео)</Label>
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/60 transition-colors cursor-pointer bg-muted/20">
                  <Icon name="Upload" size={32} className="mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">Нажмите для загрузки или перетащите файлы</p>
                  <p className="text-xs text-muted-foreground">Поддерживаются: JPG, PNG, MP4 (макс. 50 МБ)</p>
                  <input 
                    type="file" 
                    id="dispute-proof"
                    accept="image/*,video/*"
                    multiple
                    className="hidden"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Или введите ссылку на внешнее хранилище:</p>
                <Input 
                  type="url"
                  placeholder="https://imgur.com/... или https://youtube.com/..."
                  className="bg-muted/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-discord">Discord для связи</Label>
                <Input 
                  id="contact-discord" 
                  placeholder="username#1234"
                  className="bg-muted/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                <div className="flex gap-3">
                  <Icon name="Info" size={20} className="text-accent mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-accent mb-1">Информация:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Апелляция рассматривается в течение 24 часов</li>
                      <li>Администрация может запросить дополнительные доказательства</li>
                      <li>Решение принимается на основе предоставленных материалов</li>
                      <li>Вы получите уведомление о решении в Discord</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/80 text-lg py-6">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить апелляцию
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Report Form */}
      <div id="report-content">
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
      </div>
    </>
  );
};

export default RegistrationForms;
