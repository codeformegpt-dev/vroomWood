import { AutomataItem, FAQItem, WorkshopStep } from "../types";

const mantaHero = "/src/assets/images/manta_ray_hero_1780959432266.png";
const whaleImg = "/src/assets/images/whale_automaton_1780959447268.png";
const jellyfishImg = "/src/assets/images/jellyfish_automaton_1780959461547.png";
const benchImg = "/src/assets/images/workshop_bench_1780959476690.png";

export const IMAGES = {
  mantaHero,
  whaleImg,
  jellyfishImg,
  benchImg,
};


export const featuredAutomata: AutomataItem[] = [
  {
    id: "manta-ray-signature",
    name: "The Gilded Manta Ray No. 4",
    scientificName: "Mobula birostris",
    description: "Our signature piece. Over sixty hand-carved joints move in fluid, wave-like succession to replicate the majestic ocean glide of the giant manta ray.",
    detailedDescription: "Designed with an intricate interior camshaft and high-reduction wooden gears, this signature piece captures the perfect rhythmic ripple of a manta wing. Turned from fine native black walnut and selected white ash, it serves as a hypnotic reminder of oceanic peace.",
    image: mantaHero,
    materials: ["Black Walnut", "Selected White Ash", "Brass Hardware", "Beeswax Finish"],
    dimensions: "14” W x 10” L x 11” H",
    powerSource: "Pre-installed internal low-rpm silent brushless motor, rechargeable via elegant rear wooden USB-C recess. Full charge delivers 12 hours of peaceful continuous glide.",
    movementDescription: "A gentle three-axis vertical sine wave through twenty hinged ribs, maintaining realistic, non-simultaneous wing tips.",
    etsyLink: "https://www.etsy.com",
    priceEstimate: "$340",
    extraDetails: [
      "Every piece is individually signed, numbered, and dated by David.",
      "Rear dial allows you to manually crank the piece or toggle the USB-C motor.",
      "Finished with organic cold-press linseed oil and natural amber beeswax."
    ]
  },
  {
    id: "humpback-whale-glide",
    name: "The Wandering Humpback",
    scientificName: "Megaptera novaeangliae",
    description: "A calming wooden humpback whale that crests and dives over layered, rotating wooden crest waves in a slow, rhythmic ocean dance.",
    detailedDescription: "This piece captures the heavy, majestic breach of a humpback whale. Utilizing a double eccentrical lever system, the whale lifts, tilts, and dives while the wood wave discs below rotate at different speeds. The motion mimics a sea voyage in miniature.",
    image: whaleImg,
    materials: ["Crotch Mahogany", "Baltic Birch Multi-ply", "Brass wire", "Soy-based wax"],
    dimensions: "12” W x 8” L x 13” H",
    powerSource: "Dual power: Integrated USB-C charging port with magnetic battery connect, or a classic solid brass folding handle for manual cranking.",
    movementDescription: "Smooth pitching rotation combined with vertical lift, synced with four progressive wave layers beneath.",
    etsyLink: "https://www.etsy.com",
    priceEstimate: "$295",
    extraDetails: [
      "No plastic components are used whatsoever.",
      "Hand-tuned brass rods guarantee a squeak-free motion.",
      "The warm mahogany tones deepen over years of exposure to soft room light."
    ]
  },
  {
    id: "jellyfish-ethereal",
    name: "The Ethereal Jellyfish No. 2",
    scientificName: "Aurelia aurita",
    description: "Witness the soft contracting and expanding bell movement, completed with incredibly delicate, independently swaying pine wood tentacles.",
    detailedDescription: "A masterpiece of mechanical lightness. Through a delicate brass scissor linkage concealed within the translucent pine bell, the entire jellyfish expands and contracts in a slow, deep breath, pulling its hair-thin wooden tentacles upward in an organic ripple.",
    image: jellyfishImg,
    materials: ["Shaved Pine", "Flame Maple Spindle", "Polished copper details"],
    dimensions: "6” W x 6” L x 15” H",
    powerSource: "USB-C rechargeable quiet drive, with an integrated three-level speed slider to match your home's mood.",
    movementDescription: "Dual-action mechanical pulsing bell with ten gravity-drop trailing wooden filaments.",
    etsyLink: "https://www.etsy.com",
    priceEstimate: "$260",
    extraDetails: [
      "Features a subtle brass pedestal with tiny non-slip merino wool feet.",
      "The pine bell is shaved to less than 1.5mm thick, creating a warm golden glow when near desk lights.",
      "Extremely quiet motor calibrated to less than 15 decibels."
    ]
  }
];

