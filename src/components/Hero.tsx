/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Smartphone, Bell, Brain, ChevronDown, Check, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      app: 'Threads',
      title: '跟你說個秘密...',
      time: '1m ago',
      content: '「為什麼我睡前只想滑五分鐘，現在居然早上4點了...」',
      color: 'border-zinc-900 bg-white text-zinc-900',
      pos: 'top-[15%] left-[5%] md:left-[8%]',
      speed: 'animate-float-slow',
    },
    {
      id: 2,
      app: 'Instagram',
      title: '限時動態通知',
      time: 'Just now',
      content: '🔥 @lucas_99 提及了你：今天通宵報告還是通宵打機？',
      color: 'border-rose-500 bg-white text-rose-500 shadow-[4px_4px_0px_0px_#f43f5e]',
      pos: 'top-[35%] right-[5%] md:right-[8%]',
      speed: 'animate-float-mid',
    },
    {
      id: 3,
      app: 'Dcard',
      title: '熱門看板通知',
      time: '5m ago',
      content: '📌 討論爆了：明明累到眼睛乾澀酸痛，卻還是停不下下滑的手？',
      color: 'border-blue-500 bg-white text-blue-600 shadow-[4px_4px_0px_0px_#3b82f6]',
      pos: 'bottom-[25%] left-[2%] md:left-[12%]',
      speed: 'animate-float-slow',
    },
    {
      id: 4,
      app: 'YouTube',
      title: '熱門演算法推薦',
      time: '15m ago',
      content: '📺 推薦觀看：只滑五分鐘？被手機偷走的一小時究竟去哪了？',
      color: 'border-red-500 bg-white text-red-500 shadow-[4px_4px_0px_0px_#ef4444]',
      pos: 'bottom-[15%] right-[3%] md:right-[15%]',
      speed: 'animate-float-mid',
    },
  ]);

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white text-slate-900 pt-28 pb-16 flex flex-col justify-between overflow-hidden"
    >
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Dynamic Network Connection Lines SVG */}
      <div className="absolute inset-x-0 top-0 h-full pointer-events-none opacity-30 select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,200 Q 200,400 400,200 T 800,200 T 1200,400 T 1600,100" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M 100,600 Q 400,300 700,600 T 1300,500 T 1700,700" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5" />
          <circle cx="400" cy="200" r="4" fill="#2563eb" className="animate-pulse" />
          <circle cx="800" cy="200" r="5" fill="#3b82f6" />
          <circle cx="1200" cy="400" r="3" fill="#60a5fa" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow flex flex-col justify-center items-center">
        
        {/* Floating Interactive Notification Boxes */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`absolute p-4 w-72 bg-white/90 backdrop-blur-md border rounded-2xl cursor-pointer pointer-events-auto transition-all duration-300 transform hover:scale-105 active:scale-95 group shadow-md ${notif.color} ${notif.pos} ${notif.speed}`}
              onClick={() => removeNotification(notif.id)}
              title="點擊清除通知"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
                  {notif.app}
                </span>
                <span className="text-xs text-slate-400 font-mono">{notif.time}</span>
              </div>
              <h5 className="font-extrabold text-sm mb-1 text-slate-800">{notif.title}</h5>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{notif.content}</p>
              <div className="mt-2 text-xs font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity flex justify-end items-center gap-1">
                <Check className="w-3 h-3 text-emerald-500" /> 點擊可關閉本條通知
              </div>
            </div>
          ))}
        </div>

        {/* Core Sinking/Wired Brain Central Visual */}
        <div className="text-center max-w-3xl pt-8 sm:pt-12">
          
          {/* Main Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 期末專題成果發表 ─ 核心焦點</span>
          </div>

          {/* Site Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-none">
            離不開的日常
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400 relative">
              網路成癮現象觀察
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-blue-500 rounded-full opacity-60"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            我們不是單純愛滑手機，而是生存在由多巴胺算力與通知觸發器交織而成的精密平台中，生活早已被網路
            <span className="font-extrabold text-blue-600 decoration-wavy underline decoration-sky-300 bg-blue-50 px-1 py-0.5 rounded mx-1">重新安排</span>。
          </p>

          {/* Summary / Introduction Info */}
          <p className="mt-5 text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            本研究網站立足於日常現象、行為成癮學、國衛院最新腦波神經學文獻，結合短影音實作成果，層層剖析數位陷阱的底層代碼，並提供實用的反制指引。
          </p>

          {/* Quick Nav Grid */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('intro')}
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 brutalist-shadow-blue flex items-center gap-2 transform active:scale-95"
            >
              <Smartphone className="w-4 h-4" /> 了解網路成癮 & 測驗
            </button>
            <button
              onClick={() => onNavigate('mechanism')}
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 transition-all duration-200 flex items-center gap-2 transform active:scale-95"
            >
              <Brain className="w-4 h-4 text-blue-600" /> 為什麼停不下來？
            </button>
            <button
              onClick={() => onNavigate('shortvideo')}
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 transition-all duration-200 flex items-center gap-2 transform active:scale-95"
            >
              觀看短影音
            </button>
            <button
              onClick={() => onNavigate('solution')}
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 transition-all duration-200 flex items-center gap-2 transform active:scale-95"
            >
              進行自我解方
            </button>
          </div>

          {/* Mobile notification fallback indicator */}
          {notifications.length > 0 && (
            <p className="block lg:hidden mt-6 text-xs text-slate-400 font-medium">
              目前有 <span className="text-blue-600 font-extrabold">{notifications.length}</span> 項正在騷擾你的數位通知（請於大螢幕版體驗點按互動）
            </p>
          )}
          {notifications.length === 0 && (
            <div className="mt-8 text-xs text-emerald-600 font-medium bg-emerald-50 px-4 py-2 rounded-full inline-flex items-center gap-1 border border-emerald-100">
              ✓ 太棒了！您已清除所有首頁干擾通知，體會了短暫的數位清靜。
            </div>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative mt-8 text-center flex flex-col items-center justify-center pointer-events-none">
        <span className="text-xs font-bold font-mono tracking-widest text-slate-400 uppercase">
          往下滑動，逐漸沉入數位世界
        </span>
        <div className="mt-2 p-1.5 border border-slate-300 rounded-full animate-bounce bg-white/50 backdrop-blur-sm shadow-sm">
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </div>
      </div>
    </section>
  );
}
