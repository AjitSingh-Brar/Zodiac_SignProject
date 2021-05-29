let personalityList = [
  "At their core, Aries do what they want and do things their way. They are unafraid of conflict, highly competitive, honest and direct. An Aries is not weighed down by the freedom of choice, and is perhaps the sign that is least conflicted about what they want. They throw themselves at the world eagerly and without fear. ",
  "Taureans are the human equivalent of moss. A handmade wooden chair. They are normally satisfied with the way things are. They embody stability. Sitting in a patch of grass admiring the breeze. When everything else seems to be falling apart, Taureans are an oasis of calm, a rock of dependability. ",
  "Geminis are very intelligent and pick up knowledge quickly. They are perceptive, analytical, and often very funny. They have an unreserved and childlike curiosity, always asking new questions.",
  "A Cancer’s personality is like wading chest deep in a lake of warm water. It feels sparkling and cool while it’s touching the body, but you know that if you were to dive in, it would feel warm.",
  "Leos are bold, warm, and loving. They are also the ultimate showmen. They can dazzle with the theatrical flair of a Broadway star and the charisma of a politician. They are captivating personalities. They have a way with words, and can speak eloquently on just about any topic, no matter how quickly they’ve just been introduced to it.",
  "Virgos are known for being perfectionists. Clean freaks. They are known for their attention to detail. They can find patterns where there are none. They can be finicky and critical to a fault.",
  "Libras are difficult to really understand because they seem so contradictory on the surface. They’re simultaneously extroverted and introverted, strategic and spontaneous, focused and intuitive. ",
  "The Scorpio personality is a profound chasm of infinite complexity (or at least how they project themselves). They are difficult people to get to know. They are psychological trap doors. They socialize from behind a double-sided mirror, always scanning, reading you while you can only see your own reflection. ",
  "Sagittarius is the ultimate empiricist. They will always choose principles over feelings and will often question who they are. They move from job to job, philosophy to philosophy, belief to belief. They are explorers of the human condition and are unafraid of change. ",
  "Capricorns aren’t consumed by the need for attention, but are not immune to it. They simply don’t indulge in attention-seeking behavior. They don’t want attention for their looks or style or ingenuity. They don’t want to be admired, but they do want to be respected. ",
  "Aquarians are archetypical outcasts. This doesn’t mean they’re loners. In fact, they thrive in large groups—charming you with their peculiar senses of humor, intriguing you with fun facts about the history of disposable straws, or convincing you to join their reading group. ",
  "Describing a Pisces’ personality can be difficult because Pisces tend to evade distinction. Their behavior changes significantly based on who they’re around. Pisces are just permeable membranes that pensively let things flow through them. They are cerebral sea sponges. They are boundless. ",
];
let zodiacList = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
];

let list_length = 12;

const getInfo = (zodiac_type) => {
  for (let i = 0; i < list_length; i++) {
    if (zodiac_type === zodiacList[i]) {
      displayInfo(i, zodiac_type);
      break;
    }
  }
};

const displayInfo = (i, zodiac_type) => {
  let element = document.querySelector(".zodiac_infomation");
  let headingElement = document.createElement("h3");
  headingElement.innerHTML = zodiac_type;

  let infoElement = document.createElement("span");
  infoElement.classList.add("zodiac_description");
  infoElement.innerHTML = `${personalityList[i]}`;

  element.appendChild(headingElement);
  element.appendChild(infoElement);
  let zodiac_InfoBar = document.querySelector("#zodiac_info");
  zodiac_InfoBar.style.visibility = "visible";
};

const closeInfo = () => {
  let element = document.querySelector(".zodiac_infomation");
  element.innerHTML = "";
  let zodiac_InfoBar = document.querySelector("#zodiac_info");
  zodiac_InfoBar.style.visibility = "hidden";
};
