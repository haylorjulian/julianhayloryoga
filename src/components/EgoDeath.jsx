import { useEffect } from 'react';
import '../styles/EgoDeath.css';

/* Source-provenance tags used throughout the guide */
const PR = () => <span className="egodeath-tag pr">PR</span>;
const OT = () => <span className="egodeath-tag">Other</span>;

/**
 * EgoDeath
 * The "Preparing for an Ego-Death Journey" harm-reduction guide,
 * rendered as a long-form editorial document styled with the site's
 * design tokens. Reached only via the password gate at /egodeath.
 */
function EgoDeath() {
  useEffect(() => {
    // This is a scrolling document, not a snap section — disable the
    // global mandatory scroll-snap while the guide is mounted.
    document.documentElement.classList.add('no-snap');
    window.scrollTo(0, 0);
    return () => document.documentElement.classList.remove('no-snap');
  }, []);

  return (
    <div className="egodeath">
      <div className="egodeath-wrap">
        {/* ─── Masthead ─── */}
        <header>
          <h1>Ego Death Preparation Guide</h1>
          <p className="egodeath-thesis">
            Preparation is the single biggest lever you control over how a
            high-dose psilocybin session unfolds. Practise one thing above all:
            to let go.
          </p>
        </header>

        {/* ─── Executive summary ─── */}
        <section>
          <p className="egodeath-kicker">The short version</p>
          <h2>If you only read one thing</h2>
          <div className="egodeath-summary">
            <ul>
              <li>
                <strong>Preparation shapes the experience as much as the molecule does.</strong>{' '}
                Mindset (“set”) and environment (“setting”) govern how it goes.
                Early research that ignored them produced far more panic; adding
                preparation and support sharply reduced it. <PR />
              </li>
              <li>
                <strong>The core skill is surrender, not control.</strong> The
                most-tested orientation reduces to three words:{' '}
                <em>Trust. Let Go. Be Open.</em> Ego death feels like dying or
                dissolving — the instruction is to move towards it, not fight it. <OT />
              </li>
              <li>
                <strong>Fear is expected and workable.</strong> “Difficult is not
                the same as bad.” The plan for a hard moment is to turn towards it
                with your spacekeeper, not escape it. <OT />
              </li>
              <li>
                <strong>Some conditions and drugs make this genuinely unsafe</strong>{' '}
                — a personal or family history of psychosis or bipolar I, certain
                heart conditions, and specific drugs (lithium and tramadol are the
                sharpest flags). Clear these before anything else. <PR />
              </li>
              <li>
                <strong>The journey doesn’t end when the drug does.</strong>{' '}
                Integration is where a peak experience becomes durable change.
                Plan it in advance. <OT />
              </li>
            </ul>
          </div>
        </section>

        {/* ─── Part 1 ─── */}
        <section>
          <p className="egodeath-kicker">Part 1</p>
          <h2>Psychological preparation — the heart of it</h2>
          <p>
            This is where most of your real preparation happens. The molecule
            creates the opening; your mindset determines what you do with it.
          </p>

          <h3>The one orientation to internalise: Trust · Let Go · Be Open</h3>
          <p>
            Developed by psychologist Bill Richards and used with essentially
            every Johns Hopkins participant, the “flight instructions” are the
            most battle-tested framework for these journeys. <OT />
          </p>
          <ul>
            <li>
              <strong>Trust</strong> your mind, body, the process, and your
              spacekeeper. You will not be left alone; physical safety is handled
              so your attention can go fully inward.
            </li>
            <li>
              <strong>Let Go.</strong> When you feel like you’re “dying, melting,
              dissolving, exploding” — the classic language of ego death — allow
              it. Resistance turns intensity into panic; surrender turns it into
              insight.
            </li>
            <li>
              <strong>Be Open.</strong> Meet whatever arises — beautiful, strange,
              or frightening — with curiosity instead of a verdict.
            </li>
          </ul>
          <div className="egodeath-callout">
            <span className="egodeath-callout-label">Why this works</span>
            <p>
              Ego dissolution is real and measurable, and it scales with dose.
              But the <em>distressing</em> version — what researchers literally
              call “dread of ego dissolution” — does <strong>not</strong> rise
              much with dose; it rises with resistance and context. The same
              neurochemical state can be experienced as terror or transcendence,
              and your stance towards it is the switch. <PR />
            </p>
          </div>

          <h3>Working with fear and difficult imagery</h3>
          <ul>
            <li>
              <strong>Move towards it.</strong> “If you see a monster, look it in
              the eye and move towards it. Ask it: <em>what are you doing in my mind?</em>”
              Frightening images tend to transform or dissolve when approached. <OT />
            </li>
            <li>
              <strong>Go into discomfort, not around it.</strong> Locate a pain or
              emotion, look at it directly. Avoidance amplifies; attention often
              releases.
            </li>
            <li>
              <strong>Nausea is temporary.</strong> Common on the come-up.
              “Embrace it, then send it on its way.”
            </li>
            <li>
              <strong>Difficult is not bad.</strong> A hard passage is frequently
              the most valuable part — grief moving, a fear faced, a defence
              softening.
            </li>
          </ul>

          <h3>Setting an intention (without gripping it)</h3>
          <ul>
            <li>
              <strong>Do</strong> clarify <em>why</em> — a question you’re living
              with, something to face, or simple openness. Write it down a few
              days before; one sentence is enough. <PR />
            </li>
            <li>
              <strong>Don’t</strong> script an outcome. Hold the intention like a
              compass bearing, then release it at the door. The experience rarely
              delivers what you demanded; it often delivers what you needed.
            </li>
          </ul>

          <h3>What ego death actually feels like</h3>
          <p>
            Knowing the shape in advance is itself protective — surprise is what
            breeds panic.
          </p>
          <ul>
            <li>
              A high dose can occasion <strong>complete dissolution of self</strong>,
              a sense of <strong>unity with everything</strong>, altered time and
              space, and strong emotion from bliss to fear. <PR />
            </li>
            <li>
              It can feel like <strong>dying</strong> — and people who move through
              it often describe it afterwards as among the most meaningful
              experiences of their lives. The feeling of dying is not a sign
              something is wrong. <PR />
            </li>
            <li>
              <strong>Waves.</strong> Intensity comes and goes; nothing is
              permanent. And <strong>you will come back</strong> — the self
              reassembles as the drug wears off.
            </li>
          </ul>
        </section>

        {/* ─── Part 2 ─── */}
        <section>
          <p className="egodeath-kicker">Part 2</p>
          <h2>Set &amp; setting — the container</h2>
          <div className="egodeath-callout">
            <span className="egodeath-callout-label">Why this is load-bearing</span>
            <p>
              The most robust lesson of 70 years of research: outcome is governed
              by <em>set</em> (mindset, intention) and <em>setting</em>
              (environment), not the dose alone. Research that added preparation
              and a safe, supportive setting saw sharply fewer panic and paranoid
              reactions. <PR />
            </p>
          </div>
          <h3>The container, in practice</h3>
          <ul>
            <li>
              <strong>Internal set:</strong> arrive rested, unhurried, unpressured,
              and genuinely willing — never obligated. Resolve ambivalence{' '}
              <em>before</em> dosing.
            </li>
            <li>
              <strong>Physical setting:</strong> a safe, familiar indoor space you
              won’t be interrupted in. Somewhere to lie down, blankets, soft light,
              bathroom and water nearby.
            </li>
            <li>
              <strong>Eyeshades and headphones</strong> are the standard clinical
              setup — they turn attention inward and let the music carry the
              experience. <OT />
            </li>
            <li>
              <strong>The spacekeeper relationship:</strong> trust built{' '}
              <em>before</em> the session is itself a named safety measure. Agree
              in advance on signals, consent for any reassuring touch, and that
              their role is to support, not direct. <PR />
            </li>
            <li>
              The trusted model (Zendo Project): <strong>create a safe space, sit
              rather than steer, “talk through, not down,” and remember difficult
              is not bad.</strong> You will not be left alone while the drug is
              active. <OT />
            </li>
          </ul>
        </section>

        {/* ─── Part 3 ─── */}
        <section>
          <p className="egodeath-kicker">Part 3</p>
          <h2>Logistical preparation — day by day</h2>
          <div className="egodeath-tablewrap">
            <table>
              <thead>
                <tr>
                  <th>When</th>
                  <th>Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="When">One month before</td>
                  <td data-label="Focus">
                    Read <em>How to Change Your Mind: The New Science of
                    Psychedelics</em> by Michael Pollan. Listen to Andrew Huberman’s
                    podcast episodes on psychedelics:{' '}
                    <a
                      href="https://open.spotify.com/episode/7FKSmPIZBNbSgto4eWaz2m?si=8865e6968d044069"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      episode 1
                    </a>{' '}
                    and{' '}
                    <a
                      href="https://open.spotify.com/episode/1aIpXK0HyrauQIX58jDP2P?si=45f15d71243e4108"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      episode 2
                    </a>
                    .
                  </td>
                </tr>
                <tr>
                  <td data-label="When">2–4 weeks before</td>
                  <td data-label="Focus">
                    Share any medication you are currently on. Begin winding down
                    stimulation (less news, screens, conflict).
                  </td>
                </tr>
                <tr>
                  <td data-label="When">2 weeks before</td>
                  <td data-label="Focus">
                    Start journaling and meditating (at least 15 minutes a day).
                    Begin to set your intentions — keep narrowing them down so they
                    are clear and deep-rooted in your mind. Less is more;{' '}
                    <strong>3 intentions maximum</strong>.
                  </td>
                </tr>
                <tr>
                  <td data-label="When">1 week before</td>
                  <td data-label="Focus">
                    Confirm logistics. <strong>Stop recreational drug use</strong>;
                    reduce alcohol and cannabis. Prioritise sleep.
                  </td>
                </tr>
                <tr>
                  <td data-label="When">Day before</td>
                  <td data-label="Focus">
                    Light, clean meals; no alcohol; early night. Lay out what
                    you’ll bring. Low-stimulation evening.
                  </td>
                </tr>
                <tr>
                  <td data-label="When">Morning of</td>
                  <td data-label="Focus">
                    Light breakfast or a modest fast (below). Hydrate. Arrive early
                    and unhurried.
                  </td>
                </tr>
                <tr>
                  <td data-label="When">Next day onward</td>
                  <td data-label="Focus">Begin integration.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Diet, sleep, body</h3>
          <ul>
            <li>
              <strong>A light or empty stomach speeds and smooths onset</strong>{' '}
              (~20–30 min vs. up to ~90 min full) and reduces a queasy come-up.
              Follow your spacekeeper’s specific guidance. <OT />
            </li>
            <li>
              <strong>Sleep the two nights before</strong> is one of the most
              underrated preparations — fatigue lowers emotional resilience.
            </li>
            <li>
              Wear <strong>soft, warm, loose clothing</strong>; body temperature
              drops when lying still. Bring layers.
            </li>
          </ul>

          <h3>Session-day flow (typical high-dose arc, ~4–6 hours)</h3>
          <div className="egodeath-tablewrap">
            <table className="egodeath-phase">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Timing</th>
                  <th>What it’s like</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Phase">Onset / come-up</td>
                  <td data-label="Timing">~20–60 min</td>
                  <td data-label="What it’s like">
                    Effects begin; possible nausea, body-load, rising intensity,
                    anxiety. Settle, breathe, let go.
                  </td>
                </tr>
                <tr>
                  <td data-label="Phase">Ascent</td>
                  <td data-label="Timing">~40–90 min</td>
                  <td data-label="What it’s like">
                    Perceptions intensify; emotions and time distort. Keep
                    surrendering.
                  </td>
                </tr>
                <tr>
                  <td data-label="Phase">Peak / ego dissolution</td>
                  <td data-label="Timing">~90 min–3 hr</td>
                  <td data-label="What it’s like">
                    The core. Strongest effects; possible dissolution of self,
                    unity, dying/rebirth. Trust, let go, be open.
                  </td>
                </tr>
                <tr>
                  <td data-label="Phase">Descent / return</td>
                  <td data-label="Timing">~3–4 hr</td>
                  <td data-label="What it’s like">
                    Effects soften; the self re-forms; often emotional release and
                    tenderness.
                  </td>
                </tr>
                <tr>
                  <td data-label="Phase">Landing / afterglow</td>
                  <td data-label="Timing">~4–6 hr</td>
                  <td data-label="What it’s like">
                    Gentle return to ordinary consciousness; reflective, often warm
                    and open.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="egodeath-fine">
            Timings are approximate: onset ~20–40 min, peak ~2 hr, total ~4–6 hr
            (longer at high doses). <OT /> &nbsp;<strong>Aftercare:</strong> no
            driving, work, or major decisions the rest of the day — arrange this in
            advance.
          </p>
        </section>

        {/* ─── My role ─── */}
        <section>
          <p className="egodeath-kicker">Your spacekeeper</p>
          <h2>My role during this journey</h2>
          <p>
            I am a spacekeeper. My responsibility is to hold the space and to be
            with you for the whole of it — from the first moments of the come-up
            to the gentle landing at the end. The preparation you’ve read here is
            part of my role; the other part happens on the day, quietly, beside
            you.
          </p>
          <div className="egodeath-callout">
            <span className="egodeath-callout-label">What holding space means</span>
            <p>
              I am not a guide, and it is not my place to steer or interpret your
              experience. Your journey is your own. My role is a silent one — to
              hold a steady, safe container so that you can let go completely and
              let the experience unfold as it needs to.
            </p>
          </div>
          <p>
            In practice, that means I prepare the potion, I set the space, and I
            remove any risk of interruption so nothing pulls you back out. I am
            there to support you if you need anything — calmly, composedly, without
            imposing myself on what’s happening within you.
          </p>
          <p>
            Having moved through this experience myself, and being sensitive by
            nature, I am attuned to the small things that can unsettle a journey —
            a sound, a shift in the room, a moment of doubt. I notice them and
            quietly tend to them before they reach you. My commitment is simple: to
            make this as comfortable, safe, and uncompromised an experience as it
            can possibly be.
          </p>
        </section>

        {/* ─── Part 4 ─── */}
        <section>
          <p className="egodeath-kicker">Part 4</p>
          <h2>Clinical safety &amp; screening</h2>
          <div className="egodeath-callout egodeath-safety">
            <span className="egodeath-callout-label">Non-negotiable — screen first</span>
            <p>
              Placed later here, but first in importance. These are the safeguards
              named in the foundational safety guidelines for human hallucinogen
              research. <strong>Screen first; prepare second.</strong> <PR />
            </p>
          </div>

          <h3>Who should not do this</h3>
          <ul>
            <li>
              <strong>Personal or family history of psychosis, schizophrenia, or
              bipolar I</strong> — the primary psychiatric exclusion in trials;
              psychedelics can rarely trigger prolonged psychosis in vulnerable
              people. The single most important screen. <PR />
            </li>
            <li>
              <strong>Serious or unstable cardiovascular disease / uncontrolled
              high blood pressure</strong> — psilocybin modestly raises heart rate
              and blood pressure. <PR />
            </li>
            <li>
              <strong>Pregnancy or breastfeeding</strong>, and other severe or
              unstable psychiatric conditions (clinical judgement). <PR />
            </li>
          </ul>

          <h3>Medication interactions — review every substance with a clinician</h3>
          <p className="egodeath-fine">
            Do <strong>not</strong> start or stop any prescribed medication on your
            own. Some require a supervised, gradual taper and can be dangerous to
            discontinue abruptly. This is a clinician’s call.
          </p>
          <div className="egodeath-tablewrap">
            <table>
              <thead>
                <tr>
                  <th>Drug</th>
                  <th>Status</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Drug">Lithium</td>
                  <td data-label="Status">Hard contraindication</td>
                  <td data-label="Why">
                    Increased risk of seizures &amp; delirium with psychedelics.
                    Oregon’s program bars serving anyone who took it within 30 days. <OT />
                  </td>
                </tr>
                <tr>
                  <td data-label="Drug">Tramadol</td>
                  <td data-label="Status">Contraindicated</td>
                  <td data-label="Why">
                    Serotonergic; seizures and serotonin-toxicity risk reported. <OT />
                  </td>
                </tr>
                <tr>
                  <td data-label="Drug">MAOIs</td>
                  <td data-label="Status">Serious — avoid</td>
                  <td data-label="Why">
                    Only ever combined under expert supervision at dramatically
                    reduced doses. <OT />
                  </td>
                </tr>
                <tr>
                  <td data-label="Drug">SSRIs / SNRIs</td>
                  <td data-label="Status">Mainly blunting</td>
                  <td data-label="Why">
                    Chronic use tends to mute or flatten effects (desensitised
                    5-HT2A) — an ego-death dose may not land. Adjusting is a
                    supervised decision, never DIY. <OT />
                  </td>
                </tr>
                <tr>
                  <td data-label="Drug">Stacked serotonergics (3+)</td>
                  <td data-label="Status">Caution</td>
                  <td data-label="Why">
                    Raise odds of a flat experience and, in some combos, toxicity.
                    Disclose supplements (St John’s Wort, 5-HTP). <OT />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Informed consent</h3>
          <p>
            Before dosing you should genuinely understand and agree to: the
            intensity and unpredictability of the experience, the possibility of
            intense fear or “dying,” the aftercare plan, your right to stop
            participating at any point beforehand, and the spacekeeper’s role and
            limits.
          </p>
        </section>

        {/* ─── So what ─── */}
        <section>
          <p className="egodeath-kicker">So what</p>
          <h2>Practical implications</h2>
          <ul>
            <li>
              <strong>Spend your preparation energy on mindset and screening, in
              that order of safety and effort.</strong> A screened-safe person with
              a surrender orientation and a trusted spacekeeper has stacked the odds
              heavily in their favour.
            </li>
            <li>
              <strong>The “let go” skill is trainable.</strong> Meditation,
              breathwork, and honest pre-session conversations are the practice reps.
            </li>
            <li>
              <strong>Design the day, not just the session.</strong> Fasting, sleep,
              clothing, aftercare, and “nothing scheduled after” are cheap,
              high-impact moves.
            </li>
            <li>
              <strong>Book integration before you dose.</strong> Deciding afterwards
              usually means it doesn’t happen.
            </li>
          </ul>
        </section>

        <hr className="egodeath-rule" />

        {/* ─── Sources ─── */}
        <section className="egodeath-sources">
          <h2>Sources</h2>
          <h3>Peer-reviewed</h3>
          <p>
            Griffiths RR, et al. (2006). <em>Psilocybin can occasion mystical-type
            experiences…</em> Psychopharmacology.
          </p>
          <p>
            Johnson MW, Richards WA, Griffiths RR (2008). <em>Human hallucinogen
            research: guidelines for safety.</em> J. Psychopharmacology
            22(6):603–620.
          </p>
          <p>
            Nour MM, et al. (2016). <em>Ego-dissolution and psychedelics:
            validation of the EDI.</em> Frontiers in Human Neuroscience.
          </p>
          <p>
            <em>Dose–response relationships of psilocybin-induced subjective
            experiences</em> (2021). PMC.
          </p>
          <h3>Other</h3>
          <p>
            Richards WA. <em>Flight instructions for psilocybin journeys.</em> Maps
            of the Mind / Trippingly.
          </p>
          <p>
            Zendo Project — Four principles of psychedelic harm reduction &amp;
            Companion Guide.
          </p>
          <p>
            <em>Psilocybin: a clinician’s guide to pharmacological interactions.</em>{' '}
            Psychiatric Times.
          </p>
          <p>
            <em>Contraindications for psilocybin therapy.</em> Fractal Health Oregon.
          </p>
          <p>MAPS Psychedelic Integration Workbook &amp; Integration Station.</p>
        </section>
      </div>
    </div>
  );
}

export default EgoDeath;
