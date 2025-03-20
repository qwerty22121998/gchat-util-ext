const CodeBlockQuery = ":not(.om-code-block).FMTudf.FEcYdc";

const createCopyBtn = (width, height) => {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", width || "100%");
  svg.setAttribute("height", height || "100%");
  svg.setAttribute("fill", "none");
  svg.setAttribute("transform", "matrix(-1, 0, 0, -1, 0, 0)");
  svg.setAttribute("stroke", "currentColor");
  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M15,17v3a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H7"
  );
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-width", "2");
  svg.appendChild(path);

  let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", "7");
  rect.setAttribute("y", "3");
  rect.setAttribute("width", "12");
  rect.setAttribute("height", "14");
  rect.setAttribute("rx", "1");
  rect.setAttribute("stroke-width", "2");
  rect.setAttribute("stroke-linecap", "round");
  rect.setAttribute("stroke-linejoin", "round");
  svg.appendChild(rect);

  let check = document.createElementNS("http://www.w3.org/2000/svg", "path");
  check.setAttribute(
    "d",
    "M9.77 10.599c.359.319 2.8 2.72 2.792 2.721-.004.003 3.834-7.257 3.832-7.257"
  );
  check.setAttribute("stroke-linecap", "round");
  check.setAttribute("stroke-linejoin", "round");
  check.setAttribute("stroke-width", "2");
  check.setAttribute("transform", "rotate(180)");
  check.setAttribute("transform-origin", "13 9.6");
  check.style.display = "none";

  const clicked = () => {
    let color = "blue";
    if (document.body.getAttribute("data-theme") === "dark") {
      color = "green";
    }
    svg.setAttribute("stroke", color);
    check.style.display = "block";
    setTimeout(() => {
      svg.setAttribute("stroke", "currentColor");
      check.style.display = "none";
    }, 1000);
  };

  svg.appendChild(check);
  return {
    button: svg,
    onClick: clicked,
  };
};

const elemFromString = (str) => {
  var template = document.createElement("template");
  template.innerHTML = str;
  return template.content.firstChild;
};

const createChatCopyBtn = (content) => {
  const container = document.createElement("div");
  container.classList.add("om-copy-btn-container");
  const btn = document.createElement("div");
  btn.classList.add("om-copy-btn");
  const { button, onClick: copyClick } = createCopyBtn(20, 20);
  btn.appendChild(button);

  btn.addEventListener("click", async () => {
    chrome.runtime.sendMessage({
      event: "COPY",
      data: content,
    });
    copyClick();
  });
  container.appendChild(btn);
  return container;
};

const fetchChat = () => {
  const chats = document.querySelectorAll(CodeBlockQuery);
  Array.from(chats).forEach((chat) => {
    chat.classList.add("om-code-block");
    chat.prepend(createChatCopyBtn(chat.innerText));
  });
};

setInterval(() => {
  fetchChat();
}, 500);
