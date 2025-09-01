// lang.js - Full multilingual switcher for Eiriva
(function() {
  const phrases = {
    // Header nav
    "Services": { en: "Services", fr: "Services", ar: "الخدمات" },
    "Procedures": { en: "Procedures", fr: "Procédures", ar: "الإجراءات" },
    "Pricing": { en: "Pricing", fr: "Tarifs", ar: "الأسعار" },
    "Hotels": { en: "Hotels", fr: "Hôtels", ar: "الفنادق" },
    "Clinics": { en: "Clinics", fr: "Cliniques", ar: "العيادات" },
    "Reviews": { en: "Reviews", fr: "Avis", ar: "التقييمات" },
    "Get a Quote": { en: "Get a Quote", fr: "Obtenir un devis", ar: "احصل على عرض" },

    // Hero
    "Tunisia • Medical Travel • End‑to‑End Care": { en: "Tunisia • Medical Travel • End‑to‑End Care", fr: "Tunisie • Voyage médical • Prise en charge complète", ar: "تونس • سياحة طبية • رعاية شاملة" },
    "Relax. We organize your whole medical trip — safely, discreetly, and affordably.": { en: "Relax. We organize your whole medical trip — safely, discreetly, and affordably.", fr: "Détendez-vous. Nous organisons tout votre séjour médical — en toute sécurité, discrétion et à prix abordable.", ar: "اهدأ. نحن نُنَظِم رحلتك الطبية بالكامل — بأمان، وبسرية، وبأسعار معقولة." },
    "From clinic matchmaking and surgeon selection to hotel bookings and airport transfers, Eiriva coordinates everything so you can focus on recovery.": { en: "From clinic matchmaking and surgeon selection to hotel bookings and airport transfers, Eiriva coordinates everything so you can focus on recovery.", fr: "De la sélection de la clinique et du chirurgien à la réservation d'hôtel et aux transferts aéroport, Eiriva coordonne tout pour que vous puissiez vous concentrer sur votre rétablissement.", ar: "من مطابقة العيادة واختيار الجراح إلى حجز الفنادق والتنقل من وإلى المطار، Eiriva تُنسق كل شيء لتتمكن من التركيز على التعافي." },
    "Board‑certified surgeons": { en: "Board‑certified surgeons", fr: "Chirurgiens certifiés", ar: "جراحون معتمدون" },
    "Partner hotels": { en: "Partner hotels", fr: "Hôtels partenaires", ar: "فنادق شريكة" },
    "Private transfers": { en: "Private transfers", fr: "Transferts privés", ar: "نقل خاص" },
    "After‑care support": { en: "After‑care support", fr: "Support post‑opératoire", ar: "دعم ما بعد الرعاية" },
    "Quick Quote": { en: "Quick Quote", fr: "Devis rapide", ar: "عرض سريع" },
    "Tell us what you need — we’ll reply with an indicative plan and price breakdown.": { en: "Tell us what you need — we’ll reply with an indicative plan and price breakdown.", fr: "Dites-nous ce dont vous avez besoin — nous répondrons avec un plan indicatif et un détail des prix.", ar: "أخبرنا بما تحتاجه — سنرد عليك بخطة تقريبية وتفصيل للأسعار." },

    // Form placeholders
    "Full name": { en: "Full name", fr: "Nom complet", ar: "الاسم الكامل" },
    "Phone / WhatsApp (+216 …)": { en: "Phone / WhatsApp (+216 …)", fr: "Téléphone / WhatsApp (+216 …)", ar: "الهاتف / واتساب (+216 …)" },
    "Email": { en: "Email", fr: "E-mail", ar: "البريد الإلكتروني" },
    "Select a procedure": { en: "Select a procedure", fr: "Sélectionnez une procédure", ar: "اختر إجراءً" },
    "Tell us your goals, dates, and any medical notes": { en: "Tell us your goals, dates, and any medical notes", fr: "Indiquez vos objectifs, dates et notes médicales.", ar: "أخبرنا بأهدافك، التواريخ، وأي ملاحظات طبية." },
    "Request My Plan": { en: "Request My Plan", fr: "Demander mon plan", ar: "اطلب خطتي" },

    // Services cards
    "Our Services": { en: "Our Services", fr: "Nos Services", ar: "خدماتنا" },
    "Transparent coordination before, during, and after your medical journey.": { en: "Transparent coordination before, during, and after your medical journey.", fr: "Coordination transparente avant, pendant et après votre séjour médical.", ar: "تنسيق شفاف قبل وأثناء وبعد رحلتك الطبية." },
    "Médecine générale et spécialisée": { en: "General & Specialized Medicine", fr: "Médecine générale et spécialisée", ar: "الطب العام والمتخصص" },
    "Chirurgie": { en: "Surgery", fr: "Chirurgie", ar: "الجراحة" },
    "Services spécialisés": { en: "Specialized Services", fr: "Services spécialisés", ar: "الخدمات المتخصصة" },
    "Services d'urgence et soins intensifs": { en: "Emergency & ICU Services", fr: "Services d'urgence et soins intensifs", ar: "خدمات الطوارئ والعناية المركزة" },
    "Plateaux techniques": { en: "Technical Facilities", fr: "Plateaux techniques", ar: "المرافق التقنية" },

    // Procedures / operations cards
    "Featured Procedures": { en: "Featured Procedures", fr: "Procédures phares", ar: "الإجراءات البارزة" },
    "Rhinoplasty": { en: "Rhinoplasty", fr: "Rhinoplastie", ar: "تجميل الأنف" },
    "Liposuction (multi‑zone)": { en: "Liposuction (multi‑zone)", fr: "Liposuccion (multi‑zone)", ar: "شفط الدهون (متعدد المناطق)" },
    "Abdominoplasty": { en: "Abdominoplasty", fr: "Abdominoplastie", ar: "شد البطن" },
    "Breast augmentation": { en: "Breast augmentation", fr: "Augmentation mammaire", ar: "تكبير الثدي" },
    "Facelift": { en: "Facelift", fr: "Lifting du visage", ar: "شد الوجه" },
    "Intimate surgery": { en: "Intimate surgery", fr: "Chirurgie intime", ar: "جراحة تجميلية تناسلية" },
    
    // Pricing table headings
    "Tarifs transparents": { en: "Transparent Pricing", fr: "Tarifs transparents", ar: "أسعار واضحة" },
    "Intervention": { en: "Procedure", fr: "Intervention", ar: "الإجراء" },
    "À partir de": { en: "From", fr: "À partir de", ar: "من" },
    "Séjour": { en: "Stay", fr: "Séjour", ar: "الإقامة" },
    "Notes": { en: "Notes", fr: "Notes", ar: "ملاحظات" },

    // Clinics
    "Clinics We Trust": { en: "Clinics We Trust", fr: "Cliniques de confiance", ar: "العيادات التي نثق بها" },
    "Clinique Le Bardo": { en: "Clinique Le Bardo", fr: "Clinique Le Bardo", ar: "مستشفى الباردو" },
    
    // Hotels
    "Partner Hotels": { en: "Partner Hotels", fr: "Hôtels partenaires", ar: "فنادق شريكة" },
    
    // Testimonials
    "Patient Reviews": { en: "Patient Reviews", fr: "Avis des patients", ar: "تجارب المرضى" },
    
    // FAQ
    "FAQ": { en: "FAQ", fr: "FAQ", ar: "الأسئلة الشائعة" },

    // Contact / Legal
    "Contact & Legal": { en: "Contact & Legal", fr: "Contact & Mentions légales", ar: "تواصل وبيانات قانونية" },
    "Write to us": { en: "Write to us", fr: "Écrivez-nous", ar: "اكتب لنا" },
    "Legal notice": { en: "Legal notice", fr: "Mentions légales", ar: "إشعار قانوني" },
    "Message us": { en: "Message us", fr: "Envoyez-nous un message", ar: "أرسل لنا رسالة" },
    "Your name": { en: "Your name", fr: "Votre nom", ar: "اسمك" },
    "Your email": { en: "Your email", fr: "Votre e-mail", ar: "بريدك الإلكتروني" },
    "Your message": { en: "Your message", fr: "Votre message", ar: "رسالتك" }
    // Add more here as needed
  };

  const switchLang = (lang) => {
    // Update text nodes
    Object.keys(phrases).forEach(key => {
      const elems = Array.from(document.querySelectorAll('*')).filter(el => el.childNodes[0] && el.childNodes[0].nodeType === 3 && el.textContent.trim() === key);
      elems.forEach(el => el.textContent = phrases[key][lang] || key);
    });

    // Update placeholders
    Object.keys(phrases).forEach(key => {
      const inputs = document.querySelectorAll(`input[placeholder="${key}"], textarea[placeholder="${key}"], select[placeholder="${key}"]`);
      inputs.forEach(el => el.placeholder = phrases[key][lang] || key);
    });

    // RTL support
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  };

  // Language selector
  const selector = document.getElementById('languageSwitcher');
  selector.addEventListener('change', (e) => switchLang(e.target.value));

  // init default language
  switchLang(selector.value);
})();
