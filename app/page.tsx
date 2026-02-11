'use client';
import { useState, useEffect } from 'react';
import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';
import StatusBar from '@/components/StatusBar';
import DialogueBox from '@/components/DialogueBox';
import CelebrationEffect from '@/components/CelebrationEffect';
import { Task } from '@/types/task';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [affection, setAffection] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);
  const [currentDialogue, setCurrentDialogue] = useState('');

  useEffect(() => {
    setMounted(true);
    const savedTasks = localStorage.getItem('galge-tasks');
    const savedAffection = localStorage.getItem('galge-affection');
    if (savedTasks) setTasks(JSON.parse(savedTasks));
    if (savedAffection) setAffection(parseInt(savedAffection));
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('galge-tasks', JSON.stringify(tasks));
      localStorage.setItem('galge-affection', affection.toString());
    }
  }, [tasks, affection, mounted]);

  const getDialogue = (affection: number): string => {
    if (affection < 20) return ['まぁまぁだね...', 'ふーん、やるじゃん', '悪くないかも'][Math.floor(Math.random() * 3)];
    if (affection < 40) return ['すごい...！', '頑張ってるね♪', 'やるね...！'][Math.floor(Math.random() * 3)];
    if (affection < 60) return ['あなた...凄いかも♡', 'ドキドキしちゃう...', '素敵...♡'][Math.floor(Math.random() * 3)];
    if (affection < 80) return ['あなたのこと...気になる♡', 'もっと一緒にいたい...', 'ずっと見ていたい♡'][Math.floor(Math.random() * 3)];
    if (affection < 100) return ['好き...♡', 'あなたが大好き♡', 'ずっと一緒にいて♡'][Math.floor(Math.random() * 3)];
    return ['愛してる...♡♡♡', 'あなたなしじゃ生きられない♡', '永遠に一緒にいて♡♡'][Math.floor(Math.random() * 3)];
  };

  const addTask = (text: string) => {
    setTasks([{ id: Date.now().toString(), text, completed: false, createdAt: Date.now() }, ...tasks]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => {
      if (task.id === id && !task.completed) {
        const increase = Math.floor(Math.random() * 8) + 3;
        const newAffection = Math.min(100, affection + increase);
        setAffection(newAffection);
        setCurrentDialogue(getDialogue(newAffection));
        setShowDialogue(true);
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 2500);
        setTimeout(() => setShowDialogue(false), 4000);
        return { ...task, completed: true };
      }
      if (task.id === id && task.completed) return { ...task, completed: false };
      return task;
    }));
  };

  const deleteTask = (id: string) => setTasks(tasks.filter(task => task.id !== id));
  const resetAffection = () => { if (confirm('好感度をリセットしますか？')) setAffection(0); };
  const stats = { total: tasks.length, completed: tasks.filter(t => t.completed).length, remaining: tasks.filter(t => !t.completed).length };

  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden'>
      {/* デジタルグリッド背景 */}
      <div className='absolute inset-0 opacity-20 pointer-events-none'>
        <div className='absolute inset-0 animate-grid-move' style={{backgroundImage:'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(236, 72, 153, 0.3) 49px, rgba(236, 72, 153, 0.3) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(236, 72, 153, 0.3) 49px, rgba(236, 72, 153, 0.3) 50px)',backgroundSize:'50px 50px'}}></div>
      </div>

      {/* スキャンライン */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-30 animate-scan-line'></div>
      </div>

      {/* キャラクター */}
      <div className='fixed bottom-0 right-0 w-[450px] h-[550px] opacity-20 pointer-events-none z-0'>
        <img src='/character.png' alt='' className='w-full h-full object-contain object-bottom' />
      </div>

      <div className='relative z-10 min-h-screen flex flex-col'>
        <StatusBar affection={affection} stats={stats} onReset={resetAffection} />
        <div className='flex-1 container mx-auto px-4 py-6 max-w-4xl'>
          <div className='mb-6'><TaskInput onAddTask={addTask} /></div>
          <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
        </div>
        {showDialogue && <DialogueBox dialogue={currentDialogue} characterName='彼女' affection={affection} />}
      </div>
      {showCelebration && <CelebrationEffect />}
    </main>
  );
}
