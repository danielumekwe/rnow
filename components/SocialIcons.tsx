type IconProps = { className?: string };

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.55c0-1.32-.02-3.02-1.85-3.02-1.85 0-2.13 1.44-2.13 2.93V21h-4V9Z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.3C16.23 4.26 15.3 4.18 14.2 4.18c-2.3 0-3.87 1.4-3.87 3.98V10.5H8v3h2.33V21h3.17Z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.9 10.6 20.3 3h-1.9l-5.5 6.6L8.3 3H3l6.7 9.6L3.3 21h1.9l5.9-7 4.9 7H21l-7.1-10.4Zm-2 2.4-.7-1L5 4.6h2.1l4.4 6.3.7 1L18 19.5h-2.1l-4-6Z" />
    </svg>
  );
}
