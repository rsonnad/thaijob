import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/Hero_Image_-_StudioShot_1768660117735.jpg";
import surveyImage from "@assets/Survey_1768660145084.jpg";
import greetingsImage from "@assets/greetings_1768660212215.jpg";
import breathworkImage from "@assets/breathwork_1768660221101.jpg";
import thaiYogaImage from "@assets/Thai_Yoga_Massage_1768660639595.jpg";
import somaticsImage from "@assets/Somatics_1768660991786.jpg";
import saunaTubs from "@assets/Saunatubs_1768657655707.png";
import skyTreatment from "@assets/sky_treatment_1768657655707.jpg";
import icebathImage from "@assets/Icebath_1768661286594.jpg";
import oilMassageImage from "@assets/oil_massage_1768661744672.jpg";
import saunaSitImage from "@assets/Sauna_Sit_1768661809468.jpg";
import windingDownImage from "@assets/windingdown_1768661823894.jpg";
import windDownImage from "@assets/Wind_down_1768662069089.jpg";
import tranceModeImage from "@assets/trancemode_1768664468090.jpg";
import crossLeggedZenImage from "@assets/cross_legged_zen_1768684688620.jpg";

const journeyElements = [
  { title: "แบบสอบถามออนไลน์", description: "เตรียมความพร้อมเฉพาะบุคคลก่อนเริ่มต้น", image: surveyImage },
  { title: "ทักทายและนั่งสมาธิ", description: "ฝึกสมาธิเพื่อเริ่มต้นการเดินทาง", image: greetingsImage },
  { title: "การหายใจแบบสมาธิ", description: "เทคนิคการหายใจเพื่อการเปลี่ยนแปลง", image: breathworkImage },
  { title: "โยคะช่วยเหลือ", description: "การนำทางอย่างอ่อนโยนผ่านท่าทาง", image: thaiYogaImage },
  { title: "นวดแผนไทยดั้งเดิม", description: "เทคนิคการรักษาโบราณเพื่อคลายความตึงเครียด", image: skyTreatment },
  { title: "ซาวน่า", description: "การบำบัดด้วยความร้อนเพื่อขับสารพิษ", image: saunaSitImage },
  { title: "อาบน้ำเย็น", description: "การแช่น้ำเย็นเพื่อกระตุ้นร่างกาย", image: icebathImage },
  { title: "นวดน้ำมัน", description: "การนวดผ่อนคลายด้วยน้ำมันบำบัด", image: oilMassageImage },
  { title: "พักผ่อนและผสานรวม", description: "สิ้นสุดการเดินทางอย่างสงบ", image: crossLeggedZenImage },
];

const testimonials = [
  {
    text: "ราหุลเป็นหนึ่งในนักนวดที่ดีที่สุดที่ฉันเคยพบมา เขาเข้าใจร่างกายมนุษย์อย่างลึกซึ้ง และสามารถอ่านได้ว่าร่างกายฉันต้องการอะไร Mystic Journey ทำให้รู้สึกเหมือนได้รับประสบการณ์ที่ออกแบบมาเฉพาะตัว มันสมบูรณ์แบบ รักษา และมหัศจรรย์มาก",
    author: "Mariana Mendes Amarante",
    date: "2024-02-29"
  },
  {
    text: "การนวดที่ดีที่สุดเท่าที่เคยมีมา รักษา ผ่อนคลาย รู้สึกเหมือนมีร่างกายใหม่ในวันรุ่งขึ้น!",
    author: "Vandana Hart",
    date: "2020-03-04"
  },
  {
    text: "ราหุลเป็นหนึ่งในศิลปินการรักษาที่อ่อนโยนและเปี่ยมด้วยความเมตตาที่ฉันเคยได้ร่วมงานด้วย ฉันรู้สึกสดชื่นและได้รับการหล่อเลี้ยงทุกครั้ง แนะนำอย่างยิ่ง!",
    author: "Hannah Marie Muse",
    date: "2020-03-05"
  },
  {
    text: "ราหุลเหลือเชื่อมาก! เมื่อถึงการนวดและการทำงานกับร่างกาย เขาละเอียดมาก—การผสมผสานที่ลงตัวระหว่างแรงกดลึกและการผ่อนคลายลึก ฉันรู้สึกเหมือนคนใหม่: สดชื่นและมีความสุข",
    author: "Nicole Goddard",
    date: "2020-03-29"
  },
  {
    text: "ฉันพูดไม่ได้เพียงพอว่าราหุลเหลือเชื่อแค่ไหน ไม่มีอะไรเทียบได้กับการเปลี่ยนแปลงและความสดชื่นที่ฉันรู้สึก—ทั้งทางร่างกายและจิตใจ—หลังจากเซสชันเดียวกับเขา ขอบคุณที่อยู่ในชีวิตฉัน!",
    author: "Sophia Rose",
    date: "2019-10-28"
  },
];

