# Security Standards

Status: Approved
Version: 1.0.0

## Core Requirements

- Treat external input as untrusted.
- Validate input against expected formats.
- Sanitize data before processing or storage.
- Escape output according to context.
- Apply least-privilege access.
- Never commit credentials, API keys, tokens, or private keys.
- Keep dependencies maintained.

## WordPress

- Use nonces for protected requests.
- Check user capabilities.
- Use WordPress sanitization and escaping functions.
- Use prepared database queries.
- Never modify WordPress core.
- Never trust request variables directly.
