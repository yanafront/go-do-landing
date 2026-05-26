import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmileDivider from "@/components/brand/SmileDivider";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-godo flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-md">
          <p className="text-7xl font-extrabold godo-heading-accent mb-2">404</p>
          <SmileDivider className="mb-6" />
          <h1 className="text-2xl font-bold text-white mb-3">Страница не найдена</h1>
          <p className="text-white/60 mb-8 text-sm">
            Похоже, эта страница переехала или никогда не существовала.
          </p>
          <Link href="/">
            <Button className="godo-btn gap-2 h-auto py-3 px-8">
              <Home className="w-5 h-5" />
              На главную
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
