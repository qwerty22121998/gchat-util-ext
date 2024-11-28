const CodeBlockQuery = ":not(.om-code-block).FMTudf.FEcYdc.krjOGe";

const elemFromString = (str) => {
  var template = document.createElement("template");
  template.innerHTML = str;
  return template.content.firstChild;
};

const createChatCopyBtn = (content) => {
  const container = document.createElement("div");
  container.classList.add("om-copy-btn-container");
  const btn = document.createElement("button");
  btn.classList.add("om-copy-btn");
  btn.textContent = "Copy";

  btn.addEventListener("click", async () => {
    chrome.runtime.sendMessage({
      event: "COPY",
      data: content,
    });
    btn.textContent = "Copied";
    setTimeout(() => {
      btn.textContent = "Copy";
    }, 2000);
  });
  container.appendChild(btn);
  return container;
};

const fetchChat = () => {
  const chats = document.querySelectorAll(CodeBlockQuery);
  Array.from(chats).forEach((chat) => {
    chat.classList.add("om-code-block");
    // console.log(block.innerText);
    chat.parentNode.insertBefore(
      createChatCopyBtn(chat.innerText),
      chat.nextSibling
    );
  });
};

setInterval(() => {
  fetchChat();
}, 500);
