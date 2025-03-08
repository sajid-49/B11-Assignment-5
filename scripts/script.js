const btnImg = document.getElementById("btn-img");
btnImg.addEventListener("click", function () {
  const rendColor = "#" + Math.floor(Math.random() * 12576443).toString(16);
  document.body.style.backgroundColor = rendColor;
  console.log(rendColor);
});
// btn-1
document.getElementById("card-btn1").addEventListener("click", function () {
  alert("Board updated successfully.");
  const mainNumber = getInnerTextById("text-number");
  const sum = mainNumber - 1;
  document.getElementById("text-number").innerText = sum;

  const mainNumber2 = getInnerTextById("main-number-2");
  console.log(mainNumber2);
  const sum2 = mainNumber2 + 1;
  document.getElementById("main-number-2").innerText = sum2;

  document.getElementById("card-btn1").setAttribute("disabled", true);

  const node =
    document.getElementById("card-btn1").parentNode.parentNode.children[1]
      .innerText;
  console.log(node);

  const asideText = document.getElementById("aside-text");
  const get = new Date().toLocaleTimeString();
  const div = document.createElement("div");
  div.innerHTML = `
  <h1 class="mt-5 bg-[#F4F7FF] rounded-lg text-[#000000] p-2 text-sm">
        You have Complete The Task ${node} at ${get}
  </h1>
  `;
  asideText.appendChild(div);
});

// btn-2
document.getElementById("card-btn2").addEventListener("click", function () {
  alert("Board updated successfully.");
  const mainNumber = getInnerTextById("text-number");
  const sum = mainNumber - 1;
  document.getElementById("text-number").innerText = sum;

  const mainNumber2 = getInnerTextById("main-number-2");
  console.log(mainNumber2);
  const sum2 = mainNumber2 + 1;
  document.getElementById("main-number-2").innerText = sum2;

  document.getElementById("card-btn2").setAttribute("disabled", true);
});

// btn-3
document.getElementById("card-btn3").addEventListener("click", function () {
  alert("Board updated successfully.");
  const mainNumber = getInnerTextById("text-number");
  const sum = mainNumber - 1;
  document.getElementById("text-number").innerText = sum;

  const mainNumber2 = getInnerTextById("main-number-2");
  console.log(mainNumber2);
  const sum2 = mainNumber2 + 1;
  document.getElementById("main-number-2").innerText = sum2;

  document.getElementById("card-btn3").setAttribute("disabled", true);
});

// btn-4
document.getElementById("card-btn4").addEventListener("click", function () {
  alert("Board updated successfully.");
  const mainNumber = getInnerTextById("text-number");
  const sum = mainNumber - 1;
  document.getElementById("text-number").innerText = sum;

  const mainNumber2 = getInnerTextById("main-number-2");
  console.log(mainNumber2);
  const sum2 = mainNumber2 + 1;
  document.getElementById("main-number-2").innerText = sum2;

  document.getElementById("card-btn4").setAttribute("disabled", true);
});

// btn-5
document.getElementById("card-btn5").addEventListener("click", function () {
  alert("Board updated successfully.");
  const mainNumber = getInnerTextById("text-number");
  const sum = mainNumber - 1;
  document.getElementById("text-number").innerText = sum;

  const mainNumber2 = getInnerTextById("main-number-2");
  console.log(mainNumber2);
  const sum2 = mainNumber2 + 1;
  document.getElementById("main-number-2").innerText = sum2;

  document.getElementById("card-btn5").setAttribute("disabled", true);
});

// btn-6
document.getElementById("card-btn6").addEventListener("click", function () {
  alert("Board updated successfully.");
  const mainNumber = getInnerTextById("text-number");
  const sum = mainNumber - 1;
  document.getElementById("text-number").innerText = sum;

  const mainNumber2 = getInnerTextById("main-number-2");
  console.log(mainNumber2);
  const sum2 = mainNumber2 + 1;
  document.getElementById("main-number-2").innerText = sum2;

  document.getElementById("card-btn6").setAttribute("disabled", true);
});
