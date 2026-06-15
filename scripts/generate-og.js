// Run once: node scripts/generate-og.js
// Requires: npm install --save-dev @napi-rs/canvas
const { createCanvas } = require('@napi-rs/canvas');
const fs = require('fs');
const path = require('path');

const W = 1200;
const H = 630;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

// Dark background
ctx.fillStyle = '#070719';
ctx.fillRect(0, 0, W, H);

// Right side: stacked document shapes (back to front)
const docs = [
  { x: 810, y: 55,  w: 340, h: 500, angle: 9,  fillAlpha: 0.06, strokeAlpha: 0.15 },
  { x: 790, y: 80,  w: 340, h: 500, angle: 4,  fillAlpha: 0.09, strokeAlpha: 0.20 },
  { x: 760, y: 108, w: 340, h: 500, angle: -1, fillAlpha: 0.15, strokeAlpha: 0.38 },
];

docs.forEach((doc, idx) => {
  ctx.save();
  ctx.translate(doc.x + doc.w / 2, doc.y + doc.h / 2);
  ctx.rotate((doc.angle * Math.PI) / 180);
  ctx.fillStyle = `rgba(55,146,232,${doc.fillAlpha})`;
  ctx.strokeStyle = `rgba(55,146,232,${doc.strokeAlpha})`;
  ctx.lineWidth = 1.5;
  roundRect(ctx, -doc.w / 2, -doc.h / 2, doc.w, doc.h, 14);
  ctx.fill();
  ctx.stroke();

  // Content lines on front document
  if (idx === 2) {
    const lines = [
      { y: -175, w: 155, isTitle: true },
      { y: -132, w: 255 },
      { y: -104, w: 215 },
      { y: -76,  w: 240 },
      { y: -48,  w: 205 },
      { y: -20,  w: 225 },
    ];
    lines.forEach(line => {
      ctx.fillStyle = line.isTitle
        ? 'rgba(55,146,232,0.65)'
        : 'rgba(55,146,232,0.22)';
      ctx.fillRect(-doc.w / 2 + 30, line.y, line.w, line.isTitle ? 7 : 4);
    });
  }
  ctx.restore();
});

// Left text content
const lp = 80;

// Brand wordmark
ctx.font = 'bold 30px Arial';
ctx.fillStyle = 'rgba(255,255,255,0.92)';
ctx.fillText('CareerSwitchKit', lp, 162);

// Accent rule
ctx.fillStyle = 'rgba(55,146,232,0.45)';
ctx.fillRect(lp, 180, 50, 2);

// Headline — accent blue
ctx.font = 'bold 44px Arial';
ctx.fillStyle = '#3792E8';
ctx.fillText('Switch careers in the US —', lp, 268);
ctx.fillText('without starting from zero.', lp, 328);

// Sub-line
ctx.font = '19px Arial';
ctx.fillStyle = 'rgba(255,255,255,0.36)';
ctx.fillText('ATS-ready resume  ·  50 AI prompts  ·  Cover letters', lp, 396);

// Divider
ctx.fillStyle = 'rgba(255,255,255,0.07)';
ctx.fillRect(lp, 432, 580, 1);

// Value line
ctx.font = 'bold 18px Arial';
ctx.fillStyle = 'rgba(55,146,232,0.80)';
ctx.fillText('$19  ·  Instant download  ·  30-day guarantee', lp, 472);

// Domain
ctx.font = '16px Arial';
ctx.fillStyle = 'rgba(255,255,255,0.26)';
ctx.fillText('careerswitchkit.org', lp, 546);

const outPath = path.join(__dirname, '..', 'public', 'og-image.png');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, canvas.toBuffer('image/png'));
console.log(`✓ Generated ${outPath} (${W}×${H})`);
