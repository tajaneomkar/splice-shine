// utils/driveLink.ts
export function extractDriveId(input: string): string | null {
  // Handles: .../file/d/ID/..., ...open?id=ID, ...uc?export=view&id=ID, bare IDs
  const patterns = [
    /\/file\/d\/([-\w]{25,})/i,
    /[?&]id=([-\w]{25,})/i,
    /\/d\/([-\w]{25,})/i,
    /\b([-\w]{25,})\b/i, // last resort
  ];
  for (const rx of patterns) {
    const m = input.match(rx);
    if (m && m[1]) return m[1].replace(/[^-\w]/g, ""); // strip stray chars
  }
  return null;
}

export function getDriveVideoEmbedUrl(linkOrId: string): string {
  const id = extractDriveId(linkOrId);
  return id ? `https://drive.google.com/file/d/${id}/preview` : linkOrId;
}

/**
 * Reliable image URL for <img>. Drive’s thumbnail endpoint is best.
 * sz is optional (e.g., "w1200" or "s1024" etc.). Skip to let the browser choose.
 */
export function getDriveImageUrl(linkOrId: string, sz?: string): string {
  const id = extractDriveId(linkOrId);
  if (!id) return linkOrId;
  const size = sz ? `&sz=${encodeURIComponent(sz)}` : "";
  return `https://drive.google.com/thumbnail?id=${id}${size}`;
}
