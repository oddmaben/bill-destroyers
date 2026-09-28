export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="#E85D04" />
      <path
        d="M11 12.5h18v15a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3v-15Z"
        fill="#0A2540"
      />
      <path d="M14 9.5h12v4H14v-4Z" fill="#F6F1E8" />
      <path
        d="M8 26.5 32 13.5"
        stroke="#E85D04"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
