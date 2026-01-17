import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-contact";
import { Navigation } from "@/components/Navigation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Home() {
  const mutation = useCreateContact();
  
  const form = useForm({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    })
  };

  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary/5">
      <Navigation />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        {/* Hero Section */}
        <section className="mb-24 md:mb-32">
          <motion.h1 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.95] tracking-tight mb-8"
          >
            Welcome<span className="text-primary/20">.</span>
          </motion.h1>
          
          <motion.div 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="w-24 h-1 bg-primary mb-12"
          />

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="prose prose-lg md:prose-xl prose-neutral font-sans text-muted-foreground"
          >
            <p className="leading-relaxed">
              We believe in the power of simplicity. In a world full of noise, clarity is a luxury. 
              Our mission is to strip away the unessential, revealing the core of what truly matters.
            </p>
          </motion.div>
        </section>

        {/* Text Content Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="space-y-8 text-lg md:text-xl leading-relaxed font-light text-foreground/80"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <blockquote className="pl-6 border-l-2 border-primary/20 italic font-serif text-2xl md:text-3xl text-primary my-12 py-2">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-secondary/30 p-8 md:p-12 rounded-2xl border border-border/50"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Get in touch</h2>
            <p className="text-muted-foreground mb-8">We'd love to hear your thoughts.</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="hello@example.com" 
                          className="bg-background border-border/50 focus:border-primary/50 h-12 text-lg transition-all" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us something..." 
                          className="bg-background border-border/50 focus:border-primary/50 min-h-[160px] text-lg resize-none transition-all" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={mutation.isPending}
                    className="w-full md:w-auto px-8 py-6 text-lg rounded-none md:rounded-lg font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </section>

        <footer className="mt-32 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground/60">
          <p>© {new Date().getFullYear()} Minimal Content. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
