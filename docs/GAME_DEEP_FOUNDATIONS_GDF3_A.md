---
schema_version: 1
id: game.deep-foundations.gdf3-a
title: Ordivon Game Deep Foundations — GDF3-A Game Feel / Feedback / Sensorimotor Coupling Term & Target Separation
profile: research
lifecycle: active
source_role: canonical
visibility: public
owners:
  - ordivon-game
updated: 2026-08-17
summary: Opens GDF3 independently from unfinished GDF2, consuming frozen Action/Control/Skill Foundations v1. Rejects Game Feel as one Game variable; separates action availability and mapping, input/action/outcome/feedback timing, jitter and predictability, feedback contingency/legibility/redundancy/amplification/coherence, world dynamics and intent support, and Human perceived responsiveness/sense of agency/impact. Matched probes falsify LowLatency=GoodFeel, MoreFeedback=MoreInformation, ObjectiveControl=Agency and Avatar/CameraMotion=WorldImpulse identities. No foundation reopen is triggered.
evidence_status: mixed
readiness: ACTIVE
applies_to:
  - ordivon-game
related:
  - game.action-control-skill-foundations.v1
  - game.play-game-deep-foundations.v1
---
# Ordivon Game Deep Foundations — GDF3-A

## 0. Why GDF3 does not begin by defining `good game feel`

`Game feel` is one of the most useful and least precise phrases in practical game design.

It can refer to:

```text
low latency
responsive controls
movement tuning
input buffering / coyote time
physicality / weight
hit stop
camera shake
particles
sound
rumble
clear hit confirmation
predictability
sense of agency
impact / exhilaration
```

But these are not one causal variable.

So A begins with:

```text
GameFeelUmbrella != OneGameVariable.
```

The practitioner umbrella is retained as discourse, not frozen ontology.

Canonical evidence/probes:

```text
evidence/gdf3-a/term-target-matrix.json
evidence/gdf3-a/game-feel-falsifiers.json
scripts/gdf3-a/game-feel-falsifiers.mjs
scripts/gdf3-a/audit-gdf3-a.mjs
```

---

# 1. First split — `responsive` can mean several different things

At least:

```text
ActionAvailability
ControlTransferFunction
InputToActionLatency
TemporalPredictability
IntentSupport
FeedbackLatency
PerceivedResponsiveness
```

are commonly compressed into one adjective.

They must be separated.

## ActionAvailability

Can the participant currently attempt/admit the relevant GameAction?

A button can have zero device latency while the action is legally unavailable because of:

```text
stun
cooldown
animation state
resource requirement
turn ownership
```

Thus:

```text
ActionUnavailable != HighLatency.
```

---

# 2. ControlTransferFunction != latency

A cursor can respond after exactly the same delay under two mappings but feel/perform differently because of:

```text
gain
acceleration
deadzone
smoothing
filtering
assistance
```

GDF1 already froze `ControlMapping`.

GDF3 consumes it rather than inventing another control primitive.

The relevant point is:

```text
same latency + different transfer function
→ different objective control relation
```

without any contradiction.

---

# 3. Timing itself is staged

A single number called `input lag` is often insufficient for causal analysis.

A separates:

```text
InputToActionLatency
ActionToOutcomeLatency
FeedbackLatency
```

Example:

```text
button press
→ avatar begins attack
→ weapon contacts enemy
→ damage is authoritatively resolved
→ hit flash/sound/haptic feedback appears
```

These transitions can have different delays.

A Game may intentionally give immediate startup feedback while the consequential outcome occurs later.

So:

```text
Action visible now
!= Outcome resolved now
!= Outcome feedback now.
```

---

# 4. Mean latency != jitter != temporal predictability

A's executable probe compares:

```text
stable 100ms:
100 100 100 100 100

lower-mean jittery stream:
20 120 40 130 40
```

The second can have a lower average delay and much greater variance.

Thus:

```text
MeanLatency != TemporalJitter.
```

And the deeper hypothesis is:

```text
TemporalPredictability
```

is its own target because learned control can adapt to stable mappings/delays differently from inconsistent timing.

