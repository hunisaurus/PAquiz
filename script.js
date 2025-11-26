import { data } from "./data.js";

// console.log(data[0].question + data[49].question);

const choosenCategories = [];
const allQuestionsToChooseFrom = [];
const questionsSoFar = [];
let maxQuestionCount = 0;
let allQuestionsCount = 0;
let currQuestionCount = 0;
let currentQuestion;

const rootElement = document.getElementById("root");

const goButton = document.createElement("button");

// view
function displayFirstPage(data) {
  // fill categories
  const categories = [];
  for (let question of data) {
    if (!categories.includes(question.category)) {
      categories.push(question.category);
    }
  }

  const welcomeElement = document.createElement("h1");
  welcomeElement.classList.add("firstPage");
  welcomeElement.id = "welcome";
  welcomeElement.innerText = "Üdv a PA quizben!";

  const setupContainerElement = document.createElement("div");
  setupContainerElement.classList.add("firstPage");
  setupContainerElement.classList.add("setup");
  setupContainerElement.id = "setup";

  const categoriesElement = document.createElement("div");
  categoriesElement.classList.add("firstPage");
  categoriesElement.classList.add("categories");
  categoriesElement.id = "categories";
  setupContainerElement.appendChild(categoriesElement);

  const chooseThemesElement = document.createElement("h4");
  chooseThemesElement.id = "chooseThemes";
  chooseThemesElement.classList.add("firstPage");
  chooseThemesElement.classList.add("textChange");
  chooseThemesElement.innerText = "VÁLASSZ TÉMÁKAT:";

  for (let cat of categories) {
    let count = 0;
    for (let q of data) {
      if (q.category === cat) {
        count++;
      }
    }
    const categoryElement = document.createElement("div");
    categoryElement.innerText = cat;
    categoryElement.classList.add("category");
    categoryElement.classList.add("firstPage");
    categoriesElement.appendChild(categoryElement);

    const countElement = document.createElement("div");
    countElement.classList.add("categoryCount");
    countElement.id = "categoryCount";
    countElement.innerText = `(${count})`;
    categoryElement.appendChild(countElement);

    const catCheckBox = document.createElement("input");
    catCheckBox.setAttribute("type", "checkbox");
    catCheckBox.id = cat;
    catCheckBox.classList.add("firstPage");
    catCheckBox.classList.add("checkBox");
    categoryElement.appendChild(catCheckBox);
  }

  const checkAllElement = document.createElement("div");
  checkAllElement.classList.add("firstPage");
  checkAllElement.classList.add("checkAll");
  checkAllElement.innerText = "ÖSSZES TÉMA: ";

  const checkAllBox = document.createElement("input");
  checkAllBox.classList.add("firstPage");
  checkAllBox.setAttribute("type", "checkbox");
  checkAllBox.id = "checkAllBox";
  // checkAllBox.classList.add("checkBox")
  checkAllBox.classList.add("checkAllBox");
  checkAllElement.appendChild(checkAllBox);

  const maxQuestionCountElement = document.createElement("div");
  maxQuestionCountElement.id = "maxQuestionCount";
  maxQuestionCountElement.classList.add("firstPage");
  maxQuestionCountElement.classList.add("maxQuestionCount");
  maxQuestionCountElement.innerText = "MAX: " + maxQuestionCount + " kérdés";

  goButton.setAttribute("onmousedown", "audio.play()");

  const questionsSlideDiv = document.createElement(`div`);
  questionsSlideDiv.classList.add("firstPage");
  questionsSlideDiv.id = "slide";

  const howManyDoYouWantElement = document.createElement("p");
  howManyDoYouWantElement.classList.add("firstPage");
  howManyDoYouWantElement.innerText = "Milyen hosszú legyen a teszt?";
  howManyDoYouWantElement.classList.add("textChange");

  const questionsSlideInput = document.createElement("input");
  questionsSlideInput.classList.add("firstPage");
  questionsSlideInput.id = "howManyQuestionsInput";
  questionsSlideInput.setAttribute("type", "range");
  questionsSlideInput.setAttribute("min", 1);
  questionsSlideInput.setAttribute("max", 1);

  const questionsSlideDetails = document.createElement("datalist");
  questionsSlideDetails.id = "details";
  questionsSlideDetails.classList.add("firstPage");

  const howManyQuestionsCount = document.createElement("div");
  howManyQuestionsCount.classList.add("firstPage");
  howManyQuestionsCount.classList.add("textChange");
  howManyQuestionsCount.id = "howManyQuestionsCount";
  howManyQuestionsCount.innerText = 0;

  const kerdesElement = document.createElement("p");
  kerdesElement.classList.add("firstPage");
  kerdesElement.innerText = "kérdés";
  howManyQuestionsCount.appendChild(kerdesElement);

  questionsSlideDiv.appendChild(howManyDoYouWantElement);
  questionsSlideDiv.appendChild(questionsSlideInput);
  questionsSlideDiv.appendChild(questionsSlideDetails);
  questionsSlideDiv.appendChild(howManyQuestionsCount);

  rootElement.appendChild(welcomeElement);
  goButton.innerText = "OK, LET'S GO!";
  rootElement.appendChild(chooseThemesElement);
  rootElement.appendChild(setupContainerElement);
  rootElement.appendChild(goButton);

  const setupRightDiv = document.createElement("div");
  setupRightDiv.classList.add("setup-right");
  setupRightDiv.id = "setup-right";
  setupRightDiv.appendChild(checkAllElement);
  setupRightDiv.appendChild(maxQuestionCountElement);
  setupRightDiv.appendChild(questionsSlideDiv);
  setupContainerElement.appendChild(setupRightDiv);

  categoriesElement.addEventListener("change", (e) => {
    if (choosenCategories.length === 0) {
      howManyQuestionsCount.innerText = 0;
      howManyQuestionsCount.appendChild(kerdesElement);
    }
  });

  goButton.addEventListener("click", (e) => {
    if (
      !goButton.classList.contains("answer") &&
      questionsSlideInput.value != 0 &&
      maxQuestionCount != 0
    ) {
      allQuestionsCount = questionsSlideInput.value;
      for (let cat of choosenCategories) {
        for (let q of data) {
          if (q.category === cat) {
            allQuestionsToChooseFrom.push(q);
          }
        }
      }

      allQuestionsCount = questionsSlideInput.value;
      // console.log(allQuestionsToChooseFrom)
      askQuestionAndAnswer(allQuestionsToChooseFrom);
    } else if (goButton.classList.contains("answer")) {
      displayAnswerPage(currentQuestion);
    }
  });

  rootElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("checkBox")) {
      // console.log("clicked")
      if (event.target.parentElement.style.color !== "brown") {
        event.target.setAttribute("checked", true);
        event.target.parentElement.style.color = "brown";
        choosenCategories.push(event.target.id);
        const countText = event.target.previousElementSibling.innerText; // e.g., "(5)"
        const count = parseInt(countText.replace(/\D/g, ""), 10); // Extracts only the number
        maxQuestionCount += count;
      } else if (event.target.parentElement.style.color === "brown") {
        event.target.removeAttribute("checked");
        event.target.parentElement.style.color = "palegreen";
        for (let i = 0; i < choosenCategories.length; i++) {
          if (choosenCategories[i] === event.target.id) {
            choosenCategories.splice(i, 1);
          }
        }
        const countText = event.target.previousElementSibling.innerText; // e.g., "(5)"
        const count = parseInt(countText.replace(/\D/g, ""), 10); // Extracts only the number
        maxQuestionCount -= count;
      }

      questionsSlideInput.setAttribute("max", maxQuestionCount);
      questionsSlideInput.setAttribute("value", maxQuestionCount);
      howManyQuestionsCount.innerText = maxQuestionCount + " kérdés";
      maxQuestionCountElement.innerText =
        "MAX: " + maxQuestionCount + " kérdés";
      questionsSlideDetails.innerHTML = "";

      if (maxQuestionCount < 21) {
        for (let i = 1; i <= maxQuestionCount; i++) {
          const optionElement = document.createElement("option");
          optionElement.setAttribute("value", i.toString());
          optionElement.setAttribute("label", "|");
          questionsSlideDetails.appendChild(optionElement);
        }
      } else if (maxQuestionCount > 20 && maxQuestionCount < 41) {
        for (let i = 1; i <= maxQuestionCount; i += 2) {
          const optionElement = document.createElement("option");
          optionElement.setAttribute("value", i.toString());
          optionElement.setAttribute("label", "|");
          questionsSlideDetails.appendChild(optionElement);
        }
      } else if (maxQuestionCount > 40 && maxQuestionCount < 51) {
        const option1Element = document.createElement("option");
        option1Element.setAttribute("value", (1).toString());
        option1Element.setAttribute("label", "|");
        questionsSlideDetails.appendChild(option1Element);

        for (let i = 5; i <= maxQuestionCount; i += 5) {
          const optionElement = document.createElement("option");
          optionElement.setAttribute("value", i.toString());
          optionElement.setAttribute("label", i.toString());
          questionsSlideDetails.appendChild(optionElement);
        }
      }

      // console.log(choosenCategories)
    }
  });

  questionsSlideInput.addEventListener("change", (e) => {
    howManyQuestionsCount.innerText = questionsSlideInput.value;
    howManyQuestionsCount.appendChild(kerdesElement);
  });

  checkAllBox.addEventListener("click", (e) => {
    const chex = categoriesElement.getElementsByClassName("checkBox");
    // console.log(chex);
    if (!checkAllBox.hasAttribute("checked")) {
      checkAllBox.setAttribute("checked", true);
      for (let check of chex) {
        if (!check.hasAttribute("checked")) {
          // console.log("clicked")
          check.click();
        }
      }
    } else if (checkAllBox.hasAttribute("checked")) {
      for (let check of chex) {
        if (check.hasAttribute("checked")) {
          // console.log("clicked")
          check.click();
        }
      }
      checkAllBox.removeAttribute("checked");
    }

    howManyQuestionsCount.innerText = questionsSlideInput.value;
    howManyQuestionsCount.appendChild(kerdesElement);
  });

  return rootElement;
}

