

export const COLORS = {
  background: '#0a0a0a',
  backgroundSec: '#1a1a1a',
  text: '#ffffff',
  accent: '#ff6b35', // Orange/Coral
  accentSec: '#f4f4f4'
};

// Reliable copyright-free track for demo purposes
const DEMO_TRACK = "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"; 

export const PLAYLIST = [
  { title: "Rock Classics Mix", artist: "Mikaelian Vibe", duration: "3:51", url: DEMO_TRACK },
  { title: "Ink Session Flow", artist: "Ambient Rock", duration: "5:01", url: DEMO_TRACK },
  { title: "Heavy Metal Focus", artist: "Studio Sound", duration: "5:31", url: DEMO_TRACK },
  { title: "Late Night Sketch", artist: "Lo-Fi Rock", duration: "4:10", url: DEMO_TRACK },
  { title: "Client Stories", artist: "Acoustic", duration: "2:48", url: DEMO_TRACK }
];

export const ARTIST_PHOTO = "https://drive.google.com/thumbnail?id=1Tt-uodV4ILmN8el6LKkSITsdZBbySPf4&sz=w1000";

// Ordered to match visual columns:
// Index 0, 3, 6, 9, 12, 15 -> Column 1 (Left)
// Index 1, 4, 7, 10, 13, 16 -> Column 2 (Center)
// Index 2, 5, 8, 11, 14 -> Column 3 (Right)
export const PORTFOLIO_ITEMS = [
  // --- ROW 1 ---
  // Col 1 - Item 1
  { id: 1, title: "Dead Inside", category: "Geek", img: "https://drive.google.com/thumbnail?id=1I0_G-iDHvG1zmGdYtzLoFKgmPqWeCrXB&sz=w1000" },
  // Col 2 - Item 1
  { id: 7, title: "Kaneki - Tokyo Ghoul", category: "Geek", img: "https://drive.google.com/thumbnail?id=1PV6Pd2gFWw5cWOPPpiQgEngBY2xcThsJ&sz=w1000" },
  // Col 3 - Item 1
  { id: 13, title: "Fechamento Oriental", category: "Oriental", img: "https://drive.google.com/thumbnail?id=1i9Usaw3bgT8EwN9opvpRaPpjw9rHWjgf&sz=w1000" },
  
  // --- ROW 2 ---
  // Col 1 - Item 2
  { id: 2, title: "Suminagashi", category: "Oriental", img: "https://drive.google.com/thumbnail?id=1QB3ycDytvayvbAZFu0K5eIpmX4ajGpS-&sz=w1000" },
  // Col 2 - Item 2
  { id: 8, title: "Fullmetal Alchemist", category: "Geek", img: "https://drive.google.com/thumbnail?id=1BejVBi_bLhyAaVncCIWDupoavjWWBenc&sz=w1000" },
  // Col 3 - Item 2
  { id: 14, title: "Chrollo X Hisoka", category: "Geek", img: "https://drive.google.com/thumbnail?id=15qMTfKpMYhf1Ldu3qZ5fxOyszpZXv1P8&sz=w1000" },

  // --- ROW 3 ---
  // Col 1 - Item 3
  { id: 3, title: "Ghost", category: "Geek", img: "https://drive.google.com/thumbnail?id=1OtUDECPHCq1Vud0lwGZTzmFigmPZDC2f&sz=w1000" },
  // Col 2 - Item 3
  { id: 9, title: "Blaidd, the Half-Wolf - Elden Ring", category: "Geek", img: "https://drive.google.com/thumbnail?id=1VuilkB5jsK9pTHK_EuFq9m0Z5nzp60ZA&sz=w1000" },
  // Col 3 - Item 3
  { id: 15, title: "Akasa", category: "Geek", img: "https://drive.google.com/thumbnail?id=13nkUOn6cTbQAn9mZIc3bzAnDxIkY2Xie&sz=w1000" },

  // --- ROW 4 ---
  // Col 1 - Item 4
  { id: 4, title: "Barba Branca", category: "Geek", img: "https://drive.google.com/thumbnail?id=1-kYwdUyTSabyBnn4QiEL6lnKuZDcXGpI&sz=w1000" },
  // Col 2 - Item 4
  { id: 10, title: "Kimetsu no Yaiba", category: "Geek", img: "https://drive.google.com/thumbnail?id=1gVLGLLY635-ZwXDmDZJxznKQPbdi9zyo&sz=w1000" },
  // Col 3 - Item 4
  { id: 16, title: "Johan Liebert MONSTER", category: "Geek", img: "https://drive.google.com/thumbnail?id=1O_9tvuXQcK32uG9-byl57wgxKo3qjp6t&sz=w1000" },

  // --- ROW 5 ---
  // Col 1 - Item 5
  { id: 5, title: "Gear 5", category: "Geek", img: "https://drive.google.com/thumbnail?id=1kqAC14sVOuPQOueuUZATUbVs7HNXtjFI&sz=w1000" },
  // Col 2 - Item 5
  { id: 11, title: "Edward Elric", category: "Geek", img: "https://drive.google.com/thumbnail?id=1bpxOZMWTvVUelt6aVq9aAUedzlrOz9Us&sz=w1000" },
  // Col 3 - Item 5
  { id: 17, title: "Isha ARCANE", category: "Geek", img: "https://drive.google.com/thumbnail?id=1cvfei-fvBh_3pbqGughkC4QRFbdy3wje&sz=w1000" },

  // --- ROW 6 (Last items) ---
  // Col 1 - Item 6
  { id: 6, title: "Zenitsu", category: "Geek", img: "https://drive.google.com/thumbnail?id=1LSaRQsfybr1nuzv5he21LY1dzZWkhDQk&sz=w1000" },
  // Col 2 - Item 6
  { id: 12, title: "Killua Zoldyck", category: "Geek", img: "https://drive.google.com/thumbnail?id=1gUD6xHfKe2apQ6ZxAOB_zTAuDo_ERzSb&sz=w1000" },
];

