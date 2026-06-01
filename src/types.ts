/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Quiz question interface for the Social Media Addiction Quiz (社群成癮6題量表)
export interface QuizQuestion {
  id: number;
  question: string;
  minLabel: string;
  maxLabel: string;
}

// Checklist item for college student internet addiction symptoms (你中了幾個？)
export interface ChecklistItem {
  id: number;
  text: string;
  emoji: string;
}

// Research perspective structure for multi-perspective internet addiction research
export interface ResearchData {
  title: string;
  background: string;
  methodology: string;
  findings: string[];
}
