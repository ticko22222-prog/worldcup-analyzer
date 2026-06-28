const TEAM_POOL = {
  Mexico: ["🇲🇽", "\u58a8\u897f\u54e5"],
  "South Africa": ["RSA", "\u5357\u975e"],
  "South Korea": ["KOR", "\u5357\u97d3"],
  "Czech Republic": ["CZE", "\u6377\u514b"],
  Canada: ["CAN", "\u52a0\u62ff\u5927"],
  "Bosnia and Herzegovina": ["BIH", "\u6ce2\u58eb\u5c3c\u4e9e\u8207\u8d6b\u585e\u54e5\u7dad\u7d0d"],
  Qatar: ["QAT", "\u5361\u9054"],
  Switzerland: ["SUI", "\u745e\u58eb"],
  Brazil: ["BRA", "\u5df4\u897f"],
  Morocco: ["MAR", "\u6469\u6d1b\u54e5"],
  Haiti: ["HAI", "\u6d77\u5730"],
  Scotland: ["SCO", "\u8607\u683c\u862d"],
  "United States": ["USA", "\u7f8e\u570b"],
  Paraguay: ["PAR", "\u5df4\u62c9\u572d"],
  Australia: ["AUS", "\u6fb3\u6d32"],
  Turkey: ["TUR", "\u571f\u8033\u5176"],
  Germany: ["GER", "\u5fb7\u570b"],
  Curacao: ["CUW", "\u5eab\u62c9\u7d22"],
  "Ivory Coast": ["CIV", "\u8c61\u7259\u6d77\u5cb8"],
  Ecuador: ["ECU", "\u5384\u74dc\u591a"],
  Netherlands: ["NED", "\u8377\u862d"],
  Japan: ["JPN", "\u65e5\u672c"],
  Sweden: ["SWE", "\u745e\u5178"],
  Tunisia: ["TUN", "\u7a81\u5c3c\u897f\u4e9e"],
  Belgium: ["BEL", "\u6bd4\u5229\u6642"],
  Egypt: ["EGY", "\u57c3\u53ca"],
  Iran: ["IRN", "\u4f0a\u6717"],
  "New Zealand": ["NZL", "\u7d10\u897f\u862d"],
  Spain: ["ESP", "\u897f\u73ed\u7259"],
  "Cape Verde": ["CPV", "\u7dad\u5fb7\u89d2"],
  "Saudi Arabia": ["KSA", "\u6c99\u70cf\u5730\u963f\u62c9\u4f2f"],
  Uruguay: ["URU", "\u70cf\u62c9\u572d"],
  France: ["FRA", "\u6cd5\u570b"],
  Senegal: ["SEN", "\u585e\u5167\u52a0\u723e"],
  Iraq: ["IRQ", "\u4f0a\u62c9\u514b"],
  Norway: ["NOR", "\u632a\u5a01"],
  Argentina: ["ARG", "\u963f\u6839\u5ef7"],
  Algeria: ["ALG", "\u963f\u723e\u53ca\u5229\u4e9e"],
  Austria: ["AUT", "\u5967\u5730\u5229"],
  Jordan: ["JOR", "\u7d04\u65e6"],
  Portugal: ["POR", "\u8461\u8404\u7259"],
  "DR Congo": ["COD", "\u525b\u679c\u6c11\u4e3b\u5171\u548c\u570b"],
  Uzbekistan: ["UZB", "\u70cf\u8332\u5225\u514b"],
  Colombia: ["COL", "\u54e5\u502b\u6bd4\u4e9e"],
  England: ["ENG", "\u82f1\u683c\u862d"],
  Croatia: ["CRO", "\u514b\u7f85\u57c3\u897f\u4e9e"],
  Ghana: ["GHA", "\u8fe6\u7d0d"],
  Panama: ["PAN", "\u5df4\u62ff\u99ac"],
};
const FLAG_FILES = {
  Mexico: "assets/flag/Mexico--Streamline-Openmoji-Emoji.svg",
  "South Africa": "assets/flag/south-africa-svgrepo-com.svg",
  "South Korea": "assets/flag/South-Korea--Streamline-Openmoji-Emoji.svg",
  "Czech Republic": "assets/flags/czech-republic-svgrepo-com.svg",
  Canada: "assets/flag/Canada--Streamline-Openmoji-Emoji.svg",
  "Bosnia and Herzegovina": "assets/flag/bosnia-and-herzegovina-svgrepo-com.svg",
  Qatar: "assets/flag/Qatar--Streamline-Openmoji-Emoji.svg",
  Switzerland: "assets/flag/Switzerland--Streamline-Openmoji-Emoji.svg",
  Brazil: "assets/flag/Brazil--Streamline-Openmoji-Emoji.svg",
  Morocco: "assets/flag/Morocco--Streamline-Openmoji-Emoji.svg",
  Haiti: "assets/flag/Haiti--Streamline-Openmoji-Emoji.svg",
  Scotland: "assets/flag/Scotland--Streamline-Openmoji-Emoji.svg",
  "United States": "assets/flags/united-states-svgrepo-com.svg",
  Paraguay: "assets/flag/Paraguay--Streamline-Openmoji-Emoji.svg",
  Australia: "assets/flag/Australia--Streamline-Openmoji-Emoji.svg",
  Turkey: "assets/flag/Turkey--Streamline-Openmoji-Emoji.svg",
  Germany: "assets/flag/Germany--Streamline-Openmoji-Emoji.svg",
  Curacao: "assets/flags/curacao-svgrepo-com.svg",
  "Ivory Coast": "assets/flags/ivory-coast-svgrepo-com.svg",
  Ecuador: "assets/flag/Ecuador--Streamline-Openmoji-Emoji.svg",
  Netherlands: "assets/flag/Netherlands--Streamline-Openmoji-Emoji.svg",
  Japan: "assets/flag/Japan--Streamline-Openmoji-Emoji.svg",
  Sweden: "assets/flag/Sweden--Streamline-Openmoji-Emoji.svg",
  Tunisia: "assets/flag/Tunisia--Streamline-Openmoji-Emoji.svg",
  Belgium: "assets/flag/Belgium--Streamline-Openmoji-Emoji.svg",
  Egypt: "assets/flag/Egypt--Streamline-Openmoji-Emoji.svg",
  Iran: "assets/flag/Iran--Streamline-Openmoji-Emoji.svg",
  "New Zealand": "assets/flag/New-Zealand--Streamline-Openmoji-Emoji.svg",
  Spain: "assets/flag/Spain--Streamline-Openmoji-Emoji.svg",
  "Cape Verde": "assets/flag/Cape-Verde--Streamline-Openmoji-Emoji.svg",
  "Saudi Arabia": "assets/flag/saudi-arabia-svgrepo-com.svg",
  Uruguay: "assets/flag/Uruguay--Streamline-Openmoji-Emoji.svg",
  France: "assets/flag/France--Streamline-Openmoji-Emoji.svg",
  Senegal: "assets/flag/Senegal--Streamline-Openmoji-Emoji.svg",
  Iraq: "assets/flag/Iraq--Streamline-Openmoji-Emoji.svg",
  Norway: "assets/flag/Norway--Streamline-Openmoji-Emoji.svg",
  Argentina: "assets/flag/Argentina--Streamline-Openmoji-Emoji.svg",
  Algeria: "assets/flag/Algeria--Streamline-Openmoji-Emoji.svg",
  Austria: "assets/flags/austria-svgrepo-com.svg",
  Jordan: "assets/flag/Jordan--Streamline-Openmoji-Emoji.svg",
  Portugal: "assets/flag/Portugal--Streamline-Openmoji-Emoji.svg",
  "DR Congo": "assets/flag/Congo--Streamline-Openmoji-Emoji.svg",
  Uzbekistan: "assets/flag/Uzbekistan--Streamline-Openmoji-Emoji.svg",
  Colombia: "assets/flag/Colombia--Streamline-Openmoji-Emoji.svg",
  England: "assets/flag/England--Streamline-Openmoji-Emoji.svg",
  Croatia: "assets/flag/Croatia--Streamline-Openmoji-Emoji.svg",
  Ghana: "assets/flag/Ghana--Streamline-Openmoji-Emoji.svg",
  Panama: "assets/flag/Panama--Streamline-Openmoji-Emoji.svg",
};
const INITIAL_GROUPS = {
  A: ["Mexico", "South Africa", "South Korea", "Czech Republic"],
  B: ["Canada", "Bosnia and Herzegovina", "Qatar", "Switzerland"],
  C: ["Brazil", "Morocco", "Haiti", "Scotland"],
  D: ["United States", "Paraguay", "Australia", "Turkey"],
  E: ["Germany", "Curacao", "Ivory Coast", "Ecuador"],
  F: ["Netherlands", "Japan", "Sweden", "Tunisia"],
  G: ["Belgium", "Egypt", "Iran", "New Zealand"],
  H: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"],
  I: ["France", "Senegal", "Iraq", "Norway"],
  J: ["Argentina", "Algeria", "Austria", "Jordan"],
  K: ["Portugal", "DR Congo", "Uzbekistan", "Colombia"],
  L: ["England", "Croatia", "Ghana", "Panama"],
};

