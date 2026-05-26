import { Link } from "wouter";
import { cn } from "@/lib/utils";
import logoImage from "@/components/img/logo.png";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  link?: boolean;
};

export default function Logo({ className, imageClassName, link = true }: LogoProps) {
  const img = (
    <img
      src={logoImage}
      alt="GoDo"
      className={cn("h-8 w-auto sm:h-9", imageClassName)}
    />
  );

  if (!link) {
    return <div className={className}>{img}</div>;
  }

  return (
    <Link href="/" className={cn("inline-flex items-center", className)}>
      {img}
    </Link>
  );
}
