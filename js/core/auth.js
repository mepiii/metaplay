// Search: auth system. Simple login/register data stored in localStorage for this school project.

const USERS_KEY   = 'metaplay_users';
const SESSION_KEY = 'metaplay_session';

// Search: get all users from localStorage.
function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
}

// Search: save users to localStorage.
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Search: register new user.
export function register({ username, password, photo = '' }) {
  if (!username || username.length < 3)
    return { ok: false, error: 'Username must be at least 3 characters.' };
  if (!password || password.length < 4)
    return { ok: false, error: 'Password must be at least 4 characters.' };

  const users = getUsers();
  if (users.find(u => u.username.toLowerCase() === username.toLowerCase()))
    return { ok: false, error: 'Username already taken.' };

  const user = {
    username,
    password,  // plain-text - acceptable for a school project
    photo,
    reviewCount: 0,
    joinDate: new Date().toISOString()
  };

  users.push(user);
  saveUsers(users);
  setSession(user);
  return { ok: true, user };
}

// Search: login user.
export function login({ username, password }) {
  const users = getUsers();
  const user = users.find(
    u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );
  if (!user) return { ok: false, error: 'Invalid username or password.' };
  setSession(user);
  return { ok: true, user };
}

// Search: logout user.
export function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = 'index.html';
}

// Search: current logged in user.
export function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

// Search: save login session.
function setSession(user) {
  // Search: session data keeps password out.
  const { password: _pw, ...safe } = user;
  localStorage.setItem(SESSION_KEY, JSON.stringify(safe));
}

// Search: user review count.
export function incrementReviewCount() {
  const session = getSession();
  if (!session) return;

  const users = getUsers();
  const idx = users.findIndex(u => u.username === session.username);
  if (idx === -1) return;

  users[idx].reviewCount = (users[idx].reviewCount || 0) + 1;
  saveUsers(users);

  // Search: update session after user data changes.
  session.reviewCount = users[idx].reviewCount;
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

// Search: update profile photo.
export function updatePhoto(photoDataUrl) {
  const session = getSession();
  if (!session) return;

  const users = getUsers();
  const idx = users.findIndex(u => u.username === session.username);
  if (idx === -1) return;

  users[idx].photo = photoDataUrl;
  saveUsers(users);

  session.photo = photoDataUrl;
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

// Search: change username.
export function changeUsername(newUsername) {
  newUsername = newUsername.trim();
  if (newUsername.length < 3)
    return { ok: false, error: 'Username must be at least 3 characters.' };

  const session = getSession();
  if (!session) return { ok: false, error: 'Not logged in.' };

  const users = getUsers();
  const taken = users.find(
    u => u.username.toLowerCase() === newUsername.toLowerCase() &&
         u.username !== session.username
  );
  if (taken) return { ok: false, error: 'Username already taken.' };

  const idx = users.findIndex(u => u.username === session.username);
  if (idx === -1) return { ok: false, error: 'User not found.' };

  users[idx].username = newUsername;
  saveUsers(users);

  session.username = newUsername;
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return { ok: true };
}
