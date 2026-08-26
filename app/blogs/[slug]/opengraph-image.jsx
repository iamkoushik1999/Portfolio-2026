import { ImageResponse } from 'next/og';

import { getBlogBySlug } from '../../../lib/blog';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  const title = blog?.title ?? 'Blog post';
  const tags = blog?.tags ?? [];

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px',
        background:
          'radial-gradient(circle at 15% 10%, rgba(94,231,255,0.18) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(167,139,250,0.18) 0%, transparent 45%), #030b1c',
      }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          fontSize: 28,
          fontWeight: 600,
          color: '#a9b8d9',
          marginBottom: 28,
          fontFamily: 'sans-serif',
        }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #5ee7ff 0%, #a78bfa 100%)',
            display: 'flex',
          }}
        />
        koushik.dev/blogs
      </div>
      <div
        style={{
          fontSize: 60,
          fontWeight: 800,
          color: '#f5f7ff',
          fontFamily: 'sans-serif',
          lineHeight: 1.15,
          display: 'flex',
          maxWidth: 1000,
        }}>
        {title}
      </div>
      {tags.length > 0 && (
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 36,
          }}>
          {tags.slice(0, 4).map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                fontSize: 24,
                fontWeight: 600,
                color: '#5ee7ff',
                border: '1px solid rgba(94,231,255,0.35)',
                borderRadius: 100,
                padding: '8px 20px',
                fontFamily: 'sans-serif',
              }}>
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>,
    { ...size },
  );
}
