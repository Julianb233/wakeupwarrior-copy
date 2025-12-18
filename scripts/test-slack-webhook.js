// Test the Slack webhook deliverables workflow
// Usage: node test-slack-webhook.js <n8n-webhook-url>

const webhookUrl = process.argv[2] || 'https://your-n8n.com/webhook/claude-deliverables';

const payload = {
  title: 'Wake Up Warrior Replica Complete',
  url: 'https://julianb233.github.io/wakeupwarrior-copy/',
  description: 'Full landing page replica with Wistia video, 12 testimonials, value stack, and pulsing CTAs',
  type: 'Website',
  channel: 'deliverables'
};

console.log('Testing Slack webhook at:', webhookUrl);

fetch(webhookUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
})
  .then(res => res.json())
  .then(data => console.log('Response:', data))
  .catch(err => console.error('Error:', err));