function randomQuestion(allQuestionsToChooseFrom) {
  const answer =
    allQuestionsToChooseFrom[
      Math.floor(Math.random() * allQuestionsToChooseFrom.length)
    ];
  for (let i = 0; i < allQuestionsToChooseFrom.length; i++) {
    if (allQuestionsToChooseFrom[i].question === answer.question) {
      allQuestionsToChooseFrom.splice(i, 1);
    }
  }

  return answer;
}

function askQuestionAndAnswer(allQuestionsToChooseFrom) {
  if (document.getElementById("categories") != undefined) {
    document.getElementById("maxQuestionCount").remove();
    document.getElementById("details").remove();
    document.getElementById("categories").remove();
    document.getElementById("chooseThemes").remove();
    document.getElementById("howManyQuestionsCount").remove();
    document.getElementById("howManyQuestionsInput").remove();
    document.getElementById("setup-right").remove();
    for (let E of document.getElementsByClassName("firstPage")) {
      E.remove();
    }
  }

  if (document.getElementById("yes") != undefined) {
    if (document.getElementById("yourAnswer") != undefined) {
      document.getElementById("yourAnswer").remove();
    }
    document.getElementById("yesOrNo").remove();
    document.getElementById("question").remove();
    for (let e of document.querySelectorAll(".answersSoFar")) {
      e.remove();
    }
  }

  const questionElement = document.createElement("h2");
  questionElement.id = "question";
  questionElement.classList.add("textChange");

  const explanationElement = document.createElement("p");
  explanationElement.id = "explanation";
  explanationElement.innerText =
    "Írd le a választ magadnak röviden, a saját kulcs-szavaiddal,\n Majd nyomd meg a CHECK gombot, hogy megnézd más mit írt!";

  const answerInputElement = document.createElement("textarea");
  answerInputElement.id = "answerInput";

  currQuestionCount++;
  currentQuestion = randomQuestion(allQuestionsToChooseFrom);

  // rootElement.innerHTML = "";
  rootElement.appendChild(questionElement);
  questionElement.innerText = currentQuestion.question;

  rootElement.appendChild(answerInputElement);
  rootElement.appendChild(explanationElement);
  rootElement.appendChild(goButton);
  goButton.innerText = "CHECK ANSWERS";

  if (!goButton.classList.contains("answer")) {
    goButton.classList.add("answer");
  }

  if (document.getElementById("percentageElement") == undefined) {
    const percentageElement = document.createElement("div");
    percentageElement.id = "percentageElement";
    percentageElement.classList.add("info");
    const percentageNumber = document.createElement("h2");
    percentageNumber.id = "percentageNumber";
    const percentageQuestionCount = document.createElement("p");
    percentageQuestionCount.id = "percentageQuestionCount";

    percentageElement.appendChild(percentageNumber);
    percentageElement.appendChild(percentageQuestionCount);

    const whereWeAreElement = document.createElement("div");
    whereWeAreElement.id = "whereWeAreElement";
    whereWeAreElement.classList.add("qinf");
    whereWeAreElement.classList.add("info");
    const countQuestionsElement = document.createElement("h1");
    countQuestionsElement.id = "countQuestionsElement";
    const countQuestionsTitle = document.createElement("p");
    countQuestionsTitle.innerText = "kérdés";
    whereWeAreElement.appendChild(countQuestionsElement);
    whereWeAreElement.appendChild(countQuestionsTitle);
    rootElement.appendChild(percentageElement);
    rootElement.appendChild(whereWeAreElement);
  }

  let sum = 0;
  for (let qSoFar of questionsSoFar) {
    if (qSoFar.known === "yes") {
      sum++;
    }
  }

  if (questionsSoFar.length == 0) {
    document.getElementById("percentageNumber").innerText = "0%";
  } else {
    document.getElementById("percentageNumber").innerText =
      parseInt((sum / questionsSoFar.length) * 10000) / 100 + "%";
  }

  document.getElementById("percentageQuestionCount").innerText =
    sum + " / " + questionsSoFar.length + " válasz helyes";
  document.getElementById("countQuestionsElement").innerText =
    currQuestionCount + " / " + allQuestionsCount;
  questionsSoFar.push(currentQuestion);

  answerInputElement.addEventListener("keydown", (e) => {
    if (document.getElementById("error") != undefined) {
      rootElement.removeChild(errorElement);
    } else if (e.key === "Enter") {
      e.preventDefault();
      goButton.click();
    }
  });

  return rootElement;
}

