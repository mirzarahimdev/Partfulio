export type Locale = 'uz' | 'ru' | 'en'

export const locales: Locale[] = ['uz', 'ru', 'en']

export const localeLabels: Record<Locale, string> = {
  uz: 'UZ',
  ru: 'RU',
  en: 'EN',
}

export const defaultLocale: Locale = 'uz'

export const translations = {
  en: {
    brand: 'MIRZARAHIM',
    available: 'Available for Projects',
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      label: '001 / PERSONAL PORTFOLIO',
      location: 'JIZZAKH, UZBEKISTAN',
      titleLine1: 'Building digital',
      titleLine2: 'experiences.',
      subtitle:
        "I'm Mirzarahim — a Mobile Developer focused on Flutter, Dart and Python.",
      ctaProjects: 'Explore Projects',
      ctaContact: "Let's Talk",
      scroll: 'SCROLL TO EXPLORE',
    },
    about: {
      label: '002 / ABOUT',
      titleLine1: 'Not just code.',
      titleLine2: 'I build solutions.',
      p1: "I'm a developer interested in creating useful digital products and modern mobile applications. My main focus is Flutter and Dart, while Python helps me explore backend development and automation.",
      p2: 'I believe programming is not only about writing code, but also about understanding problems and building meaningful solutions.',
      bio: "I'm Mirzarahim, a mobile developer passionate about building modern digital products. I work with Flutter, Dart and Python to turn ideas into useful applications and digital experiences. I enjoy learning new technologies, solving problems and sharing programming knowledge with beginners.",
      portraitRole: 'Junior mobile developer',
      fields: {
        name: 'NAME',
        location: 'LOCATION',
        specialization: 'SPECIALIZATION',
        technologies: 'MAIN TECHNOLOGIES',
        education: 'EDUCATION',
      },
      values: {
        name: 'Mirzarahim Murodullayev',
        location: 'Jizzakh, Uzbekistan',
        specialization: 'Mobile Development',
        technologies: 'Flutter / Dart / Python',
        education: 'Jizzakh City Technical College No. 1',
      },
    },
    skills: {
      label: '003 / TECH STACK',
      titleLine1: 'Tools I use',
      titleLine2: 'to build ideas.',
      categories: {
        mobile: 'MOBILE DEVELOPMENT',
        backend: 'BACKEND DEVELOPMENT',
        tools: 'DEVELOPMENT TOOLS',
      },
      items: {
        flutter: 'Cross-platform UI framework for modern mobile apps.',
        dart: 'Language behind Flutter — clean, typed and productive.',
        firebase: 'Auth, database and cloud services for mobile products.',
        python: 'Versatile language for APIs, scripts and automation.',
        fastapi: 'High-performance Python framework for building APIs.',
        rest: 'Designing and consuming structured HTTP interfaces.',
        git: 'Version control for reliable collaborative development.',
        github: 'Hosting, review and collaboration around code.',
        docker: 'Containers for consistent environments and delivery.',
        cursor: 'AI-assisted editor for faster, focused coding.',
        vscode: 'Everyday IDE for writing and debugging code.',
      },
    },
    projects: {
      label: '004 / SELECTED PROJECTS',
      title: 'Selected projects.',
      view: 'View Project',
      close: 'Close',
      back: 'Back to projects',
      technologies: 'Technologies',
      status: 'Status',
      overview: 'Overview',
      linkUnavailable: 'Link not configured yet',
      items: {
        antiApk: {
          name: 'Anti-APK_Bot',
          category: 'Telegram Bot',
          description:
            'A Telegram bot project focused on working with APK-related checks and automation for safer mobile file handling.',
          status: 'Showcase',
        },
        shazam: {
          name: 'Shazam_Bot',
          category: 'Telegram Bot',
          description:
            'MusicSave — a Telegram music assistant for searching tracks, recognizing songs, viewing lyrics and saving personal videos.',
          status: 'Showcase',
        },
        myController: {
          name: 'MY_controller',
          category: 'Mobile Application',
          description:
            'MyKontroller — a cross-platform mobile app built with Expo and React Native for device control and notifications.',
          status: 'Showcase',
        },
        emakon: {
          name: 'e-makon',
          category: 'Digital Platform',
          description:
            'A digital platform concept focused on location-based services and map integration.',
          status: 'Concept',
        },
        restoran: {
          name: 'Restoran_web',
          category: 'Web Application',
          description:
            'A restaurant web platform with menu browsing, ordering flow and admin features — React frontend with a Python API.',
          status: 'Showcase',
        },
      },
    },
    experience: {
      label: '005 / MY PROCESS',
      titleLine1: 'From idea',
      titleLine2: 'to reality.',
      steps: {
        discover: {
          title: 'DISCOVER',
          description:
            'Understanding the idea, user needs and requirements.',
        },
        design: {
          title: 'DESIGN',
          description:
            'Planning the structure, interface and user experience.',
        },
        develop: {
          title: 'DEVELOP',
          description:
            'Building functional digital products using modern technologies.',
        },
        improve: {
          title: 'IMPROVE',
          description:
            'Testing, optimizing and continuously improving the product.',
        },
      },
    },
    contact: {
      label: '006 / CONTACT',
      titleLine1: 'Have an idea?',
      titleLine2: "Let's build it.",
      description:
        'Have an interesting project or an idea? Let’s discuss how we can turn it into reality.',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Your full name',
        email: 'Email Address',
        emailPlaceholder: 'you@email.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your idea…',
        submit: 'Send Message',
        sending: 'Sending…',
        required: 'This field is required',
        invalidEmail: 'Please enter a valid email address',
        success:
          'Message copied. Telegram opened when possible — paste and send to @mirzarakhimpy.',
        error: 'Something went wrong. Please try again later.',
      },
      social: 'Connect',
    },
    footer: {
      description: 'Designed with curiosity. Built with code.',
      location: 'Jizzakh, Uzbekistan',
      copyright: '© 2026 Mirzarahim.',
      backToTop: 'Back to Top',
      navigation: 'Navigation',
    },
    role: 'Mobile Developer | Flutter Developer | Python Developer',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  uz: {
    brand: 'MIRZARAHIM',
    available: 'Loyihalar uchun ochiq',
    nav: {
      home: 'Bosh sahifa',
      about: 'Men haqimda',
      skills: 'Ko‘nikmalar',
      projects: 'Loyihalar',
      experience: 'Jarayon',
      contact: 'Aloqa',
    },
    hero: {
      label: '001 / SHAXSIY PORTFOLIO',
      location: 'JIZZAX, O‘ZBEKISTON',
      titleLine1: 'Raqamli',
      titleLine2: 'tajribalar yarataman.',
      subtitle:
        'Men Mirzarahim — Flutter, Dart va Pythonga e’tibor qaratgan Mobile Developer.',
      ctaProjects: 'Loyihalarni ko‘rish',
      ctaContact: 'Bog‘lanish',
      scroll: 'PASTGA SURING',
    },
    about: {
      label: '002 / MEN HAQIMDA',
      titleLine1: 'Faqat kod emas.',
      titleLine2: 'Men yechim yarataman.',
      p1: 'Men foydali raqamli mahsulotlar va zamonaviy mobil ilovalar yaratishga qiziqaman. Asosiy e’tiborim Flutter va Dartga qaratilgan, Python esa backend va avtomatlashtirishni o‘rganishga yordam beradi.',
      p2: 'Dasturlash faqat kod yozish emas — muammolarni tushunish va mazmunli yechimlar yaratishdir.',
      bio: 'Men Mirzarahimman — zamonaviy raqamli mahsulotlar yaratishga ishtiyoqli mobile dasturchiman. Flutter, Dart va Python yordamida g‘oyalarni foydali ilovalar va raqamli tajribalarga aylantiraman. Yangi texnologiyalarni o‘rganish, muammolarni yechish va boshlang‘ichlarga bilim ulashishni yoqtiraman.',
      portraitRole: 'Junior mobile developer',
      fields: {
        name: 'ISM',
        location: 'JOYLASHUV',
        specialization: 'MUTAXASSISLIK',
        technologies: 'ASOSIY TEXNOLOGIYALAR',
        education: 'TA’LIM',
      },
      values: {
        name: 'Mirzarahim Murodullayev',
        location: 'Jizzax, O‘zbekiston',
        specialization: 'Mobil dasturlash',
        technologies: 'Flutter / Dart / Python',
        education: 'Jizzax shahar 1-son texnikum',
      },
    },
    skills: {
      label: '003 / TEXNOLOGIYALAR',
      titleLine1: 'G‘oyalarni',
      titleLine2: 'qurish uchun vositalar.',
      categories: {
        mobile: 'MOBIL DASTURLASH',
        backend: 'BACKEND DASTURLASH',
        tools: 'ISHLAB CHIQISH VOSITALARI',
      },
      items: {
        flutter: 'Zamonaviy mobil ilovalar uchun cross-platform UI framework.',
        dart: 'Flutter asosi — toza, tipga ega va samarali til.',
        firebase: 'Mobil mahsulotlar uchun auth, database va cloud xizmatlar.',
        python: 'API, skriptlar va avtomatlashtirish uchun universial til.',
        fastapi: 'API yaratish uchun yuqori unumdor Python framework.',
        rest: 'Tuzilgan HTTP interfeyslarni loyihalash va iste’mol qilish.',
        git: 'Ishonchli hamkorlik uchun versiya nazorati.',
        github: 'Kod atrofida hosting, review va hamkorlik.',
        docker: 'Bir xil muhit va yetkazib berish uchun konteynerlar.',
        cursor: 'Tezroq va aniqroq kod yozish uchun AI-yordamchi muharrir.',
        vscode: 'Kod yozish va debug qilish uchun kundalik IDE.',
      },
    },
    projects: {
      label: '004 / TANLANGAN LOYIHALAR',
      title: 'Tanlangan loyihalar.',
      view: 'Loyihani ko‘rish',
      close: 'Yopish',
      back: 'Loyihalarga qaytish',
      technologies: 'Texnologiyalar',
      status: 'Holat',
      overview: 'Umumiy ma’lumot',
      linkUnavailable: 'Havola hali sozlanmagan',
      items: {
        antiApk: {
          name: 'Anti-APK_Bot',
          category: 'Telegram Bot',
          description:
            'APK fayllar bilan bog‘liq tekshiruv va avtomatlashtirishga qaratilgan Telegram bot loyihasi.',
          status: 'Namuna',
        },
        shazam: {
          name: 'Shazam_Bot',
          category: 'Telegram Bot',
          description:
            'MusicSave — qo‘shiq qidirish, aniqlash, lyrics ko‘rish va shaxsiy videolarni saqlash uchun Telegram musiqa yordamchisi.',
          status: 'Namuna',
        },
        myController: {
          name: 'MY_controller',
          category: 'Mobil ilova',
          description:
            'MyKontroller — Expo va React Native asosida qurilgan cross-platform mobil ilova: boshqaruv va bildirishnomalar.',
          status: 'Namuna',
        },
        emakon: {
          name: 'e-makon',
          category: 'Raqamli platforma',
          description:
            'Joylashuvga asoslangan xizmatlar va xarita integratsiyasiga e’tibor qaratgan raqamli platforma konsepsiyasi.',
          status: 'Konsepsiya',
        },
        restoran: {
          name: 'Restoran_web',
          category: 'Veb ilova',
          description:
            'Menyu, buyurtma jarayoni va admin imkoniyatlariga ega restoran veb-platformasi — React frontend va Python API.',
          status: 'Namuna',
        },
      },
    },
    experience: {
      label: '005 / MENING JARAYONIM',
      titleLine1: 'G‘oyadan',
      titleLine2: 'haqiqatgacha.',
      steps: {
        discover: {
          title: 'KASHF ETISH',
          description:
            'G‘oya, foydalanuvchi ehtiyojlari va talablarni tushunish.',
        },
        design: {
          title: 'DIZAYN',
          description:
            'Tuzilma, interfeys va foydalanuvchi tajribasini rejalashtirish.',
        },
        develop: {
          title: 'ISHLAB CHIQISH',
          description:
            'Zamonaviy texnologiyalar bilan funksional raqamli mahsulotlar yaratish.',
        },
        improve: {
          title: 'TAKOMILLASHTIRISH',
          description:
            'Testlash, optimallashtirish va mahsulotni doimiy yaxshilash.',
        },
      },
    },
    contact: {
      label: '006 / ALOQA',
      titleLine1: 'G‘oyangiz bormi?',
      titleLine2: 'Keling, birga quramiz.',
      description:
        'Qiziqarli loyiha yoki g‘oyangiz bormi? Uni haqiqatga aylantirish haqida gaplashaylik.',
      form: {
        name: 'To‘liq ism',
        namePlaceholder: 'Ismingiz',
        email: 'Email manzil',
        emailPlaceholder: 'you@email.com',
        message: 'Xabar',
        messagePlaceholder: 'G‘oyangiz haqida yozing…',
        submit: 'Xabar yuborish',
        sending: 'Yuborilmoqda…',
        required: 'Bu maydon majburiy',
        invalidEmail: 'To‘g‘ri email manzilini kiriting',
        success:
          'Xabar nusxalandi. Telegram ochilgan bo‘lishi mumkin — @mirzarakhimpy ga paste qilib yuboring.',
        error: 'Xatolik yuz berdi. Keyinroq qayta urinib ko‘ring.',
      },
      social: 'Ijtimoiy tarmoqlar',
    },
    footer: {
      description: 'Qiziqish bilan dizayn. Kod bilan qurilgan.',
      location: 'Jizzax, O‘zbekiston',
      copyright: '© 2026 Mirzarahim.',
      backToTop: 'Yuqoriga',
      navigation: 'Navigatsiya',
    },
    role: 'Mobile Developer | Flutter Developer | Python Developer',
    menuOpen: 'Menyuni ochish',
    menuClose: 'Menyuni yopish',
  },
  ru: {
    brand: 'MIRZARAHIM',
    available: 'Открыт к проектам',
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      experience: 'Процесс',
      contact: 'Контакты',
    },
    hero: {
      label: '001 / ЛИЧНОЕ ПОРТФОЛИО',
      location: 'ДЖИЗЗАК, УЗБЕКИСТАН',
      titleLine1: 'Создаю цифровые',
      titleLine2: 'впечатления.',
      subtitle:
        'Я Мирзарахим — Mobile Developer с фокусом на Flutter, Dart и Python.',
      ctaProjects: 'Смотреть проекты',
      ctaContact: 'Связаться',
      scroll: 'ЛИСТАЙТЕ ДАЛЬШЕ',
    },
    about: {
      label: '002 / ОБО МНЕ',
      titleLine1: 'Не только код.',
      titleLine2: 'Я создаю решения.',
      p1: 'Я разработчик, которому интересно создавать полезные цифровые продукты и современные мобильные приложения. Основной фокус — Flutter и Dart, а Python помогает изучать backend и автоматизацию.',
      p2: 'Я считаю, что программирование — это не только написание кода, но и понимание задач и создание осмысленных решений.',
      bio: 'Я Мирзарахим — mobile-разработчик, увлечённый созданием современных цифровых продуктов. Работаю с Flutter, Dart и Python, превращая идеи в полезные приложения и цифровые впечатления. Мне нравится изучать новые технологии, решать задачи и делиться знаниями с начинающими.',
      portraitRole: 'Junior mobile developer',
      fields: {
        name: 'ИМЯ',
        location: 'ЛОКАЦИЯ',
        specialization: 'СПЕЦИАЛИЗАЦИЯ',
        technologies: 'ОСНОВНЫЕ ТЕХНОЛОГИИ',
        education: 'ОБРАЗОВАНИЕ',
      },
      values: {
        name: 'Mirzarahim Murodullayev',
        location: 'Джизак, Узбекистан',
        specialization: 'Мобильная разработка',
        technologies: 'Flutter / Dart / Python',
        education: 'Джизакский городской техникум №1',
      },
    },
    skills: {
      label: '003 / ТЕХНОЛОГИИ',
      titleLine1: 'Инструменты,',
      titleLine2: 'которыми я строю идеи.',
      categories: {
        mobile: 'МОБИЛЬНАЯ РАЗРАБОТКА',
        backend: 'BACKEND РАЗРАБОТКА',
        tools: 'ИНСТРУМЕНТЫ РАЗРАБОТКИ',
      },
      items: {
        flutter: 'Кроссплатформенный UI-фреймворк для современных мобильных приложений.',
        dart: 'Язык Flutter — чистый, типизированный и продуктивный.',
        firebase: 'Auth, база данных и облачные сервисы для мобильных продуктов.',
        python: 'Универсальный язык для API, скриптов и автоматизации.',
        fastapi: 'Высокопроизводительный Python-фреймворк для API.',
        rest: 'Проектирование и использование структурированных HTTP-интерфейсов.',
        git: 'Контроль версий для надёжной совместной разработки.',
        github: 'Хостинг, ревью и совместная работа над кодом.',
        docker: 'Контейнеры для стабильных окружений и доставки.',
        cursor: 'AI-редактор для более быстрой и точной разработки.',
        vscode: 'Ежедневная IDE для написания и отладки кода.',
      },
    },
    projects: {
      label: '004 / ИЗБРАННЫЕ ПРОЕКТЫ',
      title: 'Избранные проекты.',
      view: 'Смотреть проект',
      close: 'Закрыть',
      back: 'К проектам',
      technologies: 'Технологии',
      status: 'Статус',
      overview: 'Обзор',
      linkUnavailable: 'Ссылка пока не настроена',
      items: {
        antiApk: {
          name: 'Anti-APK_Bot',
          category: 'Telegram Bot',
          description:
            'Telegram-бот для проверок и автоматизации, связанных с APK-файлами.',
          status: 'Витрина',
        },
        shazam: {
          name: 'Shazam_Bot',
          category: 'Telegram Bot',
          description:
            'MusicSave — Telegram-помощник для поиска музыки, распознавания треков, lyrics и сохранения личных видео.',
          status: 'Витрина',
        },
        myController: {
          name: 'MY_controller',
          category: 'Мобильное приложение',
          description:
            'MyKontroller — кроссплатформенное мобильное приложение на Expo и React Native для управления и уведомлений.',
          status: 'Витрина',
        },
        emakon: {
          name: 'e-makon',
          category: 'Цифровая платформа',
          description:
            'Концепция цифровой платформы с фокусом на геосервисы и интеграцию карт.',
          status: 'Концепт',
        },
        restoran: {
          name: 'Restoran_web',
          category: 'Веб-приложение',
          description:
            'Ресторанная веб-платформа с меню, заказами и админкой — React frontend и Python API.',
          status: 'Витрина',
        },
      },
    },
    experience: {
      label: '005 / МОЙ ПРОЦЕСС',
      titleLine1: 'От идеи',
      titleLine2: 'к реальности.',
      steps: {
        discover: {
          title: 'ИССЛЕДОВАНИЕ',
          description:
            'Понимание идеи, потребностей пользователя и требований.',
        },
        design: {
          title: 'ДИЗАЙН',
          description:
            'Планирование структуры, интерфейса и пользовательского опыта.',
        },
        develop: {
          title: 'РАЗРАБОТКА',
          description:
            'Создание функциональных цифровых продуктов на современных технологиях.',
        },
        improve: {
          title: 'УЛУЧШЕНИЕ',
          description:
            'Тестирование, оптимизация и непрерывное развитие продукта.',
        },
      },
    },
    contact: {
      label: '006 / КОНТАКТЫ',
      titleLine1: 'Есть идея?',
      titleLine2: 'Давайте создадим её.',
      description:
        'Есть интересный проект или идея? Давайте обсудим, как превратить её в реальность.',
      form: {
        name: 'Полное имя',
        namePlaceholder: 'Ваше имя',
        email: 'Email',
        emailPlaceholder: 'you@email.com',
        message: 'Сообщение',
        messagePlaceholder: 'Расскажите о своей идее…',
        submit: 'Отправить',
        sending: 'Отправка…',
        required: 'Это поле обязательно',
        invalidEmail: 'Введите корректный email',
        success:
          'Сообщение скопировано. Telegram может открыться — вставьте и отправьте @mirzarakhimpy.',
        error: 'Что-то пошло не так. Попробуйте позже.',
      },
      social: 'Соцсети',
    },
    footer: {
      description: 'Спроектировано с любопытством. Собрано кодом.',
      location: 'Джизак, Узбекистан',
      copyright: '© 2026 Mirzarahim.',
      backToTop: 'Наверх',
      navigation: 'Навигация',
    },
    role: 'Mobile Developer | Flutter Developer | Python Developer',
    menuOpen: 'Открыть меню',
    menuClose: 'Закрыть меню',
  },
} as const