Recent gaze-contingent and motor-learning agency research similarly treats delay variability and learned action-outcome structure as separate contributors to agency/control judgments.

A does not yet freeze a predictability mechanism.

---

# 5. Latency sensitivity is action-class dependent

Claypool's RTS experiments decomposed real-time-strategy interaction into components such as exploration, building and combat rather than treating the genre as one latency-sensitive task.

FPS experiments provide a complementary positive case: controlled latency manipulations can measurably degrade accuracy, score and quality of experience, with sensitivity varying by task/weapon/configuration.

Therefore GDF3 retains:

```text
LatencySensitivity(ActionClass, SkillProfile, ControlConfiguration)
```

as a research relation rather than:

```text
GoodGameLatency < universal X ms.
```

A turn-based chess interface and precision FPS aim task should not inherit the same responsiveness threshold by ontology.

---

# 6. First major falsification — LowLatency != GoodGameFeel

A zero-latency linear cursor can be objectively prompt yet have:

```text
weak physicality
poor feedback
poor legibility
low impact
```

depending on the target experience.

More importantly, many action games intentionally use temporal shaping such as:

```text
hit stop
anticipation
recoil/recovery
slow motion
```

around important consequences.

A matched probe holds initial `InputToActionLatency` and authoritative world impulse fixed while adding an intentional impact pause and stronger presentation amplification.

Therefore:

```text
minimize every delay
```

cannot be the universal theory of good feel.

The correct future question is:

> Which delays belong to unwanted control latency, which encode authored dynamics/commitment, and which are presentation timing?

---

# 7. Responsiveness and `weight` can pull in different temporal directions

This is not a contradiction once targets are separated.

A heavy vehicle may deliberately have:

```text
slow acceleration
inertia
steering response dynamics
```

while still being highly predictable and giving immediate control acknowledgement.

Thus:

```text
SlowWorldDynamics != InputLag.
```

A light agile avatar may have fast acceleration.
A heavy vehicle may have delayed state change by design.

Both can be objectively responsive if the control-state relation is timely, legible and predictable for their intended dynamics.

---

# 8. WorldDynamicsProfile != ImpactFeel

Actual structural dynamics include:

```text
mass-like inertia
acceleration
gravity
friction
recoil
knockback
recovery
```

But Human `ImpactFeel` is an appraisal.

The same authoritative knockback/damage can be presented with:

```text
no camera shake
```

or:

```text
screen shake + sound transient + particles + hit flash
```

without changing the world outcome.

Therefore:

```text
WorldImpulse != CameraShake != ImpactFeel.
```

---

# 9. 2026 screen-shake evidence makes this separation unusually concrete

Lin & Tanaka's 2026 experiments used a custom 3D attack interaction and manipulated screen-shake intensity while asking participants about sense of agency and exhilaration.

Stronger screen shake increased both reported agency and exhilaration in their tested conditions; comparison against visualized damage values suggested a more pronounced screen-shake effect, and their analysis interpreted exhilaration as mediating the agency effect.

GDF3's use is deliberately narrow:

```text
A presentation effect can change Human agency/affective judgments
while underlying GameAction/outcome semantics are held controlled.
```

This is strong evidence for:

```text
ObjectiveControl != SenseOfAgency
```

and against:

```text
ScreenShake = purely decorative/no causal player effect.
```

It does **not** prove stronger screen shake is universally better.

---

# 10. Feedback itself needs at least five separations

## FeedbackContingency

Is the signal actually tied to the authoritative event it claims to represent?

## FeedbackLegibility

Can the participant reliably distinguish the relevant state/action/outcome difference from the signal?

## FeedbackRedundancy

Are multiple cues encoding an already available distinction?

## FeedbackAmplification

How strongly/saliently is the event embellished?

## MultimodalCoherence

Do audio/visual/haptic cues agree in timing, location and meaning?

Therefore:

```text
FeedbackQuality != FeedbackQuantity.
```

---

# 11. Prompt, intense feedback can be false

A's matched probe generates:

```text
visual hit flash = yes
audio hit sound = yes
authoritative hit = no
```

The feedback is:

