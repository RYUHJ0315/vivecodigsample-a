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

${SummarySection()}

${MealSection()}

${Insight()}

${BottomNav()}


`;
}

render();