function displayAnswerPage(currentQuestion) {
  if (document.getElementById("percentageElement")) {
    document.getElementById("percentageElement").remove();
    document.getElementById("whereWeAreElement").remove();
  }

  document.getElementById("explanation").remove();
  rootElement.removeChild(goButton);

  const allAnswersElement = document.createElement("div");
  allAnswersElement.classList.add("all-answers");

  const answer = document.getElementById("answerInput").value;
  if (answer != "") {
    const yourAnswerElement = document.createElement("div");
    yourAnswerElement.id = "yourAnswer";

    const answerTitle = document.createElement("p");
    answerTitle.id = "answerTitle";
    answerTitle.innerText = "A te leírt válaszod:";
    yourAnswerElement.appendChild(answerTitle);

    const yourAnswer = document.createElement("p");
    yourAnswer.id = "yourAnswerP";
    yourAnswerElement.appendChild(yourAnswer);

    yourAnswer.innerText = document.getElementById("answerInput").value;
    allAnswersElement.appendChild(yourAnswerElement);
  }

  document.getElementById("answerInput").remove();

  const askIfGoodOrNo = document.createElement("div");
  askIfGoodOrNo.id = "yesOrNo";
  askIfGoodOrNo.innerText = "Jól tudtad?\n(Nem számít mit írtál le...)";

  const yesButtonElement = document.createElement("button");
  yesButtonElement.id = "yes";
  yesButtonElement.innerText = "IGEN";
  askIfGoodOrNo.appendChild(yesButtonElement);

  const noButtonElement = document.createElement("button");
  noButtonElement.id = "no";
  noButtonElement.innerText = "NEM";
  askIfGoodOrNo.appendChild(noButtonElement);

  const answersListElement = document.createElement("div");
  answersListElement.classList.add("answersList");

  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const answerOfSomeOneElement = document.createElement("div");
    answerOfSomeOneElement.id = "answersSoFar";
    answerOfSomeOneElement.classList.add("answersSoFar");

    const answerName = document.createElement("p");
    answerName.innerText = currentQuestion.answers[i].name;
    answerName.classList.add("answerName");
    answerOfSomeOneElement.appendChild(answerName);

    const answerOfSomeone = document.createElement("p");
    answerOfSomeone.innerText = currentQuestion.answers[i].answer;
    answerOfSomeOneElement.appendChild(answerOfSomeone);

    answersListElement.appendChild(answerOfSomeOneElement);
  }

  allAnswersElement.appendChild(answersListElement);
  rootElement.appendChild(allAnswersElement);
  rootElement.appendChild(askIfGoodOrNo);

  yesButtonElement.addEventListener("click", (e) => {
    questionsSoFar[questionsSoFar.length - 1].known = "yes";

    console.log(currQuestionCount);
    console.log(allQuestionsToChooseFrom.length);

    if (currQuestionCount < allQuestionsCount) {
      askQuestionAndAnswer(allQuestionsToChooseFrom);
    } else {
      displayScorePage(rootElement);
    }
  });

  noButtonElement.addEventListener("click", (e) => {
    questionsSoFar[questionsSoFar.length - 1].known = "no";
    if (currQuestionCount < allQuestionsCount) {
      askQuestionAndAnswer(allQuestionsToChooseFrom);
    } else {
      displayScorePage(rootElement);
    }
  });

  return rootElement;
}