```text
fast
intense
redundant
```

and still semantically false.

Thus:

```text
LowFeedbackLatency + HighIntensity
!= GoodFeedback.
```

Feedback truth/currentness remains authority-bound.

This directly links GDF3 to frozen GDF0/GDF1 authority/provenance law.

---

# 12. FeedbackRedundancy != new information

One authoritative hit event may generate:

```text
particle
sound
screen shake
damage number
rumble
flash
```

These can improve salience, robustness or aesthetics.

But they need not add six new facts.

Therefore:

```text
MoreFeedbackCues != MoreAuthoritativeInformation.
```

This is important because `juice` often consists largely of redundant/amplified event representation.

---

# 13. Juiciness is an intervention family, not `good feel`

Kao's large action-RPG study compared four juiciness levels across 3,018 participants.

The reported pattern was not monotonic: both no-juice and extreme-juice conditions performed worse than medium/high conditions on multiple experience, motivation, play-time and performance measures.

This directly rejects:

```text
MoreJuice -> MoreValue.
```

Hicks et al.'s controlled visual-embellishment studies similarly found strong visual-appeal effects but more limited/context-specific effects on competence-related measures.

So GDF3 treats `Juiciness` as:

> a family of feedback amplification/redundancy treatments whose causal effects depend on amount, event, success contingency, modality and context.

Not a quality scalar.

---

# 14. `Juice` and `legibility` can oppose each other

Additional cues can make a hit obvious.

But extreme amplification can also:

```text
occlude targets
mask timing information
create visual clutter
misalign modalities
obscure causal attribution
```

Hence:

```text
FeedbackAmplification
```

and

```text
FeedbackLegibility
```

must remain independent.

B should test whether there is a more fundamental concept of **ActionOutcomeLegibility** beneath both.

---

# 15. Sense of agency is not simply delay detection

Agency research repeatedly shows temporal correspondence matters, but not alone.

Kumar, Manjaly & Miyapuram manipulated feedback about the validity of performed actions and found self-agency judgments changed with feedback validity/action-outcome congruence.

Wen and colleagues' continuous-control work shows performance/goal inference and action-feedback correspondence can both affect agency, especially under uncertain delayed feedback.

Tanaka & Imamizu's newer motor-learning work shows that during learning of a novel action-outcome mapping, agency judgments can shift from reliance on temporal contiguity toward learned structural correspondence.

Thus:

```text
SenseOfAgency != inverse(Delay)
```

as a universal law.

Game owns the structural coupling/evidence.
Human owns the agency mechanism/judgment.

---

# 16. ObjectiveControlQuality != SenseOfAgency

A controller can objectively perform well and produce intended state transitions while the Human reports weak agency.

Conversely, presentation/feedback can increase agency judgments without improving authoritative control.

A synthetic controller provides the strongest negative control:

```text
objective control accuracy = perfect
Human agency evidence = absent
```

Therefore:

```text
ObjectiveControlQuality
!= HumanSenseOfAgency.
```

This guard is inherited from GDF1 and strengthened by GDF3 evidence.

---

# 17. `Perceived responsiveness` is also Human-side

A participant may judge a system responsive because:

```text
input acknowledgement is immediate
feedback is predictable
action semantics are clear
intent support catches near-boundary commands
```

while authoritative consequence may occur later.

Conversely, raw latency can be low while:

```text
mapping feels unstable
inputs are eaten
feedback is ambiguous
animation/state transitions are unpredictable
```

Therefore:

```text
PerceivedResponsiveness != RawLatency.
```

GDF3 needs objective timing metrics and Human appraisal evidence separately.

---

# 18. IntentSupportMechanism != latency reduction

Input buffering is a decisive structural counterexample.

Suppose the button is pressed 40 ms before an action becomes legal.

Without buffering:

```text
attempt disappears
```

With an 80 ms buffer:

```text
attempt is retained and admitted when legal
```

Raw device/system latency is unchanged.

Yet participant intention is more often converted into the expected GameAction.

Thus:

```text
InputBuffering != LowLatency.
```

