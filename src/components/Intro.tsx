/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Smartphone, ShieldAlert, Zap, ClipboardList, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { QuizQuestion } from '../types';

interface IntroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Intro({ onNavigate }: IntroProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({
    1: 3,
    2: 3,
    3: 3,
    4: 3,
    5: 3,
    6: 3,
  });

  const [submitted, setSubmitted] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: '常常想用社群媒體嗎？',
      minLabel: '幾乎不想',
      maxLabel: '整天思考',
    },
    {
      id: 2,
      question: '有衝動想一直使用社群媒體嗎？',
      minLabel: '理智控制',
      maxLabel: '瘋狂渴求',
    },
    {
      id: 3,
      question: '使用社群媒體來逃避煩惱？',
      minLabel: '正面面對',
      maxLabel: '極度逃避',
    },
    {
      id: 4,
      question: '試著戒斷社群媒體卻失敗？',
      minLabel: '收放自如',
      maxLabel: '反覆失敗',
    },
    {
      id: 5,
      question: '不能使用社群媒體的時候感到焦慮不安？',
      minLabel: '心平氣和',
      maxLabel: '焦躁失常',
    },
    {
      id: 6,
      question: '使用社群媒體對自己的工作或生活帶來負面影響？',
      minLabel: '毫無影響',
      maxLabel: '嚴重破壞',
    },
  ];

  const handleSelectScore = (questionId: number, score: number) => {
    setAnswers({
      ...answers,
      [questionId]: score,
    });
    setSubmitted(false); // Reset submitted state if answers change
  };

  const totalScore: number = (Object.values(answers) as number[]).reduce((sum, val) => sum + val, 0);
  const isHighRisk = totalScore > 18;

  const getRiskExplanation = () => {
    if (totalScore <= 12) {
      return {
        level: '安全綠燈 🟢',
        textColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
        advice: '太優秀了！你對社群媒體掌控自如，不易被外界通知打亂節奏。請繼續保持健康習慣，拿回生活的主權。',
      };
    } else if (totalScore <= 18) {
      return {
        level: '黃燈警告 🟡',
        textColor: 'text-amber-600 bg-amber-50 border-amber-200',
        advice: '屬於中度風險。你開始偶爾被無限下滑的機制控制，浪費了不必要的時間。建立一些微小的自律阻力，防止進一步偏常。',
      };
    } else {
      return {
        level: '紅燈重災 🚨',
        textColor: 'text-red-600 bg-red-50 border-red-200 animate-pulse-warning',
        advice: '你可能快要陷入社群成癮了！你的大腦正被高頻的多巴胺變動獎賞操控，嚴重影響工作和作息規律。請立刻前往 Tab 7 (反思與解方) 看反制解方！',
      };
    }
  };

  const explanation = getRiskExplanation();

  return (
    <section
      id="intro"
      className="relative min-h-screen bg-gradient-to-b from-white to-blue-50 text-slate-800 py-24 border-t border-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 text-xs font-mono font-extrabold tracking-widest uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            ABOUT PROBLEM / 認識網路成癮
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            主題介紹 ─ 什麼是網路成癮？
          </h2>
          <div className="mt-3 w-16 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Content Block Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Definition & Trigger Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Hard Definition */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">網路成癮的定義</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  網路成癮是指<strong>網路使用已經顯著影響到日常生活與職責</strong>、情緒狀態、人際互動、睡眠，或學業/工作效率。當我們離開螢幕就會出現坐立不安、焦慮、下意識重刷等戒斷不適感時，數位依附已超越習慣本身。
                </p>
              </div>
              
              {/* Highlight Quote */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="text-xs font-mono font-bold tracking-wider text-blue-500 uppercase">CORE PERSPECTIVE</span>
                <p className="mt-1 text-sm font-bold text-slate-800 italic leading-relaxed">
                  「網路成癮不是單純的壞習慣，而是生活環境、平台設計和心理需求一起造成的現象。」
                </p>
              </div>
            </div>

            {/* Phenomenon Visual Image Card */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col gap-3">
              <div className="relative aspect-[24/12] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                <img
                  src="https://media.discordapp.net/attachments/1025422459945615432/1510963381308358686/image.png?ex=6a1eb9ce&is=6a1d684e&hm=1012f6422d8e9365306d29c0aec704f05815f6cee22f4d6978281ded76363b94&=&format=webp&quality=lossless&width=2425&height=1220"
                  alt="網路成癮低頭族划手機"
                  className="w-full h-full object-cover select-none transition-all duration-300 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="border-l-2 border-blue-500 pl-3">
                <span className="text-[10px] font-mono font-bold text-blue-600 tracking-wider block uppercase mb-1">
                  OBSERVATIONAL VISUAL / 沉迷現象現場實錄
                </span>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  低頭沈溺於無止境的手機螢幕。無論身處漆黑房間亦或寂靜環境，演算法挑起的多巴胺總迫使眼圈凹陷、雙手重複著下滑重整。
                </p>
              </div>
            </div>

            {/* Why Modern People Are Tricked */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">現代人容易中招的原因</h3>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span><strong>設備高度即時：</strong> 智慧手機太方便，口袋隨時都是入口。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span><strong>社群高頻更新：</strong> 限時動態隨時消失，創造隱形追趕壓力。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span><strong>主動推送通知：</strong> 不論你在做什麼，通知總能精準打斷它。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span><strong>失控的短影音：</strong> 彈指下滑間失去時間體感，一滑就是一小時。</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Interactive Social Media Addiction scale (社群成癮6題量表) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              
              {/* Header */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 text-blue-600" />
                    社群成癮 6 題學術量表
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    設計機制：請評估以下使用行為發生之頻率
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
                  1分 (不常) ~ 6分 (非常)
                </span>
              </div>

              {/* Questions Area */}
              <div className="space-y-6">
                {questions.map((q) => (
                  <div key={q.id} className="pb-4 border-b border-slate-50">
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-sm font-bold text-slate-800 flex gap-2 items-center">
                        <span className="w-5 h-5 rounded-md bg-slate-100 border text-xs font-mono font-bold flex items-center justify-center text-slate-700">
                          {q.id}
                        </span>
                        {q.question}
                      </span>
                      <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        目前：{answers[q.id]} 分
                      </span>
                    </div>

                    {/* Desktop Slider Array (1 to 6 Buttons) */}
                    <div className="flex items-center gap-1.5 justify-between">
                      <span className="text-xs text-slate-400 font-medium w-12 text-center leading-tight">
                        {q.minLabel}
                      </span>
                      
                      <div className="flex-1 flex gap-1 justify-between max-w-md mx-2">
                        {[1, 2, 3, 4, 5, 6].map((score) => {
                          const isSelected = answers[q.id] === score;
                          return (
                            <button
                              id={`quiz-q${q.id}-score${score}`}
                              type="button"
                              key={score}
                              onClick={() => handleSelectScore(q.id, score)}
                              className={`h-9 w-full rounded-lg text-xs font-mono font-extrabold border transition-all transform active:scale-90 ${
                                isSelected
                                  ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                                  : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                              }`}
                            >
                              {score}
                            </button>
                          );
                        })}
                      </div>

                      <span className="text-xs text-slate-400 font-medium w-12 text-center leading-tight">
                        {q.maxLabel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Results Mechanism */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <span className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-slate-500" />
                    量表統計總分：
                  </span>
                  <div className="text-xl font-black font-mono">
                    <span className="text-blue-600 text-2xl">{totalScore}</span>
                    <span className="text-slate-400 text-sm"> / 36</span>
                  </div>
                </div>

                {/* Score Alert */}
                <div className={`p-4 rounded-xl border text-xs font-medium leading-relaxed transition-all ${explanation.textColor}`}>
                  <div className="font-extrabold text-sm mb-1 uppercase tracking-wide flex items-center gap-1">
                    <ShieldAlert className="w-4 h-4" /> 檢測等級：{explanation.level}
                  </div>
                  {explanation.advice}
                </div>

                {isHighRisk && (
                  <button
                    onClick={() => onNavigate('solution')}
                    className="mt-4 w-full py-3 px-4 rounded-xl border-2 border-red-500 text-red-600 font-extrabold text-xs tracking-wider uppercase hover:bg-red-50 hover:text-red-700 transition-all flex items-center justify-center gap-1 bg-white"
                  >
                    前往反制解方 (Tab 7) <ArrowRight className="w-4 h-4 animate-bounce" />
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
