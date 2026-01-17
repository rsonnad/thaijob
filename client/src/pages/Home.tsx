import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertApplicationSchema, insertReferralSchema } from "@shared/schema";
import { useLanguage } from "@/hooks/use-language";
import { Navigation } from "@/components/Navigation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, Plane, Heart, Users, DollarSign, CheckCircle2 } from "lucide-react";
import beachWork from "@assets/beach_work_1768629875681.png";
import referralBonus from "@assets/referral_bonus_1768629875681.png";
import robotMassage from "@assets/Robot_Copy_Massage_1768629875681.jpg";
import skylineTreatment from "@assets/skyline_treatment_1768629875681.png";

export default function Home() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const applyForm = useForm({
    resolver: zodResolver(insertApplicationSchema),
    defaultValues: { name: "", email: "", phone: "", experience: "", message: "" }
  });

  const referForm = useForm({
    resolver: zodResolver(insertReferralSchema),
    defaultValues: { referrerName: "", referrerEmail: "", candidateName: "", candidateContact: "" }
  });

  const onApply = async (data: any) => {
    try {
      await apiRequest("POST", "/api/applications", data);
      toast({ title: t.applyForm.success });
      applyForm.reset();
    } catch (e) {
      toast({ title: "Error", description: "Failed to submit application", variant: "destructive" });
    }
  };

  const onRefer = async (data: any) => {
    try {
      await apiRequest("POST", "/api/referrals", data);
      toast({ title: t.referForm.success });
      referForm.reset();
    } catch (e) {
      toast({ title: "Error", description: "Failed to submit referral", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary/5">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${beachWork})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        </div>
        
        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-2xl font-bold tracking-[0.1em] uppercase mb-4 text-white drop-shadow-md"
          >
            {t.hero.label}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium mb-10 leading-tight text-white/90 drop-shadow-lg"
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-white text-black hover:bg-white/90 h-12 px-10 rounded-full font-bold w-full sm:w-auto" asChild>
              <a href="#apply">{t.hero.apply}</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-10 rounded-full font-bold w-full sm:w-auto backdrop-blur-sm" asChild>
              <a href="#refer">{t.referral.button}</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 space-y-24 py-16">
        {/* Core Description - Grouped Text & Image */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold leading-tight">{t.requirements.title}</h2>
            <ul className="space-y-4">
              {t.requirements.items.map((item: string, i: number) => (
                <li key={i} className="flex gap-4 items-start text-lg text-muted-foreground leading-snug">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto md:ml-auto md:mr-0">
            <img src={skylineTreatment} alt="Treatment" className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* Work & AI Section - Grouped Text & Image */}
        <section className="bg-secondary/20 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto md:mr-auto md:ml-0">
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

        {/* Compensation & Travel - Visual Grid */}
        <section className="grid md:grid-cols-3 gap-8 text-center py-8 border-y border-border/40">
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-primary/5 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{t.compensation.salary}</h3>
            <p className="text-sm text-muted-foreground font-light">{t.compensation.bonus}</p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-primary/5 rounded-full flex items-center justify-center">
              <Plane className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{t.compensation.travel}</h3>
            <p className="text-sm text-muted-foreground font-light px-4">Thailand, Vietnam, Bali, India, USA, Europe</p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-primary/5 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Global Events</h3>
            <p className="text-sm text-muted-foreground font-light px-4">Yoga, Music festivals, Wellness & Biohacking</p>
          </div>
        </section>

        {/* Referral Section */}
        <section id="refer" className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center shadow-2xl">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${referralBonus})` }}
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="relative z-20 max-w-2xl p-8 md:p-12 text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">{t.referral.title}</h2>
            <p className="text-lg font-light opacity-90 leading-relaxed">{t.referral.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Step 1</p>
                <p className="text-base font-bold">{t.referral.reward1}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Step 2</p>
                <p className="text-base font-bold">{t.referral.reward2}</p>
              </div>
            </div>
            <Form {...referForm}>
              <form onSubmit={referForm.handleSubmit(onRefer)} className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <FormField control={referForm.control} name="referrerName" render={({ field }) => (
                    <FormItem><Input placeholder={t.referForm.referrerName} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-10" {...field} /></FormItem>
                  )} />
                  <FormField control={referForm.control} name="referrerEmail" render={({ field }) => (
                    <FormItem><Input placeholder={t.referForm.referrerEmail} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-10" {...field} /></FormItem>
                  )} />
                </div>
                <FormField control={referForm.control} name="candidateName" render={({ field }) => (
                  <FormItem><Input placeholder={t.referForm.candidateName} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-10" {...field} /></FormItem>
                )} />
                <FormField control={referForm.control} name="candidateContact" render={({ field }) => (
                  <FormItem><Input placeholder={t.referForm.candidateContact} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-10" {...field} /></FormItem>
                )} />
                <Button type="submit" className="w-full h-11 bg-white text-black hover:bg-white/90 font-bold rounded-full transition-transform active:scale-[0.98]">
                  {t.referForm.submit}
                </Button>
              </form>
            </Form>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="max-w-xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">{t.applyForm.title}</h2>
            <p className="text-lg text-muted-foreground font-light">Join our global wellness journey.</p>
          </div>
          
          <Form {...applyForm}>
            <form onSubmit={applyForm.handleSubmit(onApply)} className="space-y-6 bg-card p-8 rounded-2xl border shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField control={applyForm.control} name="name" render={({ field }) => (
                  <FormItem><FormLabel className="text-sm font-medium">{t.applyForm.name}</FormLabel><FormControl><Input className="h-10 bg-muted/30" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={applyForm.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel className="text-sm font-medium">{t.applyForm.email}</FormLabel><FormControl><Input className="h-10 bg-muted/30" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
              <FormField control={applyForm.control} name="phone" render={({ field }) => (
                <FormItem><FormLabel className="text-sm font-medium">{t.applyForm.phone}</FormLabel><FormControl><Input className="h-10 bg-muted/30" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={applyForm.control} name="experience" render={({ field }) => (
                <FormItem><FormLabel className="text-sm font-medium">{t.applyForm.experience}</FormLabel><FormControl><Textarea className="min-h-[100px] bg-muted/30 resize-none" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={applyForm.control} name="message" render={({ field }) => (
                <FormItem><FormLabel className="text-sm font-medium">{t.applyForm.message}</FormLabel><FormControl><Textarea className="min-h-[100px] bg-muted/30 resize-none" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <Button type="submit" className="w-full h-12 text-lg font-bold rounded-full transition-all hover:shadow-md active:scale-[0.98]" disabled={applyForm.formState.isSubmitting}>
                {applyForm.formState.isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : t.applyForm.submit}
              </Button>
            </form>
          </Form>
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
