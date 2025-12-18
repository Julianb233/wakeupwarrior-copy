#!/bin/bash
# Test the Slack webhook deliverables workflow
# Usage: ./test-slack-webhook.sh <n8n-webhook-url>

WEBHOOK_URL="${1:-https://your-n8n.com/webhook/claude-deliverables}"

echo "Testing Slack webhook at: $WEBHOOK_URL"

curl -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Wake Up Warrior Replica Complete",
    "url": "https://julianb233.github.io/wakeupwarrior-copy/",
    "description": "Full landing page replica with Wistia video, 12 testimonials, value stack, and pulsing CTAs",
    "type": "Website",
    "channel": "deliverables"
  }'

echo ""
echo "Done! Check your Slack channel."
