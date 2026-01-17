import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";

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
            <a href="https://forms.gle/FXdjKAYgnXpCRHnf8" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t.nav.apply}</a>
            <a href="https://forms.gle/2HVxMaWo2K5duALv5" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t.nav.refer}</a>
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setLang(lang === "en" ? "th" : "en")}
            className="gap-2 font-medium"
            data-testid="button-language-toggle"
          >
            {lang === "en" ? (
              <>
                <span className="text-base">🇹🇭</span>
                <span>TH</span>
              </>
            ) : (
              <>
                <span className="text-base">🇺🇸</span>
                <span>EN</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
