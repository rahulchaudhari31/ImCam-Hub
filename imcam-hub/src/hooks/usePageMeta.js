import { useEffect } from 'react';

export default function usePageMeta(title, description) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | ImCam Hub` : 'ImCam Hub';

    let meta = document.querySelector('meta[name="description"]');
    const prevContent = meta?.getAttribute('content') || '';
    if (description) {
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }

    return () => {
      document.title = prevTitle;
      if (meta && description) {
        meta.setAttribute('content', prevContent);
      }
    };
  }, [title, description]);
}
