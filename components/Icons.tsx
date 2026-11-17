type P = { className?: string };
const s = (c?: string) => ({ className: c ?? "h-5 w-5", "aria-hidden": true as const, focusable: false as const });

export const TikTokIcon = ({ className }: P) => (
  <svg {...s(className)} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);
export const PayPalIcon = ({ className }: P) => (
  <svg {...s(className)} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 3h6.2c3 0 4.8 1.6 4.3 4.3-.5 3-2.6 4.5-5.4 4.5H10l-.8 5H6L7 3z" />
    <path opacity=".6" d="M9.6 12.5h2.6c3 0 5-1.4 5.6-4.4 1.4 1 1.6 2.6 1.1 4.8-.6 3-2.7 4.6-5.6 4.6h-1.8l-.7 4H8.2l1.4-9z" />
  </svg>
);
export const FlagES = ({ className }: P) => (
  <svg {...s(className ?? "h-4 w-6")} viewBox="0 0 24 16">
    <clipPath id="fes"><rect width="24" height="16" rx="3" /></clipPath>
    <g clipPath="url(#fes)"><rect width="24" height="16" fill="#AA151B" /><rect y="4" width="24" height="8" fill="#F1BF00" /></g>
  </svg>
);
export const FlagDE = ({ className }: P) => (
  <svg {...s(className ?? "h-4 w-6")} viewBox="0 0 24 16">
    <clipPath id="fde"><rect width="24" height="16" rx="3" /></clipPath>
    <g clipPath="url(#fde)"><rect width="24" height="16" fill="#000" /><rect y="5.33" width="24" height="5.34" fill="#DD0000" /><rect y="10.67" width="24" height="5.33" fill="#FFCE00" /></g>
  </svg>
);
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
export const CloseIcon = ({ className }: P) => (<svg {...s(className)} viewBox="0 0 24 24" {...stroke}><path d="M6 6l12 12M18 6L6 18" /></svg>);
export const MenuIcon = ({ className }: P) => (<svg {...s(className)} viewBox="0 0 24 24" {...stroke}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const DownloadIcon = ({ className }: P) => (<svg {...s(className)} viewBox="0 0 24 24" {...stroke}><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></svg>);
export const CheckIcon = ({ className }: P) => (<svg {...s(className)} viewBox="0 0 24 24" {...stroke}><path d="M5 12.5l4.5 4.5L19 7" /></svg>);
export const ChevronIcon = ({ className }: P) => (<svg {...s(className)} viewBox="0 0 24 24" {...stroke}><path d="M6 9l6 6 6-6" /></svg>);
export const ChatIcon = ({ className }: P) => (<svg {...s(className)} viewBox="0 0 24 24" {...stroke}><path d="M4 5h16v11H9l-5 4V5z" /></svg>);
export const InfoIcon = ({ className }: P) => (<svg {...s(className)} viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>);
export const CalmIcon = ({ className }: P) => (<svg {...s(className)} viewBox="0 0 24 24" {...stroke}><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14M5 19l7-7" /></svg>);
export const HeartIcon = ({ className }: P) => (<svg {...s(className)} viewBox="0 0 24 24" {...stroke}><path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.7A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z" /></svg>);