export const workshopSteps: WorkshopStep[] = [
  {
    number: "01",
    title: "Sketching & Mechanics",
    description: "Every movement starts with lead and paper. I calculate the gear ratios, shaft eccentricities, and wood leverage to turn hard geometric rotations into soft organic waves.",
    focusAccent: "A pencil sketch of the manta ray wing joints pinned above the workshop lathe.",
    badge: "The Draft"
  },
  {
    number: "02",
    title: "Material Selection",
    description: "Wood is alive. I select black walnut for structure, dense maple for gears, and micro-shaved pine or ash for wings. The grain direction dictates how the timber will sway and live.",
    focusAccent: "A stack of air-dried domestic timber, fragrant with pine oil and cedar shavings.",
    badge: "The Timber"
  },
  {
    number: "03",
    title: "Carving & Shaping",
    description: "Using traditional chisels, scroll saws, and Japanese files, the sea animal forms are coaxed out of the raw blocks. Corners are softened to feel like stones rounded by ocean tides.",
    focusAccent: "David's hands sanding a maple fin, catching wood curls in a sunny bay window.",
    badge: "The Form"
  },
  {
    number: "04",
    title: "Tuning & Balancing ",
    description: "This is where patience resides. I assemble the gears and manually turn each cam hundreds of times, sanding fractions of a millimeter away until the mechanism glides in complete silence.",
    focusAccent: "Polishing brass shafts with fine oil to defeat friction and seal the life of the wood.",
    badge: "The Tune"
  }
];

export const faqs: FAQItem[] = [
  {
    id: "what-is-automaton",
    question: "What is a wooden automaton?",
    answer: "An automaton is a hand-assembled, mechanical kinetic sculpture. By turning a crank or running a small quiet motor, a sequence of wooden cams, gears, and link rods work in sync to breathe lifelike motion into a carved figure, mimicking organic movements like walking, flying, or swimming.",
    category: "craft"
  },
  {
    id: "does-it-need-assembly",
    question: "Does it require assembly when it arrives?",
    answer: "No. Each automaton arrives fully assembled, aligned, and calibrated in custom protective packaging. All you need to do is gently lift it from the wooden shipping box, plug in the included USB-C cable to charge it, and watch the waves unfold.",
    category: "shipping"
  },
  {
    id: "how-is-it-powered",
    question: "How is it powered? Is there a battery?",
    answer: "Our modern series is designed to be highly versatile. Each piece contains an ultra-quiet, slow-rotation brushless electric motor and an internal rechargeable battery, charged easily with a standard USB-C cable (included). You can keep it plugged in on a shelf, or run it cord-free for up to 12 hours on battery.",
    category: "power"
  },
  {
    id: "is-it-quiet",
    question: "Is the mechanical action quiet?",
    answer: "Very. We use hand-tuned brass pins, organic oil lubricants, and quiet low-RPM brushless electric motors. The sound of operation is a very faint, soothing, and rhythmic wood-on-wood sliding purr (under 15 dB), which adds to its cozy, meditative presence in a quiet home.",
    category: "craft"
  },
  {
    id: "is-it-suitable-gift",
    question: "Is it suitable for home decor or gifting?",
    answer: "Yes, it is perfect for both. These pieces are cherished as heirloom gifts for ocean lovers, collectors of kinetic art, modern minimalists, and seekers of analog joy. They provide a calm visual centerpiece on desks, windowsills, or shelves.",
    category: "shipping"
  },
  {
    id: "is-each-hand-crafted",
    question: "Is each piece genuinely handmade?",
    answer: "Absolutely. There is no factory, assembly line, or mass-molding. Every gear is scroll-sawn, every creature contoured by hand, and every joint tuned individually by David in his small island-side workshop. No two pieces possess identical grain contours or motion profiles.",
    category: "craft"
  },
  {
    id: "how-do-i-buy",
    question: "How can I purchase one?",
    answer: "Because we respect the patient speed of woodcraft, I list pieces in small batches of 3 to 5 on our Etsy shop. Click any 'Etsy Workshop Link' on this site to see active pieces, custom commission queues, or to join the release notification list.",
    category: "shipping"
  }
];
