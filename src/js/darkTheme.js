function toggleLocal() {
  if (document.querySelector("body").classList.contains("dark") === true) {
    localStorage.setItem("theme", "active");
  } else {
    localStorage.setItem("theme", "deactive");
  }
}

export default function toggle() {
  if (document.getElementById("box-dark").checked === true) {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.remove("dark");
  }
  toggleLocal();
}
