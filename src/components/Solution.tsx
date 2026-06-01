/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ShieldCheck, Eye, ZapOff, Scale, HelpCircle, RefreshCw, CheckCircle, Heart, Flame } from 'lucide-react';

export default function Solution() {
  const [pledge, setPledge] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const strategies = [
    {
      category: '1. 先察覺使用狀態',
      icon: <Eye className="w-5 h-5 text-blue-400" />,
      items: [
        { id: 'time', text: '定期查看並紀錄手機的「螢幕使用時間」與每週報告。', description: '認清客觀數據，通常真實時間是我們體感時間的兩到三倍。' },
        { id: 'apps', text: '找出佔據你最長時間的前三款「失控 APP 殺手」。', description: '鎖定並分析這些程式是如何利用你的注意力缺口。' },
        { id: 'emotions', text: '觀察自己多數在什麼情緒下最想滑手機。', description: '例如寂寞、無聊、報告寫不出來（壓力逃避），並做紀錄。' },
      ],
    },
    {
      category: '2. 降低觸發條件',
      icon: <ZapOff className="w-5 h-5 text-amber-400" />,
      items: [
        { id: 'notif', text: '關掉所有社群和非即時通訊的「新推播通知」。', description: '不被紅點、音效主動打擾你的生活流理狀態。' },
        { id: 'home', text: '把成癮性強的短影音 APP 移出手機首頁或隱藏。', description: '增加解鎖後，第一眼看到它們的心理反思時間。' },
        { id: 'bed', text: '睡前將手機放至「手無法觸及的物理距離」（例如書桌）。', description: '杜絕被窩裡的無意識抓取與高多巴胺藍光刺激。' },
        { id: 'autoplay', text: '關閉 YouTube 和所有播放器的「自動連續播放」設定。', description: '讓每則短片結束後，大腦能重新做下個決策。' },
      ],
    },
    {
      category: '3. 增加自律阻力',
      icon: <Scale className="w-5 h-5 text-purple-400" />,
      items: [
        { id: 'limit', text: '設定 APP 的「每日螢幕使用時間軟性限制」。', description: '時間一到即跳出警告，提醒自己該暫緩一下。' },
        { id: 'grayscale', text: '將手機螢幕設定為「灰階模式（Grayscale）」。', description: '剝奪彩色視覺對大腦的刺激，你會發現社群瞬間索然無味。' },
        { id: 'logout', text: '將沉沉迷的社群平台「每週登出一次」。', description: '增加重新登入時所需敲密碼的繁雜程序（添加行政阻力）。' },
        { id: 'delete', text: '嘗試在週五或週末直接「刪除最常失控的主力APP」48小時。', description: '體會久違的、乾淨的數位排毒週末。' },
      ],
    },
    {
      category: '4. 尋找健康替代行動',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      items: [
        { id: 'water', text: '每次手想伸向手機時，規定自己先立馬「喝一杯開水」。', description: '用微小生理替代，打破無意識習慣發作。' },
        { id: 'walk', text: '起立離開座位，喝水、做做伸展操或起身走一圈。', description: '讓大腦轉換空間刺激，釋放僵硬的注意力。' },
        { id: 'tidy', text: '整理周遭書桌或辦公桌面，建立動手成就感。', description: '實體空間乾淨有助於安定慌張躁熱的心靈。' },
        { id: 'music', text: '戴上耳機，單純聆聽音樂，不做其它看螢幕動作。', description: '用聽音、閉眼，將主體意識拉回軀殼中。' },
        { id: 'challenge', text: '和朋友同儕約定，發起「聚餐或讀書手機面朝下挑戰」。', description: '誰先看手機就要請客！創造良性、趣味的社群約束力。' },
      ],
    },
  ];

  const handleTogglePledge = (text: string) => {
    if (pledge.includes(text)) {
      setPledge(pledge.filter((p) => p !== text));
    } else {
      setPledge([...pledge, text]);
    }
  };

  const copyPledgeToClipboard = () => {
    if (pledge.length === 0) return;
    const textToCopy = `【我的期末重奪數位主權計劃】\n\n` + pledge.map((p, i) => `${i + 1}. ${p}`).join('\n') + `\n\n— 重奪主權計畫，從察覺開始。`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="solution"
      className="relative min-h-screen bg-black text-white pt-24 pb-0 flex flex-col justify-between overflow-hidden"
    >
      {/* Decorative Matrix overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-emerald-400 text-xs font-mono font-extrabold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            RECLAIM SENSES / 重奪數位主權方案
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            反思與解方 ─ 如何拿回主控權？
          </h2>
          <div className="mt-3 w-16 h-1 bg-emerald-500 mx-auto rounded"></div>
        </div>

        {/* Strategies Section Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Detailed Anti-Addiction Protocol */}
          <div className="lg:col-span-8 space-y-8">
            {strategies.map((cat, idx) => (
              <div key={idx} className="bg-zinc-900/60 rounded-3xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-sm">
                
                <div className="flex items-center gap-2.5 border-b border-zinc-800 pb-4 mb-6">
                  {cat.icon}
                  <h3 className="text-lg font-extrabold text-white font-sans">{cat.category}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.items.map((item, itemIdx) => {
                    const isSelected = pledge.includes(item.text);
                    return (
                      <div
                        key={itemIdx}
                        onClick={() => handleTogglePledge(item.text)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between ${
                          isSelected
                            ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-md'
                            : 'bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200'
                        }`}
                      >
                        <div>
                          <p className="text-xs sm:text-sm font-bold leading-relaxed mb-2 text-zinc-200 group-hover:text-white transition-colors">
                            {item.text}
                          </p>
                          <p className="text-xs text-zinc-400 leading-normal font-normal">
                            {item.description}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase">
                            DIFFICULTY / ACTION
                          </span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                            isSelected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-zinc-800 text-zinc-400'
                          }`}>
                            {isSelected ? '✓ 已加入計畫' : '＋ 點擊選入'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>

          {/* Interactive User Pledge Generator (重奪數位主導權協議) */}
          <div className="lg:col-span-4 bg-zinc-900 rounded-3xl border-2 border-emerald-500/30 p-6 sm:p-8 shadow-inner sticky top-24 backdrop-blur-md">
            
            <div className="text-center pb-4 border-b border-zinc-800 mb-6">
              <span className="text-3xl font-bounce">✊</span>
              <h3 className="text-lg font-extrabold text-white mt-2">我的抗癮重奪主權協定</h3>
              <p className="text-xs text-zinc-400 mt-1">
                請在左側點選你想採取的個人實作抗癮行動
              </p>
            </div>

            {pledge.length === 0 ? (
              <div className="text-center py-10 text-zinc-300 border border-dashed border-zinc-700 rounded-2xl p-4 bg-black/40">
                <p className="text-sm font-medium italic leading-relaxed">
                  目前您尚未點選加入任何反對成癮方案。在左側的方案卡片點選一下，建立你的反毒承諾書！
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-black p-4 rounded-xl border border-zinc-800 max-h-60 overflow-y-auto space-y-3 scrollbar-thin">
                  {pledge.map((p, pIdx) => (
                    <div key={pIdx} className="flex gap-2 items-start text-sm text-emerald-300">
                      <span className="font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded flex-shrink-0">
                        {pIdx + 1}
                      </span>
                      <p className="leading-relaxed font-semibold">{p}</p>
                    </div>
                  ))}
                </div>

                <button
                  id="pledge-action-copy"
                  onClick={copyPledgeToClipboard}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-mono font-bold text-sm px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 border-2 border-emerald-700"
                >
                  {copied ? '✓ 已複製到剪貼簿！' : '📋 複製我的行動方案'}
                </button>

                <button
                  id="pledge-action-reset"
                  onClick={() => setPledge([])}
                  className="w-full py-2 bg-transparent text-zinc-300 hover:text-white transition-colors text-sm font-mono font-bold text-center underline"
                >
                  ✕ 清空重選
                </button>
              </div>
            )}

            {/* Quote of Subsection */}
            <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
              <p className="text-sm font-bold text-zinc-200 leading-relaxed italic">
                「不是完全不用網路，而是不要讓網路替我們安排生活。」
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* FOOTER WARNER: Pulsating Red ECG / Heart-Rate Monitor Warning Wave Symbolizes Addiction */}
      <div className="relative mt-24 bg-zinc-950 border-t border-red-950 pt-12 pb-20 overflow-hidden">
        
        {/* Glowing Red Pulse Line SVG Background */}
        <div className="absolute inset-0 w-full h-full opacity-60 pointer-events-none flex items-center">
          <svg className="w-full h-32 text-red-600 drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]" viewBox="0 0 1440 200" preserveAspectRatio="none">
            {/* Real Electrocardiogram (ECG) Heartbeat Wave Vector */}
            <path
              d="M0,100 L400,100 L420,70 L430,130 L445,20 L460,170 L470,85 L485,100 L950,100 L970,60 L985,140 L995,10 L1010,180 L1020,80 L1035,100 L1440,100"
              fill="none"
              stroke="#ef4444"
              strokeWidth="4"
              className="animate-ecg-draw"
            />
          </svg>
        </div>

        {/* Content of Warner Area */}
        <div className="relative mx-auto max-w-5xl px-4 text-center z-10 space-y-6">
          
          {/* Animated pulsing warning badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-red-500 bg-red-950/90 text-red-400 text-sm font-black tracking-widest uppercase animate-pulse neon-border-red">
            <Flame className="w-4 h-4 animate-bounce" strokeWidth={3} />
            <span>CRITICAL WARNING / 腦波與心智過載警訊</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-rose-100 uppercase tracking-wide neon-glow-red">
            螢幕亮起的那一刻，你的「離線大腦」正在窒息。
          </h3>

          <p className="text-base sm:text-lg text-rose-100/90 max-w-3xl mx-auto leading-relaxed bg-black/70 p-5 rounded-2xl border border-red-500/20 text-center font-medium shadow-xl">
            這條如同心電圖般的電波警訊，並非普通的視覺裝飾。它象徵著我們在密集的算法投餵、虛無的點讚期待，以及日漸乾澀的視線中，被數位產品牢牢套牢且越陷越深的真實生理狀態。拯救網路成癮，從此時此刻放下手機、開始深呼吸起步。
          </p>

          <p className="text-sm font-semibold text-zinc-300 bg-zinc-950/90 py-2.5 px-4 rounded-lg inline-block border border-zinc-805 border-zinc-800 pt-3">
            離不開的日常 © 2026. 網路成癮現象專題成果發表會. All rights reserved.
          </p>

        </div>
      </div>
    </section>
  );
}
