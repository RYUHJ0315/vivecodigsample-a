const summaries = [
  {
    icon: "🧺",
    label: "집안일",
    main: "빨래",
    sub: "로봇청소기도 필요해요",
  },
  {
    icon: "🍚",
    label: "오늘 저녁",
    main: "김치찌개",
    sub: "장보기 필요 2가지",
  },
];

function SummaryCard({ icon, label, main, sub }) {
  return `
    <div class="summary-card">
      <div class="summary-icon">${icon}</div>

      <div class="summary-label">
        ${label}
      </div>

      <div class="summary-main">
        ${main}
      </div>

      <div class="summary-sub">
        ${sub}
      </div>
    </div>
  `;
}

export function SummarySection() {
  return `
    <section class="section">

      <div class="section-header">
        <div class="section-title">
          오늘 챙길 것
        </div>
      </div>

      <div class="summary">
        ${summaries.map(SummaryCard).join("")}
      </div>

    </section>
  `;
}

