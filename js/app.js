import { Header } from "./components/Header.js";
import { ScheduleSection } from "./components/ScheduleSection.js";
import { SummarySection } from "./components/SummarySection.js";
import { MealSection } from "./components/MealSection.js";
import { Insight } from "./components/Insight.js";
import { BottomNav } from "./components/BottomNav.js";

const app = document.querySelector("#app");

const schedules = [
{
time: "15:00",
child: "첫째",
childClass: "one",
name: "피아노 학원",
detail: "13:00 · 브래뉴음악학원",
},
{
time: "16:30",
child: "둘째",
childClass: "two",
name: "유치원 하원",
detail: "16:30 · 노블킨더 유치원",
},
{
time: "18:00",
child: "첫째",
childClass: "one",
name: "수영",
detail: "16:00 · 동탄복합문화센터",
},
];

function render() {
app.innerHTML = `
${Header()}

${ScheduleSection(schedules)}

${QuickInput()}

${SummarySection()}

${MealSection()}

${Insight()}

${BottomNav()}


`;
}

render();
document.addEventListener("click", (event) => {
if (event.target.id !== "quickInputButton") {
return;
}

const input = document.querySelector("#quickInput");
const result = document.querySelector("#parsedResult");

const text = input.value.trim();

if (!text) {
alert("내용을 입력해주세요.");
return;
}

result.innerHTML = `
<div class="parsed-result">

  <div class="parsed-label">
    이렇게 정리했어요
  </div>

  <div class="parsed-content">
    <strong>민준</strong><br />
    내일 · 16:00<br />
    태권도
  </div>

  <div class="parsed-actions">
    <button class="parsed-cancel">
      다시 입력
    </button>

    <button class="parsed-confirm">
      확인
    </button>
  </div>

</div>

`;
});
import { QuickInput } from "./components/QuickInput.js";