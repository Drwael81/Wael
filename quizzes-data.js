/* ======================================================================
   www.2nd Prep. Funny Science Lab — QUIZZES DATA
   ======================================================================
   لإضافة اختبار جديد مستقبلًا: أضف Object جديد في نهاية الـ Array تحت.
   صفر لمس مطلوب لأي ملف تاني (quiz.html بيقرأ من هنا تلقائيًا).

   type: "mcq"  → اختيار من متعدد (استخدم choices + answer)
   type: "text" → إجابة نصية قصيرة (استخدم answer بس، من غير choices)

   ------------------------------------------------------------------
   قالب جاهز للنسخ — انسخ الكتلة دي وحط بياناتك الحقيقية بدالها:
   ------------------------------------------------------------------
   {
     id: "quiz-unique-id",        // فريد، من غير مسافات، ومختلف عن أي id تاني في القائمة
     title: "عنوان الاختبار",
     lessonId: "exp-N",           // (اختياري) ربط بتجربة موجودة، أو احذف السطر لو مش مرتبط
     category: "matter",          // matter / diffusion / state-changes / temperature / heat-transfer
     questions: [
       {
         type: "mcq",
         prompt: "نص السؤال",
         choices: ["اختيار ١", "اختيار ٢", "اختيار ٣", "اختيار ٤"],
         answer: "الاختيار الصح (يطابق نص أحد الـ choices بالظبط)",
         explanation: "شرح مختصر يظهر بعد الإجابة"
       },
       {
         type: "text",
         prompt: "نص السؤال",
         answer: "الإجابة الصح (نص قصير)",
         explanation: "شرح مختصر يظهر بعد الإجابة"
       }
       // ... زوّد أسئلة براحتك
     ]
   }
   ------------------------------------------------------------------
   ====================================================================== */

