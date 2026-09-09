export function QuickInput() {
return `
<section class="quick-input">

  <div class="quick-input-label">
    그냥 말해주세요
  </div>

  <div class="quick-input-box">
    <input
      id="quickInput"
      type="text"
      placeholder="예: 민준이 내일 4시에 태권도 있어"
    />

    <button id="quickInputButton">
      정리하기
    </button>
  </div>

  <div id="parsedResult"></div>

</section>

`;
}