/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrainCircuit, LineChart, ShieldAlert, Cpu, HeartPulse, CheckCircle } from 'lucide-react';

export default function Research() {
  const [activeTab, setActiveTab] = useState<'eeg' | 'psychology'>('eeg');
  const [brainView, setBrainView] = useState<'low' | 'high'>('high');
  const [brainBand, setBrainBand] = useState<'delta' | 'gamma'>('delta');

  return (
    <section
      id="research"
      className="relative min-h-screen bg-zinc-950 text-white py-24 border-t border-zinc-900/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-400 text-xs font-mono font-extrabold tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            RESEARCH EVIDENCE / 國衛院腦電波與學術研究
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            研究資料 ─ 多重視角的成癮研究
          </h2>
          <div className="mt-3 w-16 h-1 bg-blue-500 mx-auto rounded"></div>
        </div>

        {/* Dynamic Views Navigation Button Group */}
        <div className="mt-12 flex justify-center">
          <div className="bg-zinc-900 p-1.5 rounded-2xl border border-zinc-800 inline-flex gap-2">
            <button
              id="research-tab-eeg"
              onClick={() => setActiveTab('eeg')}
              className={`px-5 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'eeg'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <BrainCircuit className="w-4 h-4" /> 視角一：生理學證據 (國衛院腦波)
            </button>
            <button
              id="research-tab-psychology"
              onClick={() => setActiveTab('psychology')}
              className={`px-5 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'psychology'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <HeartPulse className="w-4 h-4" /> 視角二：心理學與學術眼光轉變
            </button>
          </div>
        </div>

        {/* Scientific content area */}
        {activeTab === 'eeg' ? (
          /* SECTION 1: NEUROPHYSIOLOGICAL EEG DATA */
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            
            {/* Brain sync interactive SVG visualizer on the left */}
            <div className="lg:col-span-5 bg-zinc-900 p-6 md:p-8 rounded-3xl border border-zinc-800 text-center space-y-6">
              <div>
                <h4 className="text-base font-extrabold text-white flex items-center justify-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-500" />
                  WPLI 雙重腦電波虛擬頭部熱點圖
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  重現靜息態（Resting-state EEG）頂部視角下的大腦皮質活躍與相干相位滯後係數（WPLI）同步熱能
                </p>
              </div>

              {/* Toggle brain status (Low risk vs High risk) and bands (Delta vs Gamma) */}
              <div className="space-y-3 bg-zinc-950 p-4 rounded-2xl border border-zinc-800">
                <div className="flex flex-col gap-1.5 text-left">
                  <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                    ⚙️ 選擇研究分組樣本
                  </span>
                  <div className="flex gap-2 w-full">
                    <button
                      id="brain-toggle-low"
                      onClick={() => setBrainView('low')}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                        brainView === 'low'
                          ? 'bg-emerald-600/90 text-white border border-emerald-500/50 shadow-md'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      🟢 低風險對照組
                    </button>
                    <button
                      id="brain-toggle-high"
                      onClick={() => setBrainView('high')}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                        brainView === 'high'
                          ? 'bg-red-600/90 text-white border border-red-500/50 shadow-md animate-pulse'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      🔴 高風險成癮組
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                    ⚡ 選擇腦波波段頻率
                  </span>
                  <div className="flex gap-2 w-full">
                    <button
                      id="band-toggle-delta"
                      onClick={() => setBrainBand('delta')}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        brainBand === 'delta'
                          ? 'bg-blue-600 border border-blue-500 text-white font-black'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      Delta 慢波 (4-8Hz)
                    </button>
                    <button
                      id="band-toggle-gamma"
                      onClick={() => setBrainBand('gamma')}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        brainBand === 'gamma'
                          ? 'bg-purple-600 border border-purple-500 text-white font-black'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      Gamma 快波 (30-45Hz)
                    </button>
                  </div>
                </div>
              </div>

              {/* Interactive Virtual Head Heatmap Display */}
              <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-6 flex flex-col items-center justify-center overflow-hidden">
                
                {/* SVG TOPOGRAPHICAL HEATMAP DRAWING */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      {/* Thermal Color gradients that change opacity dynamically based on toggles */}
                      <radialGradient id="lowBg" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
                        <stop offset="60%" stopColor="#10b981" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                      </radialGradient>

                      {/* HIGH RISK DELTA SLOWING (Massive Prefrontal/Frontal Red hotspot) */}
                      <radialGradient id="highDeltaHotspot" cx="50%" cy="25%" r="45%">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.95" />
                        <stop offset="35%" stopColor="#f97316" stopOpacity="0.75" />
                        <stop offset="70%" stopColor="#eab308" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </radialGradient>

                      {/* HIGH RISK GAMMA EXCITED REWARD BINDING (Temporal/Occipital lobes hyper-synchrony) */}
                      <radialGradient id="highGammaOccipital" cx="50%" cy="80%" r="40%">
                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.9" />
                        <stop offset="45%" stopColor="#a855f7" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="highGammaTemporalL" cx="25%" cy="50%" r="35%">
                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.85" />
                        <stop offset="40%" stopColor="#e11d48" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="highGammaTemporalR" cx="75%" cy="50%" r="35%">
                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.85" />
                        <stop offset="40%" stopColor="#e11d48" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </radialGradient>

                      {/* LOW RISK DELTA & GAMMA - Balanced Cool distribution */}
                      <radialGradient id="lowDeltaFrontal" cx="50%" cy="30%" r="35%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="lowGammaTemporal" cx="50%" cy="60%" r="40%">
                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Standard Clinical Topographical EEG head profile layout */}
                    {/* Semicircular Ears */}
                    {/* Left Ear */}
                    <path d="M 22,85 C 10,85 10,115 22,115" stroke="#4b5563" strokeWidth="2.5" fill="#18181b" />
                    {/* Right Ear */}
                    <path d="M 178,85 C 190,85 190,115 178,115" stroke="#4b5563" strokeWidth="2.5" fill="#18181b" />
                    
                    {/* Nose facing top */}
                    <path d="M 88,18 L 100,2 L 112,18 Z" stroke="#4b5563" strokeWidth="2" fill="#27272a" />

                    {/* Skull main circle */}
                    <circle cx="100" cy="100" r="80" stroke="#4b5563" strokeWidth="3" fill="#0f172a" />
                    
                    {/* Center crosshair grids for orientation */}
                    <line x1="100" y1="20" x2="100" y2="180" stroke="#1f2937" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="20" y1="100" x2="180" y2="100" stroke="#1f2937" strokeWidth="1" strokeDasharray="3,3" />

                    {/* Dynamic Heatmap overlay gradient layers */}
                    {brainView === 'high' ? (
                      brainBand === 'delta' ? (
                        /* Delta high: extreme frontal prefrontal localized hotspot */
                        <>
                          <circle cx="100" cy="100" r="80" fill="url(#lowBg)" />
                          <circle cx="100" cy="100" r="75" fill="url(#highDeltaHotspot)" className="animate-pulse" style={{ animationDuration: '2s' }} />
                        </>
                      ) : (
                        /* Gamma high: massive temporal/occipital localized hotspot */
                        <>
                          <circle cx="100" cy="100" r="80" fill="url(#lowBg)" />
                          <circle cx="100" cy="100" r="75" fill="url(#highGammaOccipital)" className="animate-pulse" style={{ animationDuration: '1.4s' }} />
                          <circle cx="100" cy="100" r="75" fill="url(#highGammaTemporalL)" />
                          <circle cx="100" cy="100" r="75" fill="url(#highGammaTemporalR)" />
                        </>
                      )
                    ) : (
                      /* Low Risk Group: Stable evenly cool state */
                      brainBand === 'delta' ? (
                        <>
                          <circle cx="100" cy="100" r="80" fill="url(#lowBg)" />
                          <circle cx="100" cy="100" r="75" fill="url(#lowDeltaFrontal)" />
                        </>
                      ) : (
                        <>
                          <circle cx="100" cy="100" r="80" fill="url(#lowBg)" />
                          <circle cx="100" cy="100" r="75" fill="url(#lowGammaTemporal)" />
                        </>
                      )
                    )}

                    {/* WPLI Coherence Coupling Network Wires overlay (glowing lines) */}
                    {brainView === 'high' ? (
                      brainBand === 'delta' ? (
                        /* Pathological Frontal-Central WPLI lines */
                        <>
                          <line x1="100" y1="40" x2="50" y2="90" stroke="#f43f5e" strokeWidth="2.5" className="animate-pulse" />
                          <line x1="100" y1="40" x2="150" y2="90" stroke="#f43f5e" strokeWidth="2.5" className="animate-pulse" />
                          <line x1="100" y1="40" x2="100" y2="145" stroke="#ef4444" strokeWidth="3.5" className="animate-pulse" />
                        </>
                      ) : (
                        /* Pathological Temporal-Occipital hyper-binding lines */
                        <>
                          <line x1="50" y1="90" x2="100" y2="145" stroke="#ec4899" strokeWidth="3" className="animate-pulse" />
                          <line x1="150" y1="90" x2="100" y2="145" stroke="#ec4899" strokeWidth="3" className="animate-pulse" />
                          <line x1="50" y1="90" x2="150" y2="90" stroke="#ec4899" strokeWidth="2.5" strokeDasharray="3,3" />
                        </>
                      )
                    ) : (
                      /* Low Risk Group: Balanced, very thin stable default communication wires */
                      <>
                        <line x1="100" y1="40" x2="50" y2="90" stroke="#10b981" strokeWidth="0.75" strokeDasharray="2,2" opacity="0.4" />
                        <line x1="100" y1="40" x2="150" y2="90" stroke="#10b981" strokeWidth="0.75" strokeDasharray="2,2" opacity="0.4" />
                        <line x1="50" y1="90" x2="100" y2="145" stroke="#10b981" strokeWidth="0.5" opacity="0.3" />
                        <line x1="150" y1="90" x2="100" y2="145" stroke="#10b981" strokeWidth="0.5" opacity="0.3" />
                      </>
                    )}

                    {/* Standard Electrodes Placements Overlay (10-20 standard system) */}
                    {/* Frontal (Fp) Node */}
                    <circle cx="100" cy="40" r="5.5" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.5" />
                    <text x="100" y="52" fill="#94a3b8" fontSize="6.5" textAnchor="middle" fontWeight="black" className="select-none">Fz (額葉)</text>

                    {/* Left Temporal (T3) Node */}
                    <circle cx="50" cy="90" r="5.5" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.5" />
                    <text x="45" y="102" fill="#94a3b8" fontSize="6.5" textAnchor="middle" fontWeight="black" className="select-none">T3 (左顳)</text>

                    {/* Right Temporal (T4) Node */}
                    <circle cx="150" cy="90" r="5.5" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.5" />
                    <text x="155" y="102" fill="#94a3b8" fontSize="6.5" textAnchor="middle" fontWeight="black" className="select-none">T4 (右顳)</text>

                    {/* Occipital (Oz) Node */}
                    <circle cx="100" cy="145" r="5.5" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.5" />
                    <text x="100" y="157" fill="#94a3b8" fontSize="6.5" textAnchor="middle" fontWeight="black" className="select-none">Oz (枕葉)</text>

                    {/* Central vertex Cz mapping */}
                    <circle cx="100" cy="95" r="4" fill="#6b7280" />
                    <text x="112" y="96" fill="#6b7280" fontSize="6" fontWeight="bold">Cz</text>

                    {/* Real-time textual status overlay */}
                    <rect x="35" y="167" width="130" height="15" rx="3" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                    <text x="100" y="177" fill={brainView === 'high' ? '#ef4444' : '#10b981'} fontSize="7.5" textAnchor="middle" fontWeight="bold" className="animate-pulse">
                      {brainView === 'high' 
                        ? `⚠️ ${brainBand === 'delta' ? 'Delta 慢波相干值 0.88 (重載)' : 'Gamma 興奮波相干值 0.94 (飆升)'}` 
                        : '🟢 生理 WPLI 功能組間相干平衡'}
                    </text>
                  </svg>
                </div>

                {/* Thermal Colorbar Legend */}
                <div className="mt-4 w-full px-4 flex flex-col gap-1">
                  <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                    <span>正常 / 平靜 (0.0)</span>
                    <span>臨界值 (0.5)</span>
                    <span>成癮同步 (1.0+)</span>
                  </div>
                  {/* Colorbar gradient strip */}
                  <div className="h-2.5 w-full rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 via-yellow-500 to-red-600 border border-zinc-800 shadow-inner" />
                </div>
              </div>

              {/* Enhanced Descriptions underneath inside the visualizer card */}
              <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 text-left text-sm text-zinc-100 leading-relaxed space-y-3.5 shadow-inner">
                <div className="flex gap-2 items-start">
                  <span className="text-base flex-shrink-0">🎨</span>
                  <div>
                    <strong className="text-zinc-200">
                      {brainBand === 'delta' ? 'Delta 頻段視覺焦點：' : 'Gamma 頻段視覺焦點：'}
                    </strong>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {brainBand === 'delta'
                        ? '主要累積於【額葉（Fz）】，高風險組在此區域會呈現大面積紅橙色。反映出當沉迷手機時，負責深度睡眠的慢波卻在白天靜態時異常代償性爆發，阻斷額葉的理性控制功能。'
                        : '高度活躍於【顳葉（T3/T4）與枕葉（Oz）】，熱點圖呈現紫粉色高度匯集。代表社群軟體帶來的密集聲光刺激、即時跳動點讚，讓處理感官回饋與視覺定位的腦區處於病理性超載興奮。'}
                    </p>
                  </div>
                </div>
                <div className="border-t border-zinc-800/80 pt-3">
                  <div className="flex gap-2 items-center text-xs text-zinc-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>診斷關聯：大腦 WPLI 異常同步，辨識網路成癮準確率高達 86.4%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scientific Text Details on the right */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Research Background */}
              <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80">
                <span className="text-blue-400 font-mono text-xs font-bold tracking-widest block uppercase mb-1">
                  RESEARCH METHODOLOGY / 研究對象與背景
                </span>
                <h4 className="text-lg font-bold text-white mb-3">
                  國衛院最新腦波神經學研究
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  過往要評估是否網路成癮，主要依賴問卷的主觀自我填答，容易造成偏差。國家衛生研究院的研究團隊為了尋找<strong>更客觀的神經生物學指標</strong>，招募了大學生進行生理學實驗，證實網路成癮對大腦造成的實體機能改變。
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800/60 text-center">
                    <span className="text-zinc-500 font-mono text-xs block font-bold">研究對象</span>
                    <span className="font-extrabold text-white text-base">92 位大學生</span>
                    <span className="text-xs text-zinc-400 block">18至25歲健康青年</span>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800/60 text-center">
                    <span className="text-zinc-500 font-mono text-xs block font-bold">檢測關鍵</span>
                    <span className="font-extrabold text-blue-400 text-base">EEG 靜息態</span>
                    <span className="text-xs text-zinc-400 block">WPLI 大腦連結值</span>
                  </div>
                  <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800/60 text-center">
                    <span className="text-zinc-500 font-mono text-xs block font-bold">診斷辨識率</span>
                    <span className="font-extrabold text-red-500 text-base">約 86%</span>
                    <span className="text-xs text-zinc-400 block">結合機器學習分類器</span>
                  </div>
                </div>
              </div>

              {/* Research Key Findings List */}
              <div className="bg-zinc-900/65 p-6 rounded-2xl border border-zinc-800">
                <span className="text-red-400 font-mono text-xs font-bold tracking-widest block uppercase mb-2">
                  KEY DISCOVERIES / 關鍵科學發現
                </span>
                
                <div className="space-y-4 text-xs sm:text-sm text-zinc-350">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">高低風險組大腦功能連結存在客觀顯著差異：</strong>
                      <p className="mt-1 text-zinc-400 leading-relaxed">
                        透過相干相位滯後係數（WPLI）的空間連結演算法，成癮高風險組在 Delta（慢波反應大腦疲勞、沉睡）和 Gamma（快波反應高度興奮、獎賞處理）頻段的同步化出現了病理性代償升高。
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">大腦抑制控制迴路的損壞退化：</strong>
                      <p className="mt-1 text-zinc-400 leading-relaxed">
                        這項神經異常同步化主要位於額葉（控制理性、抑制衝動）與顳葉枕葉（處理視覺刺激與回饋）之間。大腦的神經機制被改寫，使個體在面對多巴胺刺激時失去抵抗控制能力。
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">客觀生物指標的輔助智慧判斷：</strong>
                      <p className="mt-1 text-zinc-400 leading-relaxed">
                        將受試者的微弱腦波訊號匯入支持向量機（SVM）等機器學習模型後，能達到 86.4% 左右的成癮辨識診斷準確率，代表未來大腦檢測將能客觀協助網路重度使用患者投藥或諮商。
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        ) : (
          /* SECTION 2: PSYCHOLOGY ACADEMIC TRANSITION & COMORBIDITY */
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch animate-fadeIn">
            
            {/* Shift of Concept Card */}
            <div className="bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-blue-400 font-mono text-xs tracking-widest font-bold block uppercase mb-1">
                  ACADEMIC SHIFT / 學術眼光與術語演進
                </span>
                <h3 className="text-xl font-bold text-white mb-4">
                  從「疾病」到「有問題的網路使用」
                </h3>
                
                <p className="text-sm text-zinc-300 leading-relaxed space-y-3">
                  過去大眾習慣將過度使用網路視為一種「必須根除的疾病」或「戒斷毒癮般的壞習慣」。然而，近年的國際心理學界正逐漸改變觀點，改以
                  <strong className="text-blue-400">「有問題的網路使用 (Problematic Internet Use, PIU)」</strong>
                  來稱呼此現象。
                </p>

                <div className="mt-6 bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2 text-sm text-zinc-100">
                  <div>
                    🟢 <strong className="text-emerald-400">多向度連續光譜 (Spectrum)：</strong> PIU 認為此現象並非非黑即白的二分診斷，每個人都在這條光譜線上的不同位置。
                  </div>
                  <div className="text-zinc-100">
                    💡 <strong className="text-blue-400">避免疾病污名化：</strong> 重點不在於定義病人，而在於評估使用者在社會適應、情感代償中是否失去了自主彈性。
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 text-sm font-semibold text-zinc-350 flex items-center gap-2">
                <span>📚</span> <span className="text-zinc-200">心理界強調：「網路只是載體，背後的代償才是本質。」</span>
              </div>
            </div>

            {/* Comorbidity Phenomena (共病) Card */}
            <div className="bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-red-400 font-mono text-xs tracking-widest font-bold block uppercase mb-1">
                  COMORBIdITY PHENOMENON / 隱含的心理伴隨疾病
                </span>
                <h3 className="text-xl font-bold text-white mb-4">
                  複雜的共病現象 (Comorbidity)
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  網路過度使用幾乎<strong>從來不是單一維度的習慣問題</strong>。在學術上，它經常與當事人的其他心理健康狀況形成複雜深刻的「共病」伴隨關係。
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex gap-2.5 items-start bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-200">
                      <strong className="text-rose-400">憂鬱與社交焦慮：</strong> 內心深感不適與空虛，透過匿名的匿名留言板或刺激的社群發相片進行麻痺與社交代償。
                    </span>
                  </div>
                  <div className="flex gap-2.5 items-start bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-200">
                      <strong className="text-rose-450 text-rose-350">注意力缺失與過動 (ADHD)：</strong> 大腦天然對低閾值的多巴胺高度敏感，因極易分心，短影音的極端高頻跳躍最契合他們的尋刺激偏好。
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 text-sm font-semibold text-rose-300 flex items-center gap-2">
                <span>🚨</span> <span>解決成癮，往往需要優先療癒更底層的焦慮寂寞。</span>
              </div>
            </div>

          </div>
        )}

        {/* Dynamic Scientific Highlighting Quote at Bottom */}
        <div className="mt-16 max-w-4xl mx-auto bg-blue-500/10 border-2 border-blue-500/20 rounded-2xl p-6 md:p-8 text-center text-blue-300">
          <p className="text-base sm:text-lg font-bold italic leading-relaxed">
            「網路成癮不只是主觀覺得「我滑太久」，它既反映在大腦神經的客觀改變中，也與個人的心理適應狀態密不可分。」
          </p>
        </div>

      </div>
    </section>
  );
}
