import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'CareerSwitchKit — Resume System for Career Switchers'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#070719',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          position: 'relative',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 700,
            height: 500,
            background: 'radial-gradient(ellipse at 100% 0%, rgba(55,146,232,0.2) 0%, transparent 65%)',
          }}
        />

        {/* Top: Logo + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 60 64" width={44} height={47} xmlns="http://www.w3.org/2000/svg">
            <path d="M 30,4 L 54,18 L 54,46 L 30,60 L 6,46 L 6,18 Z" fill="rgba(55,146,232,0.07)" stroke="#3792E8" strokeWidth="2" opacity="0.88" />
            <path d="M 12,30 C 18,17 42,23 43.8,21.8" fill="none" stroke="#3792E8" strokeWidth="2.8" strokeLinecap="round" />
            <polygon points="48,19 45.2,23.9 42.4,19.7" fill="#3792E8" />
            <path d="M 48,34 C 42,47 18,41 16.2,42.2" fill="none" stroke="#3792E8" strokeWidth="2.8" strokeLinecap="round" />
            <polygon points="12,45 14.8,40.1 17.6,44.3" fill="#3792E8" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: '0.22em',
                color: 'rgba(255,255,255,0.38)',
                textTransform: 'uppercase',
              }}
            >
              Career
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, display: 'flex' }}>
              <span style={{ color: '#ffffff' }}>Switch</span>
              <span style={{ color: '#3792E8' }}>Kit</span>
            </div>
          </div>
          <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.1)', marginLeft: 8 }} />
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.01em' }}>
            The career switch system
          </div>
        </div>

        {/* Center: Headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: '#3792E8',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            For career switchers
          </div>
          <div style={{ fontSize: 74, fontWeight: 700, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Your background
          </div>
          <div style={{ fontSize: 74, fontWeight: 700, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            isn&apos;t the problem.
          </div>
          <div style={{ fontSize: 74, fontWeight: 700, color: '#a0c9ff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Your resume is.
          </div>
        </div>

        {/* Bottom: Price + trust + URL */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                background: 'rgba(55,146,232,0.12)',
                border: '1px solid rgba(55,146,232,0.32)',
                borderRadius: 14,
                padding: '12px 24px',
              }}
            >
              <span style={{ fontSize: 34, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>$37</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: '#a0c9ff',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  One-time
                </span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>Instant download</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#34d399',
                }}
              />
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>7-day guarantee</span>
            </div>
          </div>
          <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.04em' }}>
            careerswitchkit.org
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
