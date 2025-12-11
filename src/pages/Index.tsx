import { useEffect, useState } from 'react';

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0e14]">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/Без названия398_20251211112606.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e14]/50 to-[#0a0e14]" />
      
      <div className="absolute top-0 left-0 w-full h-1 bg-neon-green animate-scan-line opacity-30" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className={`text-center space-y-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-4">
            <div className="inline-block">
              <h1 className="text-7xl md:text-9xl font-black tracking-wider text-neon glitch animate-pulse-glow">
                NexBit DLC
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-neon-green to-transparent mt-4" />
            </div>
            
            <p className="text-xl md:text-2xl text-neon-purple font-medium tracking-wide flicker">
              for Minecraft
            </p>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="border-neon border-2 p-6 bg-[#161b22]/80 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-primary/90 leading-relaxed font-light">
                Продвинутый чит-клиент для Minecraft с расширенным функционалом.
                Получи преимущество над соперниками с помощью уникальных возможностей NexBit DLC.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="border border-neon-green/30 p-4 bg-[#161b22]/60 backdrop-blur-sm hover:border-neon-green/60 transition-all duration-300">
                <div className="text-neon-green text-3xl mb-2">⚡</div>
                <h3 className="text-neon-green font-bold text-lg mb-1">Быстро</h3>
                <p className="text-primary/70 text-sm">Оптимизированный код для максимальной производительности</p>
              </div>
              
              <div className="border border-neon-purple/30 p-4 bg-[#161b22]/60 backdrop-blur-sm hover:border-neon-purple/60 transition-all duration-300">
                <div className="text-neon-purple text-3xl mb-2">🔒</div>
                <h3 className="text-neon-purple font-bold text-lg mb-1">Безопасно</h3>
                <p className="text-primary/70 text-sm">Продвинутая защита от обнаружения античитами</p>
              </div>
              
              <div className="border border-neon-green/30 p-4 bg-[#161b22]/60 backdrop-blur-sm hover:border-neon-green/60 transition-all duration-300">
                <div className="text-neon-green text-3xl mb-2">🎯</div>
                <h3 className="text-neon-green font-bold text-lg mb-1">Точно</h3>
                <p className="text-primary/70 text-sm">Расширенные модули для полного контроля</p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-neon-green/20">
            <p className="text-4xl md:text-6xl font-bold text-neon-purple/60 tracking-[0.3em] animate-pulse-glow">
              COMING SOON
            </p>
            <p className="text-sm text-primary/50 mt-4 tracking-wider">
              Следите за обновлениями...
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-pulse" />
    </div>
  );
};

export default Index;
