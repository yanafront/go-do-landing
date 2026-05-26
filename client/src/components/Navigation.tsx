import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Bell } from "lucide-react";
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Ищу работника', href: '/employers' },
    { name: 'Ищу работу', href: '/workers' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-godo/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-[4.5rem]">
          <Logo imageClassName="h-7 sm:h-8" />

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "godo-nav-link relative",
                  location === item.href && "godo-nav-link-active font-semibold"
                )}
                data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
                {location === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-godo-blue to-godo-blue-dark" />
                )}
              </Link>
            ))}
            <Button
              size="sm"
              className="godo-btn px-5 py-2 h-auto min-h-9 text-sm gap-1.5"
              data-testid="button-nav-channel"
              onClick={() => window.open('https://t.me/go_do_minsk', '_blank')}
            >
              <Bell className="w-3.5 h-3.5" />
              Канал с вакансиями
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
              className="text-white hover:bg-white/10 hover:text-godo-blue"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 left-0 h-screen w-80 max-w-[85vw] bg-godo-elevated border-r border-white/[0.06] shadow-2xl z-50 md:hidden"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
                    <Logo link={false} imageClassName="h-8" />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white hover:bg-white/10"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  <div className="flex-1 px-6 py-8 space-y-2">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "block px-4 py-4 text-lg font-medium rounded-2xl transition-all duration-200",
                            location === item.href
                              ? "text-godo-blue bg-godo-blue/10"
                              : "text-white/90 hover:text-white hover:bg-white/5"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                          data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="p-6 space-y-3 border-t border-white/[0.06]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      size="lg"
                      className="godo-btn w-full py-4 text-lg h-auto gap-2"
                      data-testid="button-mobile-channel"
                      onClick={() => {
                        window.open('https://t.me/go_do_minsk', '_blank');
                        setIsMenuOpen(false);
                      }}
                    >
                      <Bell className="w-5 h-5" />
                      Канал с вакансиями
                    </Button>
                    <Button
                      size="lg"
                      className="godo-btn-outline w-full py-3 text-base h-auto"
                      data-testid="button-mobile-bot"
                      onClick={() => {
                        window.open('https://t.me/go_do_job_bot', '_blank');
                        setIsMenuOpen(false);
                      }}
                    >
                      Открыть бота
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
