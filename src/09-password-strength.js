/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if (password === null || password === "" || typeof password !== "string")
    return "weak";

  let strengthLevel = 0;
  // using regex will reduce lots of code lines and recommended in these scenarios, otherwise we are not good developer
  if (password.length >= 8) strengthLevel++;
  if (/[A-Z]/.test(password)) strengthLevel++;
  if (/[a-z]/.test(password)) strengthLevel++;
  if (/[0-9]/.test(password)) strengthLevel++;
  if (/[!@#$%^&*()_={}|;:,.<>?]/.test(password)) strengthLevel++;

  if (strengthLevel <= 1) return "weak";
  else if (strengthLevel <= 3) return "medium";
  else if (strengthLevel === 4) return "strong";
  else return "very strong";
}
