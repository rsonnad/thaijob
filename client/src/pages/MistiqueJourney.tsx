import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/Hero_Image_-_StudioShot_1768660117735.jpg";
import surveyImage from "@assets/Survey_1768660145084.jpg";
import greetingsImage from "@assets/greetings_1768660212215.jpg";
import breathworkImage from "@assets/breathwork_1768660221101.jpg";
import thaiYogaImage from "@assets/Thai_Yoga_Massage_1768660639595.jpg";
import somaticsImage from "@assets/Somatics_1768660991786.jpg";
import groundingImage from "@assets/Grounding_1768661011236.jpg";
import saunaTubs from "@assets/Saunatubs_1768657655707.png";
import skyTreatment from "@assets/sky_treatment_1768657655707.jpg";

const journeyElements = [
  { title: "Online Intake Survey", description: "Personalized preparation for your journey", image: surveyImage },
  { title: "Greeting & Meditations", description: "Centering practices to begin your journey", image: greetingsImage },
  { title: "Breathwork Meditation", description: "Guided breathing techniques for transformation", image: breathworkImage },
  { title: "Assisted Yoga", description: "Gentle guidance through beneficial postures", image: thaiYogaImage },
  { title: "Traditional Thai Massage", description: "Ancient healing techniques for releasing tension", image: skyTreatment },
  { title: "Oil Massage", description: "Relaxing bodywork with therapeutic oils", image: somaticsImage },
  { title: "Sauna", description: "Detoxifying heat therapy", image: saunaTubs },
  { title: "Cold Bath", description: "Invigorating cold immersion", image: groundingImage },
  { title: "Resting & Integration", description: "Peaceful completion of your journey", image: greetingsImage },
];

const testimonials = [
  {
    text: "First of all, Rahul has been hands down one of the best massage therapists I ever encountered. He is clearly very knowledgeable about the human body and was able to read exactly what my body needed. The whole Mystic Journey carries this vibe of customized experience for one's needs and intentions. It's so complete, healing, magical and I find it impossible for someone to leave this experience without feeling completely renewed and rebirthed in the body.",
    author: "Mariana Mendes Amarante",
    date: "2024-02-29"
  },
  {
    text: "The best bodywork ever, healing, relaxing, moving in a new body the next day!",
    author: "Vandana Hart",
    date: "2020-03-04"
  },
  {
    text: "Rahul is one of the sweetest and compassionate healing artists I've ever had the pleasure of working with. I literally always leave feeling rejuvenated and nourished. Such a blast. I highly recommend working with Rahul!",
    author: "Hannah Marie Muse",
    date: "2020-03-05"
  },
  {
    text: "Rahul is incredible! When it got to the massage & bodywork, he was so thorough—the perfect combination of deep pressure and deep relaxation. I was in my ultimate bliss-zone during and after the session. I felt like a new person: rejuvenated and happy.",
    author: "Nicole Goddard",
    date: "2020-03-29"
  },
  {
    text: "I cannot say enough how incredible Rahul Lio is. Nothing compares to the transformation and rejuvenation I feel—both physically and mentally—after just one session with him. I feel energized; my body feels awakened. Thank you for being in my life!",
    author: "Sophia Rose",
    date: "2019-10-28"
  },
];

const phases = [
  {
    title: '"Grounding" - Phase 1: 30 minutes',
    description: "Begin your journey with centering practices that help you arrive fully in your body. Through guided meditation and gentle awareness exercises, you'll establish a foundation of presence.",
    detail: "This phase sets the tone for your entire experience, helping you leave behind daily stress and connect with your breath and body.",
    image: groundingImage
  },
  {
    title: '"Somatics" - Phase 2: Up to 3 hours',
    description: "The core transformational work happens during this extended phase. Through a combination of breathwork, assisted yoga, massage, and energy work, you'll experience a deep release of physical and emotional patterns.",
    detail: "Your practitioner will guide you through this process with attentive care, responding to your body's unique needs.",
    image: somaticsImage
  },
  {
    title: '"Wind Down" - Phase 3: 30 minutes',
    description: "As your journey concludes, this phase helps you integrate the experience. Gentle cooling techniques, rest, and subtle energy work allow your nervous system to recalibrate.",
    detail: "This transition helps your body recognize and retain the benefits of your profound work.",
    image: saunaTubs
  },
  {
    title: '"Free Form Integration" - Phase 4: 1 hour',
    description: "The final hour is dedicated to integration. This phase may include gentle conversation, creative expression, or quiet reflection, providing space to process insights and prepare for everyday life.",
    detail: "",
    image: greetingsImage
  },
];

const treatments = [
  "Thai Yoga and other massage practices",
  "Traditional Hatha Yoga",
  "Breathwork and breathing exercises",
  "Meditation practices",
  "Heat and Cold Therapies",
  "Sound Therapy",
  "Craniosacral Therapy",
  "Indigenous Medicine Rituals",
];