const VENUES = {
  "Estadio Azteca": ["\u58a8\u897f\u54e5\u57ce", "\u58a8\u897f\u54e5"],
  "Estadio Akron": ["\u85a9\u6ce2\u6f58", "\u58a8\u897f\u54e5"],
  "Estadio BBVA": ["\u74dc\u9054\u76e7\u4f69", "\u58a8\u897f\u54e5"],
  "BMO Field": ["\u591a\u502b\u591a", "\u52a0\u62ff\u5927"],
  "Toronto Stadium": ["\u591a\u502b\u591a", "\u52a0\u62ff\u5927"],
  "BC Place": ["\u6eab\u54e5\u83ef", "\u52a0\u62ff\u5927"],
  "SoFi Stadium": ["\u82f1\u683c\u4f0d\u5fb7", "\u7f8e\u570b"],
  "Levi's Stadium": ["\u8056\u5854\u514b\u62c9\u62c9", "\u7f8e\u570b"],
  "Lumen Field": ["\u897f\u96c5\u5716", "\u7f8e\u570b"],
  "Mercedes-Benz Stadium": ["\u4e9e\u7279\u862d\u5927", "\u7f8e\u570b"],
  "Hard Rock Stadium": ["\u9081\u963f\u5bc6\u82b1\u5712", "\u7f8e\u570b"],
  "Gillette Stadium": ["\u798f\u514b\u65af\u5821", "\u7f8e\u570b"],
  "MetLife Stadium": ["\u6771\u76e7\u745f\u798f", "\u7f8e\u570b"],
  "Lincoln Financial Field": ["\u8cbb\u57ce", "\u7f8e\u570b"],
  "NRG Stadium": ["\u4f11\u58eb\u9813", "\u7f8e\u570b"],
  "AT&T Stadium": ["\u963f\u9748\u9813", "\u7f8e\u570b"],
  "Arrowhead Stadium": ["\u582a\u85a9\u65af\u57ce", "\u7f8e\u570b"],
};
const groupFixtures = [
  fx(1, "A", "2026-06-11", "13:00", -6, "Mexico", "South Africa", "Estadio Azteca"),
  fx(2, "A", "2026-06-11", "20:00", -6, "South Korea", "Czech Republic", "Estadio Akron"),
  fx(3, "B", "2026-06-12", "15:00", -4, "Canada", "Bosnia and Herzegovina", "BMO Field"),
  fx(4, "D", "2026-06-12", "18:00", -7, "United States", "Paraguay", "SoFi Stadium"),
  fx(5, "C", "2026-06-13", "21:00", -4, "Haiti", "Scotland", "Gillette Stadium"),
  fx(6, "D", "2026-06-13", "21:00", -7, "Australia", "Turkey", "BC Place"),
  fx(7, "C", "2026-06-13", "18:00", -4, "Brazil", "Morocco", "MetLife Stadium"),
  fx(8, "B", "2026-06-13", "12:00", -7, "Qatar", "Switzerland", "Levi's Stadium"),
  fx(9, "E", "2026-06-14", "19:00", -4, "Ivory Coast", "Ecuador", "Lincoln Financial Field"),
  fx(10, "E", "2026-06-14", "12:00", -5, "Germany", "Curacao", "NRG Stadium"),
  fx(11, "F", "2026-06-14", "15:00", -5, "Netherlands", "Japan", "AT&T Stadium"),
  fx(12, "F", "2026-06-14", "20:00", -6, "Sweden", "Tunisia", "Estadio BBVA"),
  fx(13, "H", "2026-06-15", "18:00", -4, "Saudi Arabia", "Uruguay", "Hard Rock Stadium"),
  fx(14, "H", "2026-06-15", "12:00", -4, "Spain", "Cape Verde", "Mercedes-Benz Stadium"),
  fx(15, "G", "2026-06-15", "18:00", -7, "Iran", "New Zealand", "SoFi Stadium"),
  fx(16, "G", "2026-06-15", "12:00", -7, "Belgium", "Egypt", "Lumen Field"),
  fx(17, "I", "2026-06-16", "15:00", -4, "France", "Senegal", "MetLife Stadium"),
  fx(18, "I", "2026-06-16", "18:00", -4, "Iraq", "Norway", "Gillette Stadium"),
  fx(19, "J", "2026-06-16", "20:00", -5, "Argentina", "Algeria", "Arrowhead Stadium"),
  fx(20, "J", "2026-06-16", "21:00", -7, "Austria", "Jordan", "Levi's Stadium"),
  fx(21, "L", "2026-06-17", "19:00", -4, "Ghana", "Panama", "Toronto Stadium"),
  fx(22, "L", "2026-06-17", "15:00", -5, "England", "Croatia", "AT&T Stadium"),
  fx(23, "K", "2026-06-17", "12:00", -5, "Portugal", "DR Congo", "NRG Stadium"),
  fx(24, "K", "2026-06-17", "20:00", -6, "Uzbekistan", "Colombia", "Estadio Azteca"),
  fx(25, "A", "2026-06-18", "12:00", -4, "Czech Republic", "South Africa", "Mercedes-Benz Stadium"),
  fx(26, "B", "2026-06-18", "12:00", -7, "Switzerland", "Bosnia and Herzegovina", "SoFi Stadium"),
  fx(27, "B", "2026-06-18", "15:00", -7, "Canada", "Qatar", "BC Place"),
  fx(28, "A", "2026-06-18", "19:00", -6, "Mexico", "South Korea", "Estadio Akron"),
  fx(29, "C", "2026-06-19", "20:30", -4, "Brazil", "Haiti", "Lincoln Financial Field"),
  fx(30, "C", "2026-06-19", "18:00", -4, "Scotland", "Morocco", "Gillette Stadium"),
  fx(31, "D", "2026-06-19", "20:00", -7, "Turkey", "Paraguay", "Levi's Stadium"),
  fx(32, "D", "2026-06-19", "12:00", -7, "United States", "Australia", "Lumen Field"),
  fx(33, "E", "2026-06-20", "16:00", -4, "Germany", "Ivory Coast", "BMO Field"),
  fx(34, "E", "2026-06-20", "19:00", -5, "Ecuador", "Curacao", "Arrowhead Stadium"),
  fx(35, "F", "2026-06-20", "12:00", -5, "Netherlands", "Sweden", "NRG Stadium"),
  fx(36, "F", "2026-06-20", "22:00", -6, "Tunisia", "Japan", "Estadio BBVA"),
  fx(37, "H", "2026-06-21", "18:00", -4, "Uruguay", "Cape Verde", "Hard Rock Stadium"),
  fx(38, "H", "2026-06-21", "12:00", -4, "Spain", "Saudi Arabia", "Mercedes-Benz Stadium"),
  fx(39, "G", "2026-06-21", "12:00", -7, "Belgium", "Iran", "SoFi Stadium"),
  fx(40, "G", "2026-06-21", "18:00", -7, "New Zealand", "Egypt", "BC Place"),
  fx(41, "I", "2026-06-22", "20:00", -4, "Norway", "Senegal", "MetLife Stadium"),
  fx(42, "I", "2026-06-22", "17:00", -4, "France", "Iraq", "Lincoln Financial Field"),
  fx(43, "J", "2026-06-22", "12:00", -5, "Argentina", "Austria", "AT&T Stadium"),
  fx(44, "J", "2026-06-22", "20:00", -7, "Jordan", "Algeria", "Levi's Stadium"),
  fx(45, "L", "2026-06-23", "16:00", -4, "England", "Ghana", "Gillette Stadium"),
  fx(46, "L", "2026-06-23", "19:00", -4, "Panama", "Croatia", "Toronto Stadium"),
  fx(47, "K", "2026-06-23", "12:00", -5, "Portugal", "Uzbekistan", "NRG Stadium"),
  fx(48, "K", "2026-06-23", "20:00", -6, "Colombia", "DR Congo", "Estadio Akron"),
  fx(49, "C", "2026-06-24", "18:00", -4, "Scotland", "Brazil", "Hard Rock Stadium"),
  fx(50, "C", "2026-06-24", "18:00", -4, "Morocco", "Haiti", "Mercedes-Benz Stadium"),
  fx(51, "B", "2026-06-24", "12:00", -7, "Switzerland", "Canada", "BC Place"),
  fx(52, "B", "2026-06-24", "12:00", -7, "Bosnia and Herzegovina", "Qatar", "Lumen Field"),
  fx(53, "A", "2026-06-24", "19:00", -6, "Czech Republic", "Mexico", "Estadio Azteca"),
  fx(54, "A", "2026-06-24", "19:00", -6, "South Africa", "South Korea", "Estadio BBVA"),
  fx(55, "E", "2026-06-25", "16:00", -4, "Curacao", "Ivory Coast", "Lincoln Financial Field"),
  fx(56, "E", "2026-06-25", "16:00", -4, "Ecuador", "Germany", "MetLife Stadium"),
  fx(57, "F", "2026-06-25", "18:00", -5, "Japan", "Sweden", "AT&T Stadium"),
  fx(58, "F", "2026-06-25", "18:00", -5, "Tunisia", "Netherlands", "Arrowhead Stadium"),
  fx(59, "D", "2026-06-25", "19:00", -7, "Turkey", "United States", "SoFi Stadium"),
  fx(60, "D", "2026-06-25", "19:00", -7, "Paraguay", "Australia", "Levi's Stadium"),
  fx(61, "I", "2026-06-26", "15:00", -4, "Norway", "France", "Gillette Stadium"),
  fx(62, "I", "2026-06-26", "15:00", -4, "Senegal", "Iraq", "BMO Field"),
  fx(63, "G", "2026-06-26", "20:00", -7, "Egypt", "Iran", "Lumen Field"),
  fx(64, "G", "2026-06-26", "20:00", -7, "New Zealand", "Belgium", "BC Place"),
  fx(65, "H", "2026-06-26", "19:00", -5, "Cape Verde", "Saudi Arabia", "NRG Stadium"),
  fx(66, "H", "2026-06-26", "18:00", -6, "Uruguay", "Spain", "Estadio Akron"),
  fx(67, "L", "2026-06-27", "17:00", -4, "Panama", "England", "MetLife Stadium"),
  fx(68, "L", "2026-06-27", "17:00", -4, "Croatia", "Ghana", "Lincoln Financial Field"),
  fx(69, "J", "2026-06-27", "21:00", -5, "Algeria", "Austria", "Arrowhead Stadium"),
  fx(70, "J", "2026-06-27", "21:00", -5, "Jordan", "Argentina", "AT&T Stadium"),
  fx(71, "K", "2026-06-27", "19:30", -4, "Colombia", "Portugal", "Hard Rock Stadium"),
  fx(72, "K", "2026-06-27", "19:30", -4, "DR Congo", "Uzbekistan", "Mercedes-Benz Stadium"),
];