const quizzesData = [
  {
    id: "quiz-demo",
    title: "اختبار تجريبي — تجربة المحرك",
    lessonId: "exp-1",
    category: "matter",
    questions: [
      {
        type: "mcq",
        prompt: "أي الحالات دي مش قابلة للانضغاط؟",
        choices: ["الغاز", "الصلب والسائل", "بخار الماء", "الهواء"],
        answer: "الصلب والسائل",
        explanation: "الصلب والسائل جزيئاتهم متلاصقة، فمساحة الفراغ بينهم صغيرة جدًا، عكس الغاز."
      },
      {
        type: "mcq",
        prompt: "لما بنضغط على الغاز، حجمه بيعمل إيه؟",
        choices: ["يزيد", "يقل", "يفضل ثابت", "يتحول لسائل فورًا"],
        answer: "يقل",
        explanation: "زيادة الضغط على الغاز بتقلل المسافات بين جزيئاته، فحجمه يقل."
      },
      {
        type: "text",
        prompt: "اكتب اسم الخاصية اللي بتخلي الغاز ياخد شكل وحجم الإناء اللي فيه.",
        answer: "الانضغاط",
        explanation: "قابلية الانضغاط هي اللي بتخلي الغاز ياخد شكل وحجم أي إناء يتحط فيه."
      }
    ]
  },

  /* ------------------------------------------------------------------
     المصدر: Check Your Understanding 1 (Prep 1 Science — Matter & Fluids)
     نُقل حرفيًا بدون أي تغيير في النص/الاختيارات/الإجابات/الشرح.
     section و tag محفوظين كما في المصدر الأصلي لأي استخدام مستقبلي
     (المحرك الحالي quiz.html مايقراهمش، بس موجودين كتوثيق).
     ------------------------------------------------------------------ */
  {
    id: "quiz-check-understanding-1",
    title: "Check Your Understanding 1 — Science • Matter & Fluids",
    lessonId: null,
    category: "matter",
    questions: [
      {
        type: "text",
        section: "1(A) Scientific term",
        tag: "Beni Suef 26",
        prompt: "Anything that has mass and occupies space.",
        answer: "matter",
        acceptedAnswers: ["matter"],
        explanation: "Matter is anything that has mass and occupies space."
      },
      {
        type: "text",
        section: "1(A) Scientific term",
        tag: "Beni Suef 26",
        prompt: "Substances that have the ability to flow and take the shape of the container holding them.",
        answer: "fluids",
        acceptedAnswers: ["fluids", "fluid"],
        explanation: "Fluids (liquids & gases) flow and take the shape of their container."
      },
      {
        type: "text",
        section: "1(A) Scientific term",
        tag: "Beheira 26",
        prompt: "The movement of the particles of a substance from the region of higher concentration to the region of lower concentration.",
        answer: "diffusion",
        acceptedAnswers: ["diffusion"],
        explanation: "Diffusion = movement of particles from higher to lower concentration."
      },
      {
        type: "text",
        section: "1(A) Scientific term",
        tag: "Qena 26",
        prompt: "The state of matter that is compressible and can flow.",
        answer: "gas",
        acceptedAnswers: ["gas", "gases", "gaseous", "gaseous state", "gas state"],
        explanation: "The gaseous state is compressible and can flow, so gases are fluids."
      },
      {
        type: "mcq",
        section: "1(B) Give reason",
        tag: "Giza 26",
        prompt: "Sugar dissolves faster in hot water than in cold water because…",
        choices: [
          "raising the temperature makes water particles move faster, so dissolving happens quicker",
          "hot water has a larger volume than cold water",
          "sugar does not dissolve in cold water at all",
          "cold water particles move faster than hot water particles"
        ],
        answer: "raising the temperature makes water particles move faster, so dissolving happens quicker",
        explanation: "Higher temperature → faster particle motion → faster dissolving/diffusion."
      },
      {
        type: "mcq",
        section: "1(B) Give reason",
        tag: "Giza 26",
        prompt: "The flow speed of honey is less than the flow rate of water because…",
        choices: [
          "honey is more viscous (thicker) than water",
          "honey is lighter than water",
          "water has no particles",
          "honey is a solid at room temperature"
        ],
        answer: "honey is more viscous (thicker) than water",
        explanation: "The greater the viscosity, the slower the flow."
      },
      {
        type: "mcq",
        section: "2(A) Choose",
        tag: "Monufia 26",
        prompt: "Solids are similar to liquids in ……………",
        choices: ["shape stability", "volume stability", "fluidity", "the speed of diffusion through them"],
        answer: "volume stability",
        explanation: "Both solids and liquids have a definite (stable) volume."
      },
      {
        type: "mcq",
        section: "2(A) Choose",
        tag: "",
        prompt: "Fluids are materials that are ……………",
        choices: ["only solid", "only liquid", "solid and liquid", "liquid and gaseous"],
        answer: "liquid and gaseous",
        explanation: "Fluids = liquids + gases (they can flow)."
      },
      {
        type: "mcq",
        section: "2(A) Choose",
        tag: "Aswan 26",
        prompt: "Which material has a definite shape and its volume does NOT change when transferred?",
        choices: ["water", "water vapour", "mercury", "wood"],
        answer: "wood",
        explanation: "Wood is a solid → definite shape and volume."
      },
      {
        type: "mcq",
        section: "2(A) Choose",
        tag: "Cairo 26",
        prompt: "The diffusion rate in gases is …………… the diffusion rate in liquids.",
        choices: ["less than", "greater than", "equal to", "half"],
        answer: "greater than",
        explanation: "Gas particles move faster & are far apart → faster diffusion."
      },
      {
        type: "mcq",
        section: "2(B) Observation",
        tag: "Ismailia 26",
        prompt: "What do you notice when a perfume bottle is left open in a room?",
        choices: [
          "the perfume smell spreads all over the room",
          "the perfume changes into a liquid",
          "nothing happens at all",
          "the perfume freezes"
        ],
        answer: "the perfume smell spreads all over the room",
        explanation: "Perfume particles diffuse through the air (gases diffuse quickly)."
      },
      {
        type: "mcq",
        section: "2(B) Observation",
        tag: "Sohag 26",
        prompt: "Pressing the piston of a closed-nozzle syringe containing water — what happens to the volume of water?",
        choices: [
          "it stays (almost) the same — liquids are not compressible",
          "it decreases a lot",
          "it doubles",
          "it becomes zero"
        ],
        answer: "it stays (almost) the same — liquids are not compressible",
        explanation: "Liquids have a stable volume; they are practically incompressible."
      }
    ]
  }

  /* الاختبارات الحقيقية الجديدة تتضاف هنا تحت، كل واحد بفاصلة قبله: */
];
