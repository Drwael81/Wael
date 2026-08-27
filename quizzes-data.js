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
  },

  /* ------------------------------------------------------------------
     Check Your Understanding 2 — The Particle Model of Matter
     الإجابات محفوظة كنص الاختيار الصحيح نفسه (زي ما المحرك بيقرأ).
     ------------------------------------------------------------------ */
  {
    id: "quiz-check-understanding-2",
    title: "Check Your Understanding 2",
    lessonId: null,
    category: "matter",
    questions: [
      {
        type: "mcq",
        prompt: "What is matter made up of according to the particle theory?",
        choices: [
          "Large visible objects",
          "Very small particles",
          "Only atoms of gases",
          "Continuous material with no particles"
        ],
        answer: "Very small particles",
        explanation: "Matter is composed of very small particles that cannot be seen by the naked eye."
      },
      {
        type: "mcq",
        prompt: "What exists between the particles of matter?",
        choices: [
          "Interparticle spaces",
          "Empty containers",
          "Magnetic fields only",
          "No space at all"
        ],
        answer: "Interparticle spaces",
        explanation: "There are spaces between particles, and their size varies according to the physical state."
      },
      {
        type: "mcq",
        prompt: "Which state of matter has the strongest attractive forces between its particles?",
        choices: ["Gas", "Liquid", "Solid", "Plasma only"],
        answer: "Solid",
        explanation: "Particles in solids are held together by very strong attractive forces."
      },
      {
        type: "mcq",
        prompt: "How do particles in a solid mainly move?",
        choices: [
          "They move freely in all directions.",
          "They flow around each other.",
          "They vibrate about fixed positions.",
          "They stop moving completely."
        ],
        answer: "They vibrate about fixed positions.",
        explanation: "Solid particles remain in fixed positions but continuously vibrate."
      },
      {
        type: "mcq",
        prompt: "Which state of matter has very large interparticle spaces?",
        choices: ["Solid", "Liquid", "Gas", "None of them"],
        answer: "Gas",
        explanation: "Gas particles are separated by very large spaces."
      },
      {
        type: "mcq",
        prompt: "Why are gases easily compressed?",
        choices: [
          "Their particles are very large.",
          "Their particles do not move.",
          "There are very large spaces between their particles.",
          "Their attractive forces are very strong."
        ],
        answer: "There are very large spaces between their particles.",
        explanation: "The large interparticle spaces in gases can be reduced when pressure is applied."
      },
      {
        type: "mcq",
        prompt: "Which state has a definite volume but no definite shape?",
        choices: ["Solid", "Liquid", "Gas", "Plasma"],
        answer: "Liquid",
        explanation: "A liquid has a definite volume but takes the shape of its container."
      },
      {
        type: "mcq",
        prompt: "Which state has the fastest diffusion?",
        choices: ["Solid", "Liquid", "Gas", "All are equal"],
        answer: "Gas",
        explanation: "Gas particles move freely and rapidly, so diffusion occurs very quickly."
      },
      {
        type: "mcq",
        prompt: "What is Brownian motion?",
        choices: [
          "The vibration of particles in a solid",
          "Random motion of relatively large suspended particles caused by collisions with fluid molecules",
          "The movement of electrons around the nucleus",
          "The flow of a liquid only"
        ],
        answer: "Random motion of relatively large suspended particles caused by collisions with fluid molecules",
        explanation: "Brownian motion results from continuous random collisions between suspended particles and molecules of the surrounding fluid."
      },
      {
        type: "mcq",
        prompt: "What happens when a gas is heated to extremely high temperatures and becomes ionized?",
        choices: [
          "It becomes a solid.",
          "It becomes a liquid.",
          "It becomes plasma.",
          "It stops moving."
        ],
        answer: "It becomes plasma.",
        explanation: "Plasma contains positively charged ions and free electrons."
      },
      {
        type: "mcq",
        prompt: "Which of the following is an example of plasma?",
        choices: ["Ice", "Water", "The Sun", "Table salt"],
        answer: "The Sun",
        explanation: "The Sun and other stars consist largely of plasma."
      },
      {
        type: "mcq",
        prompt: "Which statement correctly compares the three common states of matter?",
        choices: [
          "Attraction forces are strongest in gases.",
          "Interparticle spaces are smallest in gases.",
          "Diffusion is fastest in solids.",
          "Attraction forces decrease from solid to liquid to gas."
        ],
        answer: "Attraction forces decrease from solid to liquid to gas.",
        explanation: "Attractive forces decrease from solid to liquid to gas, while interparticle spaces and diffusion speed increase."
      }
    ]
  },

  /* Thermal Expansion of Materials — Quiz (linked to lesson-thermal-expansion) */
  {
    id: "quiz-thermal-expansion",
    title: "Thermal Expansion of Materials",
    lessonId: "lesson-thermal-expansion",
    category: "temperature",
    questions: [
      {
        type: "mcq",
        prompt: "Why does a solid expand when it is heated?",
        choices: [
          "Its particles disappear into the surrounding air.",
          "Its particles vibrate faster and move a little farther apart.",
          "Its particles become smaller in size.",
          "Its particles stop moving completely."
        ],
        answer: "Its particles vibrate faster and move a little farther apart.",
        explanation: "Heating gives the particles more energy, so they vibrate faster and push slightly farther apart, causing the solid to expand."
      },
      {
        type: "mcq",
        prompt: "When solids, liquids and gases are heated by the same amount, which expands the most?",
        choices: [
          "Solids",
          "Liquids",
          "Gases",
          "All expand by exactly the same amount"
        ],
        answer: "Gases",
        explanation: "Gas particles are far apart and weakly attracted, so gases expand the most when heated (solids the least)."
      },
      {
        type: "mcq",
        prompt: "Why do railway engineers leave small gaps between the iron rails of a railway track?",
        choices: [
          "To make the track lighter in weight.",
          "To allow the rails to expand freely in hot weather without buckling.",
          "To stop water from flowing under the track.",
          "To keep the rails from being touched by electricity."
        ],
        answer: "To allow the rails to expand freely in hot weather without buckling.",
        explanation: "The gaps let the rails expand when they heat up so they do not bend or buckle."
      },
      {
        type: "mcq",
        prompt: "In a bimetallic strip, which metal bends the strip more strongly?",
        choices: [
          "The metal that expands more when heated.",
          "The metal that expands less when heated.",
          "The heavier metal, regardless of expansion.",
          "The metal that is always on the outside."
        ],
        answer: "The metal that expands more when heated.",
        explanation: "The metal that expands more bends faster, causing the bimetallic strip to curve and bend (used in thermostats)."
      },
      {
        type: "text",
        prompt: "Complete carefully: when a solid is heated, its particles vibrate faster and take up …………… (more space / less space).",
        answer: "more space",
        explanation: "Vibration in place expands slightly, so the particles take up a little more space and the material expands."
      }
    ]
  }

  /* الاختبارات الحقيقية الجديدة تتضاف هنا تحت، كل واحد بفاصلة قبله: */
];
