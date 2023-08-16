import { cn } from "./utils";

export const VisiblePasswordIcon = ({ className = "", ...props }) => (
  <svg
    className={cn(className, "fill-transparent")}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

export const HiddenPasswordIcon = ({ className = "", ...props }) => (
  <svg
    className={cn(className, "fill-transparent")}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const LoadingIcon = ({ className = "", ...props }) => (
  <svg
    className={cn(`animate-spin fill-transparent ${className}`)}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export const ErrorCircleIcon = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(className, "fill-transparent")}
    {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

export const ChevronDownIcon = ({ className = "", ...props }) => (
  <svg
    className={cn("h-5 w-5", className)}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const HeartIcon = ({ className = "", ...props }) => (
  <svg
    className={cn(className, "fill-transparent")}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export const CheckmarkIcon = ({ className = "", ...props }) => (
  <svg
    className={cn(className, "fill-transparent")}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const WarningIcon = ({ className = "", ...props }) => (
  <svg
    className={cn(className, "fill-transparent")}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    {...props}
    strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);
export const DangerIcon = ({ className = "", ...props }) => (
  <svg
    className={cn(className, "fill-transparent")}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    {...props}
    strokeLinejoin="round">
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

export const CheckCircleIcon = ({ className = "", ...props }) => (
  <svg
    className={cn(className, "fill-transparent")}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const XIcon = ({ className = "", ...props }) => (
  <svg
    className={cn(className, "fill-transparent")}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const UserCircleIcon = ({ className = "", ...props }) => (
  <svg
    className={cn(className, "fill-transparent")}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <path d="M18 20a6 6 0 0 0-12 0" />
    <circle cx="12" cy="10" r="4" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);
