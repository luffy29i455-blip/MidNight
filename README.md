const form = document.getElementById('registerForm');
const statusMessage = document.getElementById('statusMessage');

function showMessage(el, text, color = '#67e8f9') {
  if (!el) return;
  el.textContent = text;
  el.style.color = color;
}

async function submitRegistration(payload) {
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Unable to create account.');
  }

  return result;
}

async function submitLogin(payload) {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Login failed.');
  }

  return result;
}

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = form.email?.value?.trim();
    if (!email) {
      showMessage(statusMessage, 'Please enter an email address.', '#fca5a5');
      return;
    }

    showMessage(statusMessage, 'Sending your welcome email...', '#67e8f9');

    try {
      const result = await submitRegistration({ email });
      showMessage(statusMessage, result.message, '#86efac');
      form.reset();
    } catch (error) {
      showMessage(statusMessage, error.message, '#fca5a5');
    }
  });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const payload = {
      name: signupForm.name.value.trim(),
      email: signupForm.email.value.trim(),
      password: signupForm.password.value.trim(),
    };

    const statusEl = document.getElementById('signupStatus');
    if (!payload.name || !payload.email || payload.password.length < 6) {
      showMessage(statusEl, 'Please fill in all fields correctly.', '#fca5a5');
      return;
    }

    showMessage(statusEl, 'Creating your account...', '#67e8f9');

    try {
      const result = await submitRegistration(payload);
      showMessage(statusEl, result.message, '#86efac');
      setTimeout(() => {
        window.location.href = '/login';
      }, 1200);
    } catch (error) {
      showMessage(statusEl, error.message, '#fca5a5');
    }
  });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const payload = {
      email: loginForm.email.value.trim(),
      password: loginForm.password.value.trim(),
    };

    const statusEl = document.getElementById('loginStatus');

    if (!payload.email || !payload.password) {
      showMessage(statusEl, 'Please provide both email and password.', '#fca5a5');
      return;
    }

    showMessage(statusEl, 'Logging in...', '#67e8f9');

    try {
      const result = await submitLogin(payload);
      localStorage.setItem('midnightUser', JSON.stringify(result.user));
      showMessage(statusEl, result.message, '#86efac');
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 800);
    } catch (error) {
      showMessage(statusEl, error.message, '#fca5a5');
    }
  });
}

const welcomeName = document.getElementById('welcomeName');
if (welcomeName) {
  const savedUser = JSON.parse(localStorage.getItem('midnightUser') || '{}');
  const displayName = savedUser.name || 'Gamer';
  welcomeName.textContent = `Welcome, ${displayName}`;
}

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('midnightUser');
    window.location.href = '/login';
  });
}
