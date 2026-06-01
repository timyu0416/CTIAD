/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';
import { Play, Film, MessageCircle, Lightbulb, BookOpen } from 'lucide-react';

export default function ShortVideo() {
  const [activeTab, setActiveTab] = useState<'video' | 'concept'>('video');

  return (
    <section
      id="shortvideo"
      className="relative min-h-screen bg-black text-white py-24 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-red-500 text-xs font-mono font-extrabold tracking-widest uppercase bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
            CREATIVE VIDEO FILM / 期末影音成果展現
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            短影音成果 ─ 把網路成癮拍出來
          </h2>
          <div className="mt-3 w-16 h-1 bg-red-500 mx-auto rounded"></div>
        </div>

        {/* Cinematic Video Wrapper */}
        <div className="mt-16 max-w-5xl mx-auto bg-zinc-950 p-6 md:p-8 rounded-3xl border border-neutral-800 shadow-[0_0_50px_rgba(239,68,68,0.05)]">
          
          {/* Sub Navigation */}
          <div className="flex border-b border-neutral-850 pb-4 mb-6 justify-center md:justify-start gap-4 flex-wrap">
            <button
              id="video-subtab-watch"
              onClick={() => setActiveTab('video')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'video' ? 'bg-red-650 text-white bg-red-600' : 'text-zinc-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              <Play className="w-3.5 h-3.5" /> 1. 線上成果播放
            </button>
            <button
              id="video-subtab-concept"
              onClick={() => setActiveTab('concept')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'concept' ? 'bg-red-650 text-white bg-red-600' : 'text-zinc-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" /> 2. 拍攝理念與學理
            </button>
          </div>

          {/* Tab 1: Video Player Area */}
          {activeTab === 'video' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-neutral-850 bg-black shadow-2xl">
                {/* Embed YouTube video directly */}
                <iframe
                  id="yt-player-iframe"
                  src="https://www.youtube.com/embed/E0lGSvpOz2M"
                  title="期末成果短影音 - 網路成癮"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Direct fallback link for cross-origin or domain-blocked players */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-red-950/20 border border-red-500/15 p-4 rounded-xl text-xs sm:text-sm">
                <div className="text-zinc-300 text-center sm:text-left">
                  🎬 <strong className="text-red-400">無法正常在視窗內預覽？</strong> 由於瀏覽器安全限制或嵌入政策，您也可以直接打開官方連結播放。
                </div>
                <a
                  href="https://youtu.be/E0lGSvpOz2M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap self-stretch sm:self-auto justify-center"
                >
                  <Play className="w-3.5 h-3.5 fill-current" /> 在 YouTube 上直接播放 ↗
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                  <span className="text-sm font-mono font-bold text-red-400 tracking-wider block uppercase">影片主題標題</span>
                  <p className="mt-1.5 text-sm font-extrabold text-white leading-snug">
                    《只滑五分鐘》、《再滑一下就好》、《被手機偷走的一小時》
                  </p>
                </div>
                <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                  <span className="text-sm font-mono font-bold text-red-400 tracking-wider block uppercase">影片核心情節</span>
                  <p className="mt-1.5 text-sm text-zinc-200 leading-relaxed font-semibold">
                    主角原本只是想查看一條限時訊息，卻隨即受到無限推播通知和演算法精準誘使，陷在 Reels 和 Threads 重點討論裡，最後眼看著時間被不自覺偷走，反映出大眾的真實焦慮。
                  </p>
                </div>
                <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                  <span className="text-sm font-mono font-bold text-red-400 tracking-wider block uppercase">核心反思</span>
                  <p className="mt-1.5 text-sm text-zinc-200 leading-relaxed font-semibold">
                    我們在手機螢幕中尋找生活壓力的短暫避難所，然而被拿走的卻是不復返的心智專注力；察覺，是重奪日常主導權的第一步。
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Concept & Theories */}
          {activeTab === 'concept' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start animate-fadeIn text-sm">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                    <Film className="w-4 h-4 text-red-500" /> 拍攝設計理念
                  </h4>
                  <p className="text-zinc-300 leading-relaxed">
                    網路成癮不應該是一篇冰冷教條的學術報告，它最真實的形式就是我們躺在床上的那個手勢。本影片透過幽默而精靈古怪的第一人稱視角（大學生），呈現現代社交媒體、通知跟變動獎賞對心靈的默默綁架。
                  </p>
                  <p className="mt-3 text-zinc-350 italic">
                    「多數人並非故意浪費時間，而是數位平台在他們不知情下，精心打磨了每一毫米下滑的極致阻力。」
                  </p>
                </div>

                <div className="border-t border-neutral-850 pt-5 space-y-3">
                  <h5 className="font-bold text-white flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    本片想傳達的重點：
                  </h5>
                  <ul className="space-y-2 text-zinc-400 text-xs">
                    <li className="flex gap-2">
                      <span className="text-red-500 font-mono font-bold">•</span>
                      <span><strong>無形性：</strong> 成癮機制就像空氣，藏在我們喝水睡醒的普通慣性中。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500 font-mono font-bold">•</span>
                      <span><strong>非自控性：</strong> 科技巨頭砸下億元，只為了阻礙你放下手機的任何決策。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500 font-mono font-bold">•</span>
                      <span><strong>大腦覺察：</strong> 我們渴望從影片引領使用者回看昨日的「螢幕時間」，引導察覺。</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-5">
                <h4 className="text-md font-bold text-white flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-red-500" /> 與課堂理論深度呼應
                </h4>

                <div className="space-y-4">
                  <div className="p-3.5 bg-black/60 rounded-xl border border-neutral-800">
                    <strong className="text-rose-400 text-sm block font-bold">1. 使用與滿足理論 (Uses and Gratifications)</strong>
                    <span className="text-sm text-zinc-200 leading-relaxed mt-1 block font-medium">
                      使用者有目的性地使用社群媒體以尋求消遣、代償孤寂，滿足自我壓力卸下的內心渴望。
                    </span>
                  </div>

                  <div className="p-3.5 bg-black/60 rounded-xl border border-neutral-800">
                    <strong className="text-rose-400 text-sm block font-bold">2. 注意力經濟與算法囚籠</strong>
                    <span className="text-sm text-zinc-200 leading-relaxed mt-1 block font-medium">
                      連續自動播映的 Reels / Short 演算法，隨時在刺激獎勵，用使用者的專注力在交易巨額廣告行銷額。
                    </span>
                  </div>

                  <div className="p-3.5 bg-black/60 rounded-xl border border-neutral-800">
                    <strong className="text-rose-400 text-sm block font-bold">3. 紓壓與心靈避難逃避需求</strong>
                    <span className="text-sm text-zinc-200 leading-relaxed mt-1 block font-medium">
                      把手機無限下滑，用以隔絕現實煩惱（避開沉重的期末壓力），使網路變成當代青年的防空洞。
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
