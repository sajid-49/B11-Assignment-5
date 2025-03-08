const cards = document.getElementById("cards").children;

for (const card of cards) {
  const cptButton = card.children[3].children[1];
  cptButton.addEventListener("click", function (even) {
    const btnClear =
      even.target.parentElement.parentElement.children[1].innerText;

    const asideText = document.getElementById("aside-text");
    const get = new Date().toLocaleTimeString();
    const div = document.createElement("div");
    div.innerHTML = `
  <h1 class="mt-5 bg-[#F4F7FF] rounded-lg text-[#000000] p-2 text-sm">
        You have Complete The Task ${btnClear} at ${get}
  </h1>
  `;
    asideText.appendChild(div);
    even.target.setAttribute("disabled", true);
  });
}
