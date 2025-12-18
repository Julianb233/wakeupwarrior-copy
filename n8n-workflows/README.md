# n8n Slack Deliverables Workflow

Automatically send Claude deliverables to Slack.

## Setup

1. Import `slack-deliverables.json` into n8n
2. Add your Slack credentials
3. Activate the workflow

## Webhook Endpoint

```
POST https://your-n8n.com/webhook/claude-deliverables
```

## Payload

```json
{
  "title": "Website Deployed",
  "url": "https://example.com",
  "description": "Landing page is live",
  "type": "Website",
  "channel": "deliverables"
}
```

## Test with cURL

```bash
curl -X POST https://your-n8n.com/webhook/claude-deliverables \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","url":"https://example.com","description":"Test message"}'
```
