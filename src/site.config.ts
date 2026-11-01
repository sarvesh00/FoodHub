/**
 * ONE FILE FOR THE BRAND.
 * Renaming the brand, changing colours, the WhatsApp number or switching
 * ordering on are all one-line changes in this file.
 */
export const site = {
  // ---- Brand (PLACEHOLDER until the final name is chosen) ----
  brandName: 'Tawa Kitchen',
  // Brand name written in each script. Delete a line to fall back to brandName.
  brandNameLocal: {
    hi: 'तवा किचन',
    mr: 'तवा किचन',
    gu: 'તવા કિચન',
  } as Record<string, string>,

  tagline: {
    en: 'Ready-to-cook paratha flours from a Mumbai kitchen',
    hi: 'मुंबई की रसोई से, तैयार पराठा आटा',
    mr: 'मुंबईच्या स्वयंपाकघरातून, तयार पराठा पीठ',
    gu: 'મુંબઈના રસોડેથી, તૈયાર પરાઠા લોટ',
  },
  description: {
    en: 'Ready-to-cook methi and palak paratha flour mixes. Just add water, knead and cook. Home delivery in Mahim, Dadar and nearby Mumbai areas.',
    hi: 'तैयार मेथी और पालक पराठा आटा मिक्स। बस पानी डालें, गूंधें और सेकें। माहिम, दादर और आसपास के मुंबई इलाकों में होम डिलीवरी।',
    mr: 'तयार मेथी आणि पालक पराठा पीठ मिक्स. फक्त पाणी घाला, मळा आणि भाजा. माहीम, दादर आणि जवळच्या मुंबई भागात घरपोच डिलिव्हरी.',
    gu: 'તૈયાર મેથી અને પાલક પરાઠા લોટ મિક્સ. ફક્ત પાણી ઉમેરો, લોટ બાંધો અને શેકો. માહિમ, દાદર અને આસપાસના મુંબઈ વિસ્તારોમાં હોમ ડિલિવરી.',
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
  // Sign up at goatcounter.com and put your code here, e.g. 'tawakitchen'.
  analytics: {
    goatcounterCode: '',
  },
};

// Safety check: the build fails if ordering is switched on without an FSSAI number.
if (site.orderingEnabled && !/^\d{14}$/.test(site.fssaiNumber)) {
  throw new Error('site.config.ts: orderingEnabled is true but fssaiNumber is not a 14-digit FSSAI number.');
}
