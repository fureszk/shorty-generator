window.more = function () {
  return {
    caption: "Mivan more?",
    sayings: [
      "mivan",
      "more",
      "lehet csal",
      "husi",
      "jóóóóój",
      "kapta halt",
      "húzzátok a falakot",
      "puding",
      "nem gyün",
      "egy gyün",
      "én már reportoltam",
      "tuti csal",
      "répülön van",
      "tolja",
      "egybű'",
      "mind a te hibád",
      "plentöl",
      "nem",
      "bambaaa",
      "ennek nincs feje",
      "meghalnák",
      "csalik"
    ],
    say() {
      this.caption = this.capitalize(this.shuffle(this.sayings).slice(0, 2+Math.floor(Math.random() * 2)).join(' '));
      
      this.caption += this.shuffle(['?!', '!']).slice(0,1);
    },
    shuffle (array) {
      var i = 0
        , j = 0
        , temp = null

      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      
      return array;
    },
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  };
}