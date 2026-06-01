/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Target, Shuffle, Eye, HelpCircle, Activity, Sparkles, Smartphone, Award } from 'lucide-react';

export default function Mechanism() {
  const [slotResult, setSlotResult] = useState({
    reward: '點擊下方按鈕，抽下一則盲盒可能出現的內容...',
    color: 'bg-slate-100 text-slate-600 border-slate-300',
    type: '尚未開啟',
    icon: '❓',
  });
  const [pullCount, setPullCount] = useState(0);

  const rewards = [
    {
      reward: '「通知：你的暗戀對象剛剛按了你最新貼文讚！」💖',
      color: 'bg-pink-50 text-pink-700 border-pink-250 shadow-[0_0_15px_rgba(244,63,94,0.15)]',
      type: '超高多巴胺獎賞',
      icon: '🔥',
    },
    {
      reward: '一則平淡無奇的廣告：「快來報名英語聽力挑戰班...」💩',
      color: 'bg-amber-50 text-amber-800 border-amber-250',
      type: '毫無波瀾',
      icon: '🥱',
    },
    {
      reward: '「精選梗圖：熬夜報告的大學生活，是我本人沒錯了！」😂',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-250',
      type: '中度共鳴獎賞',
      icon: '✨',
    },
    {
      reward: '一則過期二手交易貼文：「九成新教科書便宜賣...」📦',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      type: '普通資訊',
      icon: '🧊',
    },
    {
      reward: '驚悚八卦：「Dcard熱門爆料，某大學校花居然腳踏三條船...」😱',
      color: 'bg-rose-50 text-rose-700 border-rose-250 shadow-[0_0_15px_rgba(244,63,94,0.15)]',
      type: '高多巴胺刺激',
      icon: '🚨',
    },
    {
      reward: '朋友晚餐限動：「今天又來吃拉麵了，讚！」🍜',
      color: 'bg-slate-50 text-slate-700 border-slate-200',
      type: '日常流水帳',
      icon: '👀',
    },
  ];

  const triggerSlot = () => {
    const randomIndex = Math.floor(Math.random() * rewards.length);
    setSlotResult(rewards[randomIndex]);
    setPullCount((prev) => prev + 1);
  };

  return (
    <section
      id="mechanism"
      className="relative min-h-screen bg-gradient-to-b from-blue-50 to-slate-800 text-slate-800 py-24 border-t border-blue-100 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 text-xs font-mono font-extrabold tracking-widest uppercase bg-blue-100 border border-blue-200 px-3 py-1 rounded-full">
            UNDERLYING CODES / 數位陷阱的底層代碼
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            成癮機制 ─ 為什麼我們停不下來？
          </h2>
          <div className="mt-3 w-16 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Dynamic Concept Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Attention Economy (注意力經濟) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">注意力經濟 (Attention Economy)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                在網路世界中，<strong>使用者不需要支付實體金錢，但需要支付你的「時間與專注力」</strong>。你停留得越久，平台能推送的精準廣告就越多，你的注意力早已被打包成產品，變現成科技巨頭的股票市值。
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-orange-600 font-bold">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              你滑動螢幕，便是平台收益。
            </div>
          </div>

          {/* Card 2: Fogg Behavior Model (福格行為模式) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">勸誘科技與福格行為模式</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                史丹佛提出的福格模型指出，一個行為的發生必須同時滿足：<strong className="text-blue-600"> 動機 + 能力 + 觸發機制（B=MAP）</strong>。
              </p>
              <div className="bg-slate-50 p-3.5 rounded-lg border text-xs gap-2 space-y-1">
                <div>🎯 <strong>動機 (M)：</strong>逃避生活壓力與無聊。</div>
                <div>⚡ <strong>能力 (A)：</strong>一指下滑、免學習超低阻力。</div>
                <div>🔔 <strong>觸發 (P)：</strong>小紅點、紅點推播與音效。</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-blue-600 font-bold">
              <span>三者合一，習慣即刻養成！</span>
            </div>
          </div>

          {/* Card 3: Variable Rewards (變動性獎賞) & Slots */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-indigo-500 shadow-md flex flex-col justify-between hover:shadow-lg transition-transform">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <Shuffle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">雙刃毒藥：變動性獎賞</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                你不知道下滑出現的下一則貼文，是毫無價值的垃圾廣告，還是極具滿足感的朋友八卦。<strong>因為不確定（未知獎賞），你的大腦會被綁架在無邊的期待中</strong>，就像斯金納箱實驗中的白鼠，疯狂拉下槓桿。
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-indigo-100 text-xs font-mono text-indigo-600 font-bold">
              🎁 平台機制：無限下滑、自動連續播放。
            </div>
          </div>

          {/* Card 4: FEAR OF MISSING OUT (FOMO) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">FOMO 害怕錯過</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                怕沒跟上同儕朋友圈當下的話題，怕漏失了哪條限時動態，怕不知道最新爆紅的怪胎網路迷因……社群恐懼把我們的感知牢牢銬住，<strong>深恐一旦離線，自己就會被排除在朋友圈的文明之外</strong>。
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-mono text-rose-600 font-bold">
              📱 斷網焦慮 ＝ 心理學焦慮病灶。
            </div>
          </div>

          {/* Card 5: Surveillance Capitalism (監控資本主義) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow md:col-span-2">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">監控資本主義 (Surveillance Capitalism)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                科技巨頭不單單是呈現資訊，更是<strong>即時收集你在每一則貼文停留的毫秒數、打字速度，預測並編織出你的心理指紋</strong>。平台曾進行大規模的「情緒感染實驗」，故意在某些人的頁面過濾正面訊息，來觀察對方的心情抑鬱與參與度度——事實證明，他們能精準操弄並預測用戶行為。
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-mono text-purple-600 font-bold flex flex-wrap gap-2 items-center">
              <span className="bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded border border-purple-200">情緒操弄</span>
              <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded border border-slate-200">演算法控制</span>
              <span className="text-xs text-slate-400 font-medium">大腦已淪為巨頭的行為期貨試驗場</span>
            </div>
          </div>

        </div>

        {/* Interactive Double-Up: Variable Reward Blind Box Slot Machine Simulator */}
        <div className="mt-16 bg-white p-6 sm:p-10 rounded-3xl border-4 border-slate-900 shadow-lg brutalist-shadow-blue max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded">
              INTERACTIVE TESTING / 變動性獎賞多巴胺模擬機
            </span>
            <h4 className="mt-3 text-2xl font-black text-slate-900">拉下拉把：體會隨機大腦依附</h4>
            <p className="text-sm text-slate-500 mt-2">
              這就像你每次下拉重新整理 IG / Threads 版面一樣。隨機的刺激，正在挑撥你緊繃的神經！
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            
            {/* Left Slot Details */}
            <div className="md:col-span-1 text-center md:text-left space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <span className="text-3xl animate-bounce block">{slotResult.icon}</span>
                <span className="text-xs font-mono font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded mt-2 inline-block">
                  {slotResult.type}
                </span>
              </div>
              <div className="text-sm text-slate-500 font-mono">
                🎰 下拉重整次數: <span className="font-extrabold text-blue-600 text-sm">{pullCount}</span> 次
              </div>
            </div>

            {/* Simulated Smartphone Screen with dynamic result */}
            <div className="md:col-span-3 border-4 border-slate-900 rounded-2xl bg-zinc-950 p-6 shadow-inner relative overflow-hidden min-h-[160px] flex flex-col justify-between">
              {/* Smartphone Status Bar Layout */}
              <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
                <span>04:16 AM 📱</span>
                <div className="h-5 px-2 bg-zinc-800 rounded-full flex items-center justify-center text-xs border border-zinc-700">
                  DOPAMINE
                </div>
                <span>🔋 3%</span>
              </div>

              {/* Slot Result Body */}
              <div className={`my-4 p-4 rounded-xl border-2 text-sm font-semibold transition-all duration-300 transform scale-100 flex items-center gap-3 ${slotResult.color}`}>
                <span className="text-2xl">{slotResult.icon}</span>
                <div>
                  <div className="text-xs uppercase font-mono font-bold tracking-wider opacity-65 mb-1">
                    FEED REFRESH ({slotResult.type})
                  </div>
                  <p className="leading-snug">{slotResult.reward}</p>
                </div>
              </div>

              {/* Reset/Action indicator */}
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-zinc-500">
                  {pullCount > 0 ? '✓ 大腦多巴胺受體已受體刺激！' : '⚡ 試著重整看會刷出什麼...'}
                </span>
                
                <button
                  id="slot-pull-lever"
                  onClick={triggerSlot}
                  className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-mono font-bold text-xs px-4 py-2.5 rounded-lg border-2 border-indigo-700 shadow-md transition-all flex items-center gap-1.5"
                >
                  <Shuffle className="w-3.5 h-3.5" /> 下剪拉重整 (REFRESH)
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Highlighting Quote at Bottom */}
        <div className="mt-16 max-w-4xl mx-auto bg-slate-900 border-2 border-slate-700 rounded-2xl p-6 md:p-8 text-center text-slate-100">
          <p className="text-base sm:text-xl font-medium italic leading-relaxed text-zinc-200">
            「我們不是每次都真的想滑手機，有時候是平台設計讓我們很難停下來；社群成癮不是你的錯，是科技巨頭的精心設計。」
          </p>
        </div>

      </div>
    </section>
  );
}
