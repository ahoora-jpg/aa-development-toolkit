# DevOps & Deployment

Status: Draft
Last reviewed: 2026-07-26

## Purpose

How to get code from a developer's machine into production reliably and repeatedly: CI/CD pipelines, containerization, and basic observability.

## Key Sources

### Awesome DevOps

Repository:
https://github.com/awesome-soft/awesome-devops

Notes: Curated list covering version control, CI/CD tools (Jenkins, GitLab CI), infrastructure automation, and distributed tracing (Zipkin) — a broad map of the DevOps tooling space.

### Docker

Repository:
https://github.com/docker/docker-ce

Notes: The standard for containerizing an application so it runs identically across a developer's machine, CI, and production — the practical starting point before adopting Kubernetes or any other orchestration.

## Core Concepts To Apply

- **CI/CD pipeline basics**: every push runs automated tests (CI); every merge to the main branch can be automatically built and deployed (CD) after tests pass — remove manual, error-prone deployment steps as early as possible.
- **Containerize the app**: package the app and its dependencies into a Docker image so "works on my machine" stops being a class of bug; the same image should move through dev → staging → production unchanged.
- **Trunk-based development**: keep the main branch always deployable, work in short-lived branches, merge frequently — avoids long-lived feature branches that are painful to merge and slow to get feedback on.
- **Infrastructure as code**: define servers/cloud resources in version-controlled config (Terraform, CloudFormation, Pulumi) rather than clicking through a cloud console — makes infrastructure changes reviewable and reproducible.
- **Observability basics**: structured logging, centralized log aggregation, and basic metrics/alerting (error rate, latency, uptime) from day one — you cannot fix what you cannot see, and retrofitting observability after an incident is too late.
- **Conventional commits**: standardize commit message format (`feat:`, `fix:`, `chore:`) so changelogs and version bumps can be automated, and history stays readable as the team grows.

## When To Use

Set up CI (automated tests on every push) and
