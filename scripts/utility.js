function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseInt(value);
  return convertedValue;
}
