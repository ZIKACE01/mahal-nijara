import heroCarpenterImg from '../assets/images/hero_master_carpenter_1794434471851.jpg';
import craftWalnutTableImg from '../assets/images/craft_walnut_table_1794434472086.jpg';
import craftMashrabiyaImg from '../assets/images/craft_mashrabiya_screen_1794434472033.jpg';
import craftLibraryImg from '../assets/images/craft_bespoke_library_1794434472478.jpg';
import workshopJoineryImg from '../assets/images/workshop_video_joinery_1794434472532.jpg';
import craftSedaderImg from '../assets/images/craft_sedader_salon_1794435075787.jpg';
import craftBedImg from '../assets/images/craft_bespoke_bed_1794435076472.jpg';
import craftPlacardsImg from '../assets/images/craft_placards_wardrobe_1794435076370.jpg';

export type CraftCategory =
  | 'all'
  | 'sedader'
  | 'beds'
  | 'placards'
  | 'tables'
  | 'mashrabiya'
  | 'joinery';

export interface CraftWork {
  id: string;
  title: string;
  category: Exclude<CraftCategory, 'all'>;
  categoryLabel: string;
  woodSpecies: string;
  joineryMethod: string;
  finish: string;
  dimensions: string;
  year: string;
  location: string;
  description: string;
  image: string;
  objectPosition?: string;
  featured?: boolean;
}

export interface VideoChapter {
  timeSeconds: number;
  timeLabel: string;
  title: string;
  cutImage: string;
  cameraMove: 'zoom-in' | 'pan-right' | 'pan-left' | 'zoom-out';
}

export interface VideoSlide {
  id: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  durationSeconds: number;
  durationLabel: string;
  woodUsed: string;
  technique: string;
  image: string;
  motionPreset: 'dolly-right' | 'pan-left' | 'zoom-center' | 'tilt-warm';
  chapters: VideoChapter[];
}

export interface WoodSpecimen {
  id: string;
  name: string;
  origin: string;
  densityKg: string;
  dryingTime: string;
  toneClass: string;
  grainPattern: string;
  idealFor: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  project: string;
  quote: string;
}

export const HERO_MEDIA = {
  image: heroCarpenterImg,
  alt: 'الحِرفي الرئيسي في دار السنديان يمسح لوحاً من خشب الجوز الأمريكي بالفأرة اليدوية تحت إضاءة الورشة الطبيعية',
  caption: 'المعلّم عبد الرحمن السنديان — تسوية يدوية للوح جوز طبيعي بسماكة 65 ملم',
};

export const CRAFT_METRICS = [
  { value: '24 عاماً', label: 'في النجارة المعمارية الدقيقة' },
  { value: '380+', label: 'قطعة أثاث ومشروع مُنفّذ يدوياً' },
  { value: '100%', label: 'أخشاب صلبة مجففة بالفرن الطبيعي' },
  { value: '12 تقنية', label: 'تعشيق تقليدي خالٍ من المسامير' },
];

export const GALLERY_FILTERS: { id: CraftCategory; label: string }[] = [
  { id: 'all', label: 'جميع الأعمال' },
  { id: 'sedader', label: 'السدادر' },
  { id: 'beds', label: 'الأسِرّة' },
  { id: 'placards', label: 'البلاكارات والمكتبات' },
  { id: 'tables', label: 'الطاولات' },
  { id: 'mashrabiya', label: 'المشربيات' },
  { id: 'joinery', label: 'تفاصيل التعشيق' },
];

