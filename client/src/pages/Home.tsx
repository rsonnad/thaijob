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
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${beachWork})` }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
              <a href="#apply">{t.hero.apply}</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {/* Core Description */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold">{t.requirements.title}</h2>
            <ul className="space-y-4">
              {t.requirements.items.map((item: string, i: number) => (
                <li key={i} className="flex gap-3 items-start text-lg text-muted-foreground">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={skylineTreatment} alt="Treatment" className="w-full h-auto" />
          </div>
        </section>

        {/* Work & AI Section */}
        <section className="bg-secondary/30 rounded-3xl p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden">
            <img src={robotMassage} alt="Robotics Training" className="w-full h-auto" />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl font-serif font-bold">{t.work.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.work.description}
            </p>
            <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl text-primary font-medium">
              {t.work.noErotic}
            </div>
          </div>
        </section>

        {/* Compensation & Travel */}
        <section className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 space-y-4">
            <DollarSign className="w-12 h-12 mx-auto text-primary" />
            <h3 className="text-2xl font-bold">{t.compensation.salary}</h3>
            <p className="text-muted-foreground">{t.compensation.bonus}</p>
          </div>
          <div className="p-8 space-y-4">
            <Plane className="w-12 h-12 mx-auto text-primary" />
            <h3 className="text-2xl font-bold">{t.compensation.travel}</h3>
            <p className="text-muted-foreground">Thailand, Vietnam, Bali, India, USA, Europe</p>
          </div>
          <div className="p-8 space-y-4">
            <Users className="w-12 h-12 mx-auto text-primary" />
            <h3 className="text-2xl font-bold">Community</h3>
            <p className="text-muted-foreground">Join wellness festivals and biohacking conferences worldwide</p>
          </div>
        </section>

        {/* Referral Section */}
        <section id="refer" className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${referralBonus})` }}
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 max-w-2xl p-8 md:p-16 text-white space-y-6">
            <h2 className="text-4xl font-serif font-bold">{t.referral.title}</h2>
            <p className="text-xl font-light opacity-90">{t.referral.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <p className="text-sm opacity-70">Step 1</p>
                <p className="font-bold">{t.referral.reward1}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <p className="text-sm opacity-70">Step 2</p>
                <p className="font-bold">{t.referral.reward2}</p>
              </div>
            </div>
            <Form {...referForm}>
              <form onSubmit={referForm.handleSubmit(onRefer)} className="space-y-4 mt-8">
                <div className="grid grid-cols-2 gap-4">
                  <FormField control={referForm.control} name="referrerName" render={({ field }) => (
                    <FormItem><Input placeholder={t.referForm.referrerName} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} /></FormItem>
                  )} />
                  <FormField control={referForm.control} name="referrerEmail" render={({ field }) => (
                    <FormItem><Input placeholder={t.referForm.referrerEmail} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} /></FormItem>
                  )} />
                </div>
                <FormField control={referForm.control} name="candidateName" render={({ field }) => (
                  <FormItem><Input placeholder={t.referForm.candidateName} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} /></FormItem>
                )} />
                <FormField control={referForm.control} name="candidateContact" render={({ field }) => (
                  <FormItem><Input placeholder={t.referForm.candidateContact} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} /></FormItem>
                )} />
                <Button type="submit" className="w-full bg-white text-black hover:bg-white/90">
                  {t.referForm.submit}
                </Button>
              </form>
            </Form>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-serif font-bold">{t.applyForm.title}</h2>
            <p className="text-muted-foreground">Join our global wellness journey</p>
          </div>
          
          <Form {...applyForm}>
            <form onSubmit={applyForm.handleSubmit(onApply)} className="space-y-6 bg-card p-8 rounded-2xl border">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField control={applyForm.control} name="name" render={({ field }) => (
                  <FormItem><FormLabel>{t.applyForm.name}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={applyForm.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel>{t.applyForm.email}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
              <FormField control={applyForm.control} name="phone" render={({ field }) => (
                <FormItem><FormLabel>{t.applyForm.phone}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={applyForm.control} name="experience" render={({ field }) => (
                <FormItem><FormLabel>{t.applyForm.experience}</FormLabel><FormControl><Textarea className="min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={applyForm.control} name="message" render={({ field }) => (
                <FormItem><FormLabel>{t.applyForm.message}</FormLabel><FormControl><Textarea className="min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <Button type="submit" className="w-full py-6 text-lg" disabled={applyForm.formState.isSubmitting}>
                {applyForm.formState.isSubmitting ? <Loader2 className="animate-spin" /> : t.applyForm.submit}
              </Button>
            </form>
          </Form>
        </section>
      </main>

      <footer className="py-12 border-t text-center text-muted-foreground">
        <p>© 2026 Mistique Journey. Alpaca Playhouse.</p>
      </footer>
    </div>
  );
}
