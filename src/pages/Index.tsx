import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('rules');

  const rules = [
    { id: '1.0', title: 'Оскорбления в сторону участников/админов', punishment: 'ПБА' },
    { id: '1.1', title: 'Угроза в сторону участников/админов', punishment: 'ПБА' },
    { id: '1.2', title: 'Попытки обрушить/взломать группу', punishment: 'ПБА' },
    { id: '1.3', title: 'Спам', punishment: 'обращение' },
    { id: '1.4', title: 'Лаг-смс', punishment: 'ПБА' },
    { id: '1.5', title: 'Менять настройки без разрешения владельца: описание/название/аватарку/разрешения', punishment: 'снятие с модерации' },
    { id: '1.6', title: 'Присылать опасные вирусы/файлы, которые ломают/сбивают систему', punishment: 'ПБА' },
    { id: '1.7', title: 'Стикеры/фото/видео с нецензурной лексикой и 18+', punishment: 'БАН' },
    { id: '1.8', title: 'Продажа админки за деньги/игровую валюту и т.д', punishment: 'ПБА' },
    { id: '1.9', title: 'Спам смс/стикеры/звонки', punishment: 'БАН' },
  ];

  const errors = [
    { code: '96222', description: 'группа не исправна' },
    { code: '44443', description: 'принудительное закрытие' },
    { code: '123123', description: 'угроза' },
    { code: '666777', description: 'взлом' },
    { code: '333333', description: 'обрыв связи' },
    { code: '000000', description: 'обрыв данных' },
    { code: '404', description: 'неизвестная ошибка' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1525] via-[#1f1b2e] to-[#0f0a1c] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgNS41MjMtNC40NzcgMTAtMTAgMTBzLTEwLTQuNDc3LTEwLTEwIDQuNDc3LTEwIDEwLTEwIDEwIDQuNDc3IDEwIDEweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            5В
          </h1>
          <p className="text-muted-foreground text-lg">Добро пожаловать в систему управления</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto animate-fade-in-delay">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 backdrop-blur-sm p-2 h-auto">
            <TabsTrigger 
              value="rules" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white text-base py-3 rounded-lg transition-all"
            >
              <Icon name="ShieldCheck" className="mr-2" size={20} />
              Правила
            </TabsTrigger>
            <TabsTrigger 
              value="about" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary data-[state=active]:to-accent data-[state=active]:text-white text-base py-3 rounded-lg transition-all"
            >
              <Icon name="Info" className="mr-2" size={20} />
              О 5В
            </TabsTrigger>
            <TabsTrigger 
              value="chat" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent data-[state=active]:to-primary data-[state=active]:text-white text-base py-3 rounded-lg transition-all"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Чат
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rules" className="space-y-6">
            <Card className="bg-card/70 backdrop-blur-sm border-primary/20 shadow-xl shadow-primary/5">
              <CardHeader>
                <CardTitle className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-3">
                  <Icon name="BookOpen" size={32} />
                  Правила группы
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground mt-2">
                  Ознакомьтесь с правилами для комфортного пребывания в группе
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {rules.map((rule, index) => (
                  <div 
                    key={rule.id}
                    className="p-4 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30 border border-border/50 hover:border-primary/30 transition-all hover:scale-[1.02] animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-lg">
                        {rule.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">{rule.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Наказание:</span>
                          <span className="px-3 py-1 rounded-full bg-destructive/20 text-destructive font-semibold text-sm border border-destructive/30">
                            {rule.punishment}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Info" size={24} className="text-primary" />
                    Сокращения
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-destructive text-lg">БАН</span>
                      <span className="text-foreground">— лишение нахождения в этой группе по указанному сроку в зависимости от поступка</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-destructive text-lg">ПБА</span>
                      <span className="text-foreground">— Перманентная Блокировка Аккаунта</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="AlertTriangle" size={24} className="text-accent" />
                    Коды ошибок
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {errors.map((error, index) => (
                      <div 
                        key={error.code}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:border-accent/30 transition-all animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <span className="font-mono font-bold text-accent text-lg">{error.code}</span>
                        <span className="text-sm text-muted-foreground">—</span>
                        <span className="text-foreground">{error.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <Card className="bg-card/70 backdrop-blur-sm border-secondary/20 shadow-xl shadow-secondary/5">
              <CardHeader>
                <CardTitle className="text-3xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent flex items-center gap-3">
                  <Icon name="Star" size={32} />
                  О 5В
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground mt-2">
                  Информация о группе и системе
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 animate-fade-in">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-foreground">
                    <strong className="text-primary">5В</strong> — это современная система управления группой с продвинутым функционалом и строгой системой правил.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 not-prose">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30">
                      <Icon name="Users" size={40} className="text-primary mb-3" />
                      <h4 className="text-xl font-bold mb-2">Сообщество</h4>
                      <p className="text-sm text-muted-foreground">Безопасное пространство для общения участников</p>
                    </div>
                    
                    <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/30">
                      <Icon name="Shield" size={40} className="text-secondary mb-3" />
                      <h4 className="text-xl font-bold mb-2">Безопасность</h4>
                      <p className="text-sm text-muted-foreground">Надежная защита от угроз и нарушений</p>
                    </div>
                    
                    <div className="p-6 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30">
                      <Icon name="Zap" size={40} className="text-accent mb-3" />
                      <h4 className="text-xl font-bold mb-2">Эффективность</h4>
                      <p className="text-sm text-muted-foreground">Быстрая модерация и контроль качества</p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
                    <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Icon name="Target" size={28} className="text-primary" />
                      Наши цели
                    </h4>
                    <ul className="space-y-3 text-foreground">
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Поддержание здоровой атмосферы в сообществе</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Защита участников от негативного контента</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Обеспечение стабильной работы системы</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                        <span>Развитие и улучшение функционала группы</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <Card className="bg-card/70 backdrop-blur-sm border-accent/20 shadow-xl shadow-accent/5">
              <CardHeader>
                <CardTitle className="text-3xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent flex items-center gap-3">
                  <Icon name="MessageSquare" size={32} />
                  Чат
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground mt-2">
                  Общайтесь с другими участниками группы
                </CardDescription>
              </CardHeader>
              <CardContent className="animate-fade-in">
                <div className="h-[500px] flex flex-col">
                  <div className="flex-1 p-6 rounded-lg bg-muted/20 border border-border mb-4 overflow-y-auto">
                    <div className="text-center text-muted-foreground py-20">
                      <Icon name="MessageCircleOff" size={64} className="mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Чат временно недоступен</p>
                      <p className="text-sm mt-2">Функция находится в разработке</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Введите сообщение..."
                      disabled
                      className="flex-1 px-4 py-3 rounded-lg bg-muted/30 border border-border focus:border-accent focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <button 
                      disabled
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-primary text-white font-semibold hover:shadow-lg hover:shadow-accent/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Icon name="Send" size={20} />
                      Отправить
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
