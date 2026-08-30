export default function Logo({ onDark = false, className = '' }) {
  return (
    <span
      className={`font-display select-none ${className}`}
      style={{
        fontSize: '1.5rem',
        letterSpacing: '-0.04em',
        color: onDark ? '#FFFFFF' : '#121212',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      Floxen
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '0.55em',
          height: '0.55em',
          borderRadius: '9999px',
          background: onDark ? '#F7CE2E' : '#FFFFFF',
          marginLeft: '0.12em',
          marginBottom: '0.04em',
          boxShadow: onDark ? 'none' : '0 0 0 1px #121212',
        }}
      />
    </span>
  );
}
