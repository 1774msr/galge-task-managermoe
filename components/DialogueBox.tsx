'use client';
interface DialogueBoxProps {
  dialogue: string;
  characterName: string;
  affection: number;
}

export default function DialogueBox({ dialogue, characterName, affection }: DialogueBoxProps) {
  const getNameColor = () => {
    if (affection < 20) return 'from-gray-600 to-gray-700';
    if (affection < 40) return 'from-blue-600 to-blue-700';
    if (affection < 60) return 'from-purple-600 to-purple-700';
    if (affection < 80) return 'from-pink-600 to-pink-700';
    return 'from-rose-600 to-rose-700';
  };
  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 animate-slide-up'>
      <div className='glass-effect border-t-2 border-pink-500/50 shadow-2xl'>
        <div className='container mx-auto px-6 py-6 max-w-4xl'>
          <div className='flex items-center gap-4 mb-4'>
            <div className={'px-6 py-2 rounded-full text-white font-black mono tracking-widest bg-gradient-to-r '+getNameColor()+' shadow-lg'}>
              {characterName.toUpperCase()}
            </div>
            <div className='text-xs text-pink-400/60 mono'>// AFFECTION_LEVEL: {affection}%</div>
          </div>
          <div className='glass-effect rounded-2xl border-2 border-pink-500/40 p-6 shadow-xl'>
            <p className='text-2xl text-pink-100 leading-relaxed'>{dialogue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
