/**
 * ONE FILE FOR THE BRAND.
 * Source of truth for brand decisions: brand/suchef-brand-brief.md in the FoodHub project.
 * Renaming, colours, WhatsApp number, handles and switches are one-line changes here.
 */
export const site = {
  // ---- Brand ----
  brandName: 'SuChef', // always "SuChef": capital S, capital C, one word
  legalName: 'SuChef Foods',
  // Script versions for running text. The Latin su·chef logo stays primary on every page.
  brandNameLocal: {
    hi: 'सुशेफ',
    mr: 'सुशेफ',
    gu: 'સુશેફ',
  } as Record<string, string>,

  // Primary tagline stays in English in every language, with a translated sub-line under it.
  tagline: 'You cook. We prep.',
  taglineSub: {
    en: '',
    hi: 'आप पकाइए, तैयारी हमारी।',
    mr: 'तुम्ही शिजवा, तयारी आमची.',
    gu: 'તમે રાંધો, તૈયારી અમારી.',
  },

  // SEO
  description: {
    en: 'SuChef makes ready-to-cook paratha mixes, tikki mixes and chilla mixes in Mumbai. We do the washing, chopping, drying and sprouting; you cook it fresh at home. Local delivery in Mahim and Dadar, with NRI shipping coming soon.',
    hi: 'सुशेफ मुंबई में रेडी-टू-कुक पराठा मिक्स, टिक्की मिक्स और चीला मिक्स बनाता है। धोना, काटना, सुखाना और अंकुरित करना हमारा; ताज़ा पकाना आपका। माहिम और दादर में लोकल डिलीवरी, NRI शिपिंग जल्द।',
    mr: 'सुशेफ मुंबईत रेडी-टू-कुक पराठा मिक्स, टिक्की मिक्स आणि चिला मिक्स बनवते. धुणे, चिरणे, वाळवणे आणि मोड आणणे आमचे; ताजे शिजवणे तुमचे. माहीम आणि दादरमध्ये लोकल डिलिव्हरी, NRI शिपिंग लवकरच.',
    gu: 'સુશેફ મુંબઈમાં રેડી-ટુ-કુક પરાઠા મિક્સ, ટિક્કી મિક્સ અને ચીલા મિક્સ બનાવે છે. ધોવાનું, સમારવાનું, સૂકવવાનું અને ફણગાવવાનું અમારું; તાજું રાંધવાનું તમારું. માહિમ અને દાદરમાં લોકલ ડિલિવરી, NRI શિપિંગ ટૂંક સમયમાં.',
  },
  keywords: {
    en: 'ready-to-cook paratha mix, methi paratha mix, tikki mix, chilla mix, homemade food, ready to cook Mumbai, Mahim, Dadar, NRI Indian food',
    hi: 'रेडी-टू-कुक पराठा मिक्स, मेथी पराठा मिक्स, टिक्की मिक्स, चीला मिक्स, घर का खाना, मुंबई, NRI',
    mr: 'रेडी-टू-कुक पराठा मिक्स, मेथी पराठा मिक्स, टिक्की मिक्स, चिला मिक्स, घरगुती जेवण, मुंबई, NRI',
    gu: 'રેડી-ટુ-કુક પરાઠા મિક્સ, મેથી પરાઠા મિક્સ, ટિક્કી મિક્સ, ચીલા મિક્સ, ઘરનું જમવાનું, મુંબઈ, NRI',
  },

  // ---- Switches ----
  demoMode: true, // "sample site" banner
  orderingEnabled: false, // false = coming soon / notify me. Needs fssaiNumber first.
  allowIndexing: false, // let Google index the site
  showPrices: true, // show prices once they are filled in
  // Clean-label badge ("No preservatives · Real ingredients · Just add water").
  // Keep false until the founder confirms every claim is true and FSSAI-compliant.
  cleanLabelConfirmed: false,

  // ---- Compliance ----
  // 14-digit FSSAI number. Nothing FSSAI-related is shown on the site while this is empty.
  fssaiNumber: '',

  // ---- Contact & social ----
  whatsappNumber: '', // digits only, e.g. '919812345678'. Empty = WhatsApp asks which contact.
  phoneDisplay: '',
  instagram: 'suchef.foods', // same handle on all platforms
  hashtag: 'SuChefSorted',
  email: '',
  googleBusinessProfileUrl: '',
  // Planned domain (not bought yet). See docs/custom-domain.md.
  plannedDomain: 'suchef.in',

  // ---- Look (brand palette) ----
  colors: {
    primary: '#3E6B2F', // methi green
    accent: '#E3A21A', // turmeric
    paper: '#FAF6EE', // off-white
    ink: '#2B2B2B', // charcoal
    tawa: '#2B2B2B', // dark sections
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
    pincodes: {
      '400016': 'Mahim',
      '400028': 'Dadar West / Shivaji Park',
      '400014': 'Dadar East',
      '400019': 'Matunga',
      '400025': 'Prabhadevi',
    } as Record<string, string>,
    feeRupees: 0,
    freeAboveRupees: 0,
    minOrderRupees: 0,
  },

  analytics: {
    goatcounterCode: '', // e.g. 'suchef'
  },
};

// Safety check: the build fails if ordering is switched on without an FSSAI number.
if (site.orderingEnabled && !/^\d{14}$/.test(site.fssaiNumber)) {
  throw new Error('site.config.ts: orderingEnabled is true but fssaiNumber is not a 14-digit FSSAI number.');
}
