'use client';
interface DialogueBoxProps {
  dialogue: string;
  characterName: string;
  affection: number;
}
export default function DialogueBox({ dialogue, characterName, affection }: DialogueBoxProps) {
  const getNameColor = () => {
    if (affection < 20) return 'bg-gray-600';
    if (affection < 40) return 'bg-blue-600';
    if (affection < 60) return 'bg-purple-600';
    if (affection < 80) return 'bg-pink-600';
    return 'bg-rose-600';
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-white/95 backdrop-blur-md border-t-2 border-pink-200 shadow-2xl">
        <div className="container mx-auto px-6 py-6 max-w-4xl">
          <div className="mb-3"><span className={inline-block px-4 py-1 rounded-full text-white text-sm font-bold +getNameColor()}>{characterName}</span></div>
          <div className="bg-white rounded-xl border-2 border-pink-300 p-6 shadow-lg"><p className="text-xl text-gray-800 leading-relaxed">{dialogue}</p></div>
        </div>
      </div>
    </div>
  );
}
