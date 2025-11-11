import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Для работодателей', href: '/employers' },
    { name: 'Для исполнителей', href: '/workers' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0C0A25]/90 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6B4BFF]/10 to-[#3A7BFF]/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <span className="font-black text-3xl bg-gradient-to-r from-[#6B4BFF] to-[#3A7BFF] bg-clip-text text-transparent">GoDo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors hover:text-[#FF4FC3] ${
                  location === item.href ? 'text-[#6B4BFF]' : 'text-white'
                }`}
                data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              size="sm"
              className="bg-[#6B4BFF] hover:bg-[#3A7BFF] text-white font-bold px-6 py-2 rounded-xl shadow-lg hover:shadow-[#3A7BFF]/25 transform hover:scale-105 transition-all duration-300 border-0"
              data-testid="button-start-telegram"
              onClick={() => window.open('https://t.me/go_do_job_bot', '_blank')}
            >
              Перейти в бот
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
              className="text-white hover:text-[#FF4FC3]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-black/50 z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Sidebar */}
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 left-0 h-screen w-80 max-w-[85vw] bg-[#0C0A25] shadow-2xl z-50 md:hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B4BFF]/10 to-[#3A7BFF]/10"></div>
                <div className="relative flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#6B4BFF] to-[#3A7BFF] rounded-xl flex items-center justify-center shadow-lg">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-black text-2xl bg-gradient-to-r from-[#6B4BFF] to-[#3A7BFF] bg-clip-text text-transparent">GoDo</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white hover:text-[#FF4FC3]"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  {/* Navigation Links */}
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
                          className={`block px-4 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:bg-[#FF4FC3]/10 ${
                            location === item.href 
                              ? 'text-[#6B4BFF] bg-[#6B4BFF]/10' 
                              : 'text-white hover:text-[#FF4FC3]'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                          data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div 
                    className="p-6 border-t border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      size="lg"
                      className="w-full bg-[#6B4BFF] hover:bg-[#3A7BFF] text-white font-bold py-4 rounded-xl shadow-lg border-0 text-lg"
                      data-testid="button-mobile-telegram"
                      onClick={() => {
                        window.open('https://t.me/go_do_job_bot', '_blank');
                        setIsMenuOpen(false);
                      }}
                    >
                      Перейти в бот
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