const knockoutFixtures = [
  kx(73, "Round of 32", "2026-06-28", "12:00", -7, "A2", "B2", "SoFi Stadium"),
  kx(74, "Round of 32", "2026-06-29", "16:30", -4, "E1", "3rd A/B/C/D/F", "Gillette Stadium"),
  kx(75, "Round of 32", "2026-06-29", "19:00", -6, "F1", "C2", "Estadio BBVA"),
  kx(76, "Round of 32", "2026-06-29", "12:00", -5, "C1", "F2", "NRG Stadium"),
  kx(77, "Round of 32", "2026-06-30", "17:00", -4, "I1", "3rd C/D/F/G/H", "MetLife Stadium"),
  kx(78, "Round of 32", "2026-06-30", "12:00", -5, "E2", "I2", "AT&T Stadium"),
  kx(79, "Round of 32", "2026-06-30", "19:00", -6, "A1", "3rd C/E/F/H/I", "Estadio Azteca"),
  kx(80, "Round of 32", "2026-07-01", "12:00", -4, "L1", "3rd E/H/I/J/K", "Mercedes-Benz Stadium"),
  kx(81, "Round of 32", "2026-07-01", "17:00", -7, "D1", "3rd B/E/F/I/J", "Levi's Stadium"),
  kx(82, "Round of 32", "2026-07-01", "13:00", -7, "G1", "3rd A/E/H/I/J", "Lumen Field"),
  kx(83, "Round of 32", "2026-07-02", "19:00", -4, "K2", "L2", "BMO Field"),
  kx(84, "Round of 32", "2026-07-02", "12:00", -7, "H1", "J2", "SoFi Stadium"),
  kx(85, "Round of 32", "2026-07-02", "20:00", -7, "B1", "3rd E/F/G/I/J", "BC Place"),
  kx(86, "Round of 32", "2026-07-03", "18:00", -4, "J1", "H2", "Hard Rock Stadium"),
  kx(87, "Round of 32", "2026-07-03", "20:30", -5, "K1", "3rd D/E/I/J/L", "Arrowhead Stadium"),
  kx(88, "Round of 32", "2026-07-03", "13:00", -5, "D2", "G2", "AT&T Stadium"),
  kx(89, "Round of 16", "2026-07-04", "17:00", -4, "W74", "W77", "Lincoln Financial Field"),
  kx(90, "Round of 16", "2026-07-04", "12:00", -5, "W73", "W75", "NRG Stadium"),
  kx(91, "Round of 16", "2026-07-05", "16:00", -4, "W76", "W78", "MetLife Stadium"),
  kx(92, "Round of 16", "2026-07-05", "18:00", -6, "W79", "W80", "Estadio Azteca"),
  kx(93, "Round of 16", "2026-07-06", "14:00", -5, "W83", "W84", "AT&T Stadium"),
  kx(94, "Round of 16", "2026-07-06", "17:00", -7, "W81", "W82", "Lumen Field"),
  kx(95, "Round of 16", "2026-07-07", "12:00", -4, "W86", "W88", "Mercedes-Benz Stadium"),
  kx(96, "Round of 16", "2026-07-07", "13:00", -7, "W85", "W87", "BC Place"),
  kx(97, "Quarterfinal", "2026-07-09", "16:00", -4, "W89", "W90", "Gillette Stadium"),
  kx(98, "Quarterfinal", "2026-07-10", "12:00", -7, "W93", "W94", "SoFi Stadium"),
  kx(99, "Quarterfinal", "2026-07-11", "17:00", -4, "W91", "W92", "Hard Rock Stadium"),
  kx(100, "Quarterfinal", "2026-07-11", "20:00", -5, "W95", "W96", "Arrowhead Stadium"),
  kx(101, "Semifinal", "2026-07-14", "14:00", -5, "W97", "W98", "AT&T Stadium"),
  kx(102, "Semifinal", "2026-07-15", "15:00", -4, "W99", "W100", "Mercedes-Benz Stadium"),
  kx(103, "Third Place", "2026-07-18", "17:00", -4, "L101", "L102", "Hard Rock Stadium"),
  kx(104, "Final", "2026-07-19", "15:00", -4, "W101", "W102", "MetLife Stadium"),
];

