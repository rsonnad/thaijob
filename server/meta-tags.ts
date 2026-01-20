import * as cheerio from "cheerio";

const BASE_URL = "https://therapistjob.replit.app";

const englishMeta = {
  lang: "en",
  url: BASE_URL + "/",
  title: "Mistique Journey - Global Traveling Massage Therapist Job Opening",
  description: "Job Opening: Global Traveling Massage Therapist & Wellness Ambassador at Alpaca Playhouse, Austin Texas USA. 45,000 THB/month plus travel expenses.",
  ogTitle: "Mistique Journey - Global Traveling Massage Therapist",
  ogDescription: "Immediate opportunity for a travel-ready massage therapist. 45,000 THB/month plus all travel and lodging expenses.",
  ogImage: BASE_URL + "/og-image.png",
};

const thaiMeta = {
  lang: "th",
  url: BASE_URL + "/th",
  title: "Mistique Journey - รับสมัครนักนวดบำบัดเดินทางทั่วโลก",
  description: "รับสมัครงาน: นักนวดบำบัดเดินทางทั่วโลก & Wellness Ambassador ที่ Alpaca Playhouse ออสติน เท็กซัส สหรัฐอเมริกา เงินเดือน 45,000 บาท พร้อมค่าเดินทาง",
  ogTitle: "Mistique Journey - รับสมัครนักนวดบำบัดเดินทางทั่วโลก",
  ogDescription: "โอกาสทันที สำหรับนักนวดบำบัดพร้อมเดินทาง เงินเดือน 45,000 บาท พร้อมค่าเดินทางและที่พักทั้งหมด",
  ogImage: BASE_URL + "/og-image.png",
};

export function injectMetaTags(html: string, url: string): string {
  const isThai = url.startsWith("/th");
  const meta = isThai ? thaiMeta : englishMeta;

  // Compute the actual URL from the request path
  const actualUrl = BASE_URL + url;

  const $ = cheerio.load(html);

  // Update HTML lang attribute
  $("html").attr("lang", meta.lang);

  // Update title
  $("title").text(meta.title);

  // Update meta description
  $('meta[name="description"]').attr("content", meta.description);

  // Update Open Graph tags
  $('meta[property="og:url"]').attr("content", actualUrl);
  $('meta[property="og:title"]').attr("content", meta.ogTitle);
  $('meta[property="og:description"]').attr("content", meta.ogDescription);
  $('meta[property="og:image"]').attr("content", meta.ogImage);

  // Update Twitter tags
  $('meta[name="twitter:title"]').attr("content", meta.ogTitle);
  $('meta[name="twitter:description"]').attr("content", meta.ogDescription);
  $('meta[name="twitter:image"]').attr("content", meta.ogImage);

  return $.html();
}
