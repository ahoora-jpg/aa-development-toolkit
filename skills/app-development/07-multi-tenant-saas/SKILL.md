# Multi-Tenant / SaaS Architecture

Status: Draft
Last reviewed: 2026-07-26

## Purpose

How to design an application that serves many separate customers (tenants) from one codebase/infrastructure, while keeping each tenant's data isolated and performance predictable.

## Key Sources

### Multi-tenant data architecture patterns (reference notes)

Source:
https://gist.github.com/santoshshinde2012/671920fbb4a877438b76cd2e004d2078

Notes: A widely-referenced summary of the three standard tenant-isolation models (shared database/shared schema, shared database/schema-per-tenant,
