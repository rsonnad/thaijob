import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function Navigation() {
  const { lang, setLang, t } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <div className="flex justify-between items-center px-6 py-4 md:px-12 max-w-7xl mx-auto w-full">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-primary">
          Mistique Journey
        </Link>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">{t.nav.home}</Link>
            <Link href="#apply" className="hover:text-primary transition-colors">{t.nav.apply}</Link>
            <Link href="#refer" className="hover:text-primary transition-colors">{t.nav.refer}</Link>
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setLang(lang === "en" ? "th" : "en")}
            className="gap-2 font-medium"
          >
            <Globe className="w-4 h-4" />
            {lang === "en" ? "TH" : "EN"}
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
