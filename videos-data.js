/* =====================================================================
   www.2nd Prep. Funny Science Lab — VIDEO LEARNING DATA
   =====================================================================
   طبقة بيانات فيديوهات الشرح التعليمي (Data layer).
   المصدر الوحيد لكروت قسم الفيديوهات في الصفحة المخصصة (videos.html لاحقًا)
   ولمعاينة «أحدث الفيديوهات» في الصفحة الرئيسية.

   لإضافة فيديو جديد مستقبلًا: انسخ Object جاهز غيّر قيمه — الكارت يظهر تلقائيًا.
   صفر لمس مطلوب لأي ملف تاني (الصفحة بتقرأ من هنا).

   الحقول:
     id          معرّف فريد (نص بلا مسافات)
     order       ترتيب الظهور
     status      "published" = يظهر للجميع | "draft" = مخفي مؤقتًا | "soon" = بطاقة «قريبًا»
     title       عنوان الفيديو
     desc        سطر وصف تحت العنوان
     duration    المدة كنص (مثال: "4:32") — اترك "" لو لسه متحددتش
     lessonId    معرّف الدرس المرتبط بهذا الفيديو (اختياري، يطابق ملف الدرس)
     lessonHref  مسار صفحة الدرس المرتبط (مسار نسبي، مثل باقي المشروع)
     videoUrl    رابط الفيديو الفعلي — مليء نرجعه لاحقًا (YouTube أو ملف محلي)
     kind        نوع المصدر: "youtube" | "local" | "soon"
                 (محجوزة لتكامل lazy-embed على YouTube مستقبلًا)

   ملاحظة أمان: لا نضع روابط YouTube وهمية — حقل videoUrl يُترك فارغًا
   مع kind:"soon" حتى تتوفر الفيديوهات الحقيقية.
   ===================================================================== */

const videosData = [
  {
    id: "video-states-of-matter",
    order: 1,
    status: "soon",
    title: "فيديو: الحالات الثلاث للمادة وخواصها",
    desc: "شرح مرئي مبسّط عن الحالات الثلاث للمادة وخواصها — الفيديو هيتضاف هنا قريبًا.",
    duration: "",
    lessonId: "lesson-states-of-matter",
    lessonHref: "lesson-states-of-matter.html",
    videoUrl: "",
    kind: "soon"
  },
  {
    id: "video-particle-model",
    order: 2,
    status: "soon",
    title: "فيديو: نموذج الجسيمات للمادة",
    desc: "استكشف كيف تفسّر الجسيمات خواص المواد في الحالات المختلفة — الفيديو قريبًا.",
    duration: "",
    lessonId: "lesson-particle-model-of-matter",
    lessonHref: "lesson-particle-model-of-matter.html",
    videoUrl: "",
    kind: "soon"
  },
  {
    id: "video-changes-in-states-part-1",
    order: 3,
    status: "soon",
    title: "فيديو: التغيّرات في حالات المادة (١)",
    desc: "منحنى التسخين والانصهار والغليان بالشرح والفهم — الفيديو قريبًا.",
    duration: "",
    lessonId: "lesson-changes-in-states-of-matter",
    lessonHref: "lesson-changes-in-states-of-matter.html",
    videoUrl: "",
    kind: "soon"
  },
  {
    id: "video-changes-in-states-part-2",
    order: 4,
    status: "soon",
    title: "فيديو: التغيّرات في حالات المادة (٢)",
    desc: "التبخّر والعوامل المؤثرة فيه والتصعيد ودورة الماء — الفيديو قريبًا.",
    duration: "",
    lessonId: "lesson-changes-in-states-of-matter-2",
    lessonHref: "lesson-changes-in-states-of-matter-2.html",
    videoUrl: "",
    kind: "soon"
  },
  {
    id: "video-internal-energy-temperature",
    order: 5,
    status: "soon",
    title: "فيديو: الطاقة الداخلية ودرجة الحرارة",
    desc: "الطاقة الداخلية ودرجة الحرارة والحرارة النوعية بالشرح — الفيديو قريبًا.",
    duration: "",
    lessonId: "lesson-internal-energy-and-temperature",
    lessonHref: "lesson-internal-energy-and-temperature.html",
    videoUrl: "",
    kind: "soon"
  },
  {
    id: "video-methods-of-heat-transfer",
    order: 6,
    status: "soon",
    title: "فيديو: طرق انتقال الحرارة",
    desc: "التوصيل والحمل والإشعاع والموصلات والعوازل — الفيديو قريبًا.",
    duration: "",
    lessonId: "lesson-methods-of-heat-transfer",
    lessonHref: "lesson-methods-of-heat-transfer.html",
    videoUrl: "",
    kind: "soon"
  },
  {
    id: "video-convection-radiation",
    order: 7,
    status: "soon",
    title: "فيديو: الحمل الحراري والإشعاع",
    desc: "تيارات الحمل والإشعاع والامتصاص والمقارنة بين الطرق الثلاث — الفيديو قريبًا.",
    duration: "",
    lessonId: "lesson-convection-and-radiation",
    lessonHref: "lesson-convection-and-radiation.html",
    videoUrl: "",
    kind: "soon"
  }
];