const thirdPlaceSlots = [
  { match: 74, slot: "E1", allowed: ["A", "B", "C", "D", "F"] },
  { match: 77, slot: "I1", allowed: ["C", "D", "F", "G", "H"] },
  { match: 79, slot: "A1", allowed: ["C", "E", "F", "H", "I"] },
  { match: 80, slot: "L1", allowed: ["E", "H", "I", "J", "K"] },
  { match: 81, slot: "D1", allowed: ["B", "E", "F", "I", "J"] },
  { match: 82, slot: "G1", allowed: ["A", "E", "H", "I", "J"] },
  { match: 85, slot: "B1", allowed: ["E", "F", "G", "I", "J"] },
  { match: 87, slot: "K1", allowed: ["D", "E", "I", "J", "L"] },
];

const MOBILE_BRACKET_BREAKPOINT = 760;
const DESKTOP_BRACKET_WINDOWS = [
  ["Round of 32", "Round of 16", "Quarterfinal"],
  ["Round of 16", "Quarterfinal", "Semifinal"],
  ["Semifinal", "Final", "Third Place"],
];
const MOBILE_BRACKET_WINDOWS = [
  ["Round of 32", "Round of 16"],
  ["Round of 16", "Quarterfinal"],
  ["Quarterfinal", "Semifinal"],
  ["Semifinal", "Final", "Third Place"],
];
const STORAGE_KEY = "worldcup-analyzer-state-v1";

const state = {
  groups: cloneGroups(INITIAL_GROUPS),
  thirdOrder: Object.keys(INITIAL_GROUPS),
  groupPicks: {},
  groupScores: {},
  lockedGroupPicks: {},
  seededGroupLocks: {},
  groupStats: {},
  winners: {},
  losers: {},
  bracketStartIndex: 0,
  qualificationExpanded: true,
};

let draggedTeam = null;
let draggedThird = null;
let mobileBracketMode = false;

document.addEventListener("DOMContentLoaded", () => {
  mobileBracketMode = isMobileBracket();
  loadSavedState();
  applyLockedGroupResults();
  bindControls();
  renderAll();
});

function bindControls() {
  setupQualificationToggle();

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById(button.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    state.groups = cloneGroups(INITIAL_GROUPS);
    state.thirdOrder = Object.keys(INITIAL_GROUPS);
    state.groupPicks = keepLockedGroupPicks();
    state.groupScores = keepLockedGroupScores();
    state.groupStats = {};
    state.winners = {};
    state.losers = {};
    renderAll();
  });

  document.getElementById("drawerClose").addEventListener("click", () => {
    document.getElementById("matchDrawer").classList.remove("open");
  });

  setupFilters();

  window.addEventListener("resize", () => {
    const nextMobileMode = isMobileBracket();
    if (nextMobileMode === mobileBracketMode) return;
    mobileBracketMode = nextMobileMode;
    renderBracket();
  });
}

function setupQualificationToggle() {
  const heading = document.querySelector("#bracketSection .panel-heading");
  if (!heading || document.getElementById("qualificationToggle")) return;

  const button = document.createElement("button");
  button.id = "qualificationToggle";
  button.className = "collapse-btn";
  button.type = "button";
  button.addEventListener("click", () => {
    state.qualificationExpanded = !state.qualificationExpanded;
    renderQualification();
    saveState();
  });
  heading.appendChild(button);
}

function setupFilters() {
  const dateFilter = document.getElementById("dateFilter");
  const groupFilter = document.getElementById("groupFilter");
  const roundFilter = document.getElementById("roundFilter");

  const dates = [...new Set([...groupFixtures, ...knockoutFixtures].map(taiwanDateKey))].sort();
  const stageEntries = [...new Map(knockoutFixtures.map((match) => [match.stage, match])).values()];

  dateFilter.innerHTML = [
    `<option value="all">\u5168\u90e8\u65e5\u671f</option>`,
    ...dates.map((date) => `<option value="${date}">${formatDateLabel(date)}</option>`),
  ].join("");

  groupFilter.innerHTML = [
    `<option value="all">\u5168\u90e8\u7d44\u5225</option>`,
    ...Object.keys(INITIAL_GROUPS).map((group) => `<option value="${group}">${group} \u7d44</option>`),
  ].join("");

  roundFilter.innerHTML = [
    `<option value="all">\u5168\u90e8\u968e\u6bb5</option>`,
    `<option value="group-stage">\u5c0f\u7d44\u8cfd</option>`,
    ...stageEntries.map((match) => `<option value="${match.stage}">${stageLabelForMatch(match)}</option>`),
  ].join("");

  dateFilter.addEventListener("change", renderSchedule);
  groupFilter.addEventListener("change", renderSchedule);
  roundFilter.addEventListener("change", renderSchedule);
}

function renderAll() {
  updateGroupsFromResults();
  syncThirdOrder();
  renderGroups();
  renderThirdRanking();
  renderQualification();
  renderBracket();
  renderSchedule();
  saveState();
}

function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return;

    if (saved.groups && sameGroupKeys(saved.groups)) state.groups = cloneGroups(saved.groups);
    if (Array.isArray(saved.thirdOrder)) state.thirdOrder = saved.thirdOrder.filter((group) => INITIAL_GROUPS[group]);
    if (saved.groupPicks && typeof saved.groupPicks === "object") state.groupPicks = { ...saved.groupPicks };
    if (saved.groupScores && typeof saved.groupScores === "object") state.groupScores = { ...saved.groupScores };
    if (saved.lockedGroupPicks && typeof saved.lockedGroupPicks === "object") state.lockedGroupPicks = { ...saved.lockedGroupPicks };
    if (saved.seededGroupLocks && typeof saved.seededGroupLocks === "object") {
      const lockedResultMap = getLockedGroupResultMap();
      Object.keys(saved.seededGroupLocks).forEach((matchNo) => {
        if (sameScore(state.groupScores[matchNo], lockedResultMap[matchNo])) return;
        delete state.groupPicks[matchNo];
        delete state.groupScores[matchNo];
        delete state.lockedGroupPicks[matchNo];
      });
    }
    if (saved.winners && typeof saved.winners === "object") state.winners = { ...saved.winners };
    if (saved.losers && typeof saved.losers === "object") state.losers = { ...saved.losers };
    if (Number.isInteger(saved.bracketStartIndex)) state.bracketStartIndex = saved.bracketStartIndex;
    if (typeof saved.qualificationExpanded === "boolean") state.qualificationExpanded = saved.qualificationExpanded;
  } catch (error) {
    console.warn("Unable to load saved simulator state.", error);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      groups: state.groups,
      thirdOrder: state.thirdOrder,
      groupPicks: state.groupPicks,
      groupScores: state.groupScores,
      lockedGroupPicks: state.lockedGroupPicks,
      seededGroupLocks: state.seededGroupLocks,
      winners: state.winners,
      losers: state.losers,
      bracketStartIndex: state.bracketStartIndex,
      qualificationExpanded: state.qualificationExpanded,
    }));
  } catch (error) {
    console.warn("Unable to save simulator state.", error);
  }
}

