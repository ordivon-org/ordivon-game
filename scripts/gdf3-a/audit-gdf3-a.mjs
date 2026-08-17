#!/usr/bin/env node
import fs from 'node:fs';

const matrix = JSON.parse(fs.readFileSync(process.argv[2] ?? 'evidence/gdf3-a/term-target-matrix.json','utf8'));
const probes = JSON.parse(fs.readFileSync(process.argv[3] ?? 'evidence/gdf3-a/game-feel-falsifiers.json','utf8'));
const terms = new Set(matrix.terms.map(x=>x.term));
const required = ['GameFeelUmbrella','ActionAvailability','ControlTransferFunction','InputToActionLatency','ActionToOutcomeLatency','FeedbackLatency','TemporalJitter','TemporalPredictability','FeedbackContingency','FeedbackLegibility','FeedbackRedundancy','FeedbackAmplification','MultimodalCoherence','WorldDynamicsProfile','IntentSupportMechanism','ObjectiveControlQuality','PerceivedResponsiveness','SenseOfAgency','ImpactFeel','Juiciness'];
for (const t of required) if (!terms.has(t)) throw new Error(`missing term ${t}`);
const checks = {
  enoughBoundaryCases: matrix.boundaryCases.length >= 16,
  timingChannelsSeparated: ['InputToActionLatency','ActionToOutcomeLatency','FeedbackLatency','TemporalJitter','TemporalPredictability'].every(t=>terms.has(t)),
  feedbackDimensionsSeparated: ['FeedbackContingency','FeedbackLegibility','FeedbackRedundancy','FeedbackAmplification','MultimodalCoherence'].every(t=>terms.has(t)),
  humanStructuralTargetsSeparated: ['ObjectiveControlQuality','PerceivedResponsiveness','SenseOfAgency','ImpactFeel'].every(t=>terms.has(t)),
  lowerMeanCanHaveHigherJitter: probes.timingProbe.lowerMeanCanHaveHigherJitter === true,
  timingStagesIndependent: Object.values(probes.channelSeparation).every(Boolean),
  hitStopBreaksMinLatencyIdentity: Object.values(probes.lowLatencyNotAllFeel).every(Boolean),
  presentationCanChangeWithoutOutcome: Object.values(probes.feedbackCanChangeWithoutOutcome).every(Boolean),
  promptFeedbackCanBeFalse: probes.promptIntenseFeedbackCanBeFalse === true,
  redundancyNotNewInformation: probes.moreFeedbackNotMoreInformation.sameUnderlyingEvent === true && probes.moreFeedbackNotMoreInformation.extremeCues > probes.moreFeedbackNotMoreInformation.noneCues,
  intentSupportNotLatencyReduction: Object.values(probes.supportWithoutLatencyReduction).every(Boolean),
  actionClassTimingSensitivity: probes.actionClassTimingSensitivity === true,
  syntheticNoHumanFeelInference: probes.synthetic.objectiveControlAccuracy === 1 && probes.synthetic.humanAgencyEvidenceAvailable === false,
  noFoundationReopen: Object.values(matrix.foundationReopen).filter(x=>typeof x==='boolean').every(x=>x===false)
};
if (Object.values(checks).some(x=>!x)) throw new Error(`GDF3-A audit failed ${JSON.stringify(checks)}`);
console.log(JSON.stringify({schemaVersion:1,kind:'ordivon.game.gdf3-a-audit',termCount:matrix.terms.length,boundaryCaseCount:matrix.boundaryCases.length,lawCount:matrix.laws.length,checks,strongestConclusion:'Game Feel is rejected as one Game variable. The minimum research decomposition separates action availability/mapping, staged timing and predictability, authoritative outcome dynamics, feedback contingency/legibility/redundancy/amplification/coherence, intent-support mechanisms, and Human perceived responsiveness/agency/impact. Low latency and more juice are neither necessary nor sufficient for good feel by identity.'}, null, 2));
