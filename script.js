const ballImgEl = document.querySelector(".ball-img img");
const ballImgDivEl = ballImgEl.parentElement;
const questionInputEl = document.querySelector(".question-area input");
const errorParagraphEl = document.querySelector(".question-area .error");
const answearParagraphEl = document.querySelector(".question-area .answear");

const answearsDB = [
  "Tak.",
  "Nie.",
  "Może...",
  "Ciężko powiedzieć.",
  "Masz 50% szans!",
  "Masz więcej niż 50% szans!",
  "Czasem lepiej nie wiedzieć...",
];

const sendQuestionHandler = (e) => {
  const userQuestion = questionInputEl.value;
  if (
    !userQuestion ||
    userQuestion.slice(-1) !== "?" ||
    userQuestion.indexOf("?") === 0
  ) {
    showErr(userQuestion);
  } else showAnswear();
};

const showErr = (data) => {
  if (!data || data === "?")
    errorParagraphEl.textContent =
      "Aby poznać odpowiedź najpierw zadaj pytanie.";
  else errorParagraphEl.textContent = "Zakończ pytanie odpowiednim znakiem.";
  errorParagraphEl.setAttribute("style", "visibility: visible");
  questionInputEl.value = "";
};
const showAnswear = (e) => {
  errorParagraphEl.setAttribute("style", "visibility: hidden");
  const answearMaker = Math.floor(Math.random() * 7);
  questionInputEl.value = "";
  answearParagraphEl.innerHTML = `<span>Odpoowiedź brzmi:</span>${answearsDB[answearMaker]}`;
  answearParagraphEl.setAttribute("style", "visibility: visible");
};

ballImgEl.addEventListener("mousemove", () => {
  ballImgEl.classList.add("shake-animation");
});
ballImgEl.addEventListener("mouseout", () => {
  ballImgEl.classList.remove("shake-animation");
});
ballImgEl.addEventListener("click", sendQuestionHandler);