The same logic applies to mechanisms such as coyote time: they modify Game admission/transition semantics around timing boundaries rather than simply speeding the computer up.

---

# 19. Intent support is not automatically better control

Aggressive buffering/assistance can also:

```text
execute stale intent
reduce precision
mask timing distinctions
lower desired skill expression
```

So:

```text
MoreIntentSupport != MorePlayerValue.
```

The design target must state which intent distinctions should be preserved and which skill dimensions should remain expressible.

This connects back to frozen GDF1 `Capability != Expression`.

---

# 20. Turn-based games are an important negative control

If Game Feel were defined by sub-50-ms sensorimotor loops, chess-like symbolic interaction would fall outside the theory.

But a turn-based interface can still have:

```text
clear action admission
prompt acknowledgement
predictable transitions
legible consequence feedback
satisfying presentation
```

while millisecond continuous aiming sensitivity is irrelevant.

Therefore GDF3's eventual foundations must support:

```text
continuous sensorimotor coupling
```

and

```text
symbolic action-feedback coupling
```

without forcing one latency scale on both.

---

# 21. Provisional decomposition of `Game Feel`

A currently reconstructs the umbrella into four coupled layers.

## Layer GF-S — Structural Action Coupling

```text
ActionAvailability
ControlMapping / TransferFunction
ControlLocus
WorldDynamicsProfile
IntentSupport
```

## Layer GF-T — Temporal Coupling

```text
InputToActionLatency
ActionToOutcomeLatency
FeedbackLatency
TemporalJitter
TemporalPredictability
```

## Layer GF-F — Feedback Representation

```text
Contingency
Legibility
Redundancy
Amplification
MultimodalCoherence
```

## Layer GF-H — Human Outcomes

```text
PerceivedResponsiveness
SenseOfAgency
ImpactFeel
Exhilaration
other experience/value targets
```

The first three are Game/System/Media interface structures.
The last is Human evidence.

This stack is provisional and B must attack it.

---

# 22. `Impact/Weight` provisional reconstruction

Rather than creating a `Weight` Game property, A proposes that Human impact/weight appraisal may consume a configuration including:

```text
WorldDynamics
TemporalShaping
OutcomeMagnitude
FeedbackAmplification
MultimodalCoherence
Expectation / learned mapping
```

This avoids identities such as:

```text
more screen shake = heavier
more damage = heavier
slower movement = heavier
```

Any may contribute; none is universal.

---

# 23. Owner boundary after A

## Game owns

```text
Action availability/admission
ControlMapping / ControlLocus
Authoritative world dynamics/consequence timing
which Game event/state distinction feedback refers to
intent-support semantics
```

## Media owns

```text
visual/audio/haptic encoding
screen shake/particles/sound presentation
multimodal signal timing and salience
```

## Human owns

```text
perceived responsiveness
sense of agency
impact/weight feeling
exhilaration
presence/immersion
subjective PlayerValue
```

Game research owns the coupling hypotheses and evidence contracts, not all mechanisms.

---

# 24. Strongest A anti-collapse laws

```text
GameFeel != OneVariable

ActionAvailability
!= InputToActionLatency
!= ActionToOutcomeLatency
!= FeedbackLatency

MeanLatency != Jitter != TemporalPredictability

LowLatency != GoodGameFeel
LowLatency != PerceivedResponsiveness by identity

ObjectiveControl != SenseOfAgency != PerceivedResponsiveness

FeedbackContingency
!= FeedbackLegibility
!= FeedbackRedundancy
!= FeedbackAmplification
!= MultimodalCoherence

MoreFeedback != MoreInformation
MoreJuice != BetterExperience

WorldDynamics != Camera/AvatarMotion != ImpactFeel

IntentSupport != LatencyReduction

TurnBasedResponsiveness != ContinuousAimLatencyRequirement

SyntheticControlPerformance != HumanGameFeelEvidence
```

---

# 25. Novelty ledger after A

## N0 external pressure

```text
latency effects vary by action/game interaction class;
FPS latency can affect performance and QoE;
feedback validity/congruence can alter agency judgments;
agency under learned mappings depends on more than temporal contiguity;
visual screen shake can alter reported agency/exhilaration;
juiciness has non-monotonic empirical effects;
visual embellishment effects are outcome/context specific.
```