export const CRAFT_WORKS: CraftWork[] = [
  {
    id: 'walnut-monolith-table',
    title: 'مائدة السنديان النحتية بتطعيم النحاس',
    category: 'tables',
    categoryLabel: 'الطاولات',
    woodSpecies: 'جوز أمريكي أسود صلب',
    joineryMethod: 'مفاتيح فراشة نحاسية وتعشيق غاطس',
    finish: 'زيت التونغ العضوي وشمع العسل',
    dimensions: '320 × 115 × 76 سم',
    year: '2026',
    location: 'فيلا النخيل · الرياض',
    description:
      'طاولة طعام نحتية منحوتة من لوحين متناظرين من الجوز الأمريكي، مدعّمة بمفاتيح فراشة من النحاس الأصفر المصقول يدوياً لمنع تمدد الخشب عبر الفصول مع قاعدة مضلعة بثمانية أوجه.',
    image: craftWalnutTableImg,
    objectPosition: 'center center',
    featured: true,
  },
  {
    id: 'andalusi-cedar-sedader',
    title: 'سدادر الصالون المغربي المنقوشة يدوياً',
    category: 'sedader',
    categoryLabel: 'السدادر',
    woodSpecies: 'خشب الأرز المعتّق والجوز الصلب',
    joineryMethod: 'نحت يدوي عميق وتعشيق نقر ولسان',
    finish: 'زيت الكتان الطبيعي وشمع النحل الدافئ',
    dimensions: '420 × 340 × 82 سم',
    year: '2026',
    location: 'رياض الزهور · مراكش',
    description:
      'طقم سدادر متكامل بهياكل خشبية منحوتة بالزخارف الهندسية والنباتية الأصيلة، مع مساند جانبية متصلة وطاولة شاي ثمانية الأضلاع تضمن متانة تدوم لعقود.',
    image: craftSedaderImg,
    objectPosition: 'center center',
  },
  {
    id: 'fluted-oak-bespoke-bed',
    title: 'سرير البلوط المخدّد بتعشيق الزوايا الظاهر',
    category: 'beds',
    categoryLabel: 'الأسِرّة',
    woodSpecies: 'بلوط أوروبي وإطار جوز داكن',
    joineryMethod: 'تعشيق ذيل الحمامة المكشوف عند الأرجل',
    finish: 'صنفرة حريرية وتشطيب غير لامع',
    dimensions: '215 × 200 × 125 سم',
    year: '2026',
    location: 'جناح رئيسي · الدار البيضاء',
    description:
      'سرير معماري بظهر مخدّد يمتد مع طاولتي سرير عائمتين وإضاءة مخفية دافئة، مبني بوصْلات تعشيق زاوية دقيقة تتحمل الأوزان الثقيلة دون أي صرير أو براغٍ معدنية.',
    image: craftBedImg,
    objectPosition: 'center center',
  },
  {
    id: 'builtin-oak-placards',
    title: 'بلاكارات الخزانة الجدارية المدمجة بالشرائح',
    category: 'placards',
    categoryLabel: 'البلاكارات والمكتبات',
    woodSpecies: 'سنديان أبيض أوروبي + مقابض نحاس',
    joineryMethod: 'أبواب شرائح طولية ومفصلات إغلاق هادئ',
    finish: 'طلاء طبيعي حافظ للون الخشب',
    dimensions: '520 × 295 × 65 سم',
    year: '2026',
    location: 'غرفة ملابس · الرباط',
    description:
      'بلاكارات جدارية ممتدة حتى السقف تجمع بين الأبواب ذات الشرائح الخشبية للتهوية الطبيعية ورفوف العرض المضاءة، مع تقسيم داخلي مرن للأدراج والتعليق.',
    image: craftPlacardsImg,
    objectPosition: 'center center',
  },
  {
    id: 'geometric-oak-mashrabiya',
    title: 'مشربية النور الهندسية المتداخلة',
    category: 'mashrabiya',
    categoryLabel: 'المشربيات',
    woodSpecies: 'بلوط أبيض أوروبي',
    joineryMethod: 'تعشيق نصف على نصف بدون مسامير',
    finish: 'طلاء مائي غير لامع مقاوم للرطوبة',
    dimensions: '410 × 290 × 4.5 سم',
    year: '2025',
    location: 'دار الضيافة · جدة',
    description:
      'فاصل معماري مستوحى من الزخرفة الهندسية العربية الكلاسيكية، جُمّع من 460 قطعة بلوط معشّقة يدوياً بزاويا متكررة تسمح بمرور الضوء وتكسره على الأرضيات الحجرية.',
    image: craftMashrabiyaImg,
    objectPosition: 'center center',
  },
  {
    id: 'fluted-oak-library',
    title: 'مكتبة السديم الجدارية المخدّدة',
    category: 'placards',
    categoryLabel: 'البلاكارات والمكتبات',
    woodSpecies: 'بلوط أبيض فرنسي + نحاس مصقول',
    joineryMethod: 'لسان ومجرى مع دعامات مخفية',
    finish: 'تعتيق خفيف وورنيش حريري',
    dimensions: '640 × 320 × 42 سم',
    year: '2026',
    location: 'مكتبة خاصة · الدرعية',
    description:
      'جدارية مكتبية ممتدة من الأرض حتى السقف بأبواب سفلية مخدّدة يدوياً، وإضاءة دافئة مدمجة داخل سماكة الرفوف مع سلم انزلاقي من النحاس المصقول.',
    image: craftLibraryImg,
    objectPosition: 'center center',
  },
  {
    id: 'dovetail-masterwork',
    title: 'زاوية تعشيق ذيل الحمامة اليدوية',
    category: 'joinery',
    categoryLabel: 'تفاصيل التعشيق',
    woodSpecies: 'بلوط أحمر مجفف طبيعياً',
    joineryMethod: 'ذيل الحمامة اليدوي بالإزميل الياباني',
    finish: 'صنفرة 400 وحماية شمعية شفافة',
    dimensions: 'سماكة 28 ملم · تسامح 0.1 ملم',
    year: '2026',
    location: 'مختبر الورشة · دار السنديان',
    description:
      'توثيق لدقة القطع اليدوي باستخدام الإزميل والمطرقة الخشبية وعلامة القياس النحاسية؛ مفصل ميكانيكي يزداد تماسكاً مع الشد دون استخدام أي غراء صناعي أو مسمار معدني.',
    image: workshopJoineryImg,
    objectPosition: 'center center',
  },
  {
    id: 'hand-planing-atelier',
    title: 'لوح الجوز الممسوح بالفأرة التقليدية',
    category: 'joinery',
    categoryLabel: 'تفاصيل التعشيق',
    woodSpecies: 'جوز أمريكي بدرجة أولى',
    joineryMethod: 'تسوية يدوية متقاطعة الألياف',
    finish: 'خام مُجهّز للتزييت الفوري',
    dimensions: '280 × 95 × 6.5 سم',
    year: '2026',
    location: 'الورشة الرئيسية · الرياض',
    description:
      'استخراج السطح النهائي باستخدام الفأرة اليدوية ذات الشفرة الكربونية الدقيقة، ما يفتح مسام الخشب بشكل طبيعي ويمنح ملمساً حريرياً يتفوق على الصنفرة الآلية.',
    image: heroCarpenterImg,
    objectPosition: 'center 35%',
  },
];

