import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabelledby?: string;
};

export default function SectionShell({
  children,
  className,
  id,
  ariaLabelledby,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "py-20 sm:py-24 bg-godo relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-godo-blue/[0.07] via-transparent to-godo-blue/[0.04]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[min(100%,640px)] h-64 bg-godo-blue/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-godo-blue/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
