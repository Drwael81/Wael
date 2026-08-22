# هيكلة مشروع «مختبر العلوم الممتع» — توثيق عملي

> آخر Commit مستقر وقت كتابة هذا الملف: `ffd439c`
> (`Modularize experiment JavaScript into separate modules (Phase B2-lite)`)

## 1) خريطة الملفات والمجلدات

```
Wael/
├── index.html                     الصفحة الرئيسية: قشرة الموقع + أقسام التجارب الـ22 (markup فقط، صفر كود مضمن)
├── style.css                      نظام التصميم: متغيرات الألوان والخطوط والـtokens العامة
├── assets/
│   ├── css/experiments.css        كل تنسيقات التجارب + القشرة (892 سطرًا — ملف واحد مقصود)
│   └── js/experiments/            21 وحدة JavaScript مستقلة (وحدة = كتلة سلوكية واحدة)
│       ├── 00-category-counters.js
│       ├── 01-exp01-compressibility.js
│       ├── ... (الترتيب الرقمي = ترتيب التحميل الإلزامي)
│       └── 20-exp21-radiation.js
├── experiments-data.js            طبقة بيانات وصفية للتجارب (id / order / category / title)
├── site-enhance.js                تحسينات عامة (reveal عند التمرير، شريط التقدم…) — يُحمَّل بـdefer
├── lessons.html                   فهرس الدروس — مولّد تلقائيًا من lessons-data.js
├── lessons-data.js                بيانات الدروس
├── lesson-states-of-matter.html   درس (ملف مكتفٍ ذاتيًا)
├── lesson-particle-model-of-matter.html
├── quizzes.html                   فهرس الاختبارات — مولّد تلقائيًا من quizzes-data.js
├── quiz.html                      مشغّل الاختبار (يقرأ ?id= من quizzes-data.js)
├── quizzes-data.js                بيانات كل الاختبارات + قالب جاهز للنسخ داخله
├── manifest.json / icon-*.png     ملفات PWA
```

## 2) خريطة الوحدات الـ21 ↔ التجارب الـ22

| الوحدة | تخدم |
|---|---|
| `00-category-counters.js` | عدّادات التصنيفات في الرئيسية (تقرأ experimentsData تلقائيًا) |
| `01-exp01-compressibility.js` | تجربة 1 |
| `02-shared-toggles.js` | **أكثر من تجربة**: `[data-toggle=diffused]` → تجربتا 2 و13، و`[data-toggle=reveal]` → تجارب 19–22 |
| `03-exp05-gas-race.js` … `13-exp16-pressure-cooker.js` | كل وحدة لتجربتها الوحيدة (بحسب الاسم) |
| `14-exp03-tea-diffusion.js`, `15-exp04-mass-diffusion.js` | تجربتا 3 و4 (ترتيبها في التحميل بعد 13 مقصود ولا يُغيَّر) |
| `16-exp17-equilibrium.js` … `20-exp21-radiation.js` | تجارب 17، 18، 20 (وحدتان)، 21 |

ملاحظات:
- التجربتان **19 و22** ليس لهما وحدة خاصة — سلوكهما بالكامل عبر سمات `data-*` التي تديرها `02-shared-toggles.js`.
- `19-exp20-candle-tubes.js` جزء ثانٍ لتجربة 20 (اتجاه الهواء بالشمعة).
- أي وحدة جديدة يجب أن تكون كتلة مستقلة تمامًا (صفر متغيرات عابرة للوحدات).

## 3) أدوار الطبقات
- **experiments-data.js**: وصف فقط (لا محتوى). عدّادات التصنيفات وأي فلترة مستقبلية تُحسب منه تلقائيًا — مجموع الإدخالات لازم يساوي عدد الأقسام فعليًا (٢٢).
- **assets/css/experiments.css**: كل تنسيق التجارب والقشرة. يُحمَّل **قبل** `style.css` عمدًا حتى يظل نظام التصميم هو المتغلب على الـtokens.
- **style.css**: tokens الهوية (ألوان/خطوط) — لا تكتب قواعد تجارب فيه.

