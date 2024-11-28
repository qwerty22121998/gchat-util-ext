const TextBlockQuery = ":not(.om-code-block).ndfHFb-c4YZDc-fmcmS-DARUcf";
const BtnListQuery =
  ".ndfHFb-c4YZDc-Wrql6b-LQLjdd>:not(.om-code-block).ndfHFb-c4YZDc-Wrql6b-C7uZwb-b0t70b";

const createTxtFileCopyBtn = () => {
  const div = document.createElement("div");
  div.classList.add(
    "ndfHFb-c4YZDc-to915-LgbsSe",
    "ndfHFb-c4YZDc-C7uZwb-LgbsSe",
    "VIpgJd-TzA9Ye-eEGnhe",
    "ndfHFb-c4YZDc-LgbsSe"
  );
  div.addEventListener("mouseenter", () => {
    div.classList.add("ndfHFb-c4YZDc-LgbsSe-ZmdkE");
  });
  div.addEventListener("mouseleave", () => {
    div.classList.remove("ndfHFb-c4YZDc-LgbsSe-ZmdkE");
  });
  div.attributes["data-tooltip"] = "Copy to clipboard";
  div.attributes["role"] = "button";
  div.attributes["data-tooltip-class"] = "ndfHFb-c4YZDc-tk3N6e-suEOdc";
  div.attributes["aria-label"] = "Copy to clipboard";
  div.attributes["tabindex"] = "0";
  const btn = document.createElement("div");
  btn.textContent = "Copy";
  const anim = elemFromString(
    `<div class="ndfHFb-aZ2wEe" dir="ltr"><div class="ndfHFb-vyDMJf-aZ2wEe auswjd"><div class="aZ2wEe-pbTTYe aZ2wEe-v3pZbf"><div class="aZ2wEe-LkdAo-e9ayKc aZ2wEe-LK5yu"><div class="aZ2wEe-LkdAo aZ2wEe-hj4D6d"></div></div><div class="aZ2wEe-pehrl-TpMipd"><div class="aZ2wEe-LkdAo aZ2wEe-hj4D6d"></div></div><div class="aZ2wEe-LkdAo-e9ayKc aZ2wEe-qwU8Me"><div class="aZ2wEe-LkdAo aZ2wEe-hj4D6d"></div></div></div><div class="aZ2wEe-pbTTYe aZ2wEe-oq6NAc"><div class="aZ2wEe-LkdAo-e9ayKc aZ2wEe-LK5yu"><div class="aZ2wEe-LkdAo aZ2wEe-hj4D6d"></div></div><div class="aZ2wEe-pehrl-TpMipd"><div class="aZ2wEe-LkdAo aZ2wEe-hj4D6d"></div></div><div class="aZ2wEe-LkdAo-e9ayKc aZ2wEe-qwU8Me"><div class="aZ2wEe-LkdAo aZ2wEe-hj4D6d"></div></div></div><div class="aZ2wEe-pbTTYe aZ2wEe-gS7Ybc"><div class="aZ2wEe-LkdAo-e9ayKc aZ2wEe-LK5yu"><div class="aZ2wEe-LkdAo aZ2wEe-hj4D6d"></div></div><div class="aZ2wEe-pehrl-TpMipd"><div class="aZ2wEe-LkdAo aZ2wEe-hj4D6d"></div></div><div class="aZ2wEe-LkdAo-e9ayKc aZ2wEe-qwU8Me"><div class="aZ2wEe-LkdAo aZ2wEe-hj4D6d"></div></div></div><div class="aZ2wEe-pbTTYe aZ2wEe-nllRtd"><div class="aZ2wEe-LkdAo-e9ayKc aZ2wEe-LK5yu"><div class="aZ2wEe-LkdAo aZ2wEe-hj4D6d"></div></div><div class="aZ2wEe-pehrl-TpMipd"><div class="aZ2wEe-LkdAo aZ2wEe-hj4D6d"></div></div><div class="aZ2wEe-LkdAo-e9ayKc aZ2wEe-qwU8Me"><div class="aZ2wEe-LkdAo aZ2wEe-hj4D6d"></div></div></div></div></div>`
  );
  btn.appendChild(anim);
  div.addEventListener("click", async () => {
    const content = document.querySelector(TextBlockQuery);
    const contentText = content.innerText;
    chrome.runtime.sendMessage({
      event: "COPY",
      data: contentText,
    });
    btn.textContent = "Copied";
    setTimeout(() => {
      btn.textContent = "Copy";
    }, 2000);
  });
  div.appendChild(btn);
  return div;
};

const fetchTextFile = () => {
  const toolLine = document.querySelector(BtnListQuery);
  if (toolLine) {
    toolLine.classList.add("om-code-block");
    const btn = createTxtFileCopyBtn();
    toolLine.prepend(btn);
  }
};

setInterval(() => {
  fetchTextFile();
}, 500);
