const fetch = require('node-fetch');

const MORNING_BRIEFING_URL = process.env.MORNING_BRIEFING_URL;
const CRON_SECRET = process.env.CRON_SECRET;

async function run() {
  console.log('Running TaskAI cron job at', new Date().toISOString());
  
  try {
    const res = await fetch(MORNING_BRIEFING_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CRON_SECRET}`
      }
    });
    
    const data = await res.json();
    console.log('Morning briefing result:', data);
  } catch (err) {
    console.error('Cron job error:', err);
  }
}

run();
