export function ScheduleSection(schedules = []) {
const sortedSchedules = [...schedules].sort((a, b) => {
return a.time.localeCompare(b.time);
});

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

return `
<section class="section">

  <div class="section-header">
    <div class="section-title">
      아이 일정
    </div>

    <div class="section-subtitle">
      오늘 ${sortedSchedules.length}개
    </div>
  </div>

  <div class="schedule-card">
    ${
      sortedSchedules.length > 0
        ? sortedSchedules.map(ScheduleItem).join("")
        : `
          <div style="
            padding: 24px 0;
            text-align: center;
            color: #999;
            font-size: 13px;
          ">
            오늘 일정이 없어요.
          </div>
        `
    }
  </div>

</section>

`;
}