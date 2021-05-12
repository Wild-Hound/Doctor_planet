export function openSubMenu(event, subMenuName) {
  let temp = document.querySelector(`.${subMenuName}`);
  console.log(temp.style.display);
  if (temp.style.display !== "none") {
    temp.style.display = "none";
  } else {
    temp.style.display = "block";
  }
}
