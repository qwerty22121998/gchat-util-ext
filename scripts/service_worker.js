chrome.runtime.onMessage.addListener(async (msg, sender, resp) => {
  switch (msg.event) {
    case "COPY":
      {
        const message = msg.data.normalize("NFKD");
        const [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        chrome.tabs.sendMessage(tab.id, {
          event: "COPY",
          data: message,
        });
      }
      break;
  }
});
