function addToDisplay(a) {
  document.getElementById("display").value += a;
}
function result() {
  document.getElementById("display").value = eval(
    document.getElementById("display").value
  );
}
function cleaar() {
  document.getElementById("display").value = "";
}
