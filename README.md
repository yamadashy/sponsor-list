# Sponsor List

Automated sponsor list generation for yamadashy using [SponsorKit](https://github.com/antfu-collective/sponsorkit).

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure GitHub token:**
   - Create a [GitHub Personal Access Token](https://github.com/settings/tokens) with `read:user` and `read:org` scopes
   - Copy `.env.example` to `.env` and add your token:
     ```bash
     cp .env.example .env
     # Edit .env and add your SPONSORKIT_GITHUB_TOKEN
     ```

3. **Generate sponsors:**
   ```bash
   npm run sponsors
   ```

## GitHub Actions Setup

For automated updates, add your GitHub token as a repository secret:

1. Go to repository Settings → Secrets and variables → Actions
2. Add a new secret named `SPONSORS_TOKEN` with your GitHub Personal Access Token
3. Ensure the repository has workflow permissions set to "Read and write permissions"

The workflow will automatically update sponsors:
- Daily at 9:00 AM UTC
- When changes are made to configuration files
- When manually triggered

## Configuration

Edit `sponsorkit.config.js` to customize:
- Sponsor tiers and thresholds
- Output formats (JSON, SVG, PNG)
- Rendering styles
- Avatar fallbacks

## Generated Files

Sponsor images and data will be generated in the `sponsors/` directory:
- `sponsors.svg` - Main sponsor image
- `sponsors.png` - PNG version
- `sponsors.json` - Raw sponsor data

## Usage in Other Projects

You can use the generated sponsor images in your other repositories:

```markdown
![Sponsors](https://raw.githubusercontent.com/yamadashy/sponsor-list/main/sponsors/sponsors.svg)
```