function applyLockedGroupResults() {
  const lockedResultMap = getLockedGroupResultMap();
  const seededLocks = {};
  let changed = false;

  Object.entries(lockedResultMap).forEach(([matchNo, score]) => {
    changed = changed || !sameScore(state.groupScores[matchNo], score);
    state.groupScores[matchNo] = score;
    state.groupPicks[matchNo] = resultFromScore(score);
    state.lockedGroupPicks[matchNo] = true;
    seededLocks[matchNo] = true;
  });

  state.seededGroupLocks = seededLocks;

  if (changed) {
    state.winners = {};
    state.losers = {};
  }
}

function getLockedGroupResultMap() {
  const lockedResults = Array.isArray(window.LOCKED_GROUP_RESULTS) ? window.LOCKED_GROUP_RESULTS : [];
  return Object.fromEntries(
    lockedResults.flatMap((entry) => {
      const matchNo = Number(entry?.no);
      const homeScore = normalizeScoreValue(entry?.home);
      const awayScore = normalizeScoreValue(entry?.away);
      const match = groupFixtures.find((fixture) => fixture.no === matchNo);

      if (!match || homeScore === null || awayScore === null) return [];
      return [[String(matchNo), { home: homeScore, away: awayScore }]];
    })
  );
}

function sameScore(left, right) {
  if (!left || !right) return false;
  return left.home === right.home && left.away === right.away;
}

function sameGroupKeys(groups) {
  const expected = Object.keys(INITIAL_GROUPS).sort().join(",");
  return Object.keys(groups).sort().join(",") === expected;
}

function renderGroups() {
  const container = document.getElementById("groupsContainer");
  container.innerHTML = Object.entries(state.groups).map(([group, teams]) => `
    <article class="group-card">
      <div class="group-title">
        <span>${group} \u7d44</span>
        <small>${teams.map((team) => teamLabel(team)).join(" / ")}</small>
      </div>
      <div>
        ${teams.map((team, index) => teamRow(group, team, index)).join("")}
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".team-row").forEach((row) => {
    row.addEventListener("dragstart", () => {
      draggedTeam = { group: row.dataset.group, index: Number(row.dataset.index) };
      row.classList.add("dragging");
    });
    row.addEventListener("dragend", () => row.classList.remove("dragging"));
    row.addEventListener("dragover", (event) => event.preventDefault());
    row.addEventListener("drop", () => {
      if (!draggedTeam || draggedTeam.group !== row.dataset.group) return;
      moveInArray(state.groups[row.dataset.group], draggedTeam.index, Number(row.dataset.index));
      state.winners = {};
      state.losers = {};
      renderAll();
    });
  });
}

function renderThirdRanking() {
  const container = document.getElementById("thirdRanking");
  container.innerHTML = state.thirdOrder.map((group, index) => {
    const team = state.groups[group][2];
    const qualified = index < 8 ? "qualified-third" : "";
    return `
      <div class="third-row ${qualified}" draggable="true" data-group="${group}" data-index="${index}">
        <span class="rank-badge">${index + 1}</span>
        <span class="team-main">
          <span class="team-name">${group}3 ${teamLabel(team)}</span>
          <span class="team-meta">${index < 8 ? "\u76ee\u524d\u6649\u7d1a" : "\u76ee\u524d\u6dd8\u6c70"}</span>
        </span>
        <span class="drag-handle">\u2195</span>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".third-row").forEach((row) => {
    row.addEventListener("dragstart", () => {
      draggedThird = Number(row.dataset.index);
      row.classList.add("dragging");
    });
    row.addEventListener("dragend", () => row.classList.remove("dragging"));
    row.addEventListener("dragover", (event) => event.preventDefault());
    row.addEventListener("drop", () => {
      if (draggedThird === null) return;
      moveInArray(state.thirdOrder, draggedThird, Number(row.dataset.index));
      state.winners = {};
      state.losers = {};
      renderAll();
    });
  });
}

function renderQualification() {
  const strip = document.querySelector(".qualified-strip");
  const button = document.getElementById("qualificationToggle");

  strip?.classList.toggle("is-collapsed", !state.qualificationExpanded);
  if (button) {
    button.textContent = state.qualificationExpanded ? "-" : "+";
    button.setAttribute("aria-label", state.qualificationExpanded ? "Collapse qualified teams" : "Expand qualified teams");
  }

  renderPills("winnerList", Object.keys(state.groups).map((g) => `${g}1 ${teamLabel(state.groups[g][0])}`));
  renderPills("runnerList", Object.keys(state.groups).map((g) => `${g}2 ${teamLabel(state.groups[g][1])}`));
  renderPills("thirdList", getBestThirdGroups().map((g) => `${g}3 ${teamLabel(state.groups[g][2])}`));
}

function renderPills(id, items) {
  document.getElementById(id).innerHTML = items.map((item) => `<span class="pill">${item}</span>`).join("");
}

function renderBracket() {
  const bracket = document.getElementById("bracket");
  const roundOrder = [
    ["Round of 32", knockoutFixtures.filter((m) => m.stage === "Round of 32")],
    ["Round of 16", knockoutFixtures.filter((m) => m.stage === "Round of 16")],
    ["Quarterfinal", knockoutFixtures.filter((m) => m.stage === "Quarterfinal")],
    ["Semifinal", knockoutFixtures.filter((m) => m.stage === "Semifinal")],
    ["Final", knockoutFixtures.filter((m) => m.stage === "Final")],
    ["Third Place", knockoutFixtures.filter((m) => m.stage === "Third Place")],
  ];
  const roundMap = new Map(roundOrder);
  const windows = getBracketWindows();
  const currentWindowIndex = normalizeBracketWindowIndex(windows);
  const visibleRounds = windows[currentWindowIndex].map((stage) => [stage, roundMap.get(stage) || []]);
  const previousIndex = Math.max(0, currentWindowIndex - 1);
  const nextIndex = Math.min(windows.length - 1, currentWindowIndex + 1);

  state.bracketStartIndex = bracketWindowStart(windows[currentWindowIndex]);

  bracket.innerHTML = `
    <div class="bracket-window-controls">
      <button class="bracket-shift" ${currentWindowIndex === 0 ? "disabled" : ""} data-bracket-window="${previousIndex}">
        &larr; ${roundWindowLabel(windows[previousIndex])}
      </button>
      <span>${roundWindowLabel(windows[currentWindowIndex])}</span>
      <button class="bracket-shift" ${currentWindowIndex === windows.length - 1 ? "disabled" : ""} data-bracket-window="${nextIndex}">
        ${roundWindowLabel(windows[nextIndex])} &rarr;
      </button>
    </div>
    <div class="bracket-window ${visibleRounds.some(([round]) => round === "Final") ? "is-final-window" : ""}">
      ${visibleRounds.map(([round, matches]) => `
        <div class="round-column" data-round="${round}">
          <div class="round-title">${stageLabelForMatch(matches[0])}</div>
          ${matches.map((match) => renderMatchCard(match)).join("")}
        </div>
      `).join("")}
    </div>
  `;

  bracket.querySelectorAll(".bracket-shift").forEach((button) => {
    button.addEventListener("click", () => {
      const targetWindow = windows[Number(button.dataset.bracketWindow)];
      state.bracketStartIndex = bracketWindowStart(targetWindow);
      renderBracket();
      saveState();
    });
  });

  bracket.querySelectorAll(".team-choice").forEach((button) => {
    button.addEventListener("click", () => {
      const matchNo = Number(button.dataset.match);
      const teamKey = button.dataset.team;
      if (!teamKey) return;
      chooseWinner(matchNo, teamKey);
    });
  });

  bracket.querySelectorAll(".match-head").forEach((head) => {
    head.addEventListener("click", () => {
      const match = knockoutFixtures.find((item) => item.no === Number(head.dataset.match));
      openDrawer(match, resolveSide(match, "home"), resolveSide(match, "away"));
    });
  });
}