export const CUSTOM_PRODUCTS = [
  { id: 'espelho1', title: "Espelho Blackwork I", category: "Decoração", img: "https://drive.google.com/thumbnail?id=1LqUZBOWV0mn4mKiFT1S7CqABV-DP2_UH&sz=w1000", message: "Olá Mi! Tenho interesse no Espelho Blackwork I." },
  { id: 'espelho2', title: "Espelho Floral Custom", category: "Decoração", img: "https://drive.google.com/thumbnail?id=1MC82dF2T2cmoIN8uIBfEQ_9irU7olnfK&sz=w1000", message: "Olá Mi! Tenho interesse no Espelho Floral Custom." },
  { id: 'espelho3', title: "Espelho Ornamentado", category: "Decoração", img: "https://drive.google.com/thumbnail?id=1o-ZKa4NgQAc6-2gxNVXmvV_7w1TFTgjJ&sz=w1000", message: "Olá Mi! Tenho interesse no Espelho Ornamentado." },
  { id: 'camisa', title: "T-Shirt Exclusiva", category: "Vestuário", img: "https://drive.google.com/thumbnail?id=1Z3GwAJchfS4g3T8R4Uawj5jMVLygL77Q&sz=w1000", message: "Olá Mi! Gostaria de saber mais sobre a T-Shirt Exclusiva." },
  { id: 'carteira', title: "Carteira Leather Ink", category: "Acessórios", img: "https://drive.google.com/thumbnail?id=1v-kRVWDXtEOnAFygsCtAq9C88-y4ZPvC&sz=w1000", message: "Olá Mi! Gostaria de detalhes sobre a Carteira Leather Ink." },
  { id: 'bota', title: "Bota Customizada", category: "Calçados", img: "https://drive.google.com/thumbnail?id=1ohhO_aobhyGAjAI6fn5lw4Z_wxDTCEp2&sz=w1000", message: "Olá Mi! Achei incrível a Bota Customizada, como funciona?" },
  { id: 'copo', title: "Copo Stanley Art", category: "Acessórios", img: "https://drive.google.com/thumbnail?id=17j5PNiKmawgZuR8cYZ0EIyWFHxSmmLx8&sz=w1000", message: "Olá Mi! Quero personalizar um Copo." },
];

export const TESTIMONIALS = [
  { id: 1, name: "Lucas Silva", text: "A Mi capturou exatamente o que eu queria. As linhas são incrivelmente finas.", rating: 5 },
  { id: 2, name: "Ana Costa", text: "Melhor estúdio de Salvador. A vibe é incrível e a arte é única.", rating: 5 },
  { id: 3, name: "Pedro Santos", text: "Ela transformou minha ideia geek em uma obra-prima.", rating: 5 },
];