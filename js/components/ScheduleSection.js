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

function ScheduleItem({ time, child, childClass, name, detail }) {
  return `
    <div class="schedule-item">
      <div class="time">${time}</div>

      <div class="timeline"></div>

      <div class="schedule-content">
        <div class="child ${childClass}">
          ${child}
        </div>

        <div class="schedule-name">
          ${name}
        </div>

        <div class="schedule-detail">
          ${detail}
        </div>
      </div>
    </div>
  `;
}

export function ScheduleSection() {
  return `
    <section class="section">

      <div class="section-header">
        <div class="section-title">아이 일정</div>
        <div class="section-subtitle">
          오늘 ${schedules.length}개
        </div>
      </div>

      <div class="schedule-card">
        ${schedules.map(ScheduleItem).join("")}
      </div>

    </section>
  `;
}