function renderMatchCard(match) {
  const home = resolveSide(match, "home");
  const away = resolveSide(match, "away");
  const selected = state.winners[match.no];
  const completeClass = selected ? "is-complete" : "";

  return `
    <article class="match-card ${completeClass}">
      <div class="match-head" data-match="${match.no}">
        <strong>M${match.no}</strong>
          <span>\u53f0\u7063\u6642\u9593\uFF1A${formatTaiwan(match)}</span>
      </div>
      ${choiceButton(match.no, home, selected)}
      ${choiceButton(match.no, away, selected)}
      <div class="match-venue">
        <span>${match.venue}</span>
        <small>${venueCity(match)}</small>
      </div>
    </article>
  `;
}

function getBracketWindows() {
  return isMobileBracket() ? MOBILE_BRACKET_WINDOWS : DESKTOP_BRACKET_WINDOWS;
}

function isMobileBracket() {
  return window.matchMedia(`(max-width: ${MOBILE_BRACKET_BREAKPOINT}px)`).matches;
}

function normalizeBracketWindowIndex(windows) {
  const exactIndex = windows.findIndex((windowStages) => bracketWindowStart(windowStages) === state.bracketStartIndex);
  if (exactIndex >= 0) return exactIndex;

  const nextIndex = windows.findIndex((windowStages) => bracketWindowStart(windowStages) > state.bracketStartIndex);
  return nextIndex >= 0 ? nextIndex : windows.length - 1;
}

function bracketWindowStart(windowStages) {
  return stageStartIndex(windowStages[0]);
}

function stageStartIndex(stage) {
  return ["Round of 32", "Round of 16", "Quarterfinal", "Semifinal", "Final", "Third Place"].indexOf(stage);
}

function roundWindowLabel(roundStages) {
  return roundStages
    .map(stageLabelForStage)
    .join(" \u2192 ");
}

function stageLabelForStage(stage) {
  return stageLabelForMatch(knockoutFixtures.find((match) => match.stage === stage));
}

function stageLabelForMatch(match) {
  if (!match) return "";
  if (match.group) return "\u5c0f\u7d44\u8cfd";
  if (match.no >= 73 && match.no <= 88) return "32 \u5f37";
  if (match.no >= 89 && match.no <= 96) return "16 \u5f37";
  if (match.no >= 97 && match.no <= 100) return "8 \u5f37";
  if (match.no >= 101 && match.no <= 102) return "4 \u5f37";
  if (match.no === 103) return "\u5b63\u8ecd\u8cfd";
  if (match.no === 104) return "\u51a0\u8ecd\u6230";
  return match.stage;
}

function choiceButton(matchNo, side, selected) {
  const disabled = side.pending ? "disabled" : "";
  const selectedClass = selected && selected === side.key ? "selected" : "";
  return `
    <button class="team-choice ${selectedClass}" ${disabled} data-match="${matchNo}" data-team="${side.pending ? "" : side.key}">
      <span>${side.label}</span>
      <small>${side.slot}</small>
    </button>
  `;
}

function chooseWinner(matchNo, teamKey) {
  const match = knockoutFixtures.find((item) => item.no === matchNo);
  const home = resolveSide(match, "home");
  const away = resolveSide(match, "away");
  const loser = home.key === teamKey ? away : home;

  state.winners[matchNo] = teamKey;
  state.losers[matchNo] = loser.key;

  clearDependents(matchNo);
  renderBracket();
  renderSchedule();
  saveState();
}

function clearDependents(matchNo) {
  const references = [`W${matchNo}`, `L${matchNo}`];
  const affected = knockoutFixtures
    .filter((match) => references.includes(match.home) || references.includes(match.away))
    .map((match) => match.no);

  affected.forEach((no) => {
    delete state.winners[no];
    delete state.losers[no];
    clearDependents(no);
  });
}

function renderSchedule() {
  const dateValue = document.getElementById("dateFilter").value;
  const groupValue = document.getElementById("groupFilter").value;
  const roundValue = document.getElementById("roundFilter").value;
  let fixtures = [...groupFixtures, ...knockoutFixtures];

  if (dateValue !== "all") fixtures = fixtures.filter((match) => taiwanDateKey(match) === dateValue);
  if (groupValue !== "all") fixtures = fixtures.filter((match) => match.group === groupValue || match.home?.startsWith(groupValue) || match.away?.startsWith(groupValue));

  if (groupValue !== "all") fixtures = fixtures.filter((match) => match.group === groupValue);
  if (roundValue === "group-stage") fixtures = fixtures.filter((match) => isGroupStage(match));
  if (roundValue !== "all" && roundValue !== "group-stage" && roundValue !== "group" && roundValue !== "knockout") {
    fixtures = fixtures.filter((match) => match.stage === roundValue);
  }

  fixtures.sort((a, b) => toUtcDate(a) - toUtcDate(b) || a.no - b.no);

  document.getElementById("scheduleList").innerHTML = fixtures.map((match) => {
    const groupStage = isGroupStage(match);
    const resolvedHome = groupStage ? teamSide("", match.home) : resolveSide(match, "home");
    const resolvedAway = groupStage ? teamSide("", match.away) : resolveSide(match, "away");
    const home = resolvedHome.label;
    const away = resolvedAway.label;
    const groupText = groupStage ? `${match.group} \u7d44` : stageLabelForMatch(match);
    const controls = groupStage
      ? renderGroupPickControls(match)
      : renderKnockoutPickControls(match, resolvedHome, resolvedAway);
    return `
      <article class="fixture-card" data-match="${match.no}" data-stage="${match.stage}">
        <div class="fixture-top">
          <span>${groupText}</span>
          <strong>M${match.no}</strong>
        </div>
        <div class="fixture-title">${home} vs ${away}</div>
        <div class="fixture-meta">
          <span>\u53f0\u7063\u6642\u9593\uFF1A${formatTaiwan(match)}</span>
          <span>\u5834\u5730\uFF1A${match.venue}\uFF0C${venueCity(match)}</span>
        </div>
        ${controls}
      </article>
    `;
  }).join("");

  document.querySelectorAll(".result-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const matchNo = Number(button.dataset.match);
      const result = button.dataset.result;
      setFixtureResult(matchNo, result);
    });
  });

  document.querySelectorAll(".lock-result-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleGroupPickLock(Number(button.dataset.match));
    });
  });

  document.querySelectorAll(".score-input").forEach((input) => {
    input.addEventListener("click", (event) => event.stopPropagation());
    input.addEventListener("input", () => {
      setGroupScore(
        Number(input.dataset.match),
        input.dataset.side,
        input.value
      );
    });
  });

  document.querySelectorAll(".fixture-card").forEach((card) => {
    card.addEventListener("click", () => {
      const pool = [...groupFixtures, ...knockoutFixtures];
      const match = pool.find((item) => item.no === Number(card.dataset.match));
      const groupStage = isGroupStage(match);
      const home = groupStage
        ? { label: teamLabel(match.home) }
        : resolveSide(match, "home");
      const away = groupStage
        ? { label: teamLabel(match.away) }
        : resolveSide(match, "away");
      openDrawer(match, home, away);
    });
  });
}

