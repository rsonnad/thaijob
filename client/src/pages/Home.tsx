import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Plane, Users, DollarSign, CheckCircle2 } from "lucide-react";
import beachWork from "@assets/beach_work_1768629875681.png";
import referralBonus from "@assets/referral_bonus_1768629875681.png";
import robotMassage from "@assets/Robot_Copy_Massage_1768629875681.jpg";
import skylineTreatment from "@assets/skyline_treatment_1768629875681.png";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary/5">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${beachWork})` }}
        >
          {/* Brighter background: Using black/30 instead of 60, and white gradient wash */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </div>
        
        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-[0.05em] uppercase mb-4 text-white drop-shadow-xl"
          >
            {t.hero.label}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-serif font-normal mb-10 text-white/90 drop-shadow-md"
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-white text-black hover:bg-white/90 h-12 px-10 rounded-full font-bold w-full sm:w-auto shadow-xl" asChild>
              <a href="https://forms.gle/placeholder" target="_blank" rel="noopener noreferrer">
                {t.hero.apply}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 h-12 px-10 rounded-full font-bold w-full sm:w-auto backdrop-blur-sm shadow-lg" asChild>
              <a href="#refer">{t.referral.button}</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 space-y-20 py-16">
        {/* Core Description */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold leading-tight">{t.requirements.title}</h2>
            <ul className="space-y-3">
              {t.requirements.items.map((item: string, i: number) => (
                <li key={i} className="flex gap-4 items-start text-lg text-muted-foreground leading-snug">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto md:ml-auto md:mr-0">
            <img src={skylineTreatment} alt="Treatment" className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* Work & AI Section */}
        <section className="bg-secondary/20 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-md max-w-sm mx-auto md:mr-auto md:ml-0">
            <img src={robotMassage} alt="Robotics Training" className="w-full h-auto object-cover" />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-serif font-bold leading-tight">{t.work.title}</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.work.description}
              </p>
              <div className="p-4 bg-white border border-primary/10 rounded-xl text-primary font-medium flex gap-3 items-center">
                <span className="text-xl shrink-0">✨</span>
                {t.work.noErotic}
              </div>
            </div>
          </div>
        </section>

        {/* Compensation & Travel */}
        <section className="grid md:grid-cols-3 gap-8 text-center py-8 border-y border-border/40">
          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto bg-primary/5 rounded-full flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{t.compensation.salary}</h3>
            <p className="text-sm text-muted-foreground font-light">{t.compensation.bonus}</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto bg-primary/5 rounded-full flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{t.compensation.travel}</h3>
            <p className="text-sm text-muted-foreground font-light px-4">Thailand, Vietnam, Bali, India, USA, Europe</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto bg-primary/5 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Global Events</h3>
            <p className="text-sm text-muted-foreground font-light px-4">Yoga, Music festivals, Wellness & Biohacking</p>
          </div>
        </section>

        {/* Referral Section - Refined with Inline Image */}
        <section id="refer" className="space-y-8 bg-card p-8 md:p-12 rounded-3xl border shadow-sm max-w-4xl mx-auto">
          <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-md mb-8">
            <img src={referralBonus} alt="Referral Bonus" className="w-full h-auto object-cover" />
          </div>
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">{t.referral.title}</h2>
            <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">{t.referral.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-primary/5 p-5 rounded-xl border border-primary/10 text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Step 1</p>
              <p className="text-lg font-bold text-primary">{t.referral.reward1}</p>
            </div>
            <div className="bg-primary/5 p-5 rounded-xl border border-primary/10 text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Step 2</p>
              <p className="text-lg font-bold text-primary">{t.referral.reward2}</p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button size="lg" className="h-12 px-12 rounded-full font-bold" asChild>
              <a href="https://forms.gle/placeholder-refer" target="_blank" rel="noopener noreferrer">
                {t.referForm.submit}
              </a>
            </Button>
          </div>
        </section>

        {/* Placeholder Application Link Section */}
        <section id="apply" className="text-center space-y-8 py-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">{t.applyForm.title}</h2>
          <p className="text-lg text-muted-foreground font-light">Click the button below to open our application form.</p>
          <Button size="lg" className="h-14 px-16 text-xl font-bold rounded-full transition-all hover:shadow-xl active:scale-[0.98]" asChild>
            <a href="https://forms.gle/placeholder" target="_blank" rel="noopener noreferrer">
              {t.applyForm.submit}
            </a>
          </Button>
        </section>
      </main>

      <footer className="py-12 border-t bg-muted/10 text-center text-muted-foreground">
        <div className="max-w-2xl mx-auto px-6 space-y-2">
          <p className="text-base font-serif font-bold text-primary">Mistique Journey</p>
          <p className="text-xs font-light">Alpaca Playhouse @ Austin, Texas USA</p>
          <p className="text-[10px] uppercase tracking-widest opacity-40 pt-4">© 2026 Mistique Journey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
