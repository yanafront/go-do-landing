import { cn } from "@/lib/utils";

type SmileDividerProps = {
  className?: string;
};

export default function SmileDivider({ className }: SmileDividerProps) {
  return (
    <div className={cn("flex justify-center py-2", className)}>
      <svg
        viewBox="0 0 120 20"
        className="w-24 h-5 text-godo-blue rotate-180 -scale-x-100"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="godo-smile" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00AEEF" />
            <stop offset="100%" stopColor="#0071BC" />
          </linearGradient>
        </defs>
        <path
          d="M8 14 Q60 2 112 14"
          stroke="url(#godo-smile)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M108 14 L112 10 L112 18 Z"
          fill="url(#godo-smile)"
        />
      </svg>
    </div>
  );
}