function renderGroupPickControls(match) {
  const selected = state.groupPicks[match.no];
  const score = state.groupScores[match.no] || {};
  const locked = Boolean(state.lockedGroupPicks[match.no]);
  const disabled = locked ? "disabled" : "";
  const lockDisabled = selected ? "" : "disabled";
  return `
    <div class="score-editor" aria-label="\u8f38\u5165\u6bd4\u5206">
      <label>
        <span>${shortTeamName(match.home)}</span>
        <input class="score-input" ${disabled} data-match="${match.no}" data-side="home" type="number" min="0" step="1" inputmode="numeric" value="${score.home ?? ""}">
      </label>
      <span class="score-separator">-</span>
      <label>
        <span>${shortTeamName(match.away)}</span>
        <input class="score-input" ${disabled} data-match="${match.no}" data-side="away" type="number" min="0" step="1" inputmode="numeric" value="${score.away ?? ""}">
      </label>
    </div>
    <div class="result-picker" aria-label="\u9810\u6e2c\u6bd4\u8cfd\u7d50\u679c">
      <button class="result-btn ${selected === "home" ? "selected" : ""}" ${disabled} data-match="${match.no}" data-result="home">
        ${shortTeamName(match.home)}\u52dd
      </button>
      <button class="result-btn ${selected === "draw" ? "selected" : ""}" ${disabled} data-match="${match.no}" data-result="draw">
        \u548c\u5c40
      </button>
      <button class="result-btn ${selected === "away" ? "selected" : ""}" ${disabled} data-match="${match.no}" data-result="away">
        ${shortTeamName(match.away)}\u52dd
      </button>
      <button class="lock-result-btn ${locked ? "locked" : ""}" ${lockDisabled} data-match="${match.no}" title="${locked ? "\u89e3\u9664\u9396\u5b9a" : "\u9396\u5b9a\u5be6\u969b\u7d50\u679c"}">
        ${locked ? "\u5df2\u9396\u5b9a" : "\u9396\u5b9a"}
      </button>
    </div>
  `;
}

function renderKnockoutPickControls(match, home, away) {
  const selected = state.winners[match.no];
  const homeDisabled = home.pending ? "disabled" : "";
  const awayDisabled = away.pending ? "disabled" : "";
  return `
    <div class="result-picker two-options" aria-label="\u9810\u6e2c\u6649\u7d1a\u968a\u4f0d">
      <button class="result-btn ${selected === home.key ? "selected" : ""}" ${homeDisabled} data-match="${match.no}" data-result="${home.key}">
        ${home.pending ? "\u7b49\u5f85\u5c0d\u624b" : `${shortTeamName(home.key)}\u6649\u7d1a`}
      </button>
      <button class="result-btn ${selected === away.key ? "selected" : ""}" ${awayDisabled} data-match="${match.no}" data-result="${away.key}">
        ${away.pending ? "\u7b49\u5f85\u5c0d\u624b" : `${shortTeamName(away.key)}\u6649\u7d1a`}
      </button>
    </div>
  `;
}

function setFixtureResult(matchNo, result) {
  const groupMatch = groupFixtures.find((match) => match.no === matchNo);

  if (groupMatch) {
    if (state.lockedGroupPicks[matchNo]) return;

    if (state.groupPicks[matchNo] === result) {
      delete state.groupPicks[matchNo];
      delete state.lockedGroupPicks[matchNo];
      delete state.groupScores[matchNo];
    } else {
      state.groupPicks[matchNo] = result;
      delete state.groupScores[matchNo];
    }
    state.winners = {};
    state.losers = {};
    renderAll();
    return;
  }

  if (result) chooseWinner(matchNo, result);
  renderSchedule();
}

function setGroupScore(matchNo, side, value) {
  if (state.lockedGroupPicks[matchNo]) return;

  const score = {
    ...(state.groupScores[matchNo] || {}),
    [side]: normalizeScoreValue(value),
  };

  if (score.home === null && score.away === null) {
    delete state.groupScores[matchNo];
    delete state.groupPicks[matchNo];
  } else {
    state.groupScores[matchNo] = score;
    const result = resultFromScore(score);
    if (result) {
      state.groupPicks[matchNo] = result;
    } else {
      delete state.groupPicks[matchNo];
    }
  }

  delete state.lockedGroupPicks[matchNo];
  state.winners = {};
  state.losers = {};
  renderAll();
}

function toggleGroupPickLock(matchNo) {
  if (!state.groupPicks[matchNo]) return;

  if (state.lockedGroupPicks[matchNo]) {
    delete state.lockedGroupPicks[matchNo];
  } else {
    state.lockedGroupPicks[matchNo] = true;
  }

  renderSchedule();
  saveState();
}

function keepLockedGroupPicks() {
  return Object.fromEntries(
    Object.entries(state.groupPicks).filter(([matchNo]) => state.lockedGroupPicks[matchNo])
  );
}

function keepLockedGroupScores() {
  return Object.fromEntries(
    Object.entries(state.groupScores).filter(([matchNo]) => state.lockedGroupPicks[matchNo])
  );
}

function normalizeScoreValue(value) {
  if (value === "") return null;
  const number = Number(value);
  return Number.isInteger(number) && number >= 0 ? number : null;
}

function resultFromScore(score) {
  if (score.home === null || score.away === null || score.home === undefined || score.away === undefined) return "";
  if (score.home > score.away) return "home";
  if (score.away > score.home) return "away";
  return "draw";
}

function isGroupStage(match) {
  return Boolean(match.group);
}

function updateGroupsFromResults() {
  const previousThirdOrder = new Map(state.thirdOrder.map((group, index) => [group, index]));
  const nextStats = {};

  Object.keys(state.groups).forEach((group) => {
    const tieOrder = new Map(state.groups[group].map((team, index) => [team, index]));
    const table = new Map(INITIAL_GROUPS[group].map((team) => [team, {
      team,
      points: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDiff: 0,
      played: 0,
    }]));

    groupFixtures.filter((match) => match.group === group).forEach((match) => {
      const result = state.groupPicks[match.no];
      if (!result) return;

      const home = table.get(match.home);
      const away = table.get(match.away);
      home.played += 1;
      away.played += 1;

      const score = state.groupScores[match.no];
      if (score && score.home !== null && score.away !== null && score.home !== undefined && score.away !== undefined) {
        home.goalsFor += score.home;
        home.goalsAgainst += score.away;
        away.goalsFor += score.away;
        away.goalsAgainst += score.home;
        home.goalDiff = home.goalsFor - home.goalsAgainst;
        away.goalDiff = away.goalsFor - away.goalsAgainst;
      }

      if (result === "home") {
        home.points += 3;
        home.wins += 1;
        away.losses += 1;
      } else if (result === "away") {
        away.points += 3;
        away.wins += 1;
        home.losses += 1;
      } else {
        home.points += 1;
        away.points += 1;
        home.draws += 1;
        away.draws += 1;
      }
    });

    nextStats[group] = Object.fromEntries(
      [...table.entries()].map(([team, stats]) => [team, stats])
    );

    state.groups[group].sort((a, b) => {
      const aStats = table.get(a);
      const bStats = table.get(b);
      return bStats.points - aStats.points
        || bStats.goalDiff - aStats.goalDiff
        || bStats.goalsFor - aStats.goalsFor
        || bStats.wins - aStats.wins
        || tieOrder.get(a) - tieOrder.get(b);
    });
  });

  state.groupStats = nextStats;
  state.thirdOrder = Object.keys(state.groups).sort((a, b) => {
    const aTeam = state.groups[a][2];
    const bTeam = state.groups[b][2];
    const aStats = state.groupStats[a][aTeam];
    const bStats = state.groupStats[b][bTeam];

    return bStats.points - aStats.points
      || bStats.goalDiff - aStats.goalDiff
      || bStats.goalsFor - aStats.goalsFor
      || bStats.wins - aStats.wins
      || previousThirdOrder.get(a) - previousThirdOrder.get(b);
  });
}

