* {
  box-sizing: border-box;
}

:root {
  --bg: #050816;
  --bg-soft: #0c1226;
  --panel: rgba(15, 23, 42, 0.85);
  --purple: #7c3aed;
  --cyan: #22d3ee;
  --pink: #f472b6;
  --gold: #fbbf24;
  --text: #ecf3ff;
  --muted: #a8b6d5;
  --border: rgba(255, 255, 255, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(124, 58, 237, 0.18), transparent 30%),
    var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

button,
input {
  font: inherit;
}

.bg-grid {
  position: fixed;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: radial-gradient(circle at center, black 55%, transparent 100%);
  pointer-events: none;
  z-index: 0;
}

.orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.42;
  pointer-events: none;
  z-index: 0;
}

.orb-one {
  width: 250px;
  height: 250px;
  background: rgba(124, 58, 237, 0.7);
  top: 80px;
  left: 5%;
  animation: float 12s ease-in-out infinite;
}

.orb-two {
  width: 300px;
  height: 300px;
  background: rgba(34, 211, 238, 0.5);
  right: 8%;
  top: 220px;
  animation: float 14s ease-in-out infinite alternate;
}

.orb-three {
  width: 180px;
  height: 180px;
  background: rgba(244, 114, 182, 0.45);
  bottom: 100px;
  left: 40%;
  animation: float 11s ease-in-out infinite;
}

.topbar,
.hero,
.games,
.features,
.signup {
  position: relative;
  z-index: 1;
}

.topbar {
  max-width: 1220px;
  margin: 0 auto;
  padding: 24px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 2px;
}

.logo-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  box-shadow: 0 0 16px rgba(34, 211, 238, 0.85);
}

.logo-text {
  font-weight: 800;
  letter-spacing: 0.2em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav a {
  text-decoration: none;
  color: var(--muted);
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--text);
}

.nav-btn,
.primary-btn,
.secondary-btn,
.signup-form button {
  border: none;
  border-radius: 999px;
  padding: 14px 22px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.nav-btn,
.primary-btn,
.signup-form button {
  background: linear-gradient(135deg, var(--purple), var(--cyan));
  color: white;
  box-shadow: 0 16px 30px rgba(124, 58, 237, 0.35);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border: 1px solid var(--border);
}

.nav-btn:hover,
.primary-btn:hover,
.secondary-btn:hover,
.signup-form button:hover {
  transform: translateY(-2px) scale(1.01);
}

.hero {
  max-width: 1220px;
  margin: 0 auto;
  padding: 50px 20px 30px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 30px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 0.3em;
  color: var(--cyan);
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 16px;
}

.hero-copy h1 {
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(3rem, 6vw, 6rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.hero-copy h1 span {
  color: var(--cyan);
  text-shadow: 0 0 25px rgba(34, 211, 238, 0.5);
}

.subtext {
  max-width: 600px;
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 24px 0 0;
}

.cta-row {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.stats {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.stats div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stats strong {
  font-size: 1.6rem;
  font-family: 'Orbitron', sans-serif;
}

.stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-visual {
  position: relative;
  min-height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-card {
  position: relative;
  width: min(400px, 90%);
  height: 480px;
  border-radius: 30px;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(59, 130, 246, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 25px 80px rgba(124, 58, 237, 0.35), inset 0 0 30px rgba(34, 211, 238, 0.08);
  overflow: hidden;
  animation: pulseGlow 4s ease-in-out infinite;
}

.badge {
  position: absolute;
  top: 20px;
  left: 22px;
  background: rgba(124, 58, 237, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  padding: 10px 14px;
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: white;
}

.glow-ring {
  position: absolute;
  width: 230px;
  height: 230px;
  border: 1.5px solid rgba(34, 211, 238, 0.65);
  border-radius: 50%;
  right: 45px;
  top: 70px;
  box-shadow: 0 0 50px rgba(34, 211, 238, 0.3);
}

.character-silhouette {
  position: absolute;
  right: 70px;
  bottom: 40px;
  width: 220px;
  height: 300px;
  background: linear-gradient(180deg, rgba(124, 58, 237, 0.15), rgba(34, 211, 238, 0.4));
  clip-path: polygon(42% 0%, 58% 0%, 80% 18%, 86% 50%, 100% 100%, 0% 100%, 10% 50%, 20% 18%);
  filter: drop-shadow(0 0 35px rgba(124, 58, 237, 0.45));
}

.card-meta {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 22px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.floating-panel {
  position: absolute;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  border-radius: 14px;
  padding: 10px 16px;
  font-weight: 700;
  animation: bob 5s ease-in-out infinite;
}

.panel-one {
  left: 10px;
  bottom: 180px;
}

.panel-two {
  right: 20px;
  bottom: 100px;
  animation-delay: 1.2s;
}

.games,
.features,
.signup {
  max-width: 1220px;
  margin: 0 auto;
  padding: 70px 20px 20px;
}

.section-heading {
  margin-bottom: 30px;
}

.section-heading h2,
.feature-copy h2,
.signup-copy h2 {
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.game-box {
  background: linear-gradient(180deg, rgba(10, 14, 28, 0.9), rgba(16, 24, 40, 0.9));
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 24px 22px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: inset 0 0 18px rgba(255, 255, 255, 0.02);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.game-box:hover {
  transform: translateY(-6px);
  border-color: rgba(34, 211, 238, 0.35);
}

.game-box-1 { box-shadow: inset 0 0 30px rgba(124, 58, 237, 0.08); }
.game-box-2 { box-shadow: inset 0 0 30px rgba(34, 211, 238, 0.08); }
.game-box-3 { box-shadow: inset 0 0 30px rgba(244, 114, 182, 0.08); }

.game-icon {
  font-size: 2.4rem;
  margin-bottom: 16px;
}

.game-box h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
}

.game-box p,
.feature-item p,
.signup-copy p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.features {
  display: grid;
  gap: 30px;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-item {
  background: rgba(9, 14, 26, 0.9);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 24px;
}

.feature-item span {
  display: inline-block;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: var(--cyan);
  font-weight: 700;
  margin-bottom: 12px;
}

.feature-item h3 {
  margin: 0 0 8px;
  font-size: 1.4rem;
}

.signup-card {
  padding: 32px;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.14), rgba(34, 211, 238, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: center;
}

.signup-form {
  display: flex;
  align-items: stretch;
  gap: 12px;
  flex-wrap: wrap;
}

.signup-form input {
  flex: 1 1 220px;
  min-height: 56px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  padding: 0 18px;
}

.signup-form input::placeholder {
  color: rgba(236, 243, 255, 0.5);
}

.status-message {
  margin-top: 16px;
  min-height: 24px;
  color: var(--cyan);
  font-weight: 600;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 25px 80px rgba(124, 58, 237, 0.28), inset 0 0 30px rgba(34, 211, 238, 0.08); }
  50% { box-shadow: 0 25px 90px rgba(34, 211, 238, 0.3), inset 0 0 40px rgba(124, 58, 237, 0.12); }
}

@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-18px) scale(1.05); }
}

@media (max-width: 900px) {
  .nav {
    display: none;
  }

  .hero,
  .signup-card {
    grid-template-columns: 1fr;
  }

  .game-grid,
  .feature-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .topbar {
    padding-top: 18px;
  }

  .logo-text {
    letter-spacing: 0.08em;
    font-size: 0.8rem;
  }

  .hero {
    padding-top: 20px;
  }

  .hero-copy h1 {
    max-width: 12ch;
  }

  .cta-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
