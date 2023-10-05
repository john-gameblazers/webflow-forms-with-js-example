window.onload = () => {
  console.log("window loaded");
  const emailForm = document.getElementById("heading1") as HTMLFormElement;
  console.log(emailForm);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams.get("test"));
  document.cookie =
    "username=Jimmy; expires=Thu, 18 Dec 2024 12:00:00 UTC;SameSite=strict";
};
window.onmousemove = (event) => {
  console.log(document.cookie);
};
//# sourceMappingURL=main.js.map