const phases = [
  {
    title: '"การต่อสายดิน" - ระยะที่ 1: 30 นาที',
    description: "เริ่มต้นการเดินทางด้วยการฝึกสมาธิที่ช่วยให้คุณมาถึงร่างกายอย่างเต็มที่ ผ่านการทำสมาธิและการฝึกความตระหนักรู้อย่างอ่อนโยน",
    detail: "ระยะนี้กำหนดโทนสำหรับประสบการณ์ทั้งหมดของคุณ ช่วยให้คุณทิ้งความเครียดประจำวันและเชื่อมต่อกับลมหายใจและร่างกาย",
    image: greetingsImage
  },
  {
    title: '"โซมาติกส์" - ระยะที่ 2: สูงสุด 3 ชั่วโมง',
    description: "การทำงานเปลี่ยนแปลงหลักเกิดขึ้นในระยะนี้ ผ่านการผสมผสานของการหายใจ โยคะช่วยเหลือ การนวด และการทำงานพลังงาน",
    detail: "ผู้ปฏิบัติจะนำทางคุณผ่านกระบวนการนี้ด้วยความเอาใจใส่ ตอบสนองต่อความต้องการเฉพาะของร่างกายคุณ",
    image: somaticsImage
  },
  {
    title: '"ผ่อนคลาย" - ระยะที่ 3: 30 นาที',
    description: "เมื่อการเดินทางสิ้นสุด ระยะนี้ช่วยให้คุณผสานประสบการณ์ เทคนิคเย็น การพักผ่อน และการทำงานพลังงานละเอียด",
    detail: "การเปลี่ยนผ่านนี้ช่วยให้ร่างกายจดจำและรักษาประโยชน์จากการทำงานลึกซึ้ง",
    image: tranceModeImage
  },
  {
    title: '"การผสานรวมอิสระ" - ระยะที่ 4: 1 ชั่วโมง',
    description: "ชั่วโมงสุดท้ายอุทิศให้กับการผสานรวม อาจรวมถึงการสนทนาอ่อนโยน การแสดงออกสร้างสรรค์ หรือการไตร่ตรองเงียบ",
    detail: "",
    image: windingDownImage
  },
];

const treatments = [
  "โยคะไทยและการนวดแบบอื่นๆ",
  "หฐโยคะแบบดั้งเดิม",
  "การหายใจและการฝึกหายใจ",
  "การฝึกสมาธิ",
  "การบำบัดด้วยความร้อนและความเย็น",
  "การบำบัดด้วยเสียง",
  "การบำบัดกะโหลกศีรษะและกระดูกสันหลัง",
  "พิธีกรรมยาแผนพื้นบ้าน",
];

