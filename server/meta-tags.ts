const englishMeta = {
  lang: "en",
  title: "Mistique Journey - Global Traveling Massage Therapist Job Opening",
  description: "Job Opening: Global Traveling Massage Therapist & Wellness Ambassador at Alpaca Playhouse, Austin Texas USA. 45,000 THB/month plus travel expenses.",
  ogTitle: "Mistique Journey - Global Traveling Massage Therapist",
  ogDescription: "Immediate opportunity for a travel-ready massage therapist. 45,000 THB/month plus all travel and lodging expenses.",
};

const thaiMeta = {
  lang: "th",
  title: "Mistique Journey - รับสมัครนักนวดบำบัดเดินทางทั่วโลก",
  description: "รับสมัครงาน: นักนวดบำบัดเดินทางทั่วโลก & Wellness Ambassador ที่ Alpaca Playhouse ออสติน เท็กซัส สหรัฐอเมริกา เงินเดือน 45,000 บาท พร้อมค่าเดินทาง",
  ogTitle: "Mistique Journey - รับสมัครนักนวดบำบัดเดินทางทั่วโลก",
  ogDescription: "โอกาสทันที สำหรับนักนวดบำบัดพร้อมเดินทาง เงินเดือน 45,000 บาท พร้อมค่าเดินทางและที่พักทั้งหมด",
};

export function injectMetaTags(html: string, url: string): string {
  const isThai = url.startsWith("/th");
  const meta = isThai ? thaiMeta : englishMeta;

  html = html.replace('<html lang="en">', `<html lang="${meta.lang}">`);
  
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${meta.title}</title>`
  );
  
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${meta.description}" />`
  );
  
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${meta.ogTitle}" />`
  );
  
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${meta.ogDescription}" />`
  );
  
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${meta.ogTitle}" />`
  );
  
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${meta.ogDescription}" />`
  );

  return html;
}
