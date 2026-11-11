import heroCarpenterImg from '../assets/images/hero_master_carpenter_1794434471851.jpg';
import craftWalnutTableImg from '../assets/images/craft_walnut_table_1794434472086.jpg';
import craftMashrabiyaImg from '../assets/images/craft_mashrabiya_screen_1794434472033.jpg';
import craftLibraryImg from '../assets/images/craft_bespoke_library_1794434472478.jpg';
import workshopJoineryImg from '../assets/images/workshop_video_joinery_1794434472532.jpg';
import craftSedaderImg from '../assets/images/craft_sedader_salon_1794435075787.jpg';
import craftBedImg from '../assets/images/craft_bespoke_bed_1794435076472.jpg';
import craftPlacardsImg from '../assets/images/craft_placards_wardrobe_1794435076370.jpg';
import type {
  CraftCategory,
  CraftWork,
  TestimonialItem,
  VideoSlide,
  WoodSpecimen,
} from './atelierData';

export type Language = 'ar' | 'fr' | 'en';

export const LANGUAGE_OPTIONS: { id: Language; label: string; shortLabel: string }[] = [
  { id: 'ar', label: 'العربية', shortLabel: 'AR' },
  { id: 'fr', label: 'Français', shortLabel: 'FR' },
  { id: 'en', label: 'English', shortLabel: 'EN' },
];

export interface LocalizedContent {
  dir: 'rtl' | 'ltr';
  documentTitle: string;
  brandName: string;
  brandTagline: string;
  themeLightLabel: string;
  themeDarkLabel: string;
  languageAriaLabel: string;
  nav: {
    gallery: string;
    videoSlider: string;
    craft: string;
    testimonials: string;
    requestConsult: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    kicker: string;
    headline: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    caption: string;
    specBadge: string;
    metrics: { value: string; label: string }[];
  };
  gallery: {
    kicker: string;
    title: string;
    filterAria: string;
    detailsBtn: string;
    viewWorkAria: string;
    closeAria: string;
    prevBtn: string;
    nextBtn: string;
    escHint: string;
    specWood: string;
    specJoinery: string;
    specFinish: string;
    specDimensions: string;
    specYear: string;
    filters: { id: CraftCategory; label: string }[];
    works: CraftWork[];
  };
  video: {
    kicker: string;
    title: string;
    autoOn: string;
    autoOff: string;
    currentShot: string;
    play: string;
    pause: string;
    prevSlideAria: string;
    nextSlideAria: string;
    expandAria: string;
    minimizeAria: string;
    muteAria: string;
    unmuteAria: string;
    scrubberAria: string;
    slides: VideoSlide[];
  };
  craft: {
    kicker: string;
    title: string;
    principles: { index: string; title: string; description: string }[];
    labTitle: string;
    labSubtitle: string;
    labAria: string;
    densityLabel: string;
    dryingLabel: string;
    grainLabel: string;
    idealForLabel: string;
    requestWithWood: string;
    specimens: WoodSpecimen[];
  };
  testimonials: {
    kicker: string;
    title: string;
    items: TestimonialItem[];
    bannerTitle: string;
    bannerSubtitle: string;
    bannerCta: string;
  };
  modal: {
    kicker: string;
    title: string;
    closeAria: string;
    successTitle: string;
    successBodyPrefix: string;
    successBodyMid: string;
    successBodySuffix: string;
    refLabel: string;
    backBtn: string;
    errorRequired: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    projectTypeLabel: string;
    woodLabel: string;
    dimensionsLabel: string;
    dimensionsPlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    cancelBtn: string;
    submitBtn: string;
    projectTypes: string[];
  };
  footer: {
    about: string;
    sectionsTitle: string;
    workshopTitle: string;
    address: string;
    hours: string;
    bookVisit: string;
    copyright: string;
    madeWith: string;
  };
}

