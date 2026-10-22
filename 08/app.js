/**
 * College Event Application (JavaScript / Node.js)
 * Demonstrates data persistence with and without Docker volumes.
 * Saves events to /app/data/events.json
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = process.env.DATA_DIR || '/app/data';
const DATA_FILE = path.join(DATA_DIR, 'events.json');

function initStorage() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]), 'utf8');
  }
}

function loadEvents() {
  initStorage();
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch (err) {
    return [];
  }
}

function addEvent(name, dateStr, venue) {
  const events = loadEvents();
  const newEvent = {
    id: events.length + 1,
    name,
    date: dateStr,
    venue
  };
  events.push(newEvent);
  fs.writeFileSync(DATA_FILE, JSON.stringify(events, null, 2), 'utf8');
  console.log(`[+] Successfully added event: '${name}' at '${venue}' on ${dateStr}`);
}

function listEvents() {
  const events = loadEvents();
  console.log('\n' + '='.repeat(55));
  console.log('           COLLEGE EVENTS REGISTRY (JS)          ');
  console.log('='.repeat(55));
  if (events.length === 0) {
    console.log('[!] No events found in storage! (Data is empty)');
  } else {
    for (const ev of events) {
      console.log(`ID: ${ev.id} | Event: ${ev.name} | Date: ${ev.date} | Venue: ${ev.venue}`);
    }
  }
  console.log('='.repeat(55) + '\n');
}

// CLI Argument Handling
const args = process.argv.slice(2);
initStorage();

if (args.length > 0) {
  const action = args[0].toLowerCase();
  if (action === 'add' && args.length >= 4) {
    addEvent(args[1], args[2], args[3]);
  } else if (action === 'list') {
    listEvents();
  } else {
    console.log('Usage: node app.js [list | add <name> <date> <venue>]');
  }
} else {
  listEvents();
}
