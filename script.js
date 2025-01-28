import { data } from "./data.js";

// console.log(data[0].question + data[49].question);

const choosenCategories = [];
let maxQuestionCount = 0;
let allQuestionsCount = 0;
let currQuestionCount = 0;
const allQuestionsToChooseFrom = [];
const questionsSoFar = [];
let currentQuestion;



// fill categories
const categories = [];
for (let question of data){
    if (!categories.includes(question.category)){
        categories.push(question.category);
    }
}


// view

const welcomeElement = document.createElement("h1");
welcomeElement.id = "welcome";
welcomeElement.innerText = "Üdv a PA quizben!";

const categoriesElement = document.createElement("div");
categoriesElement.id = "categories"

const chooseThemesElement = document.createElement("h4");
chooseThemesElement.innerText = "VÁLASSZ TÉMÁKAT:"

for (let cat of categories){
    let count = 0;
    for (let q of data){
        if (q.category === cat){
            count++;
        }
    }

    const categoryElement = document.createElement("div");
    categoryElement.innerText = cat;
    categoriesElement.appendChild(categoryElement);

    const catCheckBox = document.createElement("input");
    catCheckBox.setAttribute("type", "checkbox");
    catCheckBox.id = cat;
    catCheckBox.classList.add("checkBox")
    categoryElement.appendChild(catCheckBox);

    const countElement = document.createElement("div");
    countElement.classList.add("categoryCount");
    countElement.id = "categoryCount";
    countElement.innerText = count;
    categoryElement.appendChild(countElement);
}

const checkAllElement = document.createElement("div");
checkAllElement.classList.add("checkAll")
checkAllElement.innerText = "ÖSSZES TÉMA: "

const checkAllBox = document.createElement("input");
checkAllBox.setAttribute("type", "checkbox");
checkAllBox.id = "checkAllBox";
// checkAllBox.classList.add("checkBox")
checkAllBox.classList.add("checkAllBox")
checkAllElement.appendChild(checkAllBox);

categoriesElement.appendChild(checkAllElement);

const maxQuestionCountElement = document.createElement("div");
maxQuestionCountElement.id = "maxQuestionCount"
maxQuestionCountElement.classList.add("maxQuestionCount")
maxQuestionCountElement.innerText = "MAX: " + maxQuestionCount + " kérdés";

const rootElement = document.getElementById("root");

const goButton = document.createElement("button");
goButton.setAttribute("onmousedown", "audio.play()");

const questionsSlideDiv = document.createElement(`div`);
questionsSlideDiv.id = "slide"

const howManyDoYouWantElement = document.createElement("p");
howManyDoYouWantElement.innerText = "Milyen hosszú legyen a teszt?"

const questionsSlideInput = document.createElement("input");
questionsSlideInput.id = "howManyQuestionsInput";
questionsSlideInput.setAttribute("type", "range");
questionsSlideInput.setAttribute("min", 1);
questionsSlideInput.setAttribute("max", 1);
// questionsSlideInput.value = 0;

const questionsSlideDetails = document.createElement("datalist");

const howManyQuestionsCount = document.createElement("div");
howManyQuestionsCount.id = "howManyQuestionsCount";
howManyQuestionsCount.innerText = 0;

const kerdesElement = document.createElement("p");
kerdesElement.innerText = "kérdés";
howManyQuestionsCount.appendChild(kerdesElement);

questionsSlideDiv.appendChild(howManyDoYouWantElement);
questionsSlideDiv.appendChild(questionsSlideInput);
questionsSlideDiv.appendChild(questionsSlideDetails);
questionsSlideDiv.appendChild(howManyQuestionsCount);

function displayFirstPage(data){
    rootElement.appendChild(welcomeElement);
    goButton.innerText = "OK, LET'S GO!"
    rootElement.appendChild(chooseThemesElement);
    rootElement.appendChild(categoriesElement);
    rootElement.appendChild(goButton);
    rootElement.appendChild(questionsSlideDiv);
    rootElement.appendChild(maxQuestionCountElement);
    
}