export const VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 'reel-sedader-craft',
    indexLabel: '01 / 04',
    title: 'صناعة السدادر والصالونات المنقوشة',
    subtitle: 'من تسوية ألواح الأرز والجوز بالفأرة إلى نحت الزخارف الهندسية لصالون متكامل',
    durationSeconds: 9,
    durationLabel: '00:09',
    woodUsed: 'أرز معتّق وجوز أمريكي',
    technique: 'نحت يدوي وتعشيق نقر ولسان',
    image: craftSedaderImg,
    motionPreset: 'dolly-right',
    chapters: [
      {
        timeSeconds: 0,
        timeLabel: '00:00',
        title: 'تسوية ألواح الأرز بالفأرة',
        cutImage: heroCarpenterImg,
        cameraMove: 'zoom-in',
      },
      {
        timeSeconds: 3,
        timeLabel: '00:03',
        title: 'نحت الزوايا والأكتاف بالإزميل',
        cutImage: workshopJoineryImg,
        cameraMove: 'pan-right',
      },
      {
        timeSeconds: 6,
        timeLabel: '00:06',
        title: 'اكتمال السدادر في الصالون',
        cutImage: craftSedaderImg,
        cameraMove: 'zoom-out',
      },
    ],
  },
  {
    id: 'reel-bed-joinery',
    indexLabel: '02 / 04',
    title: 'تفصيل الأسِرّة الصلبة بتعشيق الزوايا',
    subtitle: 'بناء سرير بلوط مخدّد بوصلات ذيل الحمامة المكشوفة وطاولات جانبية عائمة',
    durationSeconds: 9,
    durationLabel: '00:09',
    woodUsed: 'بلوط أوروبي وإطار جوز داكن',
    technique: 'تعشيق ذيل الحمامة بدون مسامير',
    image: craftBedImg,
    motionPreset: 'zoom-center',
    chapters: [
      {
        timeSeconds: 0,
        timeLabel: '00:00',
        title: 'تخطيط تعشيق زوايا السرير',
        cutImage: workshopJoineryImg,
        cameraMove: 'zoom-in',
      },
      {
        timeSeconds: 3,
        timeLabel: '00:03',
        title: 'تنعيم الألواح وإبراز العروق',
        cutImage: heroCarpenterImg,
        cameraMove: 'pan-left',
      },
      {
        timeSeconds: 6,
        timeLabel: '00:06',
        title: 'إطلالة السرير المخدّد النهائية',
        cutImage: craftBedImg,
        cameraMove: 'zoom-out',
      },
    ],
  },
  {
    id: 'reel-placards-install',
    indexLabel: '03 / 04',
    title: 'تركيب البلاكارات والمكتبات الجدارية',
    subtitle: 'تفصيل خزائن ملابس وبلاكارات من الأرض للسقف بشرائح التهوية والإضاءة المدمجة',
    durationSeconds: 9,
    durationLabel: '00:09',
    woodUsed: 'سنديان أبيض أوروبي · 28 ملم',
    technique: 'شرائح طولية وسكك إغلاق هادئ',
    image: craftPlacardsImg,
    motionPreset: 'pan-left',
    chapters: [
      {
        timeSeconds: 0,
        timeLabel: '00:00',
        title: 'تجهيز واجهات البلاكارات',
        cutImage: craftPlacardsImg,
        cameraMove: 'pan-left',
      },
      {
        timeSeconds: 3,
        timeLabel: '00:03',
        title: 'ضبط الرفوف والمكتبة المخدّدة',
        cutImage: craftLibraryImg,
        cameraMove: 'pan-right',
      },
      {
        timeSeconds: 6,
        timeLabel: '00:06',
        title: 'إضاءة الخزائن وفحص الإغلاق',
        cutImage: craftPlacardsImg,
        cameraMove: 'zoom-out',
      },
    ],
  },
  {
    id: 'reel-mashrabiya-table',
    indexLabel: '04 / 04',
    title: 'الطاولات النحتية وهندسة المشربيات',
    subtitle: 'تطعيم مفاتيح الفراشة النحاسية وتجميع المشربيات المتداخلة مع التشطيب بالزيت',
    durationSeconds: 9,
    durationLabel: '00:09',
    woodUsed: 'جوز أمريكي وبلوط معالج',
    technique: 'تطعيم النحاس والتعشيق الهندسي',
    image: craftWalnutTableImg,
    motionPreset: 'tilt-warm',
    chapters: [
      {
        timeSeconds: 0,
        timeLabel: '00:00',
        title: 'تطعيم الفراشة النحاسية للطاولة',
        cutImage: craftWalnutTableImg,
        cameraMove: 'zoom-in',
      },
      {
        timeSeconds: 3,
        timeLabel: '00:03',
        title: 'تشبيك أضلاع المشربية الهندسية',
        cutImage: craftMashrabiyaImg,
        cameraMove: 'pan-right',
      },
      {
        timeSeconds: 6,
        timeLabel: '00:06',
        title: 'فحص الظل واللمعان الطبيعي',
        cutImage: craftWalnutTableImg,
        cameraMove: 'zoom-out',
      },
    ],
  },
];

