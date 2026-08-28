/* ============================================================
   Experiments Metadata (Phase 2 data layer)
   بيانات وصفية للتجارب فقط (id / order / category / title) — مش محتوى التجارب
   بتستخدم لـ:
     1) عدّادات الأقسام في الصفحة الرئيسية بشكل تلقائي
     2) أي ميزات مستقبلية (فلترة / بحث / فهرس جانبي)
   ملاحظة: المجموع لازم يكون ٣٩ تجربة (٢٢ قسم داخل index.html + تجارب ٢٣-٣٩ كصفحات مستقلة: exp23-balloon.html / exp24-precipitate.html / exp25-colour-change.html / exp26-gas-evolution.html / exp27-light-heat.html / exp28-ammonia-indicator.html / exp29-limewater-milky.html / exp30-sugar-burning.html / exp31-soap-making.html / exp32-daily-life.html / exp33-physical-vs.html / exp34-equations.html / exp35-conservation-mass.html / exp36-glucose-benedict.html / exp37-starch-iodine.html / exp38-fats-sudan.html / exp39-proteins-biuret.html)
   ============================================================ */

const experimentsData = [
  { id: 'exp-1',  order: 1,  category: 'matter',        title: 'الحجم وقابلية الانضغاط',                topic: 'الحالات الثلاث للمادة' },
  { id: 'exp-2',  order: 2,  category: 'diffusion',     title: 'سرعة الانتشار',                         topic: 'الانتشار في الحالات الثلاث' },
  { id: 'exp-3',  order: 3,  category: 'diffusion',     title: 'تأثير درجة الحرارة على سرعة الانتشار',  topic: 'العوامل المؤثرة في سرعة الانتشار' },
  { id: 'exp-4',  order: 4,  category: 'diffusion',     title: 'تأثير كتلة الجزيئات على سرعة الانتشار', topic: 'العوامل المؤثرة في سرعة الانتشار' },
  { id: 'exp-5',  order: 5,  category: 'diffusion',     title: 'سباق النشادر وحمض الهيدروكلوريك',       topic: 'مقارنة سرعة انتشار الغازات' },
  { id: 'exp-6',  order: 6,  category: 'matter',        title: 'ضغط الغاز وحجمه',                       topic: 'تأثير الضغط على حجم الغاز' },
  { id: 'exp-7',  order: 7,  category: 'matter',        title: 'الضغط الجوي ودرجة الغليان',             topic: 'تطبيق على الضغط الجوي' },
  { id: 'exp-8',  order: 8,  category: 'diffusion',     title: 'قوى التجاذب بين الجزيئات',              topic: 'نظرية الجسيمات' },
  { id: 'exp-9',  order: 9,  category: 'state-changes', title: 'مساحة السطح والتبخر',                   topic: 'التبخر' },
  { id: 'exp-10', order: 10, category: 'state-changes', title: 'التصعيد والترسيب',                      topic: 'تحولات المادة' },
  { id: 'exp-11', order: 11, category: 'state-changes', title: 'النقاء ودرجتا الغليان والانصهار',       topic: 'النقاء ودرجات التغير' },
  { id: 'exp-12', order: 12, category: 'temperature',   title: 'الإحساس بالحرارة يخدعنا',               topic: 'الطاقة الحرارية' },
  { id: 'exp-13', order: 13, category: 'temperature',   title: 'أنواع الأنظمة',                          topic: 'مفهوم النظام' },
  { id: 'exp-14', order: 14, category: 'temperature',   title: 'العوامل المؤثرة في تغير درجة الحرارة',   topic: 'العوامل المؤثرة' },
  { id: 'exp-15', order: 15, category: 'temperature',   title: 'السعة الحرارية النوعية',                 topic: 'السعة الحرارية النوعية' },
  { id: 'exp-16', order: 16, category: 'temperature',   title: 'حلة الضغط توفّر الوقت والوقود',          topic: 'تطبيق تكنولوجي' },
  { id: 'exp-17', order: 17, category: 'temperature',   title: 'الاتزان الحراري',                        topic: 'الحرارة والاتزان الحراري' },
  { id: 'exp-18', order: 18, category: 'heat-transfer', title: 'التوصيل الحراري بين المعادن',            topic: 'طرق انتقال الحرارة' },
  { id: 'exp-19', order: 19, category: 'heat-transfer', title: 'الموصلات والعوازل الحرارية في حياتنا',   topic: 'تطبيقات حياتية' },
  { id: 'exp-20', order: 20, category: 'heat-transfer', title: 'الحمل الحراري في السوائل والغازات',      topic: 'طرق انتقال الحرارة' },
  { id: 'exp-21', order: 21, category: 'heat-transfer', title: 'الإشعاع الحراري',                        topic: 'طرق انتقال الحرارة' },
  { id: 'exp-22', order: 22, category: 'heat-transfer', title: 'مقارنة طرق انتقال الحرارة الثلاث',       topic: 'مراجعة شاملة' },
  { id: 'exp-23', order: 23, category: 'chemical-reactions', title: 'نفخ البالون',                      topic: 'التفاعلات الكيميائية' },
  { id: 'exp-24', order: 24, category: 'chemical-reactions', title: 'تكوين الراسب',                     topic: 'التفاعلات الكيميائية' },
  { id: 'exp-25', order: 25, category: 'chemical-reactions', title: 'تغيير لون المحلول',                topic: 'التفاعلات الكيميائية' },
  { id: 'exp-26', order: 26, category: 'chemical-reactions', title: 'تصاعد غاز الهيدروجين',             topic: 'التفاعلات الكيميائية' },
  { id: 'exp-27', order: 27, category: 'chemical-reactions', title: 'انبعاث ضوء وحرارة',                topic: 'التفاعلات الكيميائية' },
  { id: 'exp-28', order: 28, category: 'chemical-reactions', title: 'تغير لون الكاشف العام',             topic: 'التفاعلات الكيميائية' },
  { id: 'exp-29', order: 29, category: 'chemical-reactions', title: 'تعكر ماء الجير',                    topic: 'التفاعلات الكيميائية' },
  { id: 'exp-30', order: 30, category: 'chemical-reactions', title: 'حرق السكر',                         topic: 'التفاعلات الكيميائية' },
  { id: 'exp-31', order: 31, category: 'chemical-reactions', title: 'صناعة الصابون',                     topic: 'التفاعلات الكيميائية' },
  { id: 'exp-32', order: 32, category: 'chemical-reactions', title: 'تفاعلات كيميائية في حياتنا اليومية', topic: 'التفاعلات الكيميائية' },
  { id: 'exp-33', order: 33, category: 'chemical-reactions', title: 'التغير الفيزيائي والكيميائي',       topic: 'مقارنة التغيرات' },
  { id: 'exp-34', order: 34, category: 'chemical-reactions', title: 'معادلات رمزية',                       topic: 'التعبير عن التفاعلات بمعادلات رمزية' },
  { id: 'exp-35', order: 35, category: 'chemical-reactions', title: 'بقاء الكتلة',                         topic: 'قانون بقاء الكتلة' },
  { id: 'exp-36', order: 36, category: 'chemical-reactions', title: 'كشف الجلوكوز',                        topic: 'الكشف عن سكر الجلوكوز بمحلول بندكت' },
  { id: 'exp-37', order: 37, category: 'chemical-reactions', title: 'كشف النشا',                           topic: 'الكشف عن النشا بمحلول اليود' },
  { id: 'exp-38', order: 38, category: 'chemical-reactions', title: 'كشف الدهون',                          topic: 'الكشف عن الدهون بسودان IV' },
  { id: 'exp-39', order: 39, category: 'chemical-reactions', title: 'كشف البروتين',                        topic: 'الكشف عن البروتين بمحلول البيوريت' }
];
