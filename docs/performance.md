# Performance Standards

Status: Approved
Version: 1.0.0

## Core Principles

- Performance is a product requirement.
- Load only assets needed by the current page.
- Avoid unnecessary dependencies.
- Measure before and after major optimization work.
- Prefer platform capabilities over additional libraries.

## Assets

- Compress and resize images appropriately.
- Use modern image formats where supported.
- Lazy-load non-critical media.
- Minimize unused CSS and JavaScript.
- Avoid duplicate libraries.
- Limit unnecessary font families and weights.

## Runtime

- Avoid expensive work during scroll and resize.
- Prevent unnecessary DOM updates.
- Prefer transform and opacity for animation.
- Avoid blocking the main thread during initialization.