export const CRAFT_PRINCIPLES = [
  {
    index: '01.',
    title: 'انتقاء الأخشاب النبيلة',
    description:
      'نختار كل لوح خشبي يدوياً من مستودعات الأخشاب المجففة ببطء، مع فحص نسبة الرطوبة (8%–10%) واتجاه العروق لضمان ثبات القطعة لعقود دون التواء.',
  },
  {
    index: '02.',
    title: 'التعشيق الهندسي المتين',
    description:
      'نعتمد على وصلات النقر واللسان وذيل الحمامة ومفاتيح الفراشة النحاسية، بحيث تتحمل القطعة التمدد الحراري الطبيعي وتبقى قابلة للترميم والتوريث.',
  },
  {
    index: '03.',
    title: 'التشطيب بالزيوت العضوية',
    description:
      'نبتعد عن طبقات البلاستيك العازلة؛ نُشبع الخشب بزيوت التونغ وشمع العسل الطبيعي على ثلاث طبقات متتالية لتحافظ على دفء الملمس ورائحة الخشب الأصيلة.',
  },
];

export const WOOD_SPECIMENS: WoodSpecimen[] = [
  {
    id: 'american-walnut',
    name: 'الجوز الأمريكي الأسود',
    origin: 'أمريكا الشمالية · درجة FAS',
    densityKg: '640 كجم/م³',
    dryingTime: '18 شهراً تجفيف هوائي وفرن',
    toneClass: 'bg-[#4A3222]',
    grainPattern: 'عروق متموجة غنية بدرجات الشوكولاتة والكراميل',
    idealFor: 'طاولات الطعام، المكاتب التنفيذية، الألواح التذكارية',
    description:
      'خشب فاخر يجمع بين الصلابة العالية وقابلية النحت الدقيق. يزداد دفئاً وعمقاً في لونه مع مرور السنوات عند تعرضه للضوء الطبيعي.',
  },
  {
    id: 'european-oak',
    name: 'البلوط الأبيض الأوروبي',
    origin: 'غابات فرنسا وألمانيا المستدامة',
    densityKg: '720 كجم/م³',
    dryingTime: '24 شهراً تجفيف بطيء',
    toneClass: 'bg-[#B9986B]',
    grainPattern: 'ألياف مستقيمة واضحة وأشعة لبّية متلألئة',
    idealFor: 'المشربيات، المكتبات الجدارية، المطابخ المعمارية',
    description:
      'عمود النجارة المعمارية الكلاسيكية؛ يتميز بمقاومة فائقة للرطوبة والاحتكاك وبنية مسامية تمنح النقوش المخدّدة والهندسية حضوراً مهيباً.',
  },
  {
    id: 'burmese-teak',
    name: 'الساج البورمي المعتّق',
    origin: 'جنوب شرق آسيا · مخزون قديم',
    densityKg: '680 كجم/م³',
    dryingTime: '36 شهراً تجفيف طبيعي',
    toneClass: 'bg-[#8E5B32]',
    grainPattern: 'خطوط ذهبية داكنة غنية بالزيوت الطبيعية',
    idealFor: 'الأبواب الرئيسية، الفناءات، قطع الحمامات الفاخرة',
    description:
      'يحتوي على نسبة عالية من الزيوت والسيليكا الطبيعية التي تحميه من الماء والحشرات بشكل ذاتي دون الحاجة لمواد كيميائية.',
  },
  {
    id: 'cedar-wood',
    name: 'الأرز الجبلي العطري',
    origin: 'مرتفعات شرق المتوسط',
    densityKg: '520 كجم/م³',
    dryingTime: '14 شهراً تجفيف طبيعي',
    toneClass: 'bg-[#9E6B4B]',
    grainPattern: 'نسيج ناعم دافئ وعقد طبيعية متناغمة',
    idealFor: 'غرف الملابس، الخزائن التراثية، الأسقف المعمارية',
    description:
      'يمنح المساحات الداخلية رائحة خشبية هادئة تدوم سنوات طويلة ويطرد الرطوبة والعث بشكل طبيعي، ما يجعله مثالياً لخزائن الملابس الفاخرة.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'المهندس طارق القحطاني',
    role: 'مؤسس مكتب رواق للعمارة الداخلية · الرياض',
    project: 'مكتبة الدرعية ومائدة الضيافة',
    quote:
      'كنا نبحث عن ورشة تفهم الرسومات المعمارية بدقة المليمتر وتنفذ تعشيقاً نظيفاً دون حواف خشنة. مع دار السنديان، وصلت المكتبة الجدارية مطابقة للمخطط تماماً وفي الموعد المحدد.',
  },
  {
    id: 't2',
    name: 'سارة العبد الله',
    role: 'مالكة منزل خاص · حي الملقا',
    project: 'مشربية البهو وطاولة الطعام النحتية',
    quote:
      'الطاولة والمشربية تحوّلتا إلى قلب المنزل. ما يميز عملهم هو الصدق في الخامة؛ تلمس الخشب فتشعر بأنه قطعة حية مصقولة بيد فنان لا بآلة مصنع.',
  },
];
