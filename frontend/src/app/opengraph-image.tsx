import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Link-preview card: the AS monogram on the brand background
export const alt = 'Abdullah Shaikh — Agentic AI & Frontend Web Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'src/app/icon.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 64,
          background: 'radial-gradient(circle at 30% 50%, #1a1f5c 0%, #03051C 70%)',
          color: '#ffffff',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={320} height={320} alt="" style={{ borderRadius: 64 }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 72, fontWeight: 700 }}>Abdullah Shaikh</div>
          <div style={{ fontSize: 34, color: '#9aa4ff', marginTop: 12 }}>
            Agentic AI · Frontend Developer
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
