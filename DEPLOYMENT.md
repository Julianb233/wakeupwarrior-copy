# Deployment Guide

## Live URLs

| Asset | URL |
|-------|-----|
| **Website** | https://julianb233.github.io/wakeupwarrior-copy/ |
| **Repository** | https://github.com/Julianb233/wakeupwarrior-copy |

## Project Structure

```
├── index.html                    # Main landing page
├── README.md                     # Project documentation
├── DEPLOYMENT.md                 # This file
├── n8n-workflows/
│   ├── slack-deliverables.json  # n8n workflow for Slack
│   └── README.md                # Workflow setup guide
└── scripts/
    ├── test-slack-webhook.sh    # Bash test script
    └── test-slack-webhook.js    # Node.js test script
```

## Quick Start

### 1. View the Website
Open https://julianb233.github.io/wakeupwarrior-copy/

### 2. Set Up Slack Notifications

1. Import `n8n-workflows/slack-deliverables.json` into your n8n instance
2. Configure Slack credentials
3. Activate the workflow
4. Test with: `./scripts/test-slack-webhook.sh YOUR_WEBHOOK_URL`

## Technical Details

### Colors
- Primary Dark: `#101111`
- Accent Red: `#ff4545`
- Accent Green: `#00ff00`
- Accent Blue: `#0174c7`

### Fonts
- Headings: Montserrat (800 weight)
- Body: Open Sans (400, 600, 700)

### Video
- Platform: Wistia
- Video ID: `86uvxepgvy`

### Hosting
- GitHub Pages (automatic from main branch)
- SSL enabled
- CDN distributed

---

Created with Claude Code Swarm
