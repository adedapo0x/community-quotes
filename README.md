## community quotes API

A simple Express.js + MongoDB API that allows anyone to share quotes.
The main purpose of this project is not the API itself, but to demonstrate the principles of the 12-Factor App
in practice with a minimal project.

check out the 12-Factor App methodology here - [https://12factor.net/](https://12factor.net/)

kept it very basic
- No user accounts (no login/signup).
- Anyone can add quotes.
- Optional author field -> defaults to "Anonymous" if not provided.
- Supports fetching all quotes or a random quote.

### Features

POST /quotes → Add a new quote (optionally with author).

GET /quotes → Retrieve all quotes (sorted by most recent first).

GET /quotes/random → Retrieve a random quote.

### why this project?

This project was built as a demo to explore and apply the 12-Factor App principles in the context of an Express.js API.

It’s intentionally kept basic (quotes only, no authentication, no complex features), so that the focus remains on architecture and principles, not business logic.

How this API applies the 12-Factor principles

1. Codebase → Single repo, tracked in version control.
2. Dependencies → All dependencies declared in package.json and installed via Yarn.
3. Config → Config values (like MONGODB_URI, PORT) stored in .env, not hardcoded.
4. Backing services → MongoDB treated as an external resource, configured via environment variable.
5. Build, release, run → Clear separation:
    - Build → install dependencies
   - Release → configure env vars
   - Run → yarn start
6. Processes → The app runs as a stateless process. State is stored in MongoDB.
7. Port binding → The API exports services via HTTP on a defined port.
8. Concurrency → (Not fully applied here, since this is a basic demo — would be relevant for scaling in production).
9. Disposability → Graceful shutdown implemented (closes server + DB connections).
10. Dev/prod parity → Same .env style config for both local dev and production.
11. Logs → Logs are written to stdout (viewable in terminal or via process manager).
12. Admin processes → Seeding scripts are separate and can be run independently (yarn seed).

### Note on limitations

Not all 12-Factor principles are fully demonstrated here:

Concurrency -> unnecessary for such a small app.

Advanced logging/monitoring -> skipped to keep the app simple.

The goal is to show the concepts in action without over-engineering.
