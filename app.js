// Disable Submit function
// disable Enter key
window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});
// disable default action of all the buttons inside the from
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// Event Listener of Credit and Grade
let credits = document.querySelectorAll(".course-credit");
let grades = document.querySelectorAll("select");

credits.forEach((credit) => {
  credit.addEventListener("change", () => {
    setGPA();
  });
});

grades.forEach((grade) => {
  grade.addEventListener("change", (e) => {
    setGPA();
  });
});

// calculate GPA
function setGPA() {
  // grab all the form in the HTML
  // each row of inputs is a form
  let form = document.querySelectorAll("form");
  let gradeSum = 0;
  let creditSum = 0;
  for (let i = 0; i < form.length; i++) {
    let credit = form[i].children[0].children[2].valueAsNumber;
    let grade = form[i].children[0].children[3].value;
    let convertedGrade = convertor(grade);
    console.log(`grade:${grade} - ${convertedGrade}\ncredit: ${credit}`);
    if (!isNaN(credit)) {
      creditSum += credit;
      if (convertedGrade !== 0) {
        gradeSum += convertedGrade * credit;
      }
    }
  }
  let result;
  if (creditSum == 0) {
    result = "0.00";
  } else {
    result = Math.round((gradeSum / creditSum) * 100) / 100;
  }

  let resultGPA = document.querySelector("#result-gpa");
  resultGPA.innerText = result;
  console.log(resultGPA);
  //   document.getElementById("result-gpa").innerText = result;
}

// convert the grading to number
function convertor(grade) {
  switch (grade) {
    case "A+":
      return 4.3;
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0.0;
  }
}

// handling the trash buttons
let trashes = document.querySelectorAll(".trash-button");
trashes.forEach((trash) => {
  trash.addEventListener("click", (e) => {
    let from = e.target.parentElement.parentElement;
    from.addEventListener("transitionend", (e) => {
      e.target.remove();
      setGPA();
    });
    from.classList.add("remove");
  });
});

// handling add button
let addButton = document.querySelector(".plus-btn");
addButton.addEventListener("click", () => {
  let newForm = document.createElement("form");

  let newDiv = document.createElement("div");
  newDiv.classList.add("course-info");

  // course-name
  let newCourseName = document.createElement("input");
  newCourseName.classList.add("course-name");
  newCourseName.setAttribute("type", "text");
  newCourseName.setAttribute("placeholder", "Course Name");

  // course-number
  let newCourseNumber = document.createElement("input");
  newCourseNumber.classList.add("course-number");
  newCourseNumber.setAttribute("type", "text");
  newCourseNumber.setAttribute("placeholder", "Course Number");

  // course-credit
  let newCourseCredit = document.createElement("input");
  newCourseCredit.classList.add("course-credit");
  newCourseCredit.setAttribute("type", "number");
  newCourseCredit.setAttribute("placeholder", "Credit");
  newCourseCredit.setAttribute("min", "0");
  newCourseCredit.setAttribute("max", "6");
  // Event Listener of credit
  newCourseCredit.addEventListener("change", () => {
    setGPA();
  });

  // course-select
  // select
  let newSelect = document.createElement("select");
  newSelect.setAttribute("name", "select");
  newSelect.setAttribute("id", "select");

  // options
  let opt = document.createElement("option");
  opt.setAttribute("value", "");
  let textNode = document.createTextNode("");
  opt.appendChild(textNode);
  let opt1 = document.createElement("option");
  opt1.setAttribute("value", "A+");
  let textNode1 = document.createTextNode("A+");
  opt1.appendChild(textNode1);
  let opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  let opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  let opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  let opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  let opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  let opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  let opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  let opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  let opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  let opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  let opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  let opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt);
  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

  // Event Listener of select
  newSelect.addEventListener("change", (e) => {
    setGPA();
  });

  // trash-can
  let newTrash = document.createElement("button");
  newTrash.classList.add("trash-button");
  let newITag = document.createElement("i");
  newITag.classList.add("fas");
  newITag.classList.add("fa-trash");
  newTrash.appendChild(newITag);

  // Event Listener of trash
  newTrash.addEventListener("click", (e) => {
    e.preventDefault();
    let form = e.target.parentElement.parentElement;
    form.style.animation = "scaleDown 0.5s ease forwards";

    form.addEventListener("animationend", (e) => {
      e.target.remove();
      setGPA();
    });
  });

  newDiv.appendChild(newCourseName);
  newDiv.appendChild(newCourseNumber);
  newDiv.appendChild(newCourseCredit);
  newDiv.appendChild(newSelect);
  newDiv.appendChild(newTrash);

  newForm.appendChild(newDiv);

  let allForm = document.querySelector(".all-form");
  newForm.style.animation = "scaleUp 0.5s ease forwards";
  allForm.appendChild(newForm);
});
