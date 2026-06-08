import { useState, ChangeEvent } from "react";
import { Cpu, Power, RefreshCw, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function TheCraft() {
  const [crankAngle, setCrankAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [powerMode, setPowerMode] = useState<"manual" | "usbc">("manual");

  // Handles manual scrubbing/dragging of the crank handle
  const handleCrankChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (powerMode === "manual") {
      setCrankAngle(parseFloat(e.target.value));
    }
  };

  // Turn auto-rotation on/off as if turning on the USB-C brushless motor
  const toggleAutoMotor = () => {
    if (powerMode === "manual") {
      setPowerMode("usbc");
      setIsRotating(true);
    } else {
      setPowerMode("manual");
      setIsRotating(false);
    }
  };

  // Frame tick animation for automatic rotation
  useState(() => {
    let interval: NodeJS.Timeout;
    if (isRotating && powerMode === "usbc") {
      interval = setInterval(() => {
        setCrankAngle((prev) => (prev + 3) % 360);
      }, 30);
    }
    return () => clearInterval(interval);
  });

  // Calculate wing segment heights based on crank angle and sine offset
  const getWingPoint = (index: number, side: "left" | "right") => {
    const rad = (crankAngle * Math.PI) / 180;
    // Layered wave propagation. Outer segments lag behind the inner segments.
    const waveOffset = index * 0.7; 
    const amplitude = 28 - index * 3.5; // Wings taper
    const height = Math.sin(rad - waveOffset) * amplitude;
    const xPos = 150 + (side === "left" ? -index * 32 : index * 32);
    const yPos = 160 + height;
    return { x: xPos, y: yPos };
  };

  const getCamProfileY = (index: number) => {
    const rad = (crankAngle * Math.PI) / 180;
    const waveOffset = index * 0.7;
    return 295 + Math.sin(rad - waveOffset) * 14;
  };

  return (
    <section id="craft-section" className="py-20 md:py-32 bg-cream relative">
      <div className="absolute inset-0 linen-bg opacity-30 mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24" id="craft-heading">
          <span className="font-mono text-[11px] font-semibold text-soft-ocean uppercase tracking-widest mb-3 block">
            Inside the Mechanism
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight">
            How the <span className="italic">wood awakens</span>.
          </h2>
          <p className="font-sans text-mocha/80 text-sm sm:text-base leading-relaxed font-light mt-4">
            An automaton is the union of geometry and organic poetry. By aligning wooden cams, drive rods, and leather hinges, rotational energy is converted into a continuous, seamless wave.
          </p>
        </div>

        {/* Content & Simulation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Educational Text */}
          <div className="lg:col-span-6 space-y-12" id="craft-educational-text">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-wood font-serif text-sm font-bold">
                  1
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal">The Camshaft Sequence</h3>
              </div>
              <p className="font-sans text-mocha hover:text-charcoal transition-soft text-sm sm:text-base leading-relaxed font-light pl-11">
                Deep inside the solid walnut base lies a hand-turned steel shaft lined with organic plywood cams. Each cam is shaped like an egg, offset by exactly twenty-six degrees from its neighbor. As they rotate, they push copper leaf springs upward in an elegant staggered wave.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-wood font-serif text-sm font-bold">
                  2
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal">The Whispering Gears</h3>
              </div>
              <p className="font-sans text-mocha hover:text-charcoal transition-soft text-sm sm:text-base leading-relaxed font-light pl-11">
                There are no cold, screeching metal screws inside our gears. Each tooth is individually carved from sugar maple—a wood prized by violin makers for its strength and glassy friction. Polished with native beeswax, the gears slide together with a quiet soft whisper.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-wood font-serif text-sm font-bold">
                  3
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal">Dual-Power Grace (Type-C)</h3>
              </div>
              <p className="font-sans text-mocha hover:text-charcoal transition-soft text-sm sm:text-base leading-relaxed font-light pl-11">
                While every purchase retains a solid brass crank handle for the intimate joy of manual play, we have embedded an ultra-quiet brushless electric motor and smart charging controller inside the base. Simply charge with any USB-C cable for 12 hours of cord-free, peaceful automatic glide on your mantle.
              </p>
            </div>

            {/* Tactile Highlights panel with a pastel blush feel */}
            <div className="p-6 rounded-2xl bg-soft-pink/40 border border-soft-blush/20 flex gap-4 items-start" id="craft-specs-panel">
              <Power className="w-5 h-5 text-clay shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-medium text-charcoal">The USB-C Recess</h4>
                <p className="font-sans text-xs text-mocha/80 leading-relaxed mt-1">
                  Our charging inset is neatly counter-bored directly into the walnut end-grain. We cover it with a small flush-magnetic wood cap when running on battery to preserve a clean, completely wire-free appearance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Mechanics Simulator */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-linen/70 shadow-xl" id="craft-simulator-container">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-linen/50">
              <div>
                <h4 className="font-serif text-base font-semibold text-charcoal">Kinetic Joint Simulator</h4>
                <p className="font-mono text-[10px] text-wood uppercase tracking-wider mt-0.5">Tactile mechanical rendering</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setPowerMode("manual");
                    setIsRotating(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider cursor-pointer transition-soft ${powerMode === "manual" ? "bg-linen text-charcoal font-semibold" : "bg-sand/30 text-mocha/60 hover:text-mocha"}`}
                  id="simulator-manual-mode"
                >
                  Manual Crank
                </button>
                <button
                  onClick={toggleAutoMotor}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider cursor-pointer transition-soft ${powerMode === "usbc" ? "bg-soft-ocean text-cream font-semibold shadow-sm" : "bg-sand/30 text-mocha/60 hover:text-mocha"}`}
                  id="simulator-auto-mode"
                >
                  <Cpu className="w-3 h-3" />
                  USB-C On
                </button>
              </div>
            </div>

            {/* SVG Visual Stage */}
            <div className="relative aspect-[4/3] bg-sand/40 rounded-2xl border border-linen/40 flex items-center justify-center overflow-hidden" id="simulator-canvas">
              <svg viewBox="0 0 300 360" className="w-full h-full max-w-[320px] select-none">
                {/* Simulated seawater current lines */}
                <path d="M 10,40 Q 75,30 150,40 T 290,40" fill="none" stroke="#BACDB0" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                <path d="M 20,80 Q 95,90 170,80 T 280,95" fill="none" stroke="#BACDB0" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />

                {/* Cam shaft center line */}
                <line x1="80" y1="310" x2="220" y2="310" stroke="#826E5D" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

                {/* Mechanical link shafts and cams */}
                {[0, 1, 2, 3].map((idx) => {
                  const camY = getCamProfileY(idx);
                  return (
                    <g key={idx}>
                      {/* Cams (ellipses that rotate) */}
                      <ellipse
                        cx={80 + idx * 46}
                        cy="310"
                        rx="16"
                        ry="10"
                        transform={`rotate(${(crankAngle - idx * 40) % 360}, ${80 + idx * 46}, 310)`}
                        fill="#826E5D"
                        stroke="#2C2621"
                        strokeWidth="1.5"
                        opacity="0.85"
                      />
                      
                      {/* Connection guide rods extending up from cams */}
                      <line
                        x1={80 + idx * 46}
                        y1={camY}
                        x2={80 + idx * 46}
                        y2={160}
                        stroke="#594D43"
                        strokeWidth="1.5"
                        strokeDasharray="1 1"
                      />

                      {/* Small joint node connectors */}
                      <circle cx={80 + idx * 46} cy={camY} r="3.5" fill="#B68A75" stroke="#2C2621" strokeWidth="1" />
                    </g>
                  );
                })}

                {/* Left wing wave segments */}
                <line x1={getWingPoint(1, "left").x} y1={getWingPoint(1, "left").y} x2="150" y2="160" stroke="#2C2621" strokeWidth="3.5" strokeLinecap="round" />
                <line x1={getWingPoint(2, "left").x} y1={getWingPoint(2, "left").y} x2={getWingPoint(1, "left").x} y2={getWingPoint(1, "left").y} stroke="#2C2621" strokeWidth="2.5" strokeLinecap="round" />
                <line x1={getWingPoint(3, "left").x} y1={getWingPoint(3, "left").y} x2={getWingPoint(2, "left").x} y2={getWingPoint(2, "left").y} stroke="#2C2621" strokeWidth="1.5" strokeLinecap="round" />

                {/* Right wing wave segments */}
                <line x1={getWingPoint(1, "right").x} y1={getWingPoint(1, "right").y} x2="150" y2="160" stroke="#2C2621" strokeWidth="3.5" strokeLinecap="round" />
                <line x1={getWingPoint(2, "right").x} y1={getWingPoint(2, "right").y} x2={getWingPoint(1, "right").x} y2={getWingPoint(1, "right").y} stroke="#2C2621" strokeWidth="2.5" strokeLinecap="round" />
                <line x1={getWingPoint(3, "right").x} y1={getWingPoint(3, "right").y} x2={getWingPoint(2, "right").x} y2={getWingPoint(2, "right").y} stroke="#2C2621" strokeWidth="1.5" strokeLinecap="round" />

                {/* Central body node & eye */}
                <circle cx="150" cy="160" r="14" fill="#594D43" stroke="#2C2621" strokeWidth="2" />
                <circle cx="148" cy="154" r="2.5" fill="#FDFBF9" />
                <circle cx="148" cy="154" r="1" fill="#2C2621" />

                {/* Joint nodes on manta wing structure */}
                {[1, 2, 3].map((pt) => {
                  const left = getWingPoint(pt, "left");
                  const right = getWingPoint(pt, "right");
                  return (
                    <g key={pt}>
                      <circle cx={left.x} cy={left.y} r="3" fill="#EDE5D9" stroke="#2C2621" strokeWidth="1.2" />
                      <circle cx={right.x} cy={right.y} r="3" fill="#EDE5D9" stroke="#2C2621" strokeWidth="1.2" />
                    </g>
                  );
                })}

                {/* Floating bubbles for water atmosphere */}
                <circle cx="60" cy="90" r="2" fill="none" stroke="#BACDB0" strokeWidth="0.5" opacity="0.6" />
                <circle cx="210" cy="110" r="3.5" fill="none" stroke="#BACDB0" strokeWidth="0.5" opacity="0.4" />
                <circle cx="250" cy="70" r="1.5" fill="none" stroke="#BACDB0" strokeWidth="0.5" opacity="0.5" />
              </svg>

              {/* Status Indicator Overlays */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-xl border border-linen/40 text-[10px] font-mono text-charcoal">
                <span className={`w-2 h-2 rounded-full ${isRotating ? "bg-soft-ocean animate-ping" : "bg-clay"}`} />
                {powerMode === "usbc" ? "USBC MOTOR: ACTIVE SPEED" : "MANUAL DRIVETRAIN"}
              </div>

              <div className="absolute bottom-4 right-4 text-right bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-xl border border-linen/40 text-[9px] font-mono text-wood">
                SHAFTS: BRASS-OIL PIVOTS
              </div>
            </div>

            {/* Slider/Crank scrub bar */}
            <div className="mt-8 space-y-3" id="simulator-controls">
              <div className="flex justify-between text-xs font-mono text-mocha/80">
                <span>
                  {powerMode === "manual" ? "← Drag to crank manually →" : "Automatic Motor cycle running"}
                </span>
                <span className="font-semibold text-charcoal">{crankAngle}°</span>
              </div>
              
              <input
                type="range"
                min="0"
                max="359"
                value={crankAngle}
                onChange={handleCrankChange}
                disabled={powerMode === "usbc"}
                className={`w-full h-2 rounded-lg bg-linen outline-none cursor-pointer accent-wood transition-opacity ${powerMode === "usbc" ? "opacity-35 cursor-not-allowed" : "opacity-100"}`}
                id="simulator-crank-range"
              />

              <div className="flex justify-between items-center pt-2">
                <span className="font-sans text-xs text-mocha/70 italic">
                  {powerMode === "manual" 
                    ? "Turn the slider right or left to simulate a solid wood gear mesh." 
                    : "Emulating the ultra-quiet 5V brushless gear-motor."}
                </span>
                {powerMode === "usbc" && (
                  <button
                    onClick={() => setCrankAngle((prev) => (prev + 90) % 360)}
                    className="inline-flex items-center gap-1.5 px-2 py-1 bg-sand border border-linen text-[10px] uppercase font-mono text-mocha hover:text-charcoal rounded cursor-pointer"
                    id="simulator-kickstart"
                  >
                    <RefreshCw className="w-2.5 h-2.5" />
                    Kick Gears
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
