const navItems = [
  {
    icon: "☀️",
    label: "오늘",
    active: true,
  },
  {
    icon: "📅",
    label: "일정",
    active: false,
  },
  {
    icon: "🧺",
    label: "할 일",
    active: false,
  },
  {
    icon: "🍚",
    label: "식단",
    active: false,
  },
];

function NavItem({ icon, label, active }) {
  return `
    <div class="nav-item ${active ? "active" : ""}">
      <div class="nav-icon">${icon}</div>
      ${label}
    </div>
  `;
}

export function BottomNav() {
  return `
    <nav class="bottom-nav">
      ${navItems.map(NavItem).join("")}
    </nav>
  `;
}
