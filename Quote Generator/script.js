function generate(){
  var quotes = {
    "- Monique Duval" : '"She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky."',
    "- Jon Krakauer, Into the Wild" : '"He was unheeded, happy, and near to the wild heart of life. He was alone and young and wilful and wildhearted, alone amid a waste of wild air and brackish waters and the seaharvest of shells and tangle and veiled grey sunlight."',
    "- Charlotte Eriksson, Empty Roads & Broken Bottles: in search or The Great Perhaps" : '"There are very few friends that will lie down with you on empty streets in the middle of the night, without a word. No questions, no asking why, just quietly lay there with you, observing the stars, until you are  ready to get back up on your feet again and walk the last bit home, softly holding your hand as a quiet way of saying I am here. It was a beautiful night."',
    "- Jenny Valentine, Broken Soup" : '"Even when you would lost everything you thought there was to lose, somebody came along and gave you something for free."',
    "- J.D. Stroube, Caged in Darkness" : '"All that is left to bring you pain, are the memories. If you face those, you will be free. You can not spend the rest of your life hiding from yourself; always afraid that your memories will incapacitate you, and they will if you continue to bury them."',
    "- Jamie Ford, Songs Of Willow Frost" : '"The library is like a candy store where everything is free."',
    "- Charlotte Eriksson" : '"I woke up early and took the first train to take me away from the city. The noise and all its people. I was alone on the train and had no idea where I was going, and that is why I went there. Two hours later we arrived in a small town, one of those towns with one single coffee shop and where everyone knows each others name. I walked for a while until I found the water, the most peaceful place I know. There I sat and stayed the whole day, with nothing and everything on my mind, cleaning my head. Silence, I learned, is some times the most beautiful sound."',
    "- Aaron Lauriten, 100 Days Drive: The Great North American Road Trip" : '"It is in those quiet little towns, at the edge of the world, that you will find the salt of the earth people who make you feel right at home."',
    "- Craig Ferguson" : '"I freely admit I am confused. I am a confused and troubled individual but at the same time...Its Free! "',
    "- Lauren DeStefano, Fever" : '"But there is no such thing as free. There are only different and more horrible ways to be enslaved."'
  }

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() *
    authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;

}