const questionElement = document.createElement("h2");
questionElement.id = "question";

const explanationElement = document.createElement("p");
explanationElement.id = "explanation";
explanationElement.innerText = "Írd le a választ magadnak röviden, a saját kulcs-szavaiddal,\n Majd nyomd meg a CHECK gombot, hogy megnézd más mit írt!"

const answerInputElement = document.createElement("textarea");
answerInputElement.id = "answerInput";



const yourAnswerElement = document.createElement("div");
yourAnswerElement.id = "yourAnswer";

const answerTitle = document.createElement("p");
answerTitle.id = "answerTitle"
answerTitle.innerText = "A te leírt válaszod:"
yourAnswerElement.appendChild(answerTitle);

const yourAnswer = document.createElement("p");
yourAnswerElement.appendChild(yourAnswer);

const errorElement = document.createElement("p");
errorElement.id = "error";

const percentageElement = document.createElement("div");
percentageElement.classList.add("info");
const percentageNumber = document.createElement("h2");
const percentageQuestionCount = document.createElement("p");
percentageElement.appendChild(percentageNumber);
percentageElement.appendChild(percentageQuestionCount);

const whereWeAreElement = document.createElement("div");
whereWeAreElement.classList.add("qinf");
whereWeAreElement.classList.add("info");
const countQuestionsElement = document.createElement("h1");
const countQuestionsTitle = document.createElement("p");
countQuestionsTitle.innerText = "kérdés"
whereWeAreElement.appendChild(countQuestionsElement);
whereWeAreElement.appendChild(countQuestionsTitle);


function randomQuestion(allQuestionsToChooseFrom){
    const answer = allQuestionsToChooseFrom[Math.floor(Math.random() * allQuestionsToChooseFrom.length)];
    for (let i = 0; i < allQuestionsToChooseFrom.length; i++){
        if (allQuestionsToChooseFrom[i].question === answer.question){
            allQuestionsToChooseFrom.splice(i, 1);
        }
    }
    
    return answer; 
}

function askQuestionAndAnswer(allQuestionsToChooseFrom){
    currQuestionCount++;
    currentQuestion = randomQuestion(allQuestionsToChooseFrom);
    
    rootElement.innerHTML = "";
    rootElement.appendChild(questionElement);
    questionElement.innerText = currentQuestion.question;
    
    rootElement.appendChild(answerInputElement);
    rootElement.appendChild(explanationElement);
    rootElement.appendChild(goButton);
    goButton.innerText = "CHECK ANSWER"
    goButton.classList.add("answer");
    
    let sum = 0;
    for (let qSoFar of questionsSoFar){
        if(qSoFar.known === "yes"){
            sum++
        }
    }
    if(questionsSoFar.length == 0){
        percentageNumber.innerText = "0%";
    } else {
        percentageNumber.innerText = (sum / questionsSoFar.length)*100 + "%";
    }

    percentageQuestionCount.innerText = sum + " / " + questionsSoFar.length + " válasz helyes";

    rootElement.appendChild(percentageElement);
    
    countQuestionsElement.innerText = currQuestionCount + " / " + allQuestionsCount;
    rootElement.appendChild(whereWeAreElement);
    
    questionsSoFar.push(currentQuestion);
}

const askIfGoodOrNo = document.createElement("div");
askIfGoodOrNo.id = "yesOrNo";
askIfGoodOrNo.innerText = "Jól tudtad?\n(Nem számít mit írtál le...)"

const yesButtonElement = document.createElement("button");
yesButtonElement.id = "yes";
yesButtonElement.innerText = "IGEN"
askIfGoodOrNo.appendChild(yesButtonElement);

const noButtonElement = document.createElement("button");
noButtonElement.id = "no";
noButtonElement.innerText = "NEM"
askIfGoodOrNo.appendChild(noButtonElement);



