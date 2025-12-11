import { useEffect, useState } from 'react';

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div 
        className="fixed inset-0"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/Без названия398_20251211112606.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-red-950/50 to-black/90" />
      
      <div className="absolute top-0 left-0 w-full h-1 bg-neon-red animate-scan-line opacity-30" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className={`text-center space-y-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <div className="flex justify-center mb-8">
              <img 
                src="https://cdn.poehali.dev/files/Без названия424_20251211113958.png" 
                alt="NexBit DLC Logo" 
                className="w-32 h-32 md:w-48 md:h-48 animate-pulse-glow"
              />
            </div>
            
            <div className="inline-block">
              <h1 className="text-6xl md:text-8xl font-black tracking-wider text-neon glitch animate-pulse-glow">
                NexBit DLC
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-neon-red to-transparent mt-4" />
            </div>
            
            <p className="text-xl md:text-2xl text-crimson font-medium tracking-wide flicker">
              for Minecraft
            </p>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="border-neon border-2 p-6 bg-black/60 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-red-200 leading-relaxed font-light">
                Продвинутый чит-клиент для Minecraft с расширенным функционалом.
                Получи преимущество над соперниками с помощью уникальных возможностей NexBit DLC.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="border border-red-600/40 p-4 bg-black/50 backdrop-blur-sm hover:border-red-600/80 transition-all duration-300">
                <div className="text-red-500 text-3xl mb-2">⚡</div>
                <h3 className="text-red-500 font-bold text-lg mb-1">Быстро</h3>
                <p className="text-red-200/70 text-sm">Оптимизированный код для максимальной производительности</p>
              </div>
              
              <div className="border border-red-700/40 p-4 bg-black/50 backdrop-blur-sm hover:border-red-700/80 transition-all duration-300">
                <div className="text-red-600 text-3xl mb-2">🔒</div>
                <h3 className="text-red-600 font-bold text-lg mb-1">Безопасно</h3>
                <p className="text-red-200/70 text-sm">Продвинутая защита от обнаружения античитами</p>
              </div>
              
              <div className="border border-red-600/40 p-4 bg-black/50 backdrop-blur-sm hover:border-red-600/80 transition-all duration-300">
                <div className="text-red-500 text-3xl mb-2">🎯</div>
                <h3 className="text-red-500 font-bold text-lg mb-1">Точно</h3>
                <p className="text-red-200/70 text-sm">Расширенные модули для полного контроля</p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-red-800/30">
            <p className="text-4xl md:text-6xl font-bold text-red-600/80 tracking-[0.3em] animate-pulse-glow">
              COMING SOON
            </p>
            <p className="text-sm text-red-400/60 mt-4 tracking-wider">
              Следите за обновлениями...
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
    </div>
  );
};

export default Index;