## N1 Ordivon reconstruction candidates

```text
A1 staged timing separation:
Input→Action / Action→Outcome / Outcome→Feedback

A2 TemporalCoupling split:
mean latency / jitter / predictability

A3 Feedback five-way split:
contingency / legibility / redundancy / amplification / multimodal coherence

A4 GameFeel four-layer reconstruction:
Structural / Temporal / Feedback / Human outcome

A5 IntentSupport != LatencyReduction

A6 ImpactFeel as cross-layer Human inference target rather than Game property
```

## N2

```text
NONE.
```

## N3

```text
NONE.
```

---

# 26. Foundation reopen audit

No A case requires a new R29/GDF0/GDF1 primitive.

Timing is F5/state-transition structure.
Feedback/currentness is F6/F7 plus Media representation.
World dynamics are F4/F9 relations/transitions.
Human agency/impact are external owner evidence targets.

Thus:

```text
ACS reopen = NOT TRIGGERED
GDF0 reopen = NOT TRIGGERED
R29 reopen = NOT TRIGGERED
```

---

# 27. Exact GDF3-B frontier

# **GDF3-B — Feedback / Responsiveness Mechanism Tournament & Matched Dissociation**

B should attack the A four-layer model instead of adding more adjectives.

Questions:

```text
1. Is staged timing really necessary, or can a smaller causal timing representation cover all cases?
2. Does TemporalPredictability earn a distinct construct from latency distribution + learned mapping?
3. Is FeedbackLegibility reducible to Media perception, or does Game need ActionOutcomeLegibility as a cross-owner relation?
4. Can feedback be highly legible yet produce poor agency/impact, and highly amplified yet low legibility?
5. How do fixed delay, jitter, prediction/compensation and action-class sensitivity interact?
6. Can intent support improve perceived responsiveness while reducing intended skill expression?
7. What exactly makes hit stop / camera impulse / sound / rumble combine into impact rather than clutter?
8. Can identical authoritative world dynamics produce distinct ImpactFeel under matched presentation transformations?
9. Can identical presentation produce distinct feel under changed world/control dynamics?
10. Does turn-based/symbolic play require the same core as continuous sensorimotor play or only a subset?
11. Does any case trigger ACS-PRC-1/2 or reveal a missing action-feedback relation?
```

B should use matched 2×2/ablation-style probes and primary evidence rather than another terminology expansion.

---

# Primary evidence anchors emphasized in A

- Claypool (2005), *The effect of latency on user performance in Real-Time Strategy games*, Computer Networks 49(1):52–70, DOI 10.1016/j.comnet.2005.04.008.
- Xu, Liu & Claypool (2022), *The Effects of Network Latency on Counter-strike: Global Offensive Players*, QoMEX 2022, DOI 10.1109/QoMEX55416.2022.9900915.
- Schmid et al. (2023), *Small Latency Variations Do Not Affect Player Performance in First-Person Shooters*, ACM IMX 2023.
- Wen, Yamashita & Asama (2015), *The Sense of Agency during Continuous Action*, PLOS ONE 10:e0125226, DOI 10.1371/journal.pone.0125226.
- Kumar, Manjaly & Miyapuram (2014), *Feedback about action performed can alter the sense of self-agency*, Frontiers in Psychology 5:145, DOI 10.3389/fpsyg.2014.00145.
- Kao (2020), *The effects of juiciness in an action RPG*, Entertainment Computing 34:100359, DOI 10.1016/j.entcom.2020.100359.
- Hicks et al. (2019), *Juicy Game Design*, CHI PLAY 2019, DOI 10.1145/3311350.3347171.
- Lin & Tanaka (2026), *Influences of visual effects on sense of agency in video games*, Royal Society Open Science 13:251930, DOI 10.1098/rsos.251930.
- Tanaka & Imamizu (2025), *Sense of agency for a new motor skill emerges via the formation of a structural internal model*, Communications Psychology 3:70, DOI 10.1038/s44271-025-00240-7.