## 4) نظام الدروس
- `lessons-data.js` هو المصدر؛ `lessons.html` يبني البطاقات منه تلقائيًا.
- كل درس = ملف HTML مستقل مكتفٍ ذاتيًا (CSS/JS مضمنون داخل الدرس — هذا نمط مقصود لصفحات المحتوى).
- ربط اختبار بدرس يتم عبر حقل `lessonId` في إدخال الاختبار.

## 5) نظام الاختبارات
- `quizzes-data.js` هو المصدر الوحيد (فيه قالب جاهز للنسخ داخل التعليقات).
- نوعا السؤال: `"mcq"` (choices + answer نص الاختيار الصحيح) أو `"text"` (answer نصي).
- `quizzes.html` يعرض بطاقة لكل إدخال، و`quiz.html?id=<معرّف-الاختبار>` يشغّله تلقائيًا.

## 6) وصفة إضافة تجربة جديدة (مثال: رقم 23)
1. في `index.html`: أضف `<section class="experiment" id="exp-23">…</section>` قبل قسم «قريبًا».
2. في `experiments-data.js`: أضف إدخالاً `{ id:'exp-23', order:23, category:…, title:… }`.
3. السلوك: إما اعتمد الأزرار العامة (`press-btn` مع `data-toggle` / `data-target`) فلا تحتاج كودًا، أو أنشئ وحدة جديدة `21-exp23-<اسم>.js` كتلةً معزولة.
4. إن أنشأت وحدة: أضف وسم `<script src="assets/js/experiments/21-….js"></script>` **بعد** وسم `20-exp21-radiation.js` مباشرة.
5. العدّادات تتحدث تلقائيًا. لا تعدّل شيئًا آخر.

## 7) وصفة إضافة درس جديد
1. انسخ نمط أحد ملفي الدروس الحاليين إلى `lesson-<اسم>.html` (عدّل المحتوى العلمي فقط).
2. أضف إدخالًا في `lessons-data.js` — الفهرس يتحدث تلقائيًا.
3. اختياري: اختبار مرتبط بإضافة إدخال في `quizzes-data.js` بحقل `lessonId` يطابق الدرس.

## 8) وصفة إضافة Quiz جديد
1. افتح `quizzes-data.js` وانسخ القالب الموجود داخل التعليقات.
2. اختر `id` فريدًا بصيغة `quiz-check-understanding-N`.
3. لا تعديل مطلوب في أي ملف آخر — الفهرس والمشغّل يكتشفانه تلقائيًا.

## 9) قواعد لا تُكسر
1. **ترتيب تحميل JS**: `experiments-data.js` أولًا، ثم وحدات `assets/js/experiments/` بالترتيب الرقمي تصاعديًا، و`site-enhance.js` بـdefer في مكانه.
2. **ترتيب CSS**: `assets/css/experiments.css` ثم `style.css` بعده (التغلب على الـtokens مقصود).
3. **مسارات نسبية فقط**: الموقع يعمل تحت `/Wael/` على GitHub Pages — ممنوع `/assets/...` أو `../`.
4. النقل بين الملفات يكون **قصًّا حرفيًا byte-exact** مع إثبات تطابق، وليس إعادة كتابة.
5. الترميز UTF-8 بدون BOM، ومحتوى علمي عربي لا يُلمس أثناء الهيكلة.
6. قبل أي Commit: نسخة احتياطية + Golden Master + توقيع سلوكي للتجارب + Quiz runner — كما جرى في B1/B2-lite.

## 10) ما لا يُنصح به حاليًا (قرار Audit موثّق)
- **تقسيم `experiments.css`**: غير موصى به — 10 كتل `@media` تخلط قواعد القشرة بالتجارب؛ الفصل مخاطرة عالية بلا فائدة عملية.
- **نقل markup التجارب خارج `index.html`**: غير موصى به — يكسر أنكورات `#exp-N` ووضع عدم وجود JavaScript والـSEO.
- صفحات الدروس تبقى مكتفية ذاتيًا؛ لا تُعاد هيكلتها.

---
*أُنشئ هذا الملف ضمن Commit: `Document project structure and remove orphan archive`.*