export default function MistiqueJourney() {
  return (
    <div className="min-h-screen w-full bg-[#faf9f6]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="flex justify-between items-center px-6 py-4 md:px-12 max-w-7xl mx-auto w-full">
          <Link href="/" className="text-xl font-serif font-bold tracking-tight text-primary">
            Mistique Journey
          </Link>
          <Button size="sm" asChild>
            <a href="https://forms.gle/F9YJPNvw18MZGPai7" target="_blank" rel="noopener noreferrer">
              Begin Your Journey
            </a>
          </Button>
        </div>
      </nav>

      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-xl"
          >
            Mistiq Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-light mb-4 text-white/90"
          >
            A shamanic breath and body experience
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg font-light mb-10 text-white/80 max-w-2xl mx-auto"
          >
            A hands-on guided process of breathing into the body, in a manner that allows deep physical and emotional release
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-white/90 h-12 px-10 rounded-full font-bold shadow-xl" asChild>
              <a href="https://forms.gle/F9YJPNvw18MZGPai7" target="_blank" rel="noopener noreferrer">
                Begin Your Journey
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl font-serif font-bold text-center">The Mistiq Journey Experience</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              The Mistiq Journey is a shamanic breath and body experience. It is a 3-hour hands-on guided experience designed to enable deep physical and mental transformation in the body.
            </p>
            <p>
              The Journey is a structured set of activities which encourage the participant to focus their breath on opening all the muscles that hold tension and block energetic flow. This process allows participants to progressively deepen their mental clarity and emotional regulation, while enabling both deep physical relaxation and invigoration.
            </p>
            <p>
              For hands-on elements of the Journey, the practitioner guides the breath of the participant through touch, while the participant guides the practitioner through hand communications. This system promotes the delivery of nothing more or less than what is best aligned with the needs of the participant at any given time.
            </p>
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-serif font-bold text-center">Elements of the Journey</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            The Mistiq Journey combines various therapeutic elements to create a transformative experience
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeyElements.map((element, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border hover-elevate"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={element.image} alt={element.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-bold text-foreground mb-1">{element.title}</h4>
                  <p className="text-sm text-muted-foreground">{element.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-8 bg-white p-8 md:p-12 rounded-3xl border">
          <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-md mb-6">
            <img src={greetingsImage} alt="Greeting" className="w-full h-auto object-cover" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-center">What Others Have Experienced</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.blockquote 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-4 border-primary/30 pl-6 py-2"
              >
                <p className="text-muted-foreground italic leading-relaxed">"{testimonial.text}"</p>
                <footer className="mt-3 text-sm font-medium text-primary">
                  — {testimonial.author} ({testimonial.date})
                </footer>
              </motion.blockquote>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://breth.yolasite.com/?fbclid=IwAR2nS4CzaeXWXai_fSOPhBe5Y2EN1rmpViEpwx5K8oLsO41ENxLhrQuU0bs" target="_blank" rel="noopener noreferrer">
                Read More Testimonials
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://vimeo.com/showcase/4027790" target="_blank" rel="noopener noreferrer">
                Watch Video Testimonials
              </a>
            </Button>
          </div>
        </section>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-serif font-bold">The Journey Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience a carefully structured process designed to guide you through transformation
            </p>
          </div>
          <div className="space-y-16">
            {phases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
                  <img src={phase.image} alt={phase.title} className="w-full h-auto object-cover" />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-primary">{phase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                  {phase.detail && (
                    <p className="text-muted-foreground leading-relaxed text-sm">{phase.detail}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-8 bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/10">
          <h2 className="text-3xl font-serif font-bold text-center">Treatment Overview</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            The Mistiq Journey protocol is inspired by and fuses techniques from diverse sources
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {treatments.map((treatment, i) => (
              <div key={i} className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                {treatment}
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto pt-4">
            For hands-on elements, the practitioner guides your breath with touch while you communicate through hand signals. This ensures you receive exactly what your body needs.
          </p>
        </section>

        <section className="space-y-8 bg-white p-8 md:p-12 rounded-3xl border">
          <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-md mb-6">
            <img src={greetingsImage} alt="Greeting" className="w-full h-auto object-cover" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-center">Ready to Begin Your Journey?</h2>
          <p className="text-center text-muted-foreground">
            Take the first step toward transformation by completing our intake form.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="h-12 px-12 rounded-full font-bold" asChild>
              <a href="https://forms.gle/F9YJPNvw18MZGPai7" target="_blank" rel="noopener noreferrer">
                Complete Intake Survey
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Contact Rahul @ <a href="tel:+14242341750" className="text-primary hover:underline">+1 (424) 234-1750</a>
            </p>
            <p className="text-sm text-muted-foreground">
              Visit <a href="https://alpacaplayhouse.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The Austin Alpaca Playhouse</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t bg-muted/5 text-center text-muted-foreground">
        <div className="max-w-2xl mx-auto px-6 space-y-2">
          <p className="text-sm font-sans font-bold text-primary">Mistiq Journey</p>
          <p className="text-[10px] font-light">
            <a href="https://alpacaplayhouse.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Alpaca Playhouse</a> @ Austin, Texas USA
          </p>
          <p className="text-[8px] uppercase tracking-widest opacity-40 pt-2">© 2026 Mistiq Journey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
