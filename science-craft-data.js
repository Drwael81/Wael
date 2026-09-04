/* Science Craft — السجل المركزي للألعاب العلمية
   بيان واحد يتحكم في: صفحة Science Craft + الصفحة الرئيسية + عدّاد عروضها.
   أضِف لعبة جديدة بمدخل واحد هنا فقط. */
var scienceCraftData = [
  {
    id: 'brownian-mario-minecraft',
    title: 'ماريو والحركة البراونية',
    file: 'brownian-mario-minecraft.html',
    description: 'راقب رقص جزيئات الماء العشوائي في ١٥ ثانية واحصِ خطوط حركتها — الحركة البراونية بالملاحظة المباشرة.',
    category: 'diffusion',
    topic: 'الحركة العشوائية والانتشار',
    difficulty: 'سهل',
    status: 'published',
    scoringType: 'hits',
    maxScore: null,
    icon: '🟤'
  },
  {
    id: 'crazy-lab-minecraft',
    title: 'المعمل العجيب: الغليان في ٨٠ درجة',
    file: 'crazy-lab-minecraft.html',
    description: 'اقرأ مقياس الحرارة وحقّق ٨٠° بالضبط لتثبت أن الماء يغلي أسرع من المعتاد — وبالوقود الأكثر توفيرًا.',
    category: 'state-changes',
    topic: 'الغليان والحالة الغازية',
    difficulty: 'سهل',
    status: 'published',
    scoringType: 'points',
    maxScore: 100,
    icon: '🧪'
  },
  {
    id: 'kitchen-lab-pressure-cooker',
    title: 'معمل المطبخ: طنجرة الضغط',
    file: 'kitchen-lab-pressure-cooker.html',
    description: 'الضغط بيرفع درجة الغليان! سبّب وأنقذ الطعام في المطبخ مع أسئلة علمية سريعة.',
    category: 'temperature',
    topic: 'الضغط ودرجة الغليان',
    difficulty: 'متوسط',
    status: 'published',
    scoringType: 'quiz',
    maxScore: 100,
    icon: '🍲'
  },
  {
    id: 'mario-boiling-mountain',
    title: 'ماريو على جبل الغليان',
    file: 'mario-boiling-mountain.html',
    description: 'كل ٣٠٠ متر لأعلى بتقلّ درجة الغليان درجة واحدة — اكتشف لماذا يغلي الماء عند قمم الجبال في درجة أقل.',
    category: 'temperature',
    topic: 'الضغط الجوي ودرجة الغليان',
    difficulty: 'متوسط',
    status: 'published',
    scoringType: 'quiz',
    maxScore: 100,
    icon: '🗻'
  },
  {
    id: 'plasma-ac-game',
    title: 'البلازما: الحالة الرابعة للمادة',
    file: 'plasma-ac-game.html',
    description: 'نيّف المادة بإذابتك للروابط بتطبيق التصوّر الخاطئ للمذيبات المشعة — وتعلّم الحالة الرابعة.',
    category: 'matter',
    topic: 'المادة وحالاتها',
    difficulty: 'متقدم',
    status: 'published',
    scoringType: 'quiz',
    maxScore: 100,
    icon: '🧿'
  },
  {
    id: 'science-craft-race',
    title: 'سباق Science Craft',
    file: 'science-craft-race.html',
    description: 'اربح جائزة السرعة الكبرى! جرّب وراء كل جواب ينقلك لخط النهاية — والسبب العلمي وراء سرعتك.',
    category: 'diffusion',
    topic: 'الانتشار والسرعة',
    difficulty: 'متوسط',
    status: 'published',
    scoringType: 'points',
    maxScore: 100,
    icon: '🏁'
  }
];