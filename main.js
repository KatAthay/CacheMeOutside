const array = [
  { quote: "Love is a 2-way street, constantly under construction."},
  { quote: "I love you like a back alley hooker loves crack." },
  { quote: "If love is blind, then why is lingere so popular?" },
  { quote: "You treat me like a unicorn even though im an ass." },
  { quote: "I love you as much as Kanye loves Kanye!" },
  { quote: "Are you beaver, cuz DAM!" },
  { quote: "Love is like a fart. If you have to force it, it's probably something else." },
  { quote: "I don't understand why Cupid was chosen to represent Valentine's Day. When I think about romance, the last thing on my mind is a short, chubby toddler coming at me with a weapon." },
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

// Speech Bubble 
$(document).ready(function () {
  $(document).ready(function () {

    $.line(0, $('.txtLine').first());


    $(window).resize(function () {
      $('.txtLine').css({ 'margin-left': Math.ceil($('body').outerWidth() / 5) });
    });
  });


  $.line = function (i, line) {
    $(line).delay(i * 1000).queue(function (n) {
      var shw = $(line).find('.show');
      var hid = $(line).find('.hide');
      var txt = $(hid).text();
      if ($(shw).hasClass('stretch')) {
        $(shw).parents('.speech').css({ 'height': 40 });
      }
      $(shw).prepend('<div></div>');
      for (var ii = 0; ii < txt.length; ii++) {

        $.letter(ii, line, shw, hid, txt, i);
      }

      n();

    });
  }

  $.letter = function (ii, line, shw, hid, txt, i) {
    $(line).delay(50).queue(function (n) {
      var char = txt[ii];
      $(shw).html($(shw).html() + char);
      n();

      if ($(shw).hasClass('stretch')) {

        if ($(shw).outerWidth() > $(shw).parents('.speech').outerWidth() - 20) {
          $(shw).parents('.speech').css({ 'width': $(shw).parents('.speech').outerWidth() + 1 });
        }
        if ($(shw).outerHeight() > $(shw).parents('.speech').outerHeight() - 20) {
          console.log($(shw).parents('.speech').outerHeight() + 10);
          $(shw).parents('.speech').css({ 'height': $(shw).parents('.speech').outerHeight() + 1 });
        }
        else{

        }

      } else {
        if ($(shw).outerHeight() > $(shw).parents('.speech').outerHeight() - 20) {
          $(shw).parents('.speech').css({ 'height': $(shw).parents('.speech').outerHeight() + 1 });
        }
      }


      if (ii == (txt.length - 1)) {

        $(line).delay(10).queue(function (n) {
          $(shw).css({ 'border-bottom': '', 'box-shadow': '' });
          $(shw).find('div').remove();
          var incr = i++;
          $.line(incr, $(line).next());
          n();
        });
      }
    });
  }
});