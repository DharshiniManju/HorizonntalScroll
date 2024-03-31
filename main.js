const rootStyles = document.querySelector(":root");

function handleWindowReSize() {
  const scrollSectionWidth =
    document.querySelector(".scroll-section").clientWidth;
  rootStyles.style.setProperty(
    "--scroll-section-width",
    `${scrollSectionWidth}px`
  );
}

handleWindowReSize();
window.addEventListener("resize", handleWindowReSize);
