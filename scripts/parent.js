chrome.runtime.onMessage.addListener((msg, sender, resp) => {
  navigator.clipboard.writeText(msg.data);
});
