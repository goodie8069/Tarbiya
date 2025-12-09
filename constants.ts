import { SlideData, SlideType } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: SlideType.TITLE,
    title: "KELAJAK SARI",
    subtitle: "Maqsad. Kasb. Sun'iy Intellekt.",
    content: ["Bugungi tanlov — ertangi taqdiringiz poydevoridir."],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    highlight: "KIRISH"
  },
  {
    id: 2,
    type: SlideType.AGENDA,
    title: "TAQDIMOT REJASI",
    content: [
      "I. Maqsad nima va uning mohiyati?",
      "II. Maqsadni to'g'ri qo'yish strategiyasi",
      "III. Maqsadni boshqarish va intizom",
      "IV. Kelajak kasblari: Yangi davr",
      "V. Sun'iy intellekt va inson hamkorligi",
      "VI. Talab ortib borayotgan sohalar",
      "VII. Talab kamayib borayotgan sohalar",
    ],
    highlight: "MUNDARIJA",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
  },
  {
    id: 3,
    type: SlideType.CONTENT_LEFT,
    title: "MAQSAD NIMA?",
    quote: "Maqsad — bu muddati aniq belgilangan orzudir. — Napoleon Hill",
    content: [
      "Maqsad shunchaki istak emas. Istak passiv, maqsad esa harakatga undovchi kuchdir.",
      "Haqiqiy maqsad insonni ertalab uyg'onishga majbur qiladigan va hayotga mazmun beradigan mayoqdir.",
      "U sizning bugungi harakatingiz va ertangi natijangiz o'rtasidagi ko'prikdir."
    ],
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
    highlight: "MOHIYAT"
  },
  {
    id: 4,
    type: SlideType.CENTERED,
    title: "QANDAY QO'YILADI?",
    subtitle: "SMART Strategiyasi va Vizualizatsiya",
    content: [
      "Aniq (Specific): 'Boy bo'lish' emas, 'O'z biznesimni yo'lga qo'yish'.",
      "O'lchovli (Measurable): Natijani raqamlarda ko'ra olishingiz shart.",
      "Erishimli (Achievable): Orzu osmonda, oyoqlar esa yerda bo'lsin.",
      "Muhim (Relevant): Bu maqsad sizning qadriyatlaringizga mosmi?",
      "Vaqt (Time-bound): Dedlaynsiz maqsad — shunchaki xomxayoldir."
    ],
    highlight: "STRATEGIYA",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: 5,
    type: SlideType.CONTENT_RIGHT,
    title: "BOSHQARUV VA INTIZOM",
    quote: "Rejasiz qolgan maqsad — shunchaki tilakdir. — Antuan de Sent-Ekzyuperi",
    content: [
      "Katta maqsadni kichik qadamlarga bo'ling. Har kuni bajariladigan kichik ishlar ulkan natijaga olib keladi.",
      "Doimiy tahlil (Monitoring): Har hafta o'z progressiyangizni tekshiring. Yo'nalish to'g'rimi?",
      "Moslashuvchanlik: Shamol yo'nalishi o'zgarsa, yelkanlarni to'g'irlashni o'rganing, maqsaddan voz kechmang."
    ],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
    highlight: "IJRO"
  },
  {
    id: 6,
    type: SlideType.COMPARISON,
    title: "KELAJAK KASBLARI",
    subtitle: "Yangi davr ko'nikmalari",
    content: [
      "Moslashuvchanlik: O'zgarishlardan qo'rqmaslik va tez o'rganish.",
      "Tanqidiy fikrlash: Ma'lumotlar ummonida to'g'ri qaror qabul qilish.",
      "Emotsional intellekt: Mashinalar qila olmaydigan insoniy munosabatlar.",
    ],
    highlight: "TRANSFORMATSIYA",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 7,
    type: SlideType.CONTENT_LEFT,
    title: "SUN'IY INTELLEKT",
    quote: "AI bizning o'rnimizni egallamaydi, balki AIdan foydalanadigan inson bizni ortda qoldiradi.",
    content: [
      "Yangi kasblar: Prompt-muhandislar, AI etikasi bo'yicha mutaxassislar, Katta ma'lumotlar tahlilchilari.",
      "Inson roli: Ijodkorlik, strategik fikrlash va qaror qabul qilish bizda qoladi.",
      "Hamkorlik: AI — bu raqib emas, balki inson salohiyatini oshiruvchi kuchli vositadir."
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    highlight: "SIMBIOZ"
  },
  {
    id: 8,
    type: SlideType.LIST,
    title: "TALAB YUQORI KASBLAR",
    subtitle: "Ehtiyoj ortib borayotgan sohalar",
    content: [
      "Kiberxavfsizlik mutaxassislari: Raqamli dunyo qo'riqchilari.",
      "Yashil energiya muhandislari: Ekologik muammolar yechimi.",
      "Biotexnologlar: Tibbiyot va texnologiya birlashuvi.",
      "Raqamli kontent yaratuvchilar: Storytelling va media.",
      "Psixologlar va Mentorlar: Ruhiy salomatlik va shaxsiy rivojlanish."
    ],
    highlight: "YUKSALISH",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 9,
    type: SlideType.LIST,
    title: "TALAB KAMAYADIGAN KASBLAR",
    subtitle: "Avtomatlashtirish xavfi ostidagi sohalar",
    content: [
      "Oddiy hisobchilar va kassirlar: Jarayonlar to'liq avtomatlashmoqda.",
      "Ma'lumot kiritish operatorlari: AI bu ishni soniyalarda bajaradi.",
      "Zavod konveyer ishchilari: Robototexnika inson kuchini almashtirmoqda.",
      "An'anaviy tarjimonlar: Sinxron tarjima dasturlari rivojlanmoqda.",
      "Call-markaz xodimlari: Chat-botlar mijozlarga xizmat ko'rsatmoqda."
    ],
    highlight: "O'ZGARISH",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855091?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 10,
    type: SlideType.FINAL,
    title: "XULOSA",
    subtitle: "Kelajak — bugungi harakatingiz aksidir",
    content: ["E'tiboringiz uchun rahmat. O'z kelajagingizni bugun yarating!"],
    image: "https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?q=80&w=2070&auto=format&fit=crop",
    highlight: "MINNATDORCHILIK"
  }
];