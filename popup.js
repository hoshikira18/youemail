const form = document.querySelector("form");
const emailsInput = document.querySelector("#emails");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailsString = e.target.emails.value;
  // const autoLogin = e.target.autoLogin.checked;

  const emails = emailsString.split(" ").map((email) => email.trim());
  // remove duplicate items
  const setEmails = [...new Set(emails)];

  sendMessage({
    emails: setEmails,
  });

  // exit
  //   window.close();
});

function sendMessage(msg) {
  const params = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(params, send);

  function send(tab) {
    chrome.tabs.sendMessage(tab[0].id, msg);
  }
}
