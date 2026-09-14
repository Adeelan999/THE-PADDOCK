F1 DRIVER ARCHIVE 2026 — V6

BASE
- Built from the V4 package.
- Keeps the 11 teams, 22 drivers, circuit assets and 2026 schedule.
- Team Profile remains separate from Driver Overview/Highlights.

NEW IN V6
1) F1 Arcade
   - ทายนักแข่ง: clue-based multiple choice quiz.
   - ปีนี้แชมป์อะไร?: 2026 driver + constructor prediction.
   - F1 Race: simple browser racing mini-game.
   - Race game has MOBILE and COMPUTER control modes.
   - Every game has an explanation screen before play.

2) Member Area
   - Login / Sign Up UI.
   - Policy page with an "อ่านแล้วและยอมรับ" button.
   - Registration asks the user to confirm "ฉันไม่ใช่บอท".
   - Current GitHub Pages package uses DEMO MODE only.

IMPORTANT SECURITY NOTE
GitHub Pages is static hosting. Do NOT use this package as a real password database.
The demo stores only non-sensitive demo profile data in localStorage and does not provide real authentication.
For production, connect an authentication/backend service. Passwords should be stored as secure hashes such as Argon2id/bcrypt, not plaintext.
Do not put real passwords, session tokens, or API service secrets into this front-end.

DATABASE DESIGN
See ../F1_Member_Database_Schema_2026.xlsx when kept beside the project package. Suggested backend tables:
- Users
- Consents
- GameScores
- Predictions

PRODUCTION FLOW
Sign up -> verify email -> accept policy -> bot/anti-automation check -> create account -> issue secure session -> save game scores server-side.
Login -> server verifies credentials -> secure session cookie -> load profile/scores.

For a real deployment, use HTTPS and server-side authentication/session handling. A CAPTCHA/Turnstile-style control should be treated as defense-in-depth, not as the only security layer.
