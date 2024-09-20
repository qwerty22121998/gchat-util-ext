const CodeBlockQuery = ":not(.om-code-block).FMTudf.FEcYdc.krjOGe";

const createCopyBtn = (content) => {
  const btn = document.createElement("button");
  btn.classList.add("om-copy-btn");
  btn.textContent = "Copy to clipboard";
  btn.addEventListener("click", async () => {
    chrome.runtime.sendMessage({
      event: "COPY",
      data: content,
    });
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = "Copy to clipboard";
    }, 1000);
  });
  return btn;
};

const fetchCodeBlock = () => {
  const blocks = document.querySelectorAll(CodeBlockQuery);
  Array.from(blocks).forEach((block) => {
    block.classList.add("om-code-block");
    console.log(block.textContent);
    block.parentNode.appendChild(createCopyBtn(block.textContent));
  });
};

setInterval(() => {
  fetchCodeBlock();
}, 500);