function displayAnswerPage(currentQuestion){
    if (document.getElementById("error") != undefined){
        rootElement.removeChild(errorElement);
    }
    rootElement.removeChild(answerInputElement)
    rootElement.removeChild(explanationElement);
    goButton.classList.remove("answer");
    goButton.innerText = "NEXT QUESTION"
    rootElement.removeChild(goButton);
    
    yourAnswer.innerText = answerInputElement.value
    answerInputElement.value = "";
    rootElement.appendChild(yourAnswerElement);
    
    // console.log(currentQuestion);
    
    for (let i = 0; i < currentQuestion.answers.length; i++){
        const answerOfSomeOneElement = document.createElement("div");
        answerOfSomeOneElement.id = "answersSoFar";

        const answerName = document.createElement("p");
        answerName.innerText = currentQuestion.answers[i].name;
        answerName.classList.add("answerName");
        answerOfSomeOneElement.appendChild(answerName);
    
        const answerOfSomeone = document.createElement("p");
        answerOfSomeone.innerText = currentQuestion.answers[i].answer;
        answerOfSomeOneElement.appendChild(answerOfSomeone);
        
        rootElement.appendChild(answerOfSomeOneElement);
    }


    rootElement.appendChild(askIfGoodOrNo);
}

const endScreenElement = document.createElement("h1");
endScreenElement.id = "endScreen"
endScreenElement.innerText = "VÉGEREDMÉNY";

function displayScorePage(rootElement){
    rootElement.innerHTML = ""; 
    let sum = 0;
    for (let qSoFar of questionsSoFar){
        if(qSoFar.known === "yes"){
            sum++
        }
    }
    if(questionsSoFar.length == 0){
        percentageNumber.innerText = "0%";
    } else {
        percentageNumber.innerText = (sum / questionsSoFar.length)*100 + "%";
    }

    percentageQuestionCount.innerText = sum + " / " + questionsSoFar.length + " válasz helyes";

    rootElement.appendChild(percentageElement);
    percentageElement.classList.add("endPage");
    percentageElement.classList.add("endRight");

    
    countQuestionsElement.innerText = currQuestionCount + " / " + allQuestionsCount;
    rootElement.appendChild(whereWeAreElement);
    whereWeAreElement.classList.add("endLeft");

    rootElement.appendChild(endScreenElement);

}

