chrome.runtime.onMessage.addListener((message) => {
  const emails = message.emails;

  for (let i = 0; i < emails.length; i++) {
    document.querySelector("#text-input").value = emails[i];

    // Simulate pressing the "Enter" key
    const enterEvent = new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      key: "Enter",
      code: "Enter",
      keyCode: 13, // Enter key code
    });

    document.querySelector("#text-input").dispatchEvent(enterEvent);
  }
});
