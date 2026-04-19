const RECIPIENT = "dev@adonalisio.com";

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
  window.location.href = `mailto:${RECIPIENT}?subject=Portfolio%20Contact&body=${body}`;
});
