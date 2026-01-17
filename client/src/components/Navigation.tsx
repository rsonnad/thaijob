import { Link } from "wouter";
import { motion } from "framer-motion";

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 max-w-7xl mx-auto"
    >
      <Link href="/" className="text-xl font-serif font-bold tracking-tight hover:opacity-70 transition-opacity">
        Logo.
      </Link>
      
      <div className="flex gap-8 text-sm font-medium text-muted-foreground">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
      </div>
    </motion.nav>
  );
}