export const TRANSLATIONS: Record<Language, LocalizedContent> = {
  ar: {
    dir: 'rtl',
    documentTitle: 'دار السنديان | أتيليه النجارة الفنية والأثاث المعماري',
    brandName: 'دار السنديان',
    brandTagline: 'أتيليه النجارة المعمارية والأثاث المصنوع يدوياً',
    themeLightLabel: 'الوضع النهاري',
    themeDarkLabel: 'الوضع الليلي',
    languageAriaLabel: 'اختيار لغة الموقع',
    nav: {
      gallery: 'معرض الأعمال',
      videoSlider: 'سلايد الفيديو',
      craft: 'فلسفة الحِرفة',
      testimonials: 'آراء العملاء',
      requestConsult: 'اطلب استشارة',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
    },
    hero: {
      kicker: 'نجارة معمارية وأثاث مُفصّل يدوياً · الرياض ومراكش',
      headline: 'نُشكّل الخشب الصلب ليبقى إرثاً معمارياً عبر الأجيال',
      lead: 'في مشغل دار السنديان، تتحوّل ألواح الجوز والأرز والبلوط المعتّقة إلى سدادر وأسِرّة وبلاكارات ومكتبات جدارية تُبنى بالتعشيق اليدوي الدقيق، بلا مسامير ظاهرة وبلمسة زيت طبيعي تحفظ روح الشجرة.',
      ctaPrimary: 'استكشف معرض الأعمال',
      ctaSecondary: 'شاهد سلايد الفيديو',
      caption: 'المعلّم عبد الرحمن السنديان — تسوية يدوية للوح جوز طبيعي بسماكة 65 ملم',
      specBadge: '65 ملم · جوز صلب',
      metrics: [
        { value: '24 عاماً', label: 'في النجارة المعمارية الدقيقة' },
        { value: '380+', label: 'قطعة أثاث ومشروع مُنفّذ يدوياً' },
        { value: '100%', label: 'أخشاب صلبة مجففة بالفرن الطبيعي' },
        { value: '12 تقنية', label: 'تعشيق تقليدي خالٍ من المسامير' },
      ],
    },
    gallery: {
      kicker: 'معرض الإبداع الخشبي',
      title: 'أعمال مختارة توثّق دقة النجارة وتفرّد العروق الطبيعية',
      filterAria: 'تصفية الأعمال حسب الفئة',
      detailsBtn: 'تفاصيل القطعة',
      viewWorkAria: 'عرض تفاصيل',
      closeAria: 'إغلاق المعاينة',
      prevBtn: 'السابق',
      nextBtn: 'التالي',
      escHint: 'ESC للإغلاق',
      specWood: 'نوع الخشب',
      specJoinery: 'تقنية التعشيق',
      specFinish: 'التشطيب',
      specDimensions: 'الأبعاد',
      specYear: 'سنة التنفيذ',
      filters: [
        { id: 'all', label: 'جميع الأعمال' },
        { id: 'sedader', label: 'السدادر' },
        { id: 'beds', label: 'الأسِرّة' },
        { id: 'placards', label: 'البلاكارات والمكتبات' },
        { id: 'tables', label: 'الطاولات' },
        { id: 'mashrabiya', label: 'المشربيات' },
        { id: 'joinery', label: 'تفاصيل التعشيق' },
      ],
      works: [
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
      ],
    },
    video: {
      kicker: 'سلايد الفيديو المتحرك من قلب الورشة',
      title: 'شاهد حركة الفأرة والإزميل ولحظة ولادة كل قطعة',
      autoOn: 'تمرير السلايد التلقائي: مفعّل',
      autoOff: 'تمرير السلايد التلقائي: متوقف',
      currentShot: 'اللقطة الحالية:',
      play: 'تشغيل',
      pause: 'إيقاف مؤقت',
      prevSlideAria: 'الشريحة السابقة',
      nextSlideAria: 'الشريحة التالية',
      expandAria: 'تكبير المشغل',
      minimizeAria: 'تصغير المشغل',
      muteAria: 'كتم الصوت',
      unmuteAria: 'تشغيل صوت الورشة المحيطي',
      scrubberAria: 'شريط التقدم الزمني للفيديو',
      slides: [
        {
          id: 'reel-sedader-craft',
          indexLabel: '01 / 04',
          title: 'صناعة السدادر والصالونات المنقوشة',
          subtitle: 'من تسوية ألواح الأرز والجوز بالفأرة إلى نحت الزخارف الهندسية لصالون متكامل',
          durationSeconds: 6,
          durationLabel: '00:06',
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
              timeSeconds: 2,
              timeLabel: '00:02',
              title: 'نحت الزوايا والأكتاف بالإزميل',
              cutImage: workshopJoineryImg,
              cameraMove: 'pan-right',
            },
            {
              timeSeconds: 4,
              timeLabel: '00:04',
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
          durationSeconds: 6,
          durationLabel: '00:06',
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
              timeSeconds: 2,
              timeLabel: '00:02',
              title: 'تنعيم الألواح وإبراز العروق',
              cutImage: heroCarpenterImg,
              cameraMove: 'pan-left',
            },
            {
              timeSeconds: 4,
              timeLabel: '00:04',
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
          durationSeconds: 6,
          durationLabel: '00:06',
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
              timeSeconds: 2,
              timeLabel: '00:02',
              title: 'ضبط الرفوف والمكتبة المخدّدة',
              cutImage: craftLibraryImg,
              cameraMove: 'pan-right',
            },
            {
              timeSeconds: 4,
              timeLabel: '00:04',
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
          durationSeconds: 6,
          durationLabel: '00:06',
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
              timeSeconds: 2,
              timeLabel: '00:02',
              title: 'تشبيك أضلاع المشربية الهندسية',
              cutImage: craftMashrabiyaImg,
              cameraMove: 'pan-right',
            },
            {
              timeSeconds: 4,
              timeLabel: '00:04',
              title: 'فحص الظل واللمعان الطبيعي',
              cutImage: craftWalnutTableImg,
              cameraMove: 'zoom-out',
            },
          ],
        },
      ],
    },
    craft: {
      kicker: 'فلسفة الحِرفة والمواد',
      title: 'ثلاث ركائز تفصل بين الأثاث الاستهلاكي والقطعة الخالدة',
      principles: [
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
      ],
      labTitle: 'مختبر الأخشاب الصلبة المعتمدة',
      labSubtitle:
        'اختر نوع الخشب للاطلاع على خصائص الكثافة والتجفيف والاستخدامات الموصى بها',
      labAria: 'أنواع الأخشاب الطبيعية',
      densityLabel: 'الكثافة النوعية',
      dryingLabel: 'مدة التجفيف',
      grainLabel: 'ملمس العروق',
      idealForLabel: 'الاستخدام الأمثل:',
      requestWithWood: 'اطلب تنفيذاً بهذا الخشب',
      specimens: [
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
      ],
    },
    testimonials: {
      kicker: 'شهادات من الميدان',
      title: 'ثقة المعماريين وأصحاب المنازل',
      items: [
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
      ],
      bannerTitle: 'هل لديك فكرة سدادر أو سرير أو بلاكارات مخصصة؟',
      bannerSubtitle:
        'احجز جلسة معاينة في مشغلنا أو أرسل أبعاد الغرفة لنجهز لك مقترح الأخشاب والتعشيق الملائم.',
      bannerCta: 'احجز استشارة نجارة خاصة',
    },
    modal: {
      kicker: 'حجز موعد معاينة وتصميم',
      title: 'اطلب استشارة نجارة مخصصة',
      closeAria: 'إغلاق النافذة',
      successTitle: 'تم استلام طلب الاستشارة بنجاح',
      successBodyPrefix: 'شكراً لك،',
      successBodyMid: 'سيتواصل معك المعلّم عبد الرحمن أو مهندس الورشة خلال 24 ساعة لتنسيق المعاينة ومناقشة عينات',
      successBodySuffix: '.',
      refLabel: 'رقم الطلب المرجعي:',
      backBtn: 'العودة إلى الموقع',
      errorRequired: 'يرجى إدخال الاسم ورقم الجوال للتواصل معك.',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'مثال: فهد السبيعي',
      phoneLabel: 'رقم الجوال',
      projectTypeLabel: 'نوع القطعة أو المشروع',
      woodLabel: 'الخشب المفضل',
      dimensionsLabel: 'الأبعاد التقريبية (اختياري)',
      dimensionsPlaceholder: 'مثال: 300 × 110 سم',
      notesLabel: 'تفاصيل إضافية أو رؤية التصميم',
      notesPlaceholder: 'اذكر أي تفاصيل حول المساحة أو التشطيب المرغوب...',
      cancelBtn: 'إلغاء',
      submitBtn: 'إرسال طلب الاستشارة',
      projectTypes: [
        'سدادر وصالونات خشبية مخصصة',
        'سرير خشبي صلب بتصميم معماري',
        'بلاكارات وخزائن ملابس مدمجة',
        'طاولة طعام أو مجلس مخصص',
        'مكتبة جدارية أو تكسية خشبية',
        'مشربية أو أبواب معمارية',
      ],
    },
    footer: {
      about:
        'مشغل متخصص في النجارة المعمارية والسدادر والأسِرّة والبلاكارات المصنوعة يدوياً من أجود الأخشاب الصلبة المجففة طبيعياً.',
      sectionsTitle: 'أقسام الموقع',
      workshopTitle: 'الورشة والمعاينة',
      address: 'حي الملقا، طريق أنس بن مالك · الرياض',
      hours: 'السبت — الخميس · 09:00 صباحاً حتى 18:00 مساءً',
      bookVisit: 'حجز موعد زيارة للمشغل',
      copyright: '© 2026 دار السنديان للنجارة الفنية. جميع الحقوق محفوظة.',
      madeWith: 'صُنع بشغف الخشب الطبيعي والتعشيق اليدوي',
    },
  },

  fr: {
    dir: 'ltr',
    documentTitle: 'Dar Al-Sindiyan | Atelier de Menuiserie & Ébénisterie d’Art',
    brandName: 'Dar Al-Sindiyan',
    brandTagline: 'Menuiserie architecturale & mobilier artisanal sur mesure',
    themeLightLabel: 'Mode clair',
    themeDarkLabel: 'Mode sombre',
    languageAriaLabel: 'Choisir la langue du site',
    nav: {
      gallery: 'Réalisations',
      videoSlider: 'Slider Vidéo',
      craft: 'Savoir-Faire',
      testimonials: 'Témoignages',
      requestConsult: 'Demander un devis',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
    },
    hero: {
      kicker: 'Menuiserie architecturale & ébénisterie sur mesure · Riyad & Marrakech',
      headline: 'Façonner le bois massif pour traverser les générations',
      lead: 'À l’atelier Dar Al-Sindiyan, le noyer, le cèdre et le chêne séchés naturellement deviennent des sedari sculptés, lits d’art, placards intégrés et bibliothèques assemblés sans clous apparents.',
      ctaPrimary: 'Explorer la galerie',
      ctaSecondary: 'Voir le slider vidéo',
      caption: 'Maître Abdelrahman Al-Sindiyan — rabotage manuel sur plateau de noyer massif 65 mm',
      specBadge: '65 mm · Noyer massif',
      metrics: [
        { value: '24 ans', label: 'd’expertise en menuiserie d’art' },
        { value: '380+', label: 'pièces et projets sur mesure livrés' },
        { value: '100%', label: 'bois massifs séchés naturellement' },
        { value: '12 types', label: 'd’assemblages traditionnels sans vis' },
      ],
    },
    gallery: {
      kicker: 'Galerie d’Ébénisterie',
      title: 'Œuvres choisies révélant la précision du geste et le veinage naturel',
      filterAria: 'Filtrer les réalisations par catégorie',
      detailsBtn: 'Détails de l’œuvre',
      viewWorkAria: 'Afficher les détails de',
      closeAria: 'Fermer l’aperçu',
      prevBtn: 'Précédent',
      nextBtn: 'Suivant',
      escHint: 'ESC pour fermer',
      specWood: 'Essence de bois',
      specJoinery: 'Assemblage',
      specFinish: 'Finition',
      specDimensions: 'Dimensions',
      specYear: 'Année',
      filters: [
        { id: 'all', label: 'Tout voir' },
        { id: 'sedader', label: 'Sedari' },
        { id: 'beds', label: 'Lits' },
        { id: 'placards', label: 'Placards & Bibliothèques' },
        { id: 'tables', label: 'Tables' },
        { id: 'mashrabiya', label: 'Moucharabiehs' },
        { id: 'joinery', label: 'Assemblages' },
      ],
      works: [
        {
          id: 'walnut-monolith-table',
          title: 'Table sculpturale en noyer & clés papillon en laiton',
          category: 'tables',
          categoryLabel: 'Tables',
          woodSpecies: 'Noyer noir américain massif',
          joineryMethod: 'Clés papillon en laiton & tenons invisibles',
          finish: 'Huile de tung bio et cire d’abeille',
          dimensions: '320 × 115 × 76 cm',
          year: '2026',
          location: 'Villa Al-Nakheel · Riyad',
          description:
            'Table à manger sculpturale façonnée dans deux plateaux symétriques de noyer américain, stabilisée par des clés papillon en laiton poli à la main sur un piètement octogonal.',
          image: craftWalnutTableImg,
          objectPosition: 'center center',
          featured: true,
        },
        {
          id: 'andalusi-cedar-sedader',
          title: 'Sedari marocains sculptés à la main en cèdre & noyer',
          category: 'sedader',
          categoryLabel: 'Sedari',
          woodSpecies: 'Cèdre ancien & noyer massif',
          joineryMethod: 'Sculpture profonde & tenon-mortaise',
          finish: 'Huile de lin naturelle et cire d’abeille chaude',
          dimensions: '420 × 340 × 82 cm',
          year: '2026',
          location: 'Riad Les Fleurs · Marrakech',
          description:
            'Ensemble de sedari haut de gamme aux structures sculptées de motifs géométriques et floraux authentiques, accompagné de sa table basse octogonale assortie.',
          image: craftSedaderImg,
          objectPosition: 'center center',
        },
        {
          id: 'fluted-oak-bespoke-bed',
          title: 'Lit en chêne cannelé & assemblages d’angle apparents',
          category: 'beds',
          categoryLabel: 'Lits',
          woodSpecies: 'Chêne européen & cadre en noyer foncé',
          joineryMethod: 'Queues d’aronde apparentes aux pieds',
          finish: 'Poncage soyeux et vernis mat naturel',
          dimensions: '215 × 200 × 125 cm',
          year: '2026',
          location: 'Suite Principale · Casablanca',
          description:
            'Lit architectural doté d’une large tête de lit cannelée, de chevets suspendus à éclairage intégré et d’assemblages d’angle massifs garantis sans grincement.',
          image: craftBedImg,
          objectPosition: 'center center',
        },
        {
          id: 'builtin-oak-placards',
          title: 'Placards muraux toute hauteur à lames de chêne',
          category: 'placards',
          categoryLabel: 'Placards & Bibliothèques',
          woodSpecies: 'Chêne blanc européen & poignées laiton',
          joineryMethod: 'Façades à claire-voie & amortisseurs silencieux',
          finish: 'Protection mate préservant la teinte brute',
          dimensions: '520 × 295 × 65 cm',
          year: '2026',
          location: 'Dressing sur mesure · Rabat',
          description:
            'Placards intégrés du sol au plafond mêlant portes ajourées pour la ventilation naturelle du linge, niches rétroéclairées et aménagements intérieurs modulables.',
          image: craftPlacardsImg,
          objectPosition: 'center center',
        },
        {
          id: 'geometric-oak-mashrabiya',
          title: 'Moucharabieh géométrique en chêne entrelacé',
          category: 'mashrabiya',
          categoryLabel: 'Moucharabiehs',
          woodSpecies: 'Chêne blanc européen',
          joineryMethod: 'Assemblage à mi-bois sans aucun clou',
          finish: 'Finition mate résistante à l’humidité',
          dimensions: '410 × 290 × 4.5 cm',
          year: '2025',
          location: 'Maison d’Hôtes · Djeddah',
          description:
            'Cloison architecturale inspirée de l’art géométrique classique, composée de 460 pièces de chêne emboîtées à la main pour sculpter la lumière sur la pierre.',
          image: craftMashrabiyaImg,
          objectPosition: 'center center',
        },
        {
          id: 'fluted-oak-library',
          title: 'Bibliothèque murale cannelée en chêne français',
          category: 'placards',
          categoryLabel: 'Placards & Bibliothèques',
          woodSpecies: 'Chêne blanc français & laiton brossé',
          joineryMethod: 'Rainure et languette avec fixations invisibles',
          finish: 'Patine légère et vernis satiné',
          dimensions: '640 × 320 × 42 cm',
          year: '2026',
          location: 'Bibliothèque Privée · Diriyah',
          description:
            'Bibliothèque monumentale du sol au plafond avec soubassements cannelés, éclairage chaud encastré et échelle coulissante en laiton massif.',
          image: craftLibraryImg,
          objectPosition: 'center center',
        },
        {
          id: 'dovetail-masterwork',
          title: 'Assemblage à queues d’aronde taillé au ciseau',
          category: 'joinery',
          categoryLabel: 'Assemblages',
          woodSpecies: 'Chêne rouge séché naturellement',
          joineryMethod: 'Découpe manuelle au ciseau japonais',
          finish: 'Ponçage grain 400 et cire protectrice',
          dimensions: 'Épaisseur 28 mm · Tolérance 0.1 mm',
          year: '2026',
          location: 'Laboratoire d’Atelier · Dar Al-Sindiyan',
          description:
            'Démonstration de précision manuelle au trusquin en laiton et maillet en bois : une liaison mécanique auto-bloquante sans vis ni colle synthétique.',
          image: workshopJoineryImg,
          objectPosition: 'center center',
        },
        {
          id: 'hand-planing-atelier',
          title: 'Plateau de noyer dressé au rabot traditionnel',
          category: 'joinery',
          categoryLabel: 'Assemblages',
          woodSpecies: 'Noyer américain premier choix',
          joineryMethod: 'Corroyage et finition au rabot n° 4',
          finish: 'Surface brute prête à l’huilage',
          dimensions: '280 × 95 × 6.5 cm',
          year: '2026',
          location: 'Atelier Principal · Riyad',
          description:
            'Finition de surface obtenue au rabot à main, ouvrant naturellement les pores du bois pour un toucher soyeux incomparable au ponçage mécanique.',
          image: heroCarpenterImg,
          objectPosition: 'center 35%',
        },
      ],
    },
    video: {
      kicker: 'Slider Vidéo Animé de l’Atelier',
      title: 'Observez le rabot, le ciseau et la naissance de chaque œuvre',
      autoOn: 'Défilement auto : Activé',
      autoOff: 'Défilement auto : En pause',
      currentShot: 'Séquence en cours :',
      play: 'Lecture',
      pause: 'Pause',
      prevSlideAria: 'Vidéo précédente',
      nextSlideAria: 'Vidéo suivante',
      expandAria: 'Plein écran',
      minimizeAria: 'Réduire le lecteur',
      muteAria: 'Couper le son',
      unmuteAria: 'Activer l’ambiance sonore de l’atelier',
      scrubberAria: 'Barre de progression vidéo',
      slides: [
        {
          id: 'reel-sedader-craft',
          indexLabel: '01 / 04',
          title: 'Fabrication de Sedari & Salons sculptés',
          subtitle: 'Du corroyage du cèdre et du noyer jusqu’à la sculpture géométrique du salon complet',
          durationSeconds: 6,
          durationLabel: '00:06',
          woodUsed: 'Cèdre ancien & noyer américain',
          technique: 'Sculpture manuelle & tenon-mortaise',
          image: craftSedaderImg,
          motionPreset: 'dolly-right',
          chapters: [
            {
              timeSeconds: 0,
              timeLabel: '00:00',
              title: 'Rabotage des planches de cèdre',
              cutImage: heroCarpenterImg,
              cameraMove: 'zoom-in',
            },
            {
              timeSeconds: 2,
              timeLabel: '00:02',
              title: 'Taille des angles au ciseau',
              cutImage: workshopJoineryImg,
              cameraMove: 'pan-right',
            },
            {
              timeSeconds: 4,
              timeLabel: '00:04',
              title: 'Installation finale des sedari',
              cutImage: craftSedaderImg,
              cameraMove: 'zoom-out',
            },
          ],
        },
        {
          id: 'reel-bed-joinery',
          indexLabel: '02 / 04',
          title: 'Lits massifs à assemblages d’angle',
          subtitle: 'Réalisation d’un lit en chêne cannelé avec queues d’aronde apparentes',
          durationSeconds: 6,
          durationLabel: '00:06',
          woodUsed: 'Chêne européen & noyer foncé',
          technique: 'Queues d’aronde sans visserie',
          image: craftBedImg,
          motionPreset: 'zoom-center',
          chapters: [
            {
              timeSeconds: 0,
              timeLabel: '00:00',
              title: 'Traçage des angles du lit',
              cutImage: workshopJoineryImg,
              cameraMove: 'zoom-in',
            },
            {
              timeSeconds: 2,
              timeLabel: '00:02',
              title: 'Révélation du veinage au rabot',
              cutImage: heroCarpenterImg,
              cameraMove: 'pan-left',
            },
            {
              timeSeconds: 4,
              timeLabel: '00:04',
              title: 'Rendu final du lit cannelé',
              cutImage: craftBedImg,
              cameraMove: 'zoom-out',
            },
          ],
        },
        {
          id: 'reel-placards-install',
          indexLabel: '03 / 04',
          title: 'Pose de Placards & Bibliothèques murales',
          subtitle: 'Dressings et placards toute hauteur à lames ajourées et éclairage intégré',
          durationSeconds: 6,
          durationLabel: '00:06',
          woodUsed: 'Chêne blanc européen · 28 mm',
          technique: 'Lames verticales & coulisses douces',
          image: craftPlacardsImg,
          motionPreset: 'pan-left',
          chapters: [
            {
              timeSeconds: 0,
              timeLabel: '00:00',
              title: 'Façades des placards sur mesure',
              cutImage: craftPlacardsImg,
              cameraMove: 'pan-left',
            },
            {
              timeSeconds: 2,
              timeLabel: '00:02',
              title: 'Ajustement des rayonnages cannelés',
              cutImage: craftLibraryImg,
              cameraMove: 'pan-right',
            },
            {
              timeSeconds: 4,
              timeLabel: '00:04',
              title: 'Éclairage intérieur et contrôle',
              cutImage: craftPlacardsImg,
              cameraMove: 'zoom-out',
            },
          ],
        },
        {
          id: 'reel-mashrabiya-table',
          indexLabel: '04 / 04',
          title: 'Tables sculpturales & Moucharabiehs',
          subtitle: 'Incrustation de clés papillon en laiton et tressage géométrique du bois',
          durationSeconds: 6,
          durationLabel: '00:06',
          woodUsed: 'Noyer américain & chêne traité',
          technique: 'Incrustation laiton & mi-bois',
          image: craftWalnutTableImg,
          motionPreset: 'tilt-warm',
          chapters: [
            {
              timeSeconds: 0,
              timeLabel: '00:00',
              title: 'Incrustation des clés papillon',
              cutImage: craftWalnutTableImg,
              cameraMove: 'zoom-in',
            },
            {
              timeSeconds: 2,
              timeLabel: '00:02',
              title: 'Tressage du moucharabieh',
              cutImage: craftMashrabiyaImg,
              cameraMove: 'pan-right',
            },
            {
              timeSeconds: 4,
              timeLabel: '00:04',
              title: 'Jeu d’ombres et brillance naturelle',
              cutImage: craftWalnutTableImg,
              cameraMove: 'zoom-out',
            },
          ],
        },
      ],
    },
    craft: {
      kicker: 'Philosophie & Matériaux',
      title: 'Trois piliers qui distinguent le mobilier industriel de l’œuvre durable',
      principles: [
        {
          index: '01.',
          title: 'Sélection de bois nobles',
          description:
            'Chaque plateau est choisi à la main dans nos réserves séchées lentement, avec contrôle d’hygrométrie (8%–10%) et lecture du fil pour une stabilité décennale.',
        },
        {
          index: '02.',
          title: 'Assemblages structurels durables',
          description:
            'Tenons et mortaises, queues d’aronde et clés en laiton absorbent les variations climatiques tout en permettant une restauration aisée sur plusieurs générations.',
        },
        {
          index: '03.',
          title: 'Finition aux huiles organiques',
          description:
            'Sans vernis plastique : nous nourrissons le bois à l’huile de tung et à la cire d’abeille en trois passes pour préserver la chaleur tactile du bois vivant.',
        },
      ],
      labTitle: 'Matériauthèque des Essences Certifiées',
      labSubtitle:
        'Sélectionnez une essence pour consulter sa densité, son séchage et ses usages recommandés',
      labAria: 'Essences de bois naturel',
      densityLabel: 'Densité',
      dryingLabel: 'Temps de séchage',
      grainLabel: 'Veinage',
      idealForLabel: 'Usages privilégiés :',
      requestWithWood: 'Commander dans cette essence',
      specimens: [
        {
          id: 'american-walnut',
          name: 'Noyer Noir Américain',
          origin: 'Amérique du Nord · Grade FAS',
          densityKg: '640 kg/m³',
          dryingTime: '18 mois air & étuve',
          toneClass: 'bg-[#4A3222]',
          grainPattern: 'Veinage ondulé riche aux tons chocolat et caramel',
          idealFor: 'Tables de réception, bureaux de direction, têtes de lit',
          description:
            'Bois précieux alliant dureté et finesse de sculpture. Sa teinte s’approfondit et gagne en chaleur au fil des années sous la lumière naturelle.',
        },
        {
          id: 'european-oak',
          name: 'Chêne Blanc Européen',
          origin: 'Forêts durables de France & d’Allemagne',
          densityKg: '720 kg/m³',
          dryingTime: '24 mois séchage lent',
          toneClass: 'bg-[#B9986B]',
          grainPattern: 'Fibre droite marquée et maillures lumineuses',
          idealFor: 'Placards, bibliothèques murales, moucharabiehs',
          description:
            'Pilier de la menuiserie architecturale : haute résistance à l’usure et à l’humidité, idéal pour les façades cannelées et les treillis géométriques.',
        },
        {
          id: 'burmese-teak',
          name: 'Teck Ancien de Birmanie',
          origin: 'Asie du Sud-Est · Stock ancien',
          densityKg: '680 kg/m³',
          dryingTime: '36 mois séchage naturel',
          toneClass: 'bg-[#8E5B32]',
          grainPattern: 'Veines dorées sombres riches en oléorésines',
          idealFor: 'Portes monumentales, patios, pièces humides',
          description:
            'Naturellement riche en huiles et silice qui le protègent de l’eau et des insectes sans traitement chimique agressif.',
        },
        {
          id: 'cedar-wood',
          name: 'Cèdre Aromatique de Montagne',
          origin: 'Hauts plateaux méditerranéens',
          densityKg: '520 kg/m³',
          dryingTime: '14 mois séchage naturel',
          toneClass: 'bg-[#9E6B4B]',
          grainPattern: 'Grain fin chaleureux et nœuds harmonieux',
          idealFor: 'Sedari traditionnels, dressings, plafonds sculptés',
          description:
            'Diffuse un parfum boisé apaisant durable et protège naturellement les textiles et boiseries contre l’humidité.',
        },
      ],
    },
    testimonials: {
      kicker: 'Retours d’Expérience',
      title: 'La confiance des architectes et propriétaires',
      items: [
        {
          id: 't1',
          name: 'Ing. Tarek Al-Qahtani',
          role: 'Fondateur du studio Riwak Architecture · Riyad',
          project: 'Bibliothèque de Diriyah & table de réception',
          quote:
            'Nous cherchions un atelier capable de lire nos plans au millimètre près et d’exécuter des assemblages impeccables. Dar Al-Sindiyan a livré la bibliothèque exactement conforme et dans les délais.',
        },
        {
          id: 't2',
          name: 'Sarah Al-Abdullah',
          role: 'Propriétaire · Quartier Al-Malqa',
          project: 'Moucharabieh d’entrée & table sculpturale',
          quote:
            'La table et le moucharabieh sont devenus l’âme de la maison. Au toucher, on sent immédiatement le bois vivant façonné par un véritable artisan.',
        },
      ],
      bannerTitle: 'Un projet de sedari, lit massif ou placards sur mesure ?',
      bannerSubtitle:
        'Planifiez une visite à l’atelier ou partagez les dimensions de votre espace pour recevoir une proposition d’essences et d’assemblages.',
      bannerCta: 'Réserver une consultation privée',
    },
    modal: {
      kicker: 'Prise de rendez-vous & étude',
      title: 'Demander une consultation menuiserie',
      closeAria: 'Fermer la fenêtre',
      successTitle: 'Demande de consultation enregistrée',
      successBodyPrefix: 'Merci,',
      successBodyMid: 'Maître Abdelrahman ou notre architecte d’atelier vous contactera sous 24 heures pour convenir d’un rendez-vous et présenter nos échantillons de',
      successBodySuffix: '.',
      refLabel: 'Référence dossier :',
      backBtn: 'Retour au site',
      errorRequired: 'Veuillez saisir votre nom et votre numéro de téléphone.',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Ex. : Karim Benali',
      phoneLabel: 'Téléphone',
      projectTypeLabel: 'Type de réalisation',
      woodLabel: 'Essence souhaitée',
      dimensionsLabel: 'Dimensions estimées (optionnel)',
      dimensionsPlaceholder: 'Ex. : 300 × 110 cm',
      notesLabel: 'Précisions ou vision du projet',
      notesPlaceholder: 'Décrivez votre espace, le style ou la finition souhaitée...',
      cancelBtn: 'Annuler',
      submitBtn: 'Envoyer la demande',
      projectTypes: [
        'Sedari & salons en bois sur mesure',
        'Lit en bois massif architectural',
        'Placards & dressings intégrés',
        'Table à manger ou table de salon',
        'Bibliothèque murale & habillage bois',
        'Moucharabieh ou portes sculptées',
      ],
    },
    footer: {
      about:
        'Atelier spécialisé en menuiserie architecturale, sedari, lits et placards façonnés à la main dans les plus beaux bois massifs.',
      sectionsTitle: 'Navigation',
      workshopTitle: 'Atelier & Visites',
      address: 'Quartier Al-Malqa, Rue Anas Ibn Malik · Riyad',
      hours: 'Samedi — Jeudi · 09:00 à 18:00',
      bookVisit: 'Planifier une visite à l’atelier',
      copyright: '© 2026 Dar Al-Sindiyan Menuiserie d’Art. Tous droits réservés.',
      madeWith: 'Façonné avec passion en bois massif & assemblages manuels',
    },
  },

  en: {
    dir: 'ltr',
    documentTitle: 'Dar Al-Sindiyan | Bespoke Carpentry & Architectural Woodwork',
    brandName: 'Dar Al-Sindiyan',
    brandTagline: 'Architectural carpentry & handcrafted solid wood furniture',
    themeLightLabel: 'Light mode',
    themeDarkLabel: 'Dark mode',
    languageAriaLabel: 'Choose website language',
    nav: {
      gallery: 'Gallery',
      videoSlider: 'Video Slider',
      craft: 'Craftsmanship',
      testimonials: 'Testimonials',
      requestConsult: 'Request Quote',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      kicker: 'Architectural carpentry & bespoke furniture · Riyadh & Marrakech',
      headline: 'Shaping solid timber to endure as architectural heritage',
      lead: 'At Dar Al-Sindiyan, seasoned walnut, cedar, and European oak slabs become carved sedari salons, bespoke beds, built-in wardrobes, and libraries joined by hand without exposed nails.',
      ctaPrimary: 'Explore Gallery',
      ctaSecondary: 'Watch Video Slider',
      caption: 'Master Abdelrahman Al-Sindiyan — hand-planing a 65 mm solid walnut slab',
      specBadge: '65 mm · Solid Walnut',
      metrics: [
        { value: '24 yrs', label: 'in fine architectural woodworking' },
        { value: '380+', label: 'handcrafted commissions delivered' },
        { value: '100%', label: 'kiln & air-seasoned solid hardwoods' },
        { value: '12 joints', label: 'traditional nail-free joinery methods' },
      ],
    },
    gallery: {
      kicker: 'Craftsmanship Gallery',
      title: 'Selected works showcasing joinery precision and natural grain',
      filterAria: 'Filter projects by category',
      detailsBtn: 'Piece Details',
      viewWorkAria: 'View details for',
      closeAria: 'Close preview',
      prevBtn: 'Previous',
      nextBtn: 'Next',
      escHint: 'ESC to close',
      specWood: 'Timber Species',
      specJoinery: 'Joinery',
      specFinish: 'Finish',
      specDimensions: 'Dimensions',
      specYear: 'Year',
      filters: [
        { id: 'all', label: 'All Works' },
        { id: 'sedader', label: 'Sedari' },
        { id: 'beds', label: 'Beds' },
        { id: 'placards', label: 'Wardrobes & Libraries' },
        { id: 'tables', label: 'Tables' },
        { id: 'mashrabiya', label: 'Lattice Screens' },
        { id: 'joinery', label: 'Joinery Details' },
      ],
      works: [
        {
          id: 'walnut-monolith-table',
          title: 'Sculptural Walnut Dining Table with Brass Keys',
          category: 'tables',
          categoryLabel: 'Tables',
          woodSpecies: 'Solid American Black Walnut',
          joineryMethod: 'Inlaid brass butterfly keys & concealed tenons',
          finish: 'Organic tung oil & beeswax',
          dimensions: '320 × 115 × 76 cm',
          year: '2026',
          location: 'Al-Nakheel Villa · Riyadh',
          description:
            'Book-matched American walnut dining table stabilized with hand-inlaid solid brass butterfly dovetail keys resting on faceted octagonal timber pedestals.',
          image: craftWalnutTableImg,
          objectPosition: 'center center',
          featured: true,
        },
        {
          id: 'andalusi-cedar-sedader',
          title: 'Hand-Carved Moroccan Sedari Salon Frames',
          category: 'sedader',
          categoryLabel: 'Sedari',
          woodSpecies: 'Seasoned Cedar & Solid Walnut',
          joineryMethod: 'Deep hand-carving & mortise-and-tenon',
          finish: 'Natural linseed oil & warm beeswax',
          dimensions: '420 × 340 × 82 cm',
          year: '2026',
          location: 'Riad Al-Zohour · Marrakech',
          description:
            'Complete traditional salon sedari ensemble carved with authentic geometric and botanical reliefs, paired with an octagonal solid timber tea table.',
          image: craftSedaderImg,
          objectPosition: 'center center',
        },
        {
          id: 'fluted-oak-bespoke-bed',
          title: 'Fluted White Oak Bed with Exposed Dovetail Corners',
          category: 'beds',
          categoryLabel: 'Beds',
          woodSpecies: 'European Oak & Dark Walnut Frame',
          joineryMethod: 'Exposed corner dovetail joinery',
          finish: 'Silk-sanded matte oil finish',
          dimensions: '215 × 200 × 125 cm',
          year: '2026',
          location: 'Master Suite · Casablanca',
          description:
            'Architectural bed featuring a full-width fluted headboard, floating bedside tables with warm ambient lighting, and solid interlocking corner joints.',
          image: craftBedImg,
          objectPosition: 'center center',
        },
        {
          id: 'builtin-oak-placards',
          title: 'Floor-to-Ceiling Slatted Oak Built-In Wardrobes',
          category: 'placards',
          categoryLabel: 'Wardrobes & Libraries',
          woodSpecies: 'European White Oak & Brushed Brass',
          joineryMethod: 'Vertical slatted doors & soft-close hardware',
          finish: 'Natural raw-tone protective coat',
          dimensions: '520 × 295 × 65 cm',
          year: '2026',
          location: 'Private Dressing · Rabat',
          description:
            'Built-in wall wardrobes combining breathable slatted timber doors, illuminated open display shelving, and tailored solid-wood drawer organizers.',
          image: craftPlacardsImg,
          objectPosition: 'center center',
        },
        {
          id: 'geometric-oak-mashrabiya',
          title: 'Interlocking Geometric Oak Lattice Screen',
          category: 'mashrabiya',
          categoryLabel: 'Lattice Screens',
          woodSpecies: 'European White Oak',
          joineryMethod: 'Half-lap interlocking without nails',
          finish: 'Humidity-resistant matte coat',
          dimensions: '410 × 290 × 4.5 cm',
          year: '2025',
          location: 'Hospitality Pavilion · Jeddah',
          description:
            'Architectural room divider assembled from 460 hand-fitted oak segments arranged in repeating geometric angles that cast living shadow patterns.',
          image: craftMashrabiyaImg,
          objectPosition: 'center center',
        },
        {
          id: 'fluted-oak-library',
          title: 'Fluted White Oak Architectural Library',
          category: 'placards',
          categoryLabel: 'Wardrobes & Libraries',
          woodSpecies: 'French White Oak & Brushed Brass',
          joineryMethod: 'Tongue-and-groove concealed framing',
          finish: 'Light aging patina & satin varnish',
          dimensions: '640 × 320 × 42 cm',
          year: '2026',
          location: 'Private Library · Diriyah',
          description:
            'Floor-to-ceiling custom library shelving with fluted lower cabinets, recessed warm shelf lighting, and a rolling solid brass ladder.',
          image: craftLibraryImg,
          objectPosition: 'center center',
        },
        {
          id: 'dovetail-masterwork',
          title: 'Hand-Chiseled Dovetail Corner Joinery',
          category: 'joinery',
          categoryLabel: 'Joinery Details',
          woodSpecies: 'Air-Dried Red Oak',
          joineryMethod: 'Japanese chisel hand-cut dovetails',
          finish: '400-grit hand polish & clear wax',
          dimensions: '28 mm thick · 0.1 mm tolerance',
          year: '2026',
          location: 'Workshop Lab · Dar Al-Sindiyan',
          description:
            'Macro study of precision hand-cutting with brass marking gauges and chisels—creating a mechanical joint that tightens under load without metal screws.',
          image: workshopJoineryImg,
          objectPosition: 'center center',
        },
        {
          id: 'hand-planing-atelier',
          title: 'Hand-Planed American Walnut Workbench Slab',
          category: 'joinery',
          categoryLabel: 'Joinery Details',
          woodSpecies: 'First-Grade American Walnut',
          joineryMethod: 'Cross-grain smoothing plane finish',
          finish: 'Raw surface ready for oiling',
          dimensions: '280 × 95 × 6.5 cm',
          year: '2026',
          location: 'Main Atelier · Riyadh',
          description:
            'Final surface dressing with a finely tuned hand plane, shearing wood fibers cleanly to reveal natural depth and silky luster beyond mechanical sanding.',
          image: heroCarpenterImg,
          objectPosition: 'center 35%',
        },
      ],
    },
    video: {
      kicker: 'Animated Workshop Video Slider',
      title: 'Watch the hand plane, chisel, and birth of every piece',
      autoOn: 'Auto-slide: On',
      autoOff: 'Auto-slide: Paused',
      currentShot: 'Current Cut:',
      play: 'Play',
      pause: 'Pause',
      prevSlideAria: 'Previous slide',
      nextSlideAria: 'Next slide',
      expandAria: 'Expand player',
      minimizeAria: 'Minimize player',
      muteAria: 'Mute sound',
      unmuteAria: 'Enable workshop ambient audio',
      scrubberAria: 'Video timeline scrubber',
      slides: [
        {
          id: 'reel-sedader-craft',
          indexLabel: '01 / 04',
          title: 'Carved Sedari & Traditional Salon Joinery',
          subtitle: 'From hand-planing cedar and walnut planks to intricate geometric salon carving',
          durationSeconds: 6,
          durationLabel: '00:06',
          woodUsed: 'Seasoned Cedar & American Walnut',
          technique: 'Hand carving & mortise-tenon',
          image: craftSedaderImg,
          motionPreset: 'dolly-right',
          chapters: [
            {
              timeSeconds: 0,
              timeLabel: '00:00',
              title: 'Planing solid cedar boards',
              cutImage: heroCarpenterImg,
              cameraMove: 'zoom-in',
            },
            {
              timeSeconds: 2,
              timeLabel: '00:02',
              title: 'Chiseling geometric joints',
              cutImage: workshopJoineryImg,
              cameraMove: 'pan-right',
            },
            {
              timeSeconds: 4,
              timeLabel: '00:04',
              title: 'Completed sedari salon reveal',
              cutImage: craftSedaderImg,
              cameraMove: 'zoom-out',
            },
          ],
        },
        {
          id: 'reel-bed-joinery',
          indexLabel: '02 / 04',
          title: 'Solid Timber Beds & Exposed Corner Dovetails',
          subtitle: 'Crafting a fluted oak bed frame with interlocking dovetail legs and floating nightstands',
          durationSeconds: 6,
          durationLabel: '00:06',
          woodUsed: 'European Oak & Dark Walnut',
          technique: 'Screw-free dovetail joinery',
          image: craftBedImg,
          motionPreset: 'zoom-center',
          chapters: [
            {
              timeSeconds: 0,
              timeLabel: '00:00',
              title: 'Marking bed corner joints',
              cutImage: workshopJoineryImg,
              cameraMove: 'zoom-in',
            },
            {
              timeSeconds: 2,
              timeLabel: '00:02',
              title: 'Hand-smoothing the grain',
              cutImage: heroCarpenterImg,
              cameraMove: 'pan-left',
            },
            {
              timeSeconds: 4,
              timeLabel: '00:04',
              title: 'Final fluted bed showcase',
              cutImage: craftBedImg,
              cameraMove: 'zoom-out',
            },
          ],
        },
        {
          id: 'reel-placards-install',
          indexLabel: '03 / 04',
          title: 'Built-In Wardrobes & Architectural Libraries',
          subtitle: 'Floor-to-ceiling oak placards with slatted ventilation panels and recessed lighting',
          durationSeconds: 6,
          durationLabel: '00:06',
          woodUsed: 'European White Oak · 28 mm',
          technique: 'Slatted doors & soft-close rails',
          image: craftPlacardsImg,
          motionPreset: 'pan-left',
          chapters: [
            {
              timeSeconds: 0,
              timeLabel: '00:00',
              title: 'Fitting slatted wardrobe fronts',
              cutImage: craftPlacardsImg,
              cameraMove: 'pan-left',
            },
            {
              timeSeconds: 2,
              timeLabel: '00:02',
              title: 'Aligning fluted shelving',
              cutImage: craftLibraryImg,
              cameraMove: 'pan-right',
            },
            {
              timeSeconds: 4,
              timeLabel: '00:04',
              title: 'Interior lighting & inspection',
              cutImage: craftPlacardsImg,
              cameraMove: 'zoom-out',
            },
          ],
        },
        {
          id: 'reel-mashrabiya-table',
          indexLabel: '04 / 04',
          title: 'Sculptural Tables & Lattice Architecture',
          subtitle: 'Brass butterfly key inlays and interlocking oak screens finished in organic oil',
          durationSeconds: 6,
          durationLabel: '00:06',
          woodUsed: 'American Walnut & Treated Oak',
          technique: 'Brass inlay & geometric joinery',
          image: craftWalnutTableImg,
          motionPreset: 'tilt-warm',
          chapters: [
            {
              timeSeconds: 0,
              timeLabel: '00:00',
              title: 'Brass butterfly inlay work',
              cutImage: craftWalnutTableImg,
              cameraMove: 'zoom-in',
            },
            {
              timeSeconds: 2,
              timeLabel: '00:02',
              title: 'Interlocking lattice assembly',
              cutImage: craftMashrabiyaImg,
              cameraMove: 'pan-right',
            },
            {
              timeSeconds: 4,
              timeLabel: '00:04',
              title: 'Oil sheen & daylight inspection',
              cutImage: craftWalnutTableImg,
              cameraMove: 'zoom-out',
            },
          ],
        },
      ],
    },
    craft: {
      kicker: 'Craft Philosophy & Materials',
      title: 'Three principles separating heirloom woodwork from disposable furniture',
      principles: [
        {
          index: '01.',
          title: 'Noble Timber Selection',
          description:
            'Every plank is hand-selected from slow-seasoned stock, moisture-checked (8%–10%), and grain-matched to guarantee decades of stability without warping.',
        },
        {
          index: '02.',
          title: 'Precision Structural Joinery',
          description:
            'We rely on mortise-and-tenon, dovetails, and solid brass keys so each piece breathes with seasonal humidity and can be restored across generations.',
        },
        {
          index: '03.',
          title: 'Organic Oil Finishing',
          description:
            'No synthetic plastic sealants: three hand-rubbed coats of tung oil and pure beeswax preserve the warm tactile grain and authentic timber aroma.',
        },
      ],
      labTitle: 'Certified Hardwood Specimen Lab',
      labSubtitle:
        'Select a timber species to inspect density, seasoning duration, and ideal architectural applications',
      labAria: 'Natural wood species',
      densityLabel: 'Density',
      dryingLabel: 'Seasoning Time',
      grainLabel: 'Grain Character',
      idealForLabel: 'Best suited for:',
      requestWithWood: 'Commission in this timber',
      specimens: [
        {
          id: 'american-walnut',
          name: 'American Black Walnut',
          origin: 'North America · FAS Grade',
          densityKg: '640 kg/m³',
          dryingTime: '18 months air & kiln',
          toneClass: 'bg-[#4A3222]',
          grainPattern: 'Rich wavy grain in chocolate and caramel tones',
          idealFor: 'Dining tables, executive desks, sculptural headboards',
          description:
            'A prized hardwood combining strength with effortless carving clarity, deepening into a warmer luster over years of natural daylight.',
        },
        {
          id: 'european-oak',
          name: 'European White Oak',
          origin: 'Sustainable French & German Forests',
          densityKg: '720 kg/m³',
          dryingTime: '24 months slow seasoning',
          toneClass: 'bg-[#B9986B]',
          grainPattern: 'Crisp straight fibers with luminous medullary rays',
          idealFor: 'Built-in wardrobes, wall libraries, lattice screens',
          description:
            'The backbone of architectural millwork—offering exceptional moisture resistance and crisp definition for fluted cabinetry and latticework.',
        },
        {
          id: 'burmese-teak',
          name: 'Aged Burmese Teak',
          origin: 'Southeast Asia · Reclaimed Stock',
          densityKg: '680 kg/m³',
          dryingTime: '36 months natural cure',
          toneClass: 'bg-[#8E5B32]',
          grainPattern: 'Dark golden ribbons rich in natural oils',
          idealFor: 'Monumental entry doors, courtyards, spa millwork',
          description:
            'Naturally saturated with silica and protective oils that resist water and wear without harsh chemical treatments.',
        },
        {
          id: 'cedar-wood',
          name: 'Aromatic Mountain Cedar',
          origin: 'Mediterranean Highlands',
          densityKg: '520 kg/m³',
          dryingTime: '14 months natural cure',
          toneClass: 'bg-[#9E6B4B]',
          grainPattern: 'Warm fine texture with balanced natural knots',
          idealFor: 'Traditional sedari, walk-in closets, carved ceilings',
          description:
            'Imparts a calming woody fragrance that lasts for years while naturally deterring moisture and moths inside bespoke wardrobes.',
        },
      ],
    },
    testimonials: {
      kicker: 'Client Perspectives',
      title: 'Trusted by architects and discerning homeowners',
      items: [
        {
          id: 't1',
          name: 'Eng. Tarek Al-Qahtani',
          role: 'Founder, Riwak Interior Architecture · Riyadh',
          project: 'Diriyah Library & Dining Table',
          quote:
            'We needed a workshop that reads architectural drawings down to the millimeter and executes crisp joinery. Dar Al-Sindiyan delivered our wall library flawlessly and right on schedule.',
        },
        {
          id: 't2',
          name: 'Sarah Al-Abdullah',
          role: 'Private Homeowner · Al-Malqa District',
          project: 'Entry Lattice Screen & Dining Table',
          quote:
            'The table and lattice screen became the heart of our home. Every surface feels alive and hand-finished by true artisans rather than factory machinery.',
        },
      ],
      bannerTitle: 'Planning bespoke sedari, a solid bed, or built-in wardrobes?',
      bannerSubtitle:
        'Book an atelier consultation or share your room dimensions for tailored timber samples and joinery proposals.',
      bannerCta: 'Book a Private Consultation',
    },
    modal: {
      kicker: 'Studio appointment & design brief',
      title: 'Request a Bespoke Carpentry Consultation',
      closeAria: 'Close dialog',
      successTitle: 'Consultation Request Received',
      successBodyPrefix: 'Thank you,',
      successBodyMid: 'Master Abdelrahman or our workshop engineer will reach out within 24 hours to schedule a viewing and review samples of',
      successBodySuffix: '.',
      refLabel: 'Reference Number:',
      backBtn: 'Back to Website',
      errorRequired: 'Please enter your full name and phone number.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Omar Al-Mansour',
      phoneLabel: 'Phone Number',
      projectTypeLabel: 'Commission Type',
      woodLabel: 'Preferred Timber',
      dimensionsLabel: 'Approximate Dimensions (optional)',
      dimensionsPlaceholder: 'e.g. 300 × 110 cm',
      notesLabel: 'Additional Notes or Design Vision',
      notesPlaceholder: 'Share room details, style preferences, or desired finish...',
      cancelBtn: 'Cancel',
      submitBtn: 'Submit Request',
      projectTypes: [
        'Bespoke Sedari & Wooden Salons',
        'Architectural Solid Wood Bed',
        'Built-In Wardrobes & Closets',
        'Custom Dining or Living Table',
        'Wall Library & Timber Panelling',
        'Lattice Screens & Carved Doors',
      ],
    },
    footer: {
      about:
        'Atelier dedicated to architectural carpentry, carved sedari, solid beds, and custom wardrobes crafted from naturally seasoned hardwoods.',
      sectionsTitle: 'Sections',
      workshopTitle: 'Atelier & Visits',
      address: 'Al-Malqa District, Anas Bin Malik Rd · Riyadh',
      hours: 'Saturday — Thursday · 09:00 AM to 06:00 PM',
      bookVisit: 'Schedule an atelier visit',
      copyright: '© 2026 Dar Al-Sindiyan Fine Woodworking. All rights reserved.',
      madeWith: 'Crafted with natural hardwood & traditional joinery',
    },
  },
};
