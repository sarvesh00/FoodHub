/**
 * ONE FILE FOR THE BRAND.
 * Renaming the brand, changing colours, the WhatsApp number or switching
 * ordering on are all one-line changes in this file.
 */
export const site = {
  // ---- Brand ----
  brandName: 'Modern Rasoi',
  // Brand name written in each script. Delete a line to fall back to brandName.
  brandNameLocal: {
    hi: 'मॉडर्न रसोई',
    mr: 'मॉडर्न रसोई',
    gu: 'મોડર્ન રસોઈ',
  } as Record<string, string>,

  tagline: {
    en: 'Traditional taste, modern convenience',
    hi: 'पारंपरिक स्वाद, आधुनिक सुविधा',
    mr: 'पारंपरिक चव, आधुनिक सोय',
    gu: 'પરંપરાગત સ્વાદ, આધુનિક સગવડ',
  },
  description: {
    en: 'Modern Rasoi makes ready-to-cook mixes in Mumbai, starting with methi and palak paratha mixes. Just add water, knead and cook. Home delivery in Mahim, Dadar and nearby areas.',
    hi: 'मॉडर्न रसोई मुंबई में रेडी-टू-कुक मिक्स बनाती है, शुरुआत मेथी और पालक पराठा मिक्स से। बस पानी डालें, गूंधें और सेकें। माहिम, दादर और आसपास होम डिलीवरी।',
    mr: 'मॉडर्न रसोई मुंबईत रेडी-टू-कुक मिक्स बनवते, सुरुवात मेथी आणि पालक पराठा मिक्सने. फक्त पाणी घाला, मळा आणि भाजा. माहीम, दादर आणि जवळच्या भागात घरपोच डिलिव्हरी.',
    gu: 'મોડર્ન રસોઈ મુંબઈમાં રેડી-ટુ-કુક મિક્સ બનાવે છે, શરૂઆત મેથી અને પાલક પરાઠા મિક્સથી. ફક્ત પાણી ઉમેરો, લોટ બાંધો અને શેકો. માહિમ, દાદર અને આસપાસ હોમ ડિલિવરી.',
  },

  // ---- Switches ----
  // Shows a "sample site" banner. Turn off once real details are in.
  demoMode: true,
  // false = "coming soon / notify me" mode. Needs fssaiNumber before it can be true.
  orderingEnabled: false,
  // Lets Google index the site. Keep false while the content is placeholder.
  allowIndexing: false,
  // Show prices while in coming-soon mode.
  showPrices: true,

  // ---- Compliance ----
  // 14-digit FSSAI registration number. Shown in the footer and on product pages.
  fssaiNumber: '',

  // ---- Contact ----
  // International format, digits only, e.g. '919812345678'.
  // Left empty, WhatsApp opens and asks the customer to pick a contact (safe for testing).
  whatsappNumber: '',
  phoneDisplay: '',
  instagram: '', // handle without @
  email: '',
  googleBusinessProfileUrl: '',

  // ---- Look ----
  colors: {
    primary: '#2f5d3a', // methi green
    accent: '#d9982b', // ghee / turmeric
    ink: '#2a211b', // text
    paper: '#fbf6ec', // background
    tawa: '#34302d', // dark sections
  },

  // ---- Location & delivery ----
  location: {
    area: 'Mahim, Mumbai',
    city: 'Mumbai',
    region: 'Maharashtra',
    postalCode: '400016',
    country: 'IN',
  },
  delivery: {
    // Pincodes we deliver to ourselves (Phase 1). Edit freely.
    pincodes: {
      '400016': 'Mahim',
      '400028': 'Dadar West / Shivaji Park',
      '400014': 'Dadar East',
      '400019': 'Matunga',
      '400025': 'Prabhadevi',
    } as Record<string, string>,
    feeRupees: 0,
    freeAboveRupees: 0, // 0 = no free-delivery threshold shown
    minOrderRupees: 0,
  },

  // ---- Analytics (optional, privacy-friendly) ----
  // Sign up at goatcounter.com and put your code here, e.g. 'modernrasoi'.
  analytics: {
    goatcounterCode: '',
  },
};

// Safety check: the build fails if ordering is switched on without an FSSAI number.
if (site.orderingEnabled && !/^\d{14}$/.test(site.fssaiNumber)) {
  throw new Error('site.config.ts: orderingEnabled is true but fssaiNumber is not a 14-digit FSSAI number.');
}