function openDrawer(match, home, away) {
  document.getElementById("drawerStage").textContent = `${isGroupStage(match) ? `${match.group} \u7d44` : stageLabelForMatch(match)} / M${match.no}`;
  document.getElementById("drawerTitle").innerHTML = `${home.label} <span class="drawer-versus">vs</span> ${away.label}`;
  document.getElementById("drawerTaiwan").textContent = formatTaiwan(match);
  document.getElementById("drawerLocal").textContent = `${match.date} ${match.time} UTC${match.offset >= 0 ? "+" : ""}${match.offset}`;
  document.getElementById("drawerVenue").textContent = match.venue;
  document.getElementById("drawerCity").textContent = venueCity(match);
  document.getElementById("matchDrawer").classList.add("open");
}

function resolveSide(match, side) {
  const slot = match[side];

  if (/^[A-L][1-3]$/.test(slot)) {
    const group = slot[0];
    const rank = Number(slot[1]) - 1;
    return teamSide(slot, state.groups[group][rank]);
  }

  if (/^W\d+$/.test(slot)) {
    const key = state.winners[Number(slot.slice(1))];
    return key ? teamSide(slot, key) : pendingSide(slot, `\u7b49\u5f85 ${slot}`);
  }

  if (/^L\d+$/.test(slot)) {
    const key = state.losers[Number(slot.slice(1))];
    return key ? teamSide(slot, key) : pendingSide(slot, `\u7b49\u5f85 ${slot}`);
  }

  if (slot.startsWith("3rd")) {
    const group = resolveThirdGroup(match.no);
    return group ? teamSide(`${group}3`, state.groups[group][2]) : pendingSide(slot, "\u7b2c\u4e09\u540d\u5206\u914d\u4e2d");
  }

  return pendingSide(slot, slot);
}

function resolveThirdGroup(matchNo) {
  const allocation = allocateThirds(getBestThirdGroups());
  return allocation[matchNo];
}

function allocateThirds(bestGroups) {
  const officialAllocation = window.THIRD_PLACE_ALLOCATIONS?.[[...bestGroups].sort().join("")];
  if (officialAllocation) return officialAllocation;

  const slots = thirdPlaceSlots.map((slot) => ({
    ...slot,
    candidates: slot.allowed.filter((group) => bestGroups.includes(group)),
  }));
  const used = new Set();
  const result = {};

  function backtrack() {
    if (Object.keys(result).length === slots.length) return true;

    const slot = slots
      .filter((item) => !result[item.match])
      .sort((a, b) => availableCount(a) - availableCount(b))[0];

    for (const group of slot.candidates) {
      if (used.has(group)) continue;
      used.add(group);
      result[slot.match] = group;
      if (backtrack()) return true;
      used.delete(group);
      delete result[slot.match];
    }

    return false;
  }

  function availableCount(slot) {
    return slot.candidates.filter((group) => !used.has(group)).length;
  }

  return backtrack() ? result : {};
}

function syncThirdOrder() {
  const known = new Set(Object.keys(state.groups));
  state.thirdOrder = state.thirdOrder.filter((group) => known.has(group));
  Object.keys(state.groups).forEach((group) => {
    if (!state.thirdOrder.includes(group)) state.thirdOrder.push(group);
  });
}

function getBestThirdGroups() {
  return state.thirdOrder.slice(0, 8);
}

function teamRow(group, team, index) {
  const stats = state.groupStats[group]?.[team] || {
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDiff: 0,
  };

  return `
    <div class="team-row" draggable="true" data-group="${group}" data-index="${index}">
      <span class="rank-badge">${index + 1}</span>
      <span class="team-main">
        <span class="team-name">${teamLabel(team)}</span>
        <span class="team-meta">${stats.played}\u5834\u30FB${stats.points}\u5206\u30FB${stats.wins}\u52dd ${stats.draws}\u548c ${stats.losses}\u6557\u30FB\u9032${stats.goalsFor} \u5931${stats.goalsAgainst}\u30FB\u6de8\u52dd${formatGoalDiff(stats.goalDiff)}</span>
      </span>
      <span class="drag-handle">\u2195</span>
    </div>
  `;
}

function teamSide(slot, team) {
  return {
    key: team,
    label: teamLabel(team),
    slot,
    pending: false,
  };
}

function pendingSide(slot, label) {
  return {
    key: "",
    label,
    slot,
    pending: true,
  };
}

function fx(no, group, date, time, offset, home, away, venue) {
  return { no, stage: "Group Stage", group, date, time, offset, home, away, venue };
}

function kx(no, stage, date, time, offset, home, away, venue) {
  return { no, stage, group: "", date, time, offset, home, away, venue };
}

function cloneGroups(groups) {
  return Object.fromEntries(Object.entries(groups).map(([group, teams]) => [group, [...teams]]));
}

function moveInArray(array, from, to) {
  if (from === to) return;
  const [item] = array.splice(from, 1);
  array.splice(to, 0, item);
}

function teamLabel(team) {
  const data = TEAM_POOL[team];
  if (!data) return team;

  const [code, name] = data;
  const flag = FLAG_FILES[team]
    ? `<img class="team-flag" src="${FLAG_FILES[team]}" alt="${name} flag" loading="lazy">`
    : `<span class="team-code">${code}</span>`;

  return `<span class="team-label">${flag}<span>${name}</span></span>`;
}

function isTeamKey(value) {
  return Object.prototype.hasOwnProperty.call(TEAM_POOL, value);
}

function slotText(slot) {
  return slot
    .replace(/^W(\d+)/, "M$1 \u52dd\u8005")
    .replace(/^L(\d+)/, "M$1 \u6557\u8005")
    .replace(/^([A-L])1$/, "$1 \u7d44\u7b2c\u4e00")
    .replace(/^([A-L])2$/, "$1 \u7d44\u7b2c\u4e8c")
    .replace(/^([A-L])3$/, "$1 \u7d44\u7b2c\u4e09")
    .replace(/^3rd /, "\u7b2c\u4e09\u540d ");
}

function venueCity(match) {
  const venue = VENUES[match.venue] || ["-", "-"];
  return `${venue[0]}\u3001${venue[1]}`;
}

function toUtcDate(match) {
  const [year, month, day] = match.date.split("-").map(Number);
  const [hour, minute] = match.time.split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour - match.offset, minute));
}

function formatTaiwan(match) {
  return new Intl.DateTimeFormat("zh-TW", {
    timeZone: "Asia/Taipei",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(toUtcDate(match));
}

function taiwanDateKey(match) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(toUtcDate(match));
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function formatDateLabel(date) {
  const [year, month, day] = date.split("-");
  return `${year}/${month}/${day}\uFF08\u53f0\u7063\uFF09`;
}

function shortTeamName(team) {
  const data = TEAM_POOL[team];
  return data?.[1] || team;
}

function formatGoalDiff(value) {
  return value > 0 ? `+${value}` : `${value}`;
}
