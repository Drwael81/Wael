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
  }
];