const init = ()=>{
    displayFirstPage(data);

    categoriesElement.addEventListener("change", (e)=>{
        if (choosenCategories.length === 0){
            howManyQuestionsCount.innerText = 0;
            howManyQuestionsCount.appendChild(kerdesElement);
        }
    })

    rootElement.addEventListener("click", (event)=>{
        if (event.target.classList.contains("checkBox")){
            // console.log("clicked")
            if (event.target.parentElement.style.color !== "brown"){
                event.target.setAttribute("checked", true);
                event.target.parentElement.style.color = "brown";
                choosenCategories.push(event.target.id);
                maxQuestionCount += Number(event.target.nextElementSibling.innerText);

            } else if (event.target.parentElement.style.color === "brown"){
                event.target.removeAttribute("checked");
                event.target.parentElement.style.color = "palegreen";
                for (let i = 0; i < choosenCategories.length; i++){
                    if (choosenCategories[i] === event.target.id){
                        choosenCategories.splice(i, 1);
                    }
                }
                maxQuestionCount -= Number(event.target.nextElementSibling.innerText);
            }

            questionsSlideInput.setAttribute("max", maxQuestionCount);
            maxQuestionCountElement.innerText = "MAX: " + maxQuestionCount + " kérdés";
            questionsSlideDetails.innerHTML = "";
            
            if (maxQuestionCount < 21){
                for (let i = 1; i <= maxQuestionCount; i++){
                    const optionElement = document.createElement("option");
                    optionElement.setAttribute("value", i.toString());
                    optionElement.setAttribute("label", i.toString());
                    questionsSlideDetails.appendChild(optionElement);
                }
            } else if (maxQuestionCount > 20 && maxQuestionCount < 41){
                for (let i = 1; i <= maxQuestionCount; i += 2){
                    const optionElement = document.createElement("option");
                    optionElement.setAttribute("value", i.toString());
                    optionElement.setAttribute("label", i.toString());
                    questionsSlideDetails.appendChild(optionElement);
                }
            } else if (maxQuestionCount > 40 && maxQuestionCount < 51){
                const option1Element = document.createElement("option");
                option1Element.setAttribute("value", (1).toString());
                option1Element.setAttribute("label", (1).toString());
                questionsSlideDetails.appendChild(option1Element);
                
                for (let i = 5; i <= maxQuestionCount; i += 5){
                    const optionElement = document.createElement("option");
                    optionElement.setAttribute("value", i.toString());
                    optionElement.setAttribute("label", i.toString());
                    questionsSlideDetails.appendChild(optionElement);
                }
            }

            // console.log(choosenCategories)
        }
    })

    questionsSlideInput.addEventListener("change", (e)=>{
        howManyQuestionsCount.innerText = questionsSlideInput.value;
        howManyQuestionsCount.appendChild(kerdesElement);
    })
        
    checkAllBox.addEventListener("click", (e)=>{
        const chex = categoriesElement.getElementsByClassName("checkBox");
        // console.log(chex);
        if (!checkAllBox.hasAttribute("checked")){
            checkAllBox.setAttribute("checked", true);
            for (let check of chex){
                if (!check.hasAttribute("checked")){
                    // console.log("clicked")
                    check.click();
                }
            }
        } else if (checkAllBox.hasAttribute("checked")){
            for (let check of chex){
                if (check.hasAttribute("checked")){
                    // console.log("clicked")
                    check.click();
                }
            }
            checkAllBox.removeAttribute("checked");
        }

        howManyQuestionsCount.innerText = questionsSlideInput.value;
        howManyQuestionsCount.appendChild(kerdesElement);
            
    })

    goButton.addEventListener("click", (e)=>{
        if(!goButton.classList.contains("answer") && questionsSlideInput.value != 0 && maxQuestionCount != 0){
            allQuestionsCount = questionsSlideInput.value;
            for (let cat of choosenCategories){
                for (let q of data){
                    if (q.category === cat){
                        allQuestionsToChooseFrom.push(q);
                    }
                }
            }

            allQuestionsCount = questionsSlideInput.value;
            // console.log(allQuestionsToChooseFrom)
            askQuestionAndAnswer(allQuestionsToChooseFrom);
        } else if (goButton.classList.contains("answer")){
            if (answerInputElement.value.length < 2){
                if (document.getElementById("error") == undefined){
                    errorElement.innerText = "Kérlek írj valamit!"
                    rootElement.appendChild(errorElement);
                }
            } else {
                
                displayAnswerPage(currentQuestion);
            }
        }
    })

    answerInputElement.addEventListener("keydown", (e)=>{
        if (document.getElementById("error") != undefined){
            rootElement.removeChild(errorElement);
        } else if (e.key === "Enter"){
            e.preventDefault();
            goButton.click();
        }
    })

    yesButtonElement.addEventListener("click", (e)=>{
        questionsSoFar[questionsSoFar.length-1].known = "yes";
        
        console.log(currQuestionCount);
        console.log(allQuestionsCount);

        if (currQuestionCount < allQuestionsCount){
            askQuestionAndAnswer(allQuestionsToChooseFrom);
        } else {
            displayScorePage(rootElement);
        }
    })

    noButtonElement.addEventListener("click", (e)=>{
        questionsSoFar[questionsSoFar.length-1].known = "no";
        if (currQuestionCount < allQuestionsCount){
            askQuestionAndAnswer(allQuestionsToChooseFrom);
        } else {
            displayScorePage(rootElement);
        }
    })
}

window.addEventListener("load", init);