function displayScorePage(rootElement) {
  goButton.remove();
  document.getElementById("yourAnswer").remove();
  document.getElementById("yesOrNo").remove();
  document.getElementById("question").remove();
  for (let e of document.querySelectorAll(".answersSoFar")) {
    e.remove();
  }

  if (document.getElementById("percentageElement") == undefined) {
    const percentageElement = document.createElement("div");
    percentageElement.id = "percentageElement";
    percentageElement.classList.add("info");
    const percentageNumber = document.createElement("h2");
    percentageNumber.id = "percentageNumber";
    const percentageQuestionCount = document.createElement("p");
    percentageQuestionCount.id = "percentageQuestionCount";

    percentageElement.appendChild(percentageNumber);
    percentageElement.appendChild(percentageQuestionCount);

    const whereWeAreElement = document.createElement("div");
    whereWeAreElement.id = "whereWeAreElement";
    whereWeAreElement.classList.add("qinf");
    whereWeAreElement.classList.add("info");
    const countQuestionsElement = document.createElement("h1");
    countQuestionsElement.id = "countQuestionsElement";
    const countQuestionsTitle = document.createElement("p");
    countQuestionsTitle.innerText = "kérdés";
    whereWeAreElement.appendChild(countQuestionsElement);
    whereWeAreElement.appendChild(countQuestionsTitle);
    rootElement.appendChild(percentageElement);
    rootElement.appendChild(whereWeAreElement);
  }
  const endScreenElement = document.createElement("h1");
  endScreenElement.id = "endScreen";
  endScreenElement.classList.add("textChange");
  endScreenElement.innerText = "VÉGEREDMÉNY";

  let sum = 0;
  for (let qSoFar of questionsSoFar) {
    if (qSoFar.known === "yes") {
      sum++;
    }
  }

  if (questionsSoFar.length == 0) {
    document.getElementById("percentageNumber").innerText = "0%";
  } else {
    document.getElementById("percentageNumber").innerText =
      parseInt((sum / questionsSoFar.length) * 10000) / 100 + "%";
  }

  rootElement.appendChild(endScreenElement);
  document.getElementById("percentageQuestionCount").innerText =
    sum + " / " + questionsSoFar.length + " választ tudtál";
  document.getElementById("percentageElement").classList.add("endPage");
  document.getElementById("percentageElement").classList.add("endRight");
  document.getElementById("countQuestionsElement").innerText =
    currQuestionCount + " / " + allQuestionsCount;
  document.getElementById("whereWeAreElement").classList.add("endLeft");

  const replayButton = document.createElement("button");
  replayButton.innerText = "Try Again";
  replayButton.classList.add("replay-btn");
  rootElement.appendChild(replayButton);

  replayButton.addEventListener("click", (e) => {
    location.reload();
  });

  return rootElement;
}

const init = () => {
  displayFirstPage(data);
};

window.addEventListener("load", init);
