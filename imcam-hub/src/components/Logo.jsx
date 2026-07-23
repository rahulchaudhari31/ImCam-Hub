export function FaviconIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield base */}
      <path
        d="M16 2L4 7V15C4 22.18 9.12 28.82 16 30.5C22.88 28.82 28 22.18 28 15V7L16 2Z"
        fill="#0B1F3A"
      />
      {/* Document/folder shape inside */}
      <path
        d="M11 10H21C21.55 10 22 10.45 22 11V21C22 21.55 21.55 22 21 22H11C10.45 22 10 21.55 10 21V11C10 10.45 10.45 10 11 10Z"
        fill="#FAFAF7"
      />
      {/* Document lines */}
      <path
        d="M12.5 13H19.5"
        stroke="#0B1F3A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.5 16H19.5"
        stroke="#0B1F3A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.5 19H16.5"
        stroke="#0B1F3A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Upward arrow/checkmark accent */}
      <path
        d="M16 6L19 9.5L16 7.5L13 9.5L16 6Z"
        fill="#F2994A"
      />
      <path
        d="M14 8L16 6L18 8"
        stroke="#F2994A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ variant = 'full', className = '' }) {
  if (variant === 'icon') {
    return <FaviconIcon size={40} className={className} />;
  }

  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ImCam Hub logo"
    >
      {/* Icon mark - Shield with document */}
      <g>
        {/* Shield base */}
        <path
          d="M20 2L6 7V18C6 26.28 11.68 33.82 20 36C28.32 33.82 34 26.28 34 18V7L20 2Z"
          fill="#0B1F3A"
        />
        {/* Document/folder shape */}
        <path
          d="M14 11H26C26.55 11 27 11.45 27 12V24C27 24.55 26.55 25 26 25H14C13.45 25 13 24.55 13 24V12C13 11.45 13.45 11 14 11Z"
          fill="#FAFAF7"
        />
        {/* Document lines */}
        <path
          d="M15.5 14.5H24.5"
          stroke="#0B1F3A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M15.5 18H24.5"
          stroke="#0B1F3A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M15.5 21.5H20.5"
          stroke="#0B1F3A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Amber accent - upward chevron */}
        <path
          d="M17 8L20 5L23 8"
          stroke="#F2994A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Wordmark */}
      <g>
        {/* "ImCam" in bold */}
        <text
          x="44"
          y="28"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="700"
          fontSize="22"
          fill="#0B1F3A"
          letterSpacing="-0.5"
        >
          ImCam
        </text>
        {/* "Hub" in amber */}
        <text
          x="122"
          y="28"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="400"
          fontSize="22"
          fill="#F2994A"
          letterSpacing="-0.5"
        >
          Hub
        </text>
      </g>
    </svg>
  );
}
