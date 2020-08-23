const dialogs = [
  "Wellcome to my Home. How are you today?",
  "Please, have a sit!",
  'A coffee maybe?! <i class="fas fa-mug-hot"></i>',
  "How can I help you with today?",
  'Creating a website perhaps? <i class="far fa-smile-beam"></i>',
  "Do you want to hear my story or look at my portfolio?",
  'You can be my buddy if you love trekking <i class="fas fa-hiking"></i>',
];

let index = 1;
const talk = () => {
  document.getElementById("sentence").innerHTML = dialogs[index];
  index === 6 ? (index = 0) : index++;
};

setInterval(talk, 3500);
