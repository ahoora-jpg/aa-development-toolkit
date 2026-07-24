---
name: 05-authentication-security
description: Build secure application identity and access controls using sessions, JWTs, OAuth 2.0, OpenID Connect, validation, secrets management, and current OWASP risk guidance. Use for security design, authentication flows, authorization reviews, or threat modeling.
---

# Authentication and Security

## Overview

Security is a system property, not an authentication feature. Model assets, actors, trust boundaries, abuse cases, and recovery paths. Apply least privilege and defense in depth; centralize policy where possible, but enforce authorization at the service and object that owns the decision.

## Key Concepts

- **Authentication and authorization:** Authentication establishes an identity; authorization decides whether that identity may perform this action on this resource in this context. Recheck authorization server-side on every operation.
- **Sessions:** Store an opaque, high-entropy identifier in a `Secure`, `HttpOnly`, appropriately scoped cookie. Rotate after privilege changes, protect state-changing requests from CSRF, and support revocation.
- **JWTs:** Signed tokens are not encrypted by default. Validate algorithm, signature, issuer, audience, expiry, not-before time, and token type. Keep access tokens short-lived and avoid sensitive payloads.
- **OAuth 2.0 and OIDC:** OAuth delegates API authorization; OIDC adds authentication. Use Authorization Code with PKCE, exact redirect matching, state/nonce protections, and current OAuth security guidance.
- **Input handling:** Validate allowed type, size, range, format, and structure; canonicalize carefully; use parameterized queries and context-specific output encoding.
- **Secrets:** Keep secrets out of code, images, logs, prompts, and client bundles. Use a managed store, narrow identity-based access, rotation, audit trails, and tested emergency revocation.
- **Current OWASP risks:** The 2025 Top 10 emphasizes access control, misconfiguration, supply chain, cryptography, injection, insecure design, authentication, integrity, logging/alerting, and exceptional-condition handling. The 2023 API list adds object/property/function authorization, resource consumption, sensitive business flows, SSRF, inventory, and unsafe upstream APIs.

## Best Practices

- Threat-model login, account recovery, enrollment, administrative actions, webhooks, imports, and machine identities.
- Prefer maintained identity libraries and providers over custom protocol or password implementations.
- Hash passwords with a modern password-hashing algorithm and unique salts; tune cost and support rehashing.
- Require phishing-resistant MFA for privileged roles where feasible; rate-limit and monitor authentication attempts.
- Use deny-by-default authorization with tenant, ownership, role, and resource state in the policy input.
- Inventory dependencies and APIs, pin and scan build inputs, protect provenance, and patch through a tested process.
- Log security decisions and high-risk changes without tokens, passwords, raw secrets, or unnecessary personal data.

## Common Pitfalls

- Treating a valid token as permission to access any object named by the caller.
- Storing long-lived bearer tokens in browser-accessible storage.
- Accepting JWT algorithms or keys based only on attacker-controlled headers.
- Implementing OAuth as a password exchange or skipping PKCE/state/nonce checks.
- Relying only on blacklist validation, a web application firewall, or client-side rules.
- Returning different recovery responses that reveal whether an account exists.
- Logging authorization headers, cookies, secrets, or sensitive request bodies.

## When To Use

Use this skill for every application handling identities or protected data, and before exposing a new endpoint or integration. Increase assurance for payments, health data, privileged administration, public APIs, multi-tenant systems, and destructive actions. Pair it with a product-specific threat model and the latest normative guidance.

## Further Reading

See the curated [source register](sources.md).
