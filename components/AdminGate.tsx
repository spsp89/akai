"use client";

import { FormEvent, useEffect, useState } from "react";
import { AdminDashboard } from "./AdminDashboard";

const USER_HASH = "a9ebd742f5cfc96f9d4f233fa90d56f2eaa27a1d181ee84f975248deda582f17";
const PASSWORD_HASH = "b595f1968f1f1069f8f591a35067b9748a0c336640624c71efda27792bcf21ce";
const SESSION_KEY = "akai_owner_console_session";
const ATTEMPT_KEY = "akai_owner_console_attempts";
const LOCK_KEY = "akai_owner_console_lock_until";

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
}

export function AdminGate() {
  const [authorized, setAuthorized] = useState(false);
  const [ready, setReady] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [lockedUntil, setLockedUntil] = useState(0);
  const [clock, setClock] = useState(0);

  useEffect(() => {
    setAuthorized(sessionStorage.getItem(SESSION_KEY) === "active");
    setLockedUntil(Number(localStorage.getItem(LOCK_KEY) || 0));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!lockedUntil || lockedUntil <= Date.now()) return;
    const timer = window.setInterval(() => setClock(value => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [lockedUntil]);

  const secondsRemaining = Math.max(0, Math.ceil((lockedUntil - Date.now()) / 1000));
  void clock;

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (secondsRemaining) return;
    setBusy(true);
    setError("");

    const [userHash, passHash] = await Promise.all([
      sha256(username.trim().toLowerCase()),
      sha256(password),
    ]);

    if (userHash === USER_HASH && passHash === PASSWORD_HASH) {
      sessionStorage.setItem(SESSION_KEY, "active");
      localStorage.removeItem(ATTEMPT_KEY);
      localStorage.removeItem(LOCK_KEY);
      setAuthorized(true);
      setPassword("");
    } else {
      const attempts = Number(localStorage.getItem(ATTEMPT_KEY) || 0) + 1;
      if (attempts >= 5) {
        const nextLock = Date.now() + 60_000;
        localStorage.setItem(LOCK_KEY, String(nextLock));
        localStorage.setItem(ATTEMPT_KEY, "0");
        setLockedUntil(nextLock);
        setError("Too many attempts. Access is locked for 60 seconds.");
      } else {
        localStorage.setItem(ATTEMPT_KEY, String(attempts));
        setError(`Incorrect username or password. ${5 - attempts} attempts remaining.`);
      }
    }

    setBusy(false);
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthorized(false);
    setUsername("");
  };

  if (!ready) return <div className="admin-access admin-access--loading" aria-label="Loading secure access" />;
  if (authorized) return <AdminDashboard onLogout={logout} />;

  return (
    <div className="admin-access">
      <div className="admin-login-brand"><span>AES</span><b>Akai Elevator System</b><small>Owner control centre</small></div>
      <form className="admin-login-card" onSubmit={login}>
        <p>RESTRICTED ACCESS</p>
        <h1>Admin sign in</h1>
        <span>Enter the owner credentials to open the private dashboard.</span>
        <label><b>Username</b><input value={username} onChange={event => setUsername(event.target.value)} autoComplete="username" required autoFocus /></label>
        <label><b>Password</b><input type="password" value={password} onChange={event => setPassword(event.target.value)} autoComplete="current-password" required /></label>
        {error && <div className="admin-login-error" role="alert">{secondsRemaining ? `Locked. Try again in ${secondsRemaining} seconds.` : error}</div>}
        <button type="submit" disabled={busy || secondsRemaining > 0}>{busy ? "Checking…" : secondsRemaining ? `Locked ${secondsRemaining}s` : "Open admin panel →"}</button>
        <small>This session closes when the browser tab is closed.</small>
      </form>
      <a className="admin-login-back" href="/">← Return to website</a>
    </div>
  );
}
