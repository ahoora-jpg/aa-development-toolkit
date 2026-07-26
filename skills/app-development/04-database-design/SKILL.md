# Database Design

Status: Draft
Last reviewed: 2026-07-26

## Purpose

How to design a database schema that stays correct and fast as the app grows: normalization, indexing, and choosing between SQL and NoSQL.

## Key Sources

### Awesome Database Design

Repository:
https://github.com/sujeet-agrahari/awesome-database-design

Notes: Actively maintained, focused curated list covering naming conventions, hierarchical data, complex relationships, indexing (B-trees, B+trees), multi-language schema design, and ER-diagram tools — a practical companion to the system-design-primer's more theoretical database section.

### Awesome Databases

Repository:
https://github.com/dhamaniasad/awesome-databases

Notes: Broad catalog of database engines themselves (PostgreSQL, MongoDB, Redis, YugabyteDB, etc.) — useful when the question is "which database should this feature use," not just "how do I model this table."

## Core Concepts To Apply

- **Normalize by default, denormalize deliberately**: start with a normalized (3NF) relational schema to avoid update anomalies; only denormalize specific hot paths once a real performance need is measured.
- **Index for your actual queries**: an index speeds reads but costs writes and storage — add indexes based on the app's real query patterns (check with `EXPLAIN`), not preemptively on every column.
- **SQL vs NoSQL decision**: choose SQL (Postgres/MySQL) by default for anything with relationships and transactions (most business apps); choose NoSQL (MongoDB, DynamoDB) when the access pattern is simple key-based lookups at very large scale, or the schema is genuinely document-shaped and changes often.
- **Transactions & ACID vs BASE**: use database transactions for anything that must be atomically consistent (money, inventory); understand that distributed/NoSQL systems often trade strict consistency for availability (BASE) — know which guarantee each part of the app actually needs.
- **Migrations as code**: every schema change goes through a versioned migration file, never a manual change to production — this is what makes multi-developer, multi-environment apps survive schema evolution.

## When To Use

Apply when designing any new table/collection, and revisit when a specific query is slow — most database performance problems are missing/wrong indexes or a schema mismatched to the access pattern, not the database engine itself.

## External Sources

Both sources above are external, actively maintained GitHub repositories — link to them rather than duplicating their content here.
