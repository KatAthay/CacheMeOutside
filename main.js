const array = [
  { quote: "Love is a 2-way street, constantly under construction."},
  { quote: "I love you like a back-alley hooker loves crack." },
  { quote: "If love is blind, then why is lingere so popular?" },
  { quote: "You treat me like a unicorn even though I'm an ass." },
  { quote: "I love you as much as Kanye loves Kanye!" },
  { quote: "Are you beaver, cuz DAM!" },
  { quote: "Love is like a fart. If you have to force it, it's probably something else." },
  { quote: "If love is the answer, could you please rephrase the question?" },
  { quote: "Love the wine you're with." },
  { quote: "Valentine's Day money saving tip: break up on February 13th and get back together on the 15th." },
  { quote: "Love is like an hourglass, with the heart filling up as the brain empties." },
  { quote: "May your beer be as cold as your ex's heart." },
  { quote: "One should always be in love. That is the reason one should never marry." },
  { quote: "You can't buy love, but you can pay heavily for it!" },
  { quote: "To be in love is merely to be in a state of perceptual anesthesia." },
  { quote: "Hey, my name is Microsoft. Can I crash at your place tonight?" },
  { quote: "Roses are red, cellos are brown. Never gonna give you up, never gonna let you down." }
];

document.addEventListener('DOMContentLoaded', () => {
  const randomizer = Math.floor(Math.random() * array.length);
  document.getElementById('quote').textContent = array[randomizer].quote;
})

