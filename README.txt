THE PADDOCK • F1 2026 • V14

V14 Account Core
- Register creates an account record only; it does NOT log the user in automatically.
- Login validates an existing account and creates a separate session key.
- Logout removes only the session; account records remain intact.
- Multiple demo accounts are supported in the same browser.
- Scores and predictions are keyed to the logged-in username.
- The old V8 demo-member key is not imported as a session.
- This is still a localStorage demo, not production authentication.

GitHub Pages
- index.html loads script-v14.js?v=14 to avoid stale script.js cache/version mismatch.
- Keep assets/ beside index.html.
