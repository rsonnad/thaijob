import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Plane, Users, DollarSign, CheckCircle2, Clock, MapPin, Briefcase, Star, Info } from "lucide-react";
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

      <main className="max-w-4xl mx-auto px-6 space-y-20 py-16">
        {/* Referral Section */}
        <section id="refer" className="space-y-8 bg-card p-8 md:p-12 rounded-3xl border shadow-sm">
          <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-md mb-8">
            <img src={referralBonus} alt="Referral Bonus" className="w-full h-auto object-cover" />
          </div>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-serif font-bold">{t.referral.title}</h2>
            <p className="text-lg font-light text-muted-foreground">{t.referral.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-primary/5 p-5 rounded-xl border border-primary/10 text-center">
              <p className="text-lg font-bold text-primary">{t.referral.reward1}</p>
            </div>
            <div className="bg-primary/5 p-5 rounded-xl border border-primary/10 text-center">
              <p className="text-lg font-bold text-primary">{t.referral.reward2}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="h-12 px-12 rounded-full font-bold" asChild>
              <a href="https://forms.gle/placeholder-refer" target="_blank" rel="noopener noreferrer">
                {t.referForm.submit}
              </a>
            </Button>
          </div>
        </section>

        {/* Requirements */}
        <section className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">{t.requirements.title}</h2>
            <ul className="space-y-4">
              {t.requirements.items.map((item: string, i: number) => (
                <li key={i} className="flex gap-4 items-start text-lg text-muted-foreground leading-snug">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto">
            <img src={skylineTreatment} alt="Treatment" className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* Travel */}
        <section className="space-y-6">
          <h2 className="text-3xl font-serif font-bold">{t.travel.title}</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p className="flex gap-3 items-start"><MapPin className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.travel.description}</p>
            <p className="flex gap-3 items-start"><DollarSign className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.travel.costs}</p>
            <p className="flex gap-3 items-start"><Star className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.travel.participation}</p>
          </div>
        </section>

        {/* Work & AI */}
        <section className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">{t.work.title}</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="flex gap-3 items-start"><Clock className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.work.hours}</p>
              <div className="space-y-2 pl-9">
                {t.work.tasks.map((task: string, i: number) => (
                  <p key={i} className="flex gap-2 items-center">• {task}</p>
                ))}
              </div>
              <p className="flex gap-3 items-start"><Users className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.work.femaleFocus}</p>
              <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl text-primary font-medium flex gap-3 items-center">
                <span className="text-xl shrink-0">✨</span>
                {t.work.noErotic}
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md max-w-sm mx-auto">
            <img src={robotMassage} alt="Robotics Training" className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* Compensation */}
        <section className="space-y-6">
          <h2 className="text-3xl font-serif font-bold">{t.compensation.title}</h2>
          <div className="grid gap-4 text-lg text-muted-foreground">
            <p className="flex gap-3 items-start font-bold text-primary"><DollarSign className="w-6 h-6 shrink-0 mt-1" /> {t.compensation.salary}</p>
            <p className="flex gap-3 items-start"><Star className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.compensation.increases}</p>
            <p className="flex gap-3 items-start"><Info className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.compensation.costs}</p>
            <p className="flex gap-3 items-start font-light italic pl-9">{t.compensation.lodging}</p>
            <p className="flex gap-3 items-start"><Star className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.compensation.extra}</p>
            <p className="flex gap-3 items-start"><Briefcase className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.compensation.equity}</p>
          </div>
        </section>

        {/* About & Interview */}
        <section className="space-y-10 border-t pt-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">{t.project.title}</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="font-bold text-primary">{t.project.name}</p>
              <p>{t.project.location}</p>
              <p>{t.project.feedback}</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">{t.interview.title}</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="flex gap-3 items-start"><MapPin className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.interview.locations}</p>
              <p className="flex gap-3 items-start"><Clock className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.interview.dates}</p>
              <p className="flex gap-3 items-start font-bold text-primary"><Star className="w-6 h-6 shrink-0 mt-1" /> {t.interview.audition}</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">{t.trial.title}</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="flex gap-3 items-start"><CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.trial.week}</p>
              <p className="flex gap-3 items-start"><CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.trial.months}</p>
              <p className="flex gap-3 items-start"><CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.trial.longterm}</p>
              <p className="flex gap-3 items-start"><CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" /> {t.trial.relocation}</p>
              <p className="flex gap-3 items-start font-bold text-primary"><Info className="w-6 h-6 shrink-0 mt-1" /> {t.trial.visas}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="apply" className="text-center space-y-8 py-12 border-t pt-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">{t.applyForm.title}</h2>
          <p className="text-lg text-muted-foreground font-light">Interested applicants: Fill out the application form here</p>
          <Button size="lg" className="h-14 px-16 text-xl font-bold rounded-full transition-all hover:shadow-xl active:scale-[0.98]" asChild>
            <a href="https://forms.gle/placeholder" target="_blank" rel="noopener noreferrer">
              {t.applyForm.submit}
            </a>
          </Button>
          <div className="pt-8">
            <p className="text-muted-foreground">Questions: <a href="mailto:alpacaplayhouse@gmail.com" className="text-primary font-medium hover:underline">alpacaplayhouse@gmail.com</a></p>
          </div>
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
