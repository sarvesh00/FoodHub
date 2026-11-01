/**
 * Policy pages. DRAFTS in English only: other languages show this English text
 * with a note until translations are added (add `hi`, `mr`, `gu` keys to title/sections).
 * Have these reviewed by your CA or a lawyer before launch.
 */
import { site } from '../site.config';
import type { L10n } from '../lib/i18n';

type Section = { heading: string; paragraphs: string[] };
export type Policy = { slug: string; navKey: 'footer.shipping' | 'footer.refund' | 'footer.privacy' | 'footer.terms'; title: L10n; sections: L10n<Section[]> };

const brand = site.brandName;
const areas = Object.values(site.delivery.pincodes).join(', ');
const contactLine = 'Contact us on WhatsApp' + (site.email ? ` or email ${site.email}` : '') + '.';

export const policies: Policy[] = [
  {
    slug: 'shipping',
    navKey: 'footer.shipping',
    title: { en: 'Shipping & delivery', hi: 'शिपिंग और डिलीवरी', mr: 'शिपिंग आणि डिलिव्हरी', gu: 'શિપિંગ અને ડિલિવરી' },
    sections: {
      en: [
        { heading: 'Where we deliver', paragraphs: [`We currently deliver ourselves within these Mumbai areas: ${areas}. You can check your pincode on the Order page. If your area is not listed, message us and we will try to help.`] },
        { heading: 'When you will get your order', paragraphs: ['After you send your order on WhatsApp, we reply to confirm it and agree a delivery day and time. Most orders within our areas are delivered within 1–3 days.'] },
        { heading: 'Delivery charges', paragraphs: [site.delivery.feeRupees > 0 ? `Delivery costs ₹${site.delivery.feeRupees} per order${site.delivery.freeAboveRupees > 0 ? `, and is free for orders above ₹${site.delivery.freeAboveRupees}` : ''}.` : 'Delivery within our areas is currently free.'] },
        { heading: 'Outside Mumbai', paragraphs: ['We do not ship outside our delivery areas yet. Courier delivery across India is planned for later.'] },
      ],
    },
  },
  {
    slug: 'refund',
    navKey: 'footer.refund',
    title: { en: 'Refunds & returns', hi: 'रिफ़ंड और रिटर्न', mr: 'परतावा आणि रिटर्न', gu: 'રિફંડ અને રિટર્ન' },
    sections: {
      en: [
        { heading: 'Damaged or wrong items', paragraphs: ['If a pack arrives damaged, opened, or is not what you ordered, send us a photo on WhatsApp within 24 hours of delivery. We will replace it or refund you.'] },
        { heading: 'Food safety', paragraphs: ['Because these are food products, we cannot take back packs that have been opened, unless there is a quality problem.'] },
        { heading: 'Quality problems', paragraphs: ['If you are unhappy with the quality, tell us with the batch number printed on the pack. We take every report seriously.'] },
        { heading: 'How refunds are paid', paragraphs: ['Refunds are paid by UPI or bank transfer, usually within 3 working days of us agreeing the refund.'] },
        { heading: 'Contact', paragraphs: [contactLine] },
      ],
    },
  },
  {
    slug: 'privacy',
    navKey: 'footer.privacy',
    title: { en: 'Privacy policy', hi: 'गोपनीयता नीति', mr: 'गोपनीयता धोरण', gu: 'ગોપનીયતા નીતિ' },
    sections: {
      en: [
        { heading: 'What we collect', paragraphs: ['This website does not ask you to create an account and does not store your details. When you order, the details you type (name, address, pincode, notes) go straight into a WhatsApp message that you choose to send us.'] },
        { heading: 'How we use it', paragraphs: [`${brand} uses your name, phone number and address only to confirm and deliver your order and to contact you about it. We do not sell or share your details with anyone, except a delivery partner when one is needed to deliver your order.`] },
        { heading: 'Website analytics', paragraphs: ['We may use privacy-friendly analytics that count page visits without cookies and without identifying you.'] },
        { heading: 'Your choices', paragraphs: ['You can ask us at any time to delete your details from our WhatsApp chats and order records. ' + contactLine] },
      ],
    },
  },
  {
    slug: 'terms',
    navKey: 'footer.terms',
    title: { en: 'Terms of use', hi: 'उपयोग की शर्तें', mr: 'वापराच्या अटी', gu: 'ઉપયોગની શરતો' },
    sections: {
      en: [
        { heading: 'About these terms', paragraphs: [`These terms apply when you use this website or order from ${brand}.`] },
        { heading: 'Orders', paragraphs: ['An order is confirmed only after we reply to your WhatsApp message. Prices and availability can change, and we will tell you before confirming if anything has changed.'] },
        { heading: 'Payment', paragraphs: ['Payment is made in cash or by UPI on delivery.'] },
        { heading: 'Product information', paragraphs: ['We list ingredients and allergens for every product. Please read them carefully if you have a food allergy. The information on the pack is the final reference.'] },
        { heading: 'Contact', paragraphs: [contactLine] },
      ],
    },
  },
];