export default function MistiqueJourneyTH() {
  return (
    <div className="min-h-screen w-full bg-[#faf9f6]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="flex justify-between items-center px-6 py-4 md:px-12 max-w-7xl mx-auto w-full">
          <Link href="/th/mistiqj" className="text-xl font-serif font-bold tracking-tight text-primary">
            Mistique Journey
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
              <Link href="/th" className="hover:text-primary transition-colors">งาน</Link>
              <a href="https://forms.gle/FXdjKAYgnXpCRHnf8" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">สมัครงาน</a>
              <a href="https://forms.gle/2HVxMaWo2K5duALv5" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">แนะนำเพื่อน</a>
            </div>
            <Button size="sm" asChild>
              <a href="https://forms.gle/F9YJPNvw18MZGPai7" target="_blank" rel="noopener noreferrer">
                เริ่มต้นการเดินทาง
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-2 font-medium"
              asChild
            >
              <Link href="/mistiqj">
                <span className="text-base">🇺🇸</span>
                <span>EN</span>
              </Link>
            </Button>
          </div>
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
            Mistique Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-light mb-4 text-white/90"
          >
            ประสบการณ์การหายใจและร่างกายแบบชามาน
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg font-light mb-10 text-white/80 max-w-2xl mx-auto"
          >
            กระบวนการนำทางแบบลงมือทำ ของการหายใจเข้าสู่ร่างกาย ในลักษณะที่ช่วยให้เกิดการปลดปล่อยทางกายภาพและอารมณ์อย่างลึกซึ้ง
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-white/90 h-12 px-10 rounded-full font-bold shadow-xl" asChild>
              <a href="https://forms.gle/F9YJPNvw18MZGPai7" target="_blank" rel="noopener noreferrer">
                เริ่มต้นการเดินทาง
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl font-serif font-bold text-center">ประสบการณ์ Mistique Journey</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              Mistique Journey คือประสบการณ์การหายใจและร่างกายแบบชามาน เป็นประสบการณ์ลงมือทำ 3 ชั่วโมงที่ออกแบบมาเพื่อให้เกิดการเปลี่ยนแปลงทางกายภาพและจิตใจอย่างลึกซึ้ง
            </p>
            <p>
              การเดินทางนี้คือชุดกิจกรรมที่มีโครงสร้าง ซึ่งส่งเสริมให้ผู้เข้าร่วมโฟกัสการหายใจเพื่อเปิดกล้ามเนื้อทุกส่วนที่เก็บความตึงเครียดและปิดกั้นการไหลของพลังงาน กระบวนการนี้ช่วยให้ผู้เข้าร่วมค่อยๆ ลึกซึ้งความชัดเจนทางจิตใจและการควบคุมอารมณ์
            </p>
            <p>
              สำหรับองค์ประกอบลงมือทำ ผู้ปฏิบัตินำทางการหายใจของผู้เข้าร่วมผ่านการสัมผัส ขณะที่ผู้เข้าร่วมนำทางผู้ปฏิบัติผ่านการสื่อสารด้วยมือ ระบบนี้ส่งเสริมการให้บริการที่ไม่มากไม่น้อยกว่าสิ่งที่ตรงกับความต้องการของผู้เข้าร่วม
            </p>
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-serif font-bold text-center">องค์ประกอบของการเดินทาง</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Mistique Journey ผสมผสานองค์ประกอบการบำบัดหลากหลายเพื่อสร้างประสบการณ์เปลี่ยนแปลง
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
            <img src={windDownImage} alt="ประสบการณ์ผ่อนคลาย" className="w-full h-auto object-cover" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-center">สิ่งที่ผู้อื่นได้สัมผัส</h2>
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
                อ่านรีวิวเพิ่มเติม
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://vimeo.com/showcase/4027790" target="_blank" rel="noopener noreferrer">
                ดูวิดีโอรีวิว
              </a>
            </Button>
          </div>
        </section>

        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-serif font-bold">กระบวนการการเดินทาง</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              สัมผัสกระบวนการที่มีโครงสร้างอย่างดี ออกแบบมาเพื่อนำทางคุณผ่านการเปลี่ยนแปลง
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
          <h2 className="text-3xl font-serif font-bold text-center">ภาพรวมการรักษา</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            โปรโตคอล Mistique Journey ได้รับแรงบันดาลใจและผสานเทคนิคจากแหล่งที่หลากหลาย
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
            สำหรับองค์ประกอบลงมือทำ ผู้ปฏิบัตินำทางการหายใจของคุณด้วยการสัมผัส ขณะที่คุณสื่อสารผ่านสัญญาณมือ เพื่อให้แน่ใจว่าคุณได้รับสิ่งที่ร่างกายต้องการ
          </p>
        </section>

        <section className="space-y-8 bg-white p-8 md:p-12 rounded-3xl border">
          <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-md mb-6">
            <img src={saunaTubs} alt="ซาวน่าและอ่าง" className="w-full h-auto object-cover" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-center">พร้อมเริ่มต้นการเดินทางของคุณหรือยัง?</h2>
          <p className="text-center text-muted-foreground">
            ก้าวแรกสู่การเปลี่ยนแปลงโดยกรอกแบบฟอร์มรับเข้า
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="h-12 px-12 rounded-full font-bold" asChild>
              <a href="https://forms.gle/F9YJPNvw18MZGPai7" target="_blank" rel="noopener noreferrer">
                กรอกแบบสอบถาม
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              ติดต่อ: <a href="mailto:alpacaplayhouse@gmail.com" className="text-primary hover:underline">alpacaplayhouse@gmail.com</a>
            </p>
            <p className="text-sm text-muted-foreground">
              เยี่ยมชม <a href="https://alpacaplayhouse.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The Austin Alpaca Playhouse</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t bg-muted/5 text-center text-muted-foreground">
        <div className="max-w-2xl mx-auto px-6 space-y-2">
          <p className="text-sm font-sans font-bold text-primary">Mistique Journey</p>
          <p className="text-[10px] font-light">
            <a href="https://alpacaplayhouse.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Alpaca Playhouse</a> @ ออสติน เท็กซัส สหรัฐอเมริกา
          </p>
          <p className="text-[8px] uppercase tracking-widest opacity-40 pt-2">© 2026 Mistique Journey. สงวนลิขสิทธิ์.</p>
        </div>
      </footer>
    </div>
  );
}
