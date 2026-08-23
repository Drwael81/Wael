/* ============================================================
   Lessons Data (data layer)
   مصدر الحقيقة الوحيد لكروت الدروس في lessons.html.
   لإضافة درس جديد: انسخ كائن جاهز وغيّر قيمه — الكارت يظهر تلقائيًا.

   الحقول:
     id      معرّف فريد (اسم الملف بدون .html)
     order   ترتيب الظهور
     status  "published" = يظهر ككارت فعلي | "draft" = متجاهل مؤقتًا
     icon    إيموجي كبير أعلى الكارت
     title   عنوان الدرس (زي ما هو في صفحة الدرس نفسها)
     desc    سطر وصف تحت العنوان
     cta     نص زر الدعوة (لو فاضي بيستخدم الافتراضي)
     href    رابط صفحة الدرس
     lang    لغة محتوى الدرس ("en" / "ar") — للفلترة مستقبلًا
   ============================================================ */

const lessonsData = [
  {
    id: "lesson-states-of-matter",
    order: 1,
    status: "published",
    icon: "🧊💧💨",
    title: "States of Matter & Their Properties",
    desc: "شرح مرئي تفاعلي (بالإنجليزي) عن الحالات الثلاث للمادة وخواصها، بالرسومات والتفاعلات.",
    cta: "ابدأ الدرس ←",
    href: "lesson-states-of-matter.html",
    lang: "en"
  },
  {
    id: "lesson-particle-model-of-matter",
    order: 2,
    status: "published",
    icon: "🔬",
    title: "The Particle Model of Matter",
    desc: "Explore how particles explain the properties and behaviour of solids, liquids, gases, and plasma.",
    cta: "ابدأ الدرس ←",
    href: "lesson-particle-model-of-matter.html",
    lang: "en"
  },
  {
    id: "lesson-changes-in-states-of-matter",
    order: 3,
    status: "published",
    icon: "🔥🧊💧",
    title: "Changes in the States of Matter",
    desc: "Interactive heating curve (A → F), melting & boiling plateaus, pressure and purity effects, and the pressure cooker.",
    cta: "ابدأ الدرس ←",
    href: "lesson-changes-in-states-of-matter.html",
    lang: "en"
  },
  {
    id: "lesson-changes-in-states-of-matter-2",
    order: 4,
    status: "published",
    icon: "🔥🧊💧",
    title: "Changes in the States of Matter",
    desc: "Part 2 of the unit: evaporation vs boiling, variables & factors affecting evaporation, sublimation & deposition, the water cycle, and instant coffee technology.",
    cta: "ابدأ الدرس ←",
    href: "lesson-changes-in-states-of-matter-2.html",
    lang: "en"
  },
  {
    id: "lesson-internal-energy-and-temperature",
    order: 5,
    status: "published",
    icon: "🌡️🔥",
    title: "Internal Energy & Temperature",
    desc: "إنفوجرافيك تفاعلي ثنائي اللغة: الأنظمة، الطاقة الداخلية، درجة الحرارة كمتوسط طاقة حركة، الحرارة النوعية مع حاسبة Q=mcΔT، وتلات تجارب تسخين حقيقية.",
    cta: "ابدأ الدرس ←",
    href: "lesson-internal-energy-and-temperature.html",
    lang: "ar"
  }
];
