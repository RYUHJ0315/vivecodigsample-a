const meal = {
  type: "저녁",
  name: "돼지고기 김치찌개",
  shopping: ["두부", "대파"],
};

export function MealSection() {
  return `
    <section class="section">

      <div class="section-header">
        <div class="section-title">
          오늘의 식단
        </div>
      </div>

      <div class="meal-card">

        <div class="meal-left">

          <div class="meal-icon">🍲</div>

          <div>
            <div class="meal-label">
              ${meal.type}
            </div>

            <div class="meal-name">
              ${meal.name}
            </div>
          </div>

        </div>

        <div class="meal-note">
          장보기<br />
          ${meal.shopping.join(" · ")}
        </div>

      </div>

    </section>
  `;
}

