# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an automated sponsor list generation project for yamadashy using SponsorKit. It fetches sponsor information from GitHub Sponsors and generates sponsor images automatically via GitHub Actions.

## Development Commands

- `npm install` - Install dependencies
- `npm run sponsors` - Generate sponsor images and data
- `npm run sponsors:dev` - Generate sponsors in development mode
- `npm run sponsors:config` - Generate sponsors with config validation

## Architecture

The project uses SponsorKit to:
1. Fetch sponsor data from GitHub API
2. Generate sponsor images in multiple formats (SVG, PNG, JSON)
3. Automatically update via GitHub Actions on a schedule

Key files:
- `sponsorkit.config.js` - SponsorKit configuration (tiers, rendering options)
- `.github/workflows/sponsors.yml` - GitHub Actions workflow for automation
- `sponsors/` - Generated sponsor images and data (created by SponsorKit)

## Setup Requirements

1. GitHub Personal Access Token with `read:user` and `read:org` scopes
2. Repository secret `SPONSORS_TOKEN` for GitHub Actions
3. Workflow permissions set to "Read and write permissions"

## Configuration

- Edit `sponsorkit.config.js` to modify sponsor tiers, output formats, or rendering styles
- The workflow runs daily at 9:00 AM UTC and on configuration changes