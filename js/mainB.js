const greeting = [
  "Xin chào, Mình là Nhã",
  "こんにちは, 私の名前は Nathan です",
  "Mabuhay, Ako si Nathan",
  "Bonjour! Je m'appelle Nathan",
  "Namaskāra mērō nāma Nathan",
  "สวัสดี, ผมชื่อ Nathan",
  "Hi, I'm Nathan",
];
let index = 0;

const sayHi = () => {
  document.getElementById("greeting").innerHTML = greeting[index];
  index === 6 ? (index = 0) : index++;
};

setInterval(sayHi, 3000);
