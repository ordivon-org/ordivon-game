#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

// Structural counterexamples. Human ratings are represented only as declared hypothetical targets,
// never as empirical simulation.

const timing = {
  stable100: [100,100,100,100,100],
  jittery70: [20,120,40,130,40],
};
const mean = xs => xs.reduce((a,b)=>a+b,0)/xs.length;
const variance = xs => {
  const m=mean(xs); return xs.reduce((a,b)=>a+(b-m)**2,0)/xs.length;
};
const timingProbe = {
  stableMeanMs: mean(timing.stable100),
  jitteryMeanMs: mean(timing.jittery70),
  stableVariance: variance(timing.stable100),
  jitteryVariance: variance(timing.jittery70),
};
timingProbe.lowerMeanCanHaveHigherJitter = timingProbe.jitteryMeanMs < timingProbe.stableMeanMs && timingProbe.jitteryVariance > timingProbe.stableVariance;

const channels = {
  inputToAction: 20,
  actionToOutcome: 80,
  outcomeToVisualFeedback: 10,
  outcomeToAudioFeedback: 5,
};
const channelSeparation = {
  actionVisibleBeforeOutcome: channels.inputToAction < channels.inputToAction + channels.actionToOutcome,
  audioAndVisualFeedbackLatencyDiffer: channels.outcomeToAudioFeedback !== channels.outcomeToVisualFeedback,
};

const hitStop = {
  baseline: { inputToActionMs: 20, intentionalImpactPauseMs: 0, worldImpulse: 10, feedbackAmplification: 0.4 },
  impactVersion: { inputToActionMs: 20, intentionalImpactPauseMs: 70, worldImpulse: 10, feedbackAmplification: 0.9 },
};
const lowLatencyNotAllFeel = {
  sameInputResponsiveness: hitStop.baseline.inputToActionMs === hitStop.impactVersion.inputToActionMs,
  addedIntentionalDelay: hitStop.impactVersion.intentionalImpactPauseMs > hitStop.baseline.intentionalImpactPauseMs,
  sameAuthoritativeImpulse: hitStop.baseline.worldImpulse === hitStop.impactVersion.worldImpulse,
  differentPresentationAmplification: hitStop.baseline.feedbackAmplification !== hitStop.impactVersion.feedbackAmplification,
};

const avatarVsWorld = {
  sameDamage: 25,
  sameKnockback: 3,
  noShake: { cameraShake: 0, particles: 1 },
  heavyShake: { cameraShake: 8, particles: 5 },
};
const feedbackCanChangeWithoutOutcome = {
  authoritativeOutcomeHeldFixed: true,
  presentationChanged: avatarVsWorld.noShake.cameraShake !== avatarVsWorld.heavyShake.cameraShake,
};

const feedbackTruth = {
  trueHit: { authoritativeHit: true, hitFlash: true, hitSound: true },
  falseHit: { authoritativeHit: false, hitFlash: true, hitSound: true },
};
const promptIntenseFeedbackCanBeFalse = feedbackTruth.falseHit.hitFlash && feedbackTruth.falseHit.hitSound && !feedbackTruth.falseHit.authoritativeHit;

const juiciness = {
  none: { cues: 1, clutter: 0.0 },
  medium: { cues: 4, clutter: 0.1 },
  extreme: { cues: 14, clutter: 0.8 },
};
const moreFeedbackNotMoreInformation = {
  underlyingEventBits: 1,
  noneCues: juiciness.none.cues,
  extremeCues: juiciness.extreme.cues,
  sameUnderlyingEvent: true,
};

const intentSupport = {
  rawLatencyMs: 30,
  withoutBuffer: { pressAtMsBeforeReady: 40, admitted: false },
  withBuffer: { pressAtMsBeforeReady: 40, bufferWindowMs: 80, admitted: true },
};
const supportWithoutLatencyReduction = {
  sameRawLatency: true,
  actionAdmissionChanged: intentSupport.withBuffer.admitted !== intentSupport.withoutBuffer.admitted,
};

const turnBased = {
  semanticAcknowledgeMs: 120,
  continuousAimRequirementMs: null,
  actionCorrectlyAdmitted: true,
};
const continuousFps = {
  semanticAcknowledgeMs: 20,
  continuousAimRequirementMs: 20,
  actionCorrectlyAdmitted: true,
};
const actionClassTimingSensitivity = turnBased.continuousAimRequirementMs !== continuousFps.continuousAimRequirementMs;

const synthetic = {
  objectiveControlAccuracy: 1.0,
  humanAgencyEvidenceAvailable: false,
  humanImpactFeelEvidenceAvailable: false,
};

const result = {
  schemaVersion: 1,
  kind: 'ordivon.game.gdf3-a-game-feel-falsifiers',
  epistemicBoundary: {
    proves: [
      'mean latency and jitter can be ordered differently',
      'input-to-action, action-to-outcome and outcome-to-feedback timing can vary independently',
      'intentional presentation pause/amplification can change without changing initial input responsiveness or authoritative impulse',
      'feedback presentation can change while authoritative outcome remains fixed',
      'strong prompt feedback can be semantically false',
      'more redundant cues do not necessarily add new authoritative event information',
      'input buffering can change admitted intent without reducing raw device/system latency',
      'timing sensitivity can be action-class dependent',
      'objective synthetic control does not supply Human agency/impact-feel evidence'
    ],
    doesNotProve: [
      'human preference for hit stop or screen shake',
      'one optimal latency or jitter threshold',
      'that more or less juice is always better',
      'a universal GameFeel score',
      'human sense of agency from toy structural values'
    ]
  },
  timing,
  timingProbe,
  channels,
  channelSeparation,
  hitStop,
  lowLatencyNotAllFeel,
  avatarVsWorld,
  feedbackCanChangeWithoutOutcome,
  feedbackTruth,
  promptIntenseFeedbackCanBeFalse,
  juiciness,
  moreFeedbackNotMoreInformation,
  intentSupport,
  supportWithoutLatencyReduction,
  turnBased,
  continuousFps,
  actionClassTimingSensitivity,
  synthetic,
};

const output = process.argv[2] ?? 'evidence/gdf3-a/game-feel-falsifiers.json';
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
