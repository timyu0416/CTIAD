/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BookOpen, Moon, AlertTriangle, Users, Compass, HelpCircle, CheckSquare, Square } from 'lucide-react';
import { ChecklistItem } from '../types';

export default function Cases() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const cases = [
    {
      id: 1,
      title: '讀書查資料卻迷航',
      emoji: '📚',
      icon: <BookOpen className="w-5 h-5" />,
      scenario: '原本打開瀏覽器只是要查經濟學報告的資料，卻下意識點了YouTube推薦影片。看完影片又覺得無聊點開Dcard心情版隨手一滑，三小時過去了，書籤欄裡堆滿不相干的八卦，原本要做的報告進度依舊是 0。',
      takeaway: '數位分流：平台在連結中安插了無數「側向連結」，藉此轉移你的初始動機，劫持你的注意力。',
    },
    {
      id: 2,
      title: '睡前滑手機黑洞',
      emoji: '🛌',
      icon: <Moon className="w-5 h-5" />,
      scenario: '洗完澡躺在床上正準備入眠，心想「只滑個五分鐘檢查訊息就睡」。結果打開IG看到朋友的限動，再順便點進 Reels 滑一滑、轉去 Threads 看大家在罵什麼，最後滑去 TikTok。猛然抬头，窗外已經露出晨光。',
      takeaway: '黑洞效應：在意志力薄弱的睡前，短影音精巧的無邊際滾動機制最容易剝奪大腦的控制力與睡眠規律。',
    },
    {
      id: 3,
      title: '被切碎的課堂注意力',
      emoji: '📱',
      icon: <AlertTriangle className="w-5 h-5" />,
      scenario: '筆電開著上課筆記，但隔壁放著的手機螢幕一亮起（即使只是收到毫無價值的促銷廣告），就抑制不住誘惑轉頭去拿。心智在筆記與通知間高速地反覆切換。等到回過神來，教授早已跳了三張投影片，注意力早已碎成了細屑。',
      takeaway: '微型中斷：高密度的通知干擾創造了「注意力微碎化」，大幅拉高大腦事後重新聚精會神的認知重啟代價。',
    },
    {
      id: 4,
      title: '沉淪於同儕八卦',
      emoji: '👥',
      icon: <Users className="w-5 h-5" />,
      scenario: '下課鐘聲一響，周遭朋友全部掏出手機。一聽到朋友聊起「你有看到那那個人貼的Threads限動嗎？」，便湧現一陣心慌，顧不得聊天，趕緊低頭狂刷。就算在走路、吃飯也死守著最新爆料，生怕自己因為漏看八卦而被社群孤立。',
      takeaway: '錯失焦慮 (FOMO)：社交恐懼轉化為強迫性的資訊刷取，這使我們即使身在人群，也將真實世界的主體擱置在一旁。',
    },
    {
      id: 5,
      title: '壓力的「心靈避難所」',
      emoji: '🌪️',
      icon: <Compass className="w-5 h-5" />,
      scenario: '期末考週將至、報告堆積如山，面對如排山倒海而來的學業壓力、焦慮與排滿的考試日程，大腦感到無比沉重。此時，最簡單便利的解脫方式就是躲進手機的世界裡——漫無目的地刷短影音。在滑手機的那幾十分鐘裡，現實的焦慮被多巴胺暫時麻醉了。',
      takeaway: '學理連結：網路為現代人提供了一個最便捷且廉價的「心靈避難所（psychic retreat）」，讓人們在面對現實困難、壓力或難以消化的情緒時，可以暫時撤退、躲避現實。然而，逃避雖輕鬆，現實問題卻在無網狀態下愈發膨脹。',
    },
  ];

  const checklistItems: ChecklistItem[] = [
    { id: 1, text: '睡前準備好躺平，還是下意識滑超過30分鐘。', emoji: '🛌' },
    { id: 2, text: '明明手頭上很多事情很忙，還是一直看手機。', emoji: '📱' },
    { id: 3, text: '只要手機電量低於 20% 或是斷網就感到莫名坐立難安。', emoji: '🪫' },
    { id: 4, text: '讀書、做報告或上課時，每隔幾分鐘就忍不住切去社群。', emoji: '📚' },
    { id: 5, text: '常常沉浸在 Reels、Dcard 或 Threads 裡，猛然發覺「時間不見了」。', emoji: '⏳' },
  ];

  const toggleCheck = (id: number) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((item) => item !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const checkCount = checkedIds.length;

  const getSymptomDiagnosis = () => {
    switch (checkCount) {
      case 0:
        return {
          diagnose: '自律鋼鐵人 🏆',
          color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
          desc: '你簡直是當代數位淨土的隱士！在社群巨頭的精密巨網下居然能完全免疫，保持高度的自由理智。請務必將你的抗癮策略傳授給周圍的朋友。',
        };
      case 1:
      case 2:
        return {
          diagnose: '輕度網路沾染 🚶‍♂️',
          color: 'text-sky-400 bg-sky-500/10 border-sky-505/20',
          desc: '你有輕微被通知綁架的徵候，大多數時間還算保有自主能動力。注意在睡前或讀書等重點時段保持覺察，防止自己進一步被多巴胺泥潭吞噬。',
        };
      case 3:
      case 4:
        return {
          diagnose: '中度依附邊緣 ⚠️',
          color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
          desc: '快進入黃色警戒了！你的時間體感已經在被平台慢慢剝奪，上課和報告效率打折。嘗試在睡前或讀書時，主動給自己設定「實體物理阻力」（如把手機扔去客廳）。',
        };
      case 5:
        return {
          diagnose: '重度網路囚徒 🚨',
          color: 'text-red-500 border-red-500 bg-red-500/15 animate-pulse-warning',
          desc: '緊急警報！你已完全被科技算法包圍，手機宛如你大腦的附加外掛晶片。生活節奏、專注力與睡眠被深層綁架，這不僅是壞習慣，也是在面對現實壓力時躲避的「心靈避難所」。請立刻在反思解方中尋求斷開網路束縛的緊急防護措施！',
        };
      default:
        return {
          diagnose: '未評估',
          color: 'text-zinc-400 bg-zinc-950 border-zinc-800',
          desc: '點擊上方核取方塊以測評您的網路毒素指數。',
        };
    }
  };

  const diagnosis = getSymptomDiagnosis();

  return (
    <section
      id="cases"
      className="relative min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-zinc-950 text-white py-24 border-t border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-red-400 text-xs font-mono font-extrabold tracking-widest uppercase bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full">
            REAL SCENARIOS / 大學生的五大數位日常
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            日常案例 ─ 我們如何被螢幕奴役？
          </h2>
          <div className="mt-3 w-16 h-1 bg-red-500 mx-auto rounded"></div>
        </div>

        {/* Tab-driven Scenarios Display */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Tab list (Column style) */}
          <div className="lg:col-span-4 space-y-3.5">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 block mb-2 px-1 uppercase">
              SELECT SCENARIO / 選擇情境
            </span>
            {cases.map((cs) => {
              const isSelected = activeTab === cs.id;
              return (
                <button
                  id={`scenario-tab-${cs.id}`}
                  key={cs.id}
                  onClick={() => setActiveTab(cs.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3.5 ${
                    isSelected
                      ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-900/40 translate-x-2'
                      : 'bg-slate-900/60 border-slate-700/50 text-zinc-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className="text-xl">{cs.emoji}</span>
                  <div className="flex-1">
                    <h4 className="text-sm font-extrabold tracking-tight leading-snug">{cs.title}</h4>
                    <span className="text-xs font-mono font-medium opacity-60">情境 {cs.id}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Scenario Details Screen */}
          <div className="lg:col-span-8 bg-zinc-900 rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-inner min-h-[360px] relative overflow-hidden">
            {/* Background Accent SVG */}
            <div className="absolute top-0 right-0 p-8 text-slate-800 font-black text-9xl select-none opacity-5 pointer-events-none">
              {cases[activeTab - 1].emoji}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="p-2 rounded-lg bg-red-500/10 text-red-500 font-mono text-sm font-bold">
                  SCENARIO #{activeTab}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {cases[activeTab - 1].emoji} {cases[activeTab - 1].title}
                </h3>
              </div>

              {/* Story Scenario content */}
              <div className="space-y-4">
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed bg-zinc-950/40 p-4 rounded-xl border border-slate-800">
                  {cases[activeTab - 1].scenario}
                </p>

                {/* Academic/Takeaway connection */}
                <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-xl">
                  <span className="text-xs font-mono font-bold tracking-widest text-red-400 block uppercase mb-1">
                    THEORETICAL ANALYSIS / 理論與學理連結
                  </span>
                  <p className="text-xs text-red-300 leading-relaxed font-normal">
                    {cases[activeTab - 1].takeaway}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-zinc-500">
              <span>📌 每晚的大腦撤退，最終成為隱性的束縛。</span>
              <span className="text-red-400 font-bold">已讀進度 {activeTab}/5</span>
            </div>
          </div>

        </div>

        {/* Dynamic Symptom Checklist Area: "你中了幾個？" */}
        <div className="mt-20 max-w-4xl mx-auto bg-zinc-900 rounded-3xl border-2 border-red-500/30 p-6 sm:p-10 relative overflow-hidden">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-red-400 text-xs font-mono font-bold tracking-widest bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded">
              INTERACTIVE TEST / 多重成癮症狀量測
            </span>
            <h3 className="mt-3 text-2xl font-black text-white">
              日常小互動：你中了幾個？
            </h3>
            <p className="text-xs text-zinc-400 mt-2">
              勾選符合你當下生活狀態的真實行為，測出你的網路危險指數。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Checklist items column */}
            <div className="md:col-span-7 space-y-3.5">
              {checklistItems.map((item) => {
                const isChecked = checkedIds.includes(item.id);
                return (
                  <button
                    id={`symptom-check-${item.id}`}
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                      isChecked
                        ? 'bg-red-500/10 border-red-500/50 text-white'
                        : 'bg-zinc-950/40 border-zinc-800 text-zinc-400 hover:bg-zinc-950 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-red-500" />
                      ) : (
                        <Square className="w-5 h-5 text-zinc-600" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-medium leading-relaxed">
                      <span className="mr-1.5">{item.emoji}</span>
                      {item.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Diagnosis result column */}
            <div className="md:col-span-5 bg-zinc-950 rounded-2xl border border-zinc-800 p-6 text-center space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 block">
                DIAGNOSIS RESULT / 檢測結果
              </span>
              
              <div className="text-center py-2">
                <span className="text-5xl font-black font-mono text-red-500">
                  {checkCount}
                </span>
                <span className="text-zinc-500 text-sm"> / 5</span>
              </div>

              <div id="diagnosis-outcome" className={`p-4 rounded-xl border text-xs leading-relaxed ${diagnosis.color}`}>
                <h4 className="font-extrabold text-sm mb-1.5">{diagnosis.diagnose}</h4>
                <p>{diagnosis.desc}</p>
              </div>

              <p className="text-xs text-zinc-500">
                本測試結果基於行為依存與臨床心靈避難理學基礎。
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
