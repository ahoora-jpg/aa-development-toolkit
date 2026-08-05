# Snippet: Accessible Vanilla Form Validation

Status: Approved
Last reviewed: 2026-08-05
Source: Original (this repo)

Framework-agnostic. Validates on submit and on blur, announces errors to
screen readers via `aria-describedby` + `role="alert"`.

```html
<form novalidate id="signup-form">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required aria-describedby="email-error" />
  <p id="email-error" role="alert" class="error-text" hidden></p>

  <button type="submit">Sign up</button>
</form>

<script>
const form = document.getElementById('signup-form');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');

function validateEmail() {
  if (!email.validity.valid) {
    emailError.textContent = 'Enter a valid email address.';
    emailError.hidden = false;
    email.setAttribute('aria-invalid', 'true');
    return false;
  }
  emailError.hidden = true;
  email.removeAttribute('aria-invalid');
  return true;
}

email.addEventListener('blur', validateEmail);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateEmail()) {
    form.submit(); // or your fetch/submit logic
  }
});
</script>
```

## Related

- `skills/ui-ux/accessibility/SKILL.md`
