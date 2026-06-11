let products = [
  {
    id: "vvgng-ls-3x25",
    title: "ВВГнг(А)-LS 3x2,5",
    category: "Силовой",
    conductor: "Медь",
    voltage: "0,66/1 кВ",
    cores: "3 жилы",
    badge: "Хит",
    image: "assets/power-cable.png",
    description: "Медный силовой кабель для групп освещения, розеточных линий и распределительных щитов.",
    tags: ["нг-LS", "внутренний", "медь"],
    popularity: 98
  },
  {
    id: "vvgng-frls-5x6",
    title: "ВВГнг(А)-FRLS 5x6",
    category: "Силовой",
    conductor: "Медь",
    voltage: "0,66/1 кВ",
    cores: "5 жил",
    badge: "Огнестойкий",
    image: "assets/power-cable.png",
    description: "Огнестойкое решение для линий питания систем безопасности и ответственных потребителей.",
    tags: ["FRLS", "питание", "объект"],
    popularity: 91
  },
  {
    id: "avvg-4x16",
    title: "АВВГ 4x16",
    category: "Силовой",
    conductor: "Алюминий",
    voltage: "0,66/1 кВ",
    cores: "4 жилы",
    badge: "Эконом",
    image: "assets/power-cable.png",
    description: "Алюминиевый кабель для стационарной прокладки в кабельных сооружениях и сетях.",
    tags: ["алюминий", "стационарный", "склад"],
    popularity: 80
  },
  {
    id: "kg-hl-4x10",
    title: "КГтп-ХЛ 4x10",
    category: "Гибкий",
    conductor: "Медь",
    voltage: "0,66 кВ",
    cores: "4 жилы",
    badge: "Холод",
    image: "assets/flex-wire.png",
    description: "Гибкий морозостойкий кабель для подключения передвижного оборудования и временных линий.",
    tags: ["гибкий", "наружный", "ХЛ"],
    popularity: 86
  },
  {
    id: "pvs-3x15",
    title: "ПВС 3x1,5",
    category: "Гибкий",
    conductor: "Медь",
    voltage: "380 В",
    cores: "3 жилы",
    badge: "Популярно",
    image: "assets/flex-wire.png",
    description: "Провод для удлинителей, подключения бытового и монтажного оборудования.",
    tags: ["ПВХ", "подключение", "медь"],
    popularity: 94
  },
  {
    id: "shvvp-2x075",
    title: "ШВВП 2x0,75",
    category: "Гибкий",
    conductor: "Медь",
    voltage: "380 В",
    cores: "2 жилы",
    badge: "Легкий",
    image: "assets/flex-wire.png",
    description: "Плоский гибкий провод для приборов, светильников и маломощных подключений.",
    tags: ["плоский", "приборный", "свет"],
    popularity: 73
  },
  {
    id: "sip2-4x16",
    title: "СИП-2 4x16",
    category: "Самонесущий",
    type: "Воздушный",
    conductor: "Алюминий",
    voltage: "0,6/1 кВ",
    cores: "4 жилы",
    badge: "Улица",
    image: "assets/aerial-cable.png",
    description: "Самонесущий изолированный провод для воздушных линий электропередачи.",
    tags: ["воздушная линия", "наружный", "СИП"],
    popularity: 89
  },
  {
    id: "sip4-2x16",
    title: "СИП-4 2x16",
    category: "Самонесущий",
    type: "Воздушный",
    conductor: "Алюминий",
    voltage: "0,6/1 кВ",
    cores: "2 жилы",
    badge: "Фасад",
    image: "assets/aerial-cable.png",
    description: "Компактный самонесущий провод для ответвлений к зданиям и наружного подключения.",
    tags: ["ответвление", "фасад", "алюминий"],
    popularity: 78
  },
  {
    id: "utp-cat5e",
    title: "UTP Cat.5e 4x2x0,52",
    category: "Связь",
    conductor: "Медь",
    voltage: "до 125 В",
    cores: "4 пары",
    badge: "LAN",
    image: "assets/data-cable.png",
    description: "Кабель витая пара для офисных и складских сетей передачи данных.",
    tags: ["витая пара", "сеть", "LAN"],
    popularity: 87
  },
  {
    id: "ftp-cat6",
    title: "FTP Cat.6 4x2x0,57",
    category: "Связь",
    conductor: "Медь",
    voltage: "до 125 В",
    cores: "4 пары",
    badge: "Экран",
    image: "assets/data-cable.png",
    description: "Экранированный кабель связи для линий с повышенными требованиями к помехозащите.",
    tags: ["Cat.6", "экран", "данные"],
    popularity: 82
  },
  {
    id: "kvvgng-ls-10x15",
    title: "КВВГнг(А)-LS 10x1,5",
    category: "Контрольный",
    conductor: "Медь",
    voltage: "0,66 кВ",
    cores: "10 жил",
    badge: "Автоматика",
    image: "assets/data-cable.png",
    description: "Контрольный кабель для цепей управления, сигнализации и промышленной автоматики.",
    tags: ["контрольный", "управление", "нг-LS"],
    popularity: 84
  },
  {
    id: "pv3-1x6",
    title: "ПВ-3 1x6",
    category: "Установочный",
    conductor: "Медь",
    voltage: "450/750 В",
    cores: "1 жила",
    badge: "Щиты",
    image: "assets/flex-wire.png",
    description: "Гибкий установочный провод для сборки щитов, заземления и коммутации.",
    tags: ["щит", "монтаж", "гибкий"],
    popularity: 90
  },
  {
    id: "sip-3",
    title: "Алюминиевый самонесущий изолированный СИП-3",
    category: "Провод для воздушных линий передач",
    type: "Воздушный",
    conductor: "Алюминий",
    voltage: "по запросу",
    cores: "по запросу",
    badge: "Воздушный",
    image: "assets/aerial-cable.png",
    description: "Самонесущий изолированный провод для воздушных линий электропередачи.",
    tags: ["СИП", "воздушная линия", "алюминий"],
    popularity: 88
  },
  {
    id: "sip-4",
    title: "Алюминиевый самонесущий изолированный СИП-4",
    category: "Провод для воздушных линий передач",
    type: "Воздушный",
    conductor: "Алюминий",
    voltage: "по запросу",
    cores: "по запросу",
    badge: "Воздушный",
    image: "assets/aerial-cable.png",
    description: "Самонесущий изолированный провод для ответвлений и наружных линий.",
    tags: ["СИП", "воздушная линия", "фасад"],
    popularity: 87
  },
  {
    id: "sip-5",
    title: "Алюминиевый самонесущий изолированный СИП-5",
    category: "Провод для воздушных линий передач",
    type: "Воздушный",
    conductor: "Алюминий",
    voltage: "по запросу",
    cores: "по запросу",
    badge: "Воздушный",
    image: "assets/aerial-cable.png",
    description: "Изолированный самонесущий провод для воздушной прокладки.",
    tags: ["СИП", "наружный", "алюминий"],
    popularity: 84
  },
  {
    id: "aluminum-bare-a",
    title: "Алюминиевый неизолированный А",
    category: "Провод для воздушных линий передач",
    type: "Воздушный",
    conductor: "Алюминий",
    voltage: "по запросу",
    cores: "1 жила",
    badge: "ЛЭП",
    image: "assets/aerial-cable.png",
    description: "Неизолированный алюминиевый провод для воздушных линий.",
    tags: ["неизолированный", "ЛЭП", "алюминий"],
    popularity: 73
  },
  {
    id: "aluminum-steel-ac",
    title: "Алюминиевый неизолированный со стальным сердечником АС",
    category: "Провод для воздушных линий передач",
    type: "Воздушный",
    conductor: "Алюминий",
    voltage: "по запросу",
    cores: "стальной сердечник",
    badge: "ЛЭП",
    image: "assets/aerial-cable.png",
    description: "Алюминиевый провод со стальным сердечником для воздушных линий.",
    tags: ["АС", "неизолированный", "сердечник"],
    popularity: 72
  },
  {
    id: "avvg",
    title: "Алюминиевый АВВГ",
    category: "Кабель силовой для стационарной прокладки",
    conductor: "Алюминий",
    voltage: "0,66/1 кВ",
    cores: "по запросу",
    badge: "Силовой",
    image: "assets/power-cable.png",
    description: "Алюминиевый силовой кабель для стационарной прокладки.",
    tags: ["АВВГ", "стационарный", "алюминий"],
    popularity: 86
  },
  {
    id: "avbshv",
    title: "Алюминиевый бронированный АВБШв",
    category: "Кабель силовой для стационарной прокладки",
    conductor: "Алюминий",
    voltage: "0,66/1 кВ",
    cores: "по запросу",
    badge: "Броня",
    image: "assets/power-cable.png",
    description: "Бронированный алюминиевый силовой кабель для защищенной прокладки.",
    tags: ["АВБШв", "бронированный", "силовой"],
    popularity: 82
  },
  {
    id: "apvbshv",
    title: "Алюминиевый бронированный в изоляции из сшитого полиэтилена АПвБШв",
    category: "Кабель силовой для стационарной прокладки",
    conductor: "Алюминий",
    voltage: "по запросу",
    cores: "по запросу",
    badge: "XLPE",
    image: "assets/power-cable.png",
    description: "Бронированный кабель с изоляцией из сшитого полиэтилена.",
    tags: ["АПвБШв", "сшитый полиэтилен", "броня"],
    popularity: 79
  },
  {
    id: "asb",
    title: "Алюминиевый с бумажной изоляцией АСБ",
    category: "Кабель силовой для стационарной прокладки",
    conductor: "Алюминий",
    voltage: "по запросу",
    cores: "по запросу",
    badge: "АСБ",
    image: "assets/power-cable.png",
    description: "Силовой кабель с бумажной пропитанной изоляцией.",
    tags: ["АСБ", "бумажная изоляция", "силовой"],
    popularity: 67
  },
  {
    id: "vbshv",
    title: "Медный бронированный ВБШв",
    category: "Кабель силовой для стационарной прокладки",
    conductor: "Медь",
    voltage: "0,66/1 кВ",
    cores: "по запросу",
    badge: "Броня",
    image: "assets/power-cable.png",
    description: "Медный бронированный кабель для стационарной прокладки.",
    tags: ["ВБШв", "бронированный", "медь"],
    popularity: 81
  },
  {
    id: "vvg",
    title: "Медный ВВГ",
    category: "Кабель силовой для стационарной прокладки",
    conductor: "Медь",
    voltage: "0,66/1 кВ",
    cores: "по запросу",
    badge: "ВВГ",
    image: "assets/power-cable.png",
    description: "Медный силовой кабель для стационарных электрических сетей.",
    tags: ["ВВГ", "стационарный", "медь"],
    popularity: 90
  },
  {
    id: "kvvgng",
    title: "Медный контрольный негорючий КВВГнг",
    category: "Кабель контрольный",
    conductor: "Медь",
    voltage: "0,66 кВ",
    cores: "по запросу",
    badge: "Контрольный",
    image: "assets/data-cable.png",
    description: "Негорючий контрольный кабель для цепей управления и сигнализации.",
    tags: ["КВВГнг", "контрольный", "нг"],
    popularity: 78
  },
  {
    id: "kvvge",
    title: "Медный контрольный экранированный КВВГэ",
    category: "Кабель контрольный",
    conductor: "Медь",
    voltage: "0,66 кВ",
    cores: "по запросу",
    badge: "Экран",
    image: "assets/data-cable.png",
    description: "Экранированный контрольный кабель для цепей управления.",
    tags: ["КВВГэ", "экранированный", "контрольный"],
    popularity: 76
  },
  {
    id: "shpvm",
    title: "Кабель акустический ШПВМ",
    category: "Кабель и провод различного назначения",
    conductor: "Медь",
    voltage: "по запросу",
    cores: "по запросу",
    badge: "Акустика",
    image: "assets/data-cable.png",
    description: "Кабель для подключения акустических систем.",
    tags: ["акустический", "ШПВМ", "связь"],
    popularity: 62
  },
  {
    id: "heating-cable",
    title: "Кабель греющий",
    category: "Кабель и провод различного назначения",
    conductor: "Медь",
    voltage: "по запросу",
    cores: "по запросу",
    badge: "Обогрев",
    image: "assets/flex-wire.png",
    description: "Греющий кабель для систем электрообогрева.",
    tags: ["греющий", "обогрев", "спецкабель"],
    popularity: 71
  },
  {
    id: "mg",
    title: "Провод медный неизолированный гибкий МГ",
    category: "Кабель и провод различного назначения",
    conductor: "Медь",
    voltage: "по запросу",
    cores: "1 жила",
    badge: "Гибкий",
    image: "assets/flex-wire.png",
    description: "Гибкий медный неизолированный провод.",
    tags: ["МГ", "неизолированный", "медь"],
    popularity: 66
  },
  {
    id: "vpp",
    title: "Провод медный водопогружной ВПП",
    category: "Кабель и провод различного назначения",
    conductor: "Медь",
    voltage: "по запросу",
    cores: "по запросу",
    badge: "Вода",
    image: "assets/flex-wire.png",
    description: "Водопогружной провод для подключения оборудования.",
    tags: ["ВПП", "водопогружной", "медь"],
    popularity: 63
  },
  {
    id: "pnsv",
    title: "Провод стальной нагревательный ПНСВ",
    category: "Кабель и провод различного назначения",
    conductor: "Сталь",
    voltage: "по запросу",
    cores: "1 жила",
    badge: "Нагрев",
    image: "assets/flex-wire.png",
    description: "Стальной нагревательный провод для технологического прогрева.",
    tags: ["ПНСВ", "нагревательный", "сталь"],
    popularity: 65
  },
  {
    id: "heat-resistant-copper",
    title: "Кабель термостойкий медный",
    category: "Кабель и провод различного назначения",
    conductor: "Медь",
    voltage: "по запросу",
    cores: "по запросу",
    badge: "Термостойкий",
    image: "assets/power-cable.png",
    description: "Медный термостойкий кабель для повышенных температур.",
    tags: ["термостойкий", "медь", "спецкабель"],
    popularity: 69
  },
  {
    id: "ops-fire-alarm",
    title: "Кабель для ОПС и пожарной сигнализации",
    category: "Кабель и провод различного назначения",
    conductor: "Медь",
    voltage: "по запросу",
    cores: "по запросу",
    badge: "ОПС",
    image: "assets/data-cable.png",
    description: "Кабель для охранно-пожарной сигнализации и слаботочных систем.",
    tags: ["ОПС", "пожарная сигнализация", "слаботочный"],
    popularity: 74
  },
  {
    id: "apv",
    title: "Алюминиевый одножильный АПВ",
    category: "Кабель и провод для электрических установок",
    conductor: "Алюминий",
    voltage: "450/750 В",
    cores: "1 жила",
    badge: "Установка",
    image: "assets/flex-wire.png",
    description: "Алюминиевый установочный одножильный провод.",
    tags: ["АПВ", "установочный", "алюминий"],
    popularity: 68
  },
  {
    id: "appv",
    title: "Алюминиевый плоский АППВ",
    category: "Кабель и провод для электрических установок",
    conductor: "Алюминий",
    voltage: "450/750 В",
    cores: "по запросу",
    badge: "Плоский",
    image: "assets/flex-wire.png",
    description: "Плоский алюминиевый установочный провод.",
    tags: ["АППВ", "плоский", "установочный"],
    popularity: 64
  },
  {
    id: "apunp",
    title: "Алюминиевый универсальный АПУНП",
    category: "Кабель и провод для электрических установок",
    conductor: "Алюминий",
    voltage: "450/750 В",
    cores: "по запросу",
    badge: "Универсальный",
    image: "assets/flex-wire.png",
    description: "Универсальный алюминиевый провод для электрических установок.",
    tags: ["АПУНП", "установочный", "алюминий"],
    popularity: 61
  },
  {
    id: "pv",
    title: "Медный ПВ",
    category: "Кабель и провод для электрических установок",
    conductor: "Медь",
    voltage: "450/750 В",
    cores: "1 жила",
    badge: "ПВ",
    image: "assets/flex-wire.png",
    description: "Медный установочный провод для электрических установок.",
    tags: ["ПВ", "установочный", "медь"],
    popularity: 77
  },
  {
    id: "ppv",
    title: "Медный плоский ППВ",
    category: "Кабель и провод для электрических установок",
    conductor: "Медь",
    voltage: "450/750 В",
    cores: "по запросу",
    badge: "Плоский",
    image: "assets/flex-wire.png",
    description: "Плоский медный провод для электрических установок.",
    tags: ["ППВ", "плоский", "медь"],
    popularity: 70
  },
  {
    id: "pvs-ttr",
    title: "Медный соединительный гибкий ПВС (TTR)",
    category: "Кабель и провод для электрических установок",
    conductor: "Медь",
    voltage: "380 В",
    cores: "по запросу",
    badge: "Гибкий",
    image: "assets/flex-wire.png",
    description: "Гибкий медный соединительный провод.",
    tags: ["ПВС", "TTR", "соединительный"],
    popularity: 83
  },
  {
    id: "shvvp",
    title: "Медный соединительный плоский ШВВП",
    category: "Кабель и провод для электрических установок",
    conductor: "Медь",
    voltage: "380 В",
    cores: "по запросу",
    badge: "Плоский",
    image: "assets/flex-wire.png",
    description: "Плоский медный соединительный провод.",
    tags: ["ШВВП", "соединительный", "плоский"],
    popularity: 75
  },
  {
    id: "rpsh",
    title: "Медный резиновый кабель управления РПШ",
    category: "Кабель для нестационарной прокладки",
    conductor: "Медь",
    voltage: "по запросу",
    cores: "по запросу",
    badge: "Управление",
    image: "assets/power-cable.png",
    description: "Резиновый кабель управления для нестационарной прокладки.",
    tags: ["РПШ", "резиновый", "управление"],
    popularity: 70
  },
  {
    id: "kgtp",
    title: "Медный повышенной гибкости с изоляцией из термоэластопласта КГтп",
    category: "Кабель для нестационарной прокладки",
    conductor: "Медь",
    voltage: "0,66 кВ",
    cores: "по запросу",
    badge: "Гибкий",
    image: "assets/flex-wire.png",
    description: "Кабель повышенной гибкости с изоляцией из термоэластопласта.",
    tags: ["КГтп", "термоэластопласт", "гибкий"],
    popularity: 82
  },
  {
    id: "kg",
    title: "Медный резиновый гибкий КГ",
    category: "Кабель для нестационарной прокладки",
    conductor: "Медь",
    voltage: "0,66 кВ",
    cores: "по запросу",
    badge: "Гибкий",
    image: "assets/flex-wire.png",
    description: "Медный резиновый гибкий кабель для подключения передвижного оборудования.",
    tags: ["КГ", "резиновый", "гибкий"],
    popularity: 84
  },
  {
    id: "sheet-cable-tray-100x50",
    title: "Листовой кабельный лоток 100x50",
    category: "Кабеленесущие системы",
    type: "Лоток листовой",
    conductor: "Оцинкованная сталь",
    voltage: "перфорация / оцинковка",
    cores: "100x50 мм",
    badge: "Трасса",
    image: "assets/tray-sheet.png",
    description: "Металлический перфорированный лоток для открытой прокладки силовых и слаботочных линий на объектах.",
    tags: ["лоток", "перфорированный", "оцинковка"],
    popularity: 93
  },
  {
    id: "wire-cable-tray-60x100",
    title: "Проволочный кабельный лоток 60x100",
    category: "Кабеленесущие системы",
    type: "Лоток проволочный",
    conductor: "Оцинкованная сталь",
    voltage: "вентиляция кабеля",
    cores: "60x100 мм",
    badge: "Легкий",
    image: "assets/wire-tray.png",
    description: "Проволочный лоток для быстрых трасс внутри помещений, удобен для ответвлений и обслуживания кабеля.",
    tags: ["проволочный", "СКС", "внутри"],
    popularity: 88
  },
  {
    id: "ladder-cable-tray-200",
    title: "Лестничный лоток 200 мм",
    category: "Кабеленесущие системы",
    type: "Лоток лестничный",
    conductor: "Сталь",
    voltage: "высокая несущая способность",
    cores: "ширина 200 мм",
    badge: "Нагрузка",
    image: "assets/ladder-tray.png",
    description: "Жесткая лестничная секция для тяжелых кабельных линий, магистралей и открытых промышленных трасс.",
    tags: ["лестничный", "магистраль", "тяжелый кабель"],
    popularity: 86
  },
  {
    id: "cable-channel-40x25",
    title: "Кабель-канал 40x25 с крышкой",
    category: "Кабеленесущие системы",
    type: "Кабель-канал",
    conductor: "ПВХ",
    voltage: "самозатухающий ПВХ",
    cores: "40x25 мм",
    badge: "Офис",
    image: "assets/cable-channel.png",
    description: "Пластиковый короб для аккуратной прокладки проводки в офисах, торговых залах и административных помещениях.",
    tags: ["короб", "ПВХ", "интерьер"],
    popularity: 92
  },
  {
    id: "pvc-corrugated-pipe-20",
    title: "Гофрированная труба ПВХ d20",
    category: "Кабеленесущие системы",
    type: "Гофротруба",
    conductor: "ПВХ",
    voltage: "гибкая прокладка",
    cores: "d20 мм",
    badge: "Гибкая",
    image: "assets/pvc-corrugated.png",
    description: "Гофротруба для защиты кабеля в стенах, перекрытиях и открытых трассах с поворотами.",
    tags: ["гофра", "труба", "монтаж"],
    popularity: 90
  },
  {
    id: "metal-hose-rz-ts-25",
    title: "Металлорукав РЗ-Ц d25",
    category: "Кабеленесущие системы",
    type: "Металлорукав",
    conductor: "Оцинкованная сталь",
    voltage: "механическая защита",
    cores: "d25 мм",
    badge: "Защита",
    image: "assets/metal-hose.png",
    description: "Гибкая металлическая оболочка для участков, где кабелю нужна защита от ударов, истирания и помех.",
    tags: ["металлорукав", "экран", "защита"],
    popularity: 89
  },
  {
    id: "mounting-profile-strut",
    title: "Монтажный профиль перфорированный",
    category: "Кабеленесущие системы",
    type: "Профиль",
    conductor: "Оцинкованная сталь",
    voltage: "перфорация под крепеж",
    cores: "41x41 мм",
    badge: "Монтаж",
    image: "assets/mounting-profile.png",
    description: "Профиль для сборки подвесов, рам и опор под кабельные лотки и инженерные трассы.",
    tags: ["профиль", "подвес", "опора"],
    popularity: 78
  },
  {
    id: "console-bracket-tray",
    title: "Консоль настенная для лотка",
    category: "Кабеленесущие системы",
    type: "Кронштейн",
    conductor: "Сталь",
    voltage: "настенный монтаж",
    cores: "200 мм",
    badge: "Крепеж",
    image: "assets/console-bracket.png",
    description: "Кронштейн для крепления кабельных лотков к стенам, колоннам и монтажным конструкциям.",
    tags: ["консоль", "кронштейн", "крепление"],
    popularity: 76
  },
  {
    id: "tray-cover-100",
    title: "Крышка для кабельного лотка 100 мм",
    category: "Кабеленесущие системы",
    type: "Крышка лотка",
    conductor: "Оцинкованная сталь",
    voltage: "защита трассы",
    cores: "ширина 100 мм",
    badge: "Аксессуар",
    image: "assets/tray-cover.png",
    description: "Крышка защищает открытую трассу от пыли, случайного контакта и механических воздействий.",
    tags: ["крышка", "лоток", "аксессуар"],
    popularity: 74
  },
  {
    id: "junction-box-pvc",
    title: "Коробка распределительная ПВХ",
    category: "Кабеленесущие системы",
    type: "Коробка",
    conductor: "ПВХ",
    voltage: "IP по запросу",
    cores: "100x100 мм",
    badge: "Узел",
    image: "assets/junction-box.png",
    description: "Распределительная коробка для соединения, ответвления и обслуживания кабельных линий.",
    tags: ["коробка", "ответвление", "ПВХ"],
    popularity: 73
  },
  {
    id: "floor-cable-channel",
    title: "Напольный кабель-канал",
    category: "Кабеленесущие системы",
    type: "Напольный канал",
    conductor: "ПВХ / резина",
    voltage: "защита проходов",
    cores: "2 канала",
    badge: "Безопасность",
    image: "assets/floor-channel.png",
    description: "Напольный канал для временной или постоянной защиты кабеля в проходных зонах.",
    tags: ["напольный", "проход", "защита"],
    popularity: 72
  },
  {
    id: "tray-fasteners-set",
    title: "Комплект крепежа для лотков",
    category: "Кабеленесущие системы",
    type: "Крепеж",
    conductor: "Сталь",
    voltage: "болты / гайки / шайбы",
    cores: "М6-М8",
    badge: "Комплект",
    image: "assets/fasteners.png",
    description: "Набор крепежных элементов для соединения секций, крышек, консолей и аксессуаров кабельной трассы.",
    tags: ["крепеж", "болты", "монтаж"],
    popularity: 80
  }
];

const SUPABASE_CONFIG = {
  url: "https://dbyejxbkqzqcpkukfmcn.supabase.co",
  publishableKey: "sb_publishable_YiFz3mPj13A9yqeLZnqXPg_4yQZvOkw"
};

const SUPABASE_TABLES = {
  products: "cable_products",
  requests: "quote_requests"
};

const EMAIL_CONFIG = {
  recipient: "centralasiaenerg@gmail.com",
  endpoint: "https://formsubmit.co/ajax/centralasiaenerg@gmail.com"
};

const ASSET_VERSION = "20260611-catalog-groups";
const AUTH_STORAGE_KEY = "cae_supabase_session";

const state = {
  section: "Все",
  group: "Все",
  conductor: "Все",
  search: "",
  sort: "popular",
  quote: [],
  auth: {
    mode: "login",
    session: null,
    user: null
  }
};

const sectionFilters = document.querySelector("#sectionFilters");
const categoryFilters = document.querySelector("#categoryFilters");
const conductorFilters = document.querySelector("#conductorFilters");
const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const resetFilters = document.querySelector("#resetFilters");
const quoteList = document.querySelector("#quoteList");
const quoteEmpty = document.querySelector("#quoteEmpty");
const clearQuote = document.querySelector("#clearQuote");
const requestForm = document.querySelector("#requestForm");
const formStatus = document.querySelector("#formStatus");
const heroProductCount = document.querySelector("#heroProductCount");
const authOpen = document.querySelector("#authOpen");
const authDialog = document.querySelector("#authDialog");
const authClose = document.querySelector("#authClose");
const authForm = document.querySelector("#authForm");
const authStatus = document.querySelector("#authStatus");
const authSubmit = document.querySelector("#authSubmit");
const authLoginTab = document.querySelector("#authLoginTab");
const authRegisterTab = document.querySelector("#authRegisterTab");
const requestAuthNote = document.querySelector("#requestAuthNote");

function isSupabaseConfigured() {
  return /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(SUPABASE_CONFIG.url);
}

function getSavedSession() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "null");
  } catch (error) {
    console.warn("Auth session restore failed:", error);
    return null;
  }
}

function saveSession(session, user) {
  state.auth.session = session;
  state.auth.user = user || session?.user || null;

  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({
      session: state.auth.session,
      user: state.auth.user
    }));
  } catch (error) {
    console.warn("Auth session save failed:", error);
  }

  renderAuthState();
}

function clearSession() {
  state.auth.session = null;
  state.auth.user = null;
  localStorage.removeItem(AUTH_STORAGE_KEY);
  renderAuthState();
}

function normalizeSession(payload) {
  if (!payload?.access_token) return null;

  return {
    access_token: payload.access_token,
    refresh_token: payload.refresh_token || state.auth.session?.refresh_token || null,
    token_type: payload.token_type || "bearer",
    expires_at: payload.expires_at || Math.floor(Date.now() / 1000) + Number(payload.expires_in || 3600),
    user: payload.user || state.auth.user
  };
}

function decodeJwtPayload(token) {
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(atob(base64).split("").map((char) => {
      return `%${(`00${char.charCodeAt(0).toString(16)}`).slice(-2)}`;
    }).join(""));
    return JSON.parse(json);
  } catch (error) {
    console.warn("Auth token decode failed:", error);
    return null;
  }
}

function consumeAuthRedirect() {
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const query = new URLSearchParams(window.location.search);
  const params = hash.has("access_token") ? hash : query;
  const accessToken = params.get("access_token");

  if (!accessToken) return false;

  const jwt = decodeJwtPayload(accessToken);
  const session = normalizeSession({
    access_token: accessToken,
    refresh_token: params.get("refresh_token"),
    token_type: params.get("token_type") || "bearer",
    expires_in: Number(params.get("expires_in") || 3600),
    user: jwt ? { id: jwt.sub, email: jwt.email } : null
  });

  if (!session) return false;

  saveSession(session, session.user);
  window.history.replaceState({}, document.title, window.location.pathname);
  return true;
}

async function supabaseAuthRequest(path, options = {}) {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase URL is not configured.");
  }

  const response = await fetch(`${SUPABASE_CONFIG.url}${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_CONFIG.publishableKey,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  const text = await response.text();
  let payload = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = { message: text };
    }
  }

  if (!response.ok) {
    throw new Error(payload?.msg || payload?.message || payload?.error_description || `Auth failed with ${response.status}`);
  }

  return payload;
}

async function refreshAuthSession() {
  if (!state.auth.session?.refresh_token) return null;

  try {
    const payload = await supabaseAuthRequest("/auth/v1/token?grant_type=refresh_token", {
      method: "POST",
      body: JSON.stringify({ refresh_token: state.auth.session.refresh_token })
    });
    const session = normalizeSession(payload);
    if (session) saveSession(session, payload.user);
    return session;
  } catch (error) {
    console.warn("Auth refresh failed:", error);
    clearSession();
    return null;
  }
}

async function getAuthToken() {
  const session = state.auth.session;
  if (!session?.access_token) return null;

  const expiresAt = Number(session.expires_at || 0);
  const shouldRefresh = expiresAt && expiresAt - Math.floor(Date.now() / 1000) < 60;
  if (shouldRefresh) {
    const refreshed = await refreshAuthSession();
    return refreshed?.access_token || null;
  }

  return session.access_token;
}

async function requireFreshAuthToken() {
  const token = await getAuthToken();
  if (token) return token;

  clearSession();
  throw new Error("AUTH_REQUIRED");
}

async function restoreAuthSession() {
  if (consumeAuthRedirect()) return;

  const saved = getSavedSession();
  if (!saved?.session?.access_token) {
    renderAuthState();
    return;
  }

  state.auth.session = saved.session;
  state.auth.user = saved.user || saved.session.user || null;

  const expiresAt = Number(saved.session.expires_at || 0);
  if (expiresAt && expiresAt <= Math.floor(Date.now() / 1000)) {
    await refreshAuthSession();
    return;
  }

  renderAuthState();
}

function renderAuthState() {
  const isAuthenticated = Boolean(state.auth.session?.access_token);
  const email = state.auth.user?.email || "аккаунт";

  authOpen.textContent = isAuthenticated ? "Выйти" : "Войти";
  authOpen.title = isAuthenticated ? `Выйти из ${email}` : "Войти или зарегистрироваться";
  authOpen.classList.toggle("is-authenticated", isAuthenticated);

  if (requestAuthNote) {
    requestAuthNote.textContent = isAuthenticated
      ? `Заявка будет отправлена из аккаунта ${email}.`
      : "Для отправки заявки войдите или зарегистрируйтесь. Заявка будет привязана к вашему аккаунту.";
  }
}

function setAuthMode(mode) {
  state.auth.mode = mode;
  const isRegister = mode === "register";
  authSubmit.textContent = isRegister ? "Зарегистрироваться" : "Войти";
  authLoginTab.classList.toggle("is-active", !isRegister);
  authRegisterTab.classList.toggle("is-active", isRegister);
  authStatus.textContent = "";
}

function openAuthDialog(mode = "login") {
  setAuthMode(mode);
  authForm.reset();
  authDialog.showModal();
}

async function handleLogout() {
  const token = state.auth.session?.access_token;
  if (token) {
    try {
      await supabaseAuthRequest("/auth/v1/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.warn("Supabase logout warning:", error);
    }
  }

  clearSession();
}

async function supabaseRequest(path, options = {}) {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase URL is not configured.");
  }

  const token = await getAuthToken();

  const response = await fetch(`${SUPABASE_CONFIG.url}${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_CONFIG.publishableKey,
      Authorization: `Bearer ${token || SUPABASE_CONFIG.publishableKey}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || `Supabase request failed with ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

function normalizeProduct(row) {
  return {
    id: String(row.slug || row.id),
    title: row.title || row.name || "Без названия",
    category: row.category || "Другое",
    type: row.type || row.cable_type || "",
    conductor: row.conductor || "Не указано",
    voltage: row.voltage || "по запросу",
    cores: row.cores || "по запросу",
    badge: row.badge || "В наличии",
    image: row.image_url || row.image || "assets/power-cable.png",
    description: row.description || "Позиция каталога кабеля и провода.",
    tags: Array.isArray(row.tags) ? row.tags : [],
    popularity: Number(row.popularity || 0)
  };
}

function assetUrl(path) {
  if (!path || !path.startsWith("assets/")) return path;
  return `${path}?v=${ASSET_VERSION}`;
}

function formatQuoteForEmail(items) {
  return items
    .map((item, index) => {
      const product = products.find((entry) => entry.id === item.id) || item;
      return [
        `${index + 1}. ${item.title}`,
        `Раздел: ${getProductSection(product)}`,
        `Группа: ${getProductGroup(product)}`,
        `Тип: ${item.type || "по запросу"}`,
        `Материал: ${item.conductor}`,
        `Параметр: ${item.voltage}`,
        `Исполнение: ${item.cores}`,
        `Количество: ${item.qty} шт.`
      ].join("\n");
    })
    .join("\n\n");
}

async function sendEmailNotification(request) {
  const accountEmail = state.auth.user?.email || "не указан";
  const submittedAt = new Date().toLocaleString("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short"
  });

  const payload = {
    _subject: "Новая заявка CentralAsiaEnergetics",
    _template: "table",
    _captcha: "false",
    _replyto: request.customer_contact.includes("@") ? request.customer_contact : EMAIL_CONFIG.recipient,
    "Имя клиента": request.customer_name,
    "Телефон или email": request.customer_contact,
    "Комментарий": request.comment || "без комментария",
    "Аккаунт": accountEmail,
    "Дата": submittedAt,
    "Позиций": String(request.items.length),
    "Состав заявки": formatQuoteForEmail(request.items)
  };

  const response = await fetch(EMAIL_CONFIG.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  let body = null;
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = { message: text };
    }
  }

  if (!response.ok || body?.success === "false") {
    return submitEmailFallback(payload);
  }

  return body;
}

function submitEmailFallback(payload) {
  return new Promise((resolve) => {
    const iframeName = `email_target_${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.hidden = true;

    const form = document.createElement("form");
    form.method = "POST";
    form.action = EMAIL_CONFIG.endpoint.replace("/ajax/", "/");
    form.target = iframeName;
    form.hidden = true;

    Object.entries(payload).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = String(value);
      form.append(input);
    });

    document.body.append(iframe, form);
    form.submit();

    setTimeout(() => {
      form.remove();
      iframe.remove();
      resolve({ success: true, fallback: true });
    }, 1200);
  });
}

function getProductSection(product) {
  if (product.section) return product.section;
  return product.category === "Кабеленесущие системы" ? "Кабеленесущие системы" : "Кабели";
}

function getCableGroup(product) {
  const text = `${product.category} ${product.title} ${product.type || ""}`.toLowerCase();

  if (text.includes("силов")) return "Силовой";
  if (text.includes("гиб") || text.includes("нестационар")) return "Гибкий";
  if (text.includes("сип") || text.includes("самонес") || text.includes("воздуш")) return "Самонесущий";
  if (text.includes("контроль")) return "Контрольный";
  if (text.includes("установ") || text.includes("электрических установок")) return "Установочный";
  if (text.includes("связ") || text.includes("utp") || text.includes("ftp")) return "Связь";
  if (text.includes("различного") || text.includes("специаль")) return "Специальный";
  return "Прочие кабели";
}

function getSystemGroup(product) {
  const text = `${product.type || ""} ${product.title}`.toLowerCase();

  if (text.includes("листовой")) return "Листовые лотки";
  if (text.includes("проволочный")) return "Проволочные лотки";
  if (text.includes("лестничный")) return "Лестничные лотки";
  if (text.includes("кабель-канал") || text.includes("канал")) return "Кабель-каналы";
  if (text.includes("гофр") || text.includes("труба") || text.includes("металлорукав")) return "Трубы и металлорукав";
  return "Крепеж и аксессуары";
}

function getProductGroup(product) {
  return getProductSection(product) === "Кабеленесущие системы"
    ? getSystemGroup(product)
    : getCableGroup(product);
}

async function loadProductsFromSupabase() {
  if (!isSupabaseConfigured()) return;

  try {
    const rows = await supabaseRequest(
      `/rest/v1/${SUPABASE_TABLES.products}?select=*&is_active=eq.true&order=popularity.desc`
    );

    if (Array.isArray(rows) && rows.length > 0) {
      const localProducts = products;
      const merged = new Map(localProducts.map((product) => [product.id, product]));
      rows.map(normalizeProduct).forEach((product) => merged.set(product.id, product));
      products = [...merged.values()];
      state.section = "Все";
      state.group = "Все";
      state.conductor = "Все";
      render();
    }
  } catch (error) {
    console.warn("Supabase products fallback:", error);
  }
}

function uniqueValues(key) {
  let values = products;

  if (key !== "section" && state.section !== "Все") {
    values = values.filter((product) => getProductSection(product) === state.section);
  }

  if (key === "section") return ["Все", ...new Set(values.map(getProductSection))];
  if (key === "group") return ["Все", ...new Set(values.map(getProductGroup))];
  return ["Все", ...new Set(values.map((product) => product[key]))];
}

function renderChipGroup(node, values, activeValue, onSelect) {
  node.innerHTML = "";

  values.forEach((value) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.textContent = value;
    button.setAttribute("aria-pressed", String(value === activeValue));
    button.addEventListener("click", () => onSelect(value));
    node.append(button);
  });
}

function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();

  return products
    .filter((product) => state.section === "Все" || getProductSection(product) === state.section)
    .filter((product) => state.group === "Все" || getProductGroup(product) === state.group)
    .filter((product) => state.conductor === "Все" || product.conductor === state.conductor)
    .filter((product) => {
      if (!query) return true;
      const haystack = [
        getProductSection(product),
        getProductGroup(product),
        product.title,
        product.category,
        product.type,
        product.conductor,
        product.description,
        product.voltage,
        product.cores,
        ...product.tags
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    })
    .sort((a, b) => {
      if (state.sort === "name") return a.title.localeCompare(b.title, "ru");
      if (state.sort === "voltage") return b.voltage.localeCompare(a.voltage, "ru");
      return b.popularity - a.popularity;
    });
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-media">
      <img src="${assetUrl(product.image)}" alt="${product.title}">
      <span class="product-badge">${product.badge}</span>
    </div>
    <div class="product-body">
      <div class="product-topline">
        <span>${getProductSection(product)} / ${getProductGroup(product)}</span>
        <span>${product.type ? `${product.type} / ` : ""}${product.conductor}</span>
      </div>
      <h3 class="product-title">${product.title}</h3>
      <p class="product-desc">${product.description}</p>
      <dl class="spec-list">
        <div><dt>Параметр</dt><dd>${product.voltage}</dd></div>
        <div><dt>Исполнение</dt><dd>${product.cores}</dd></div>
      </dl>
      <div class="tag-row">
        ${product.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <button class="card-action" type="button" data-product-id="${product.id}">В заявку</button>
    </div>
  `;
  return card;
}

function pluralize(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return `${count} позиция`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} позиции`;
  return `${count} позиций`;
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  productGrid.innerHTML = "";
  heroProductCount.textContent = products.length;
  resultCount.textContent = pluralize(filteredProducts.length);
  emptyState.hidden = filteredProducts.length > 0;

  filteredProducts.forEach((product) => productGrid.append(createProductCard(product)));
}

function renderFilters() {
  renderChipGroup(sectionFilters, uniqueValues("section"), state.section, (value) => {
    state.section = value;
    state.group = "Все";
    state.conductor = "Все";
    render();
  });

  renderChipGroup(categoryFilters, uniqueValues("group"), state.group, (value) => {
    state.group = value;
    render();
  });

  renderChipGroup(conductorFilters, uniqueValues("conductor"), state.conductor, (value) => {
    state.conductor = value;
    render();
  });
}

function addToQuote(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existing = state.quote.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.quote.push({ ...product, qty: 1 });
  }

  renderQuote();
}

function removeFromQuote(productId) {
  state.quote = state.quote.filter((item) => item.id !== productId);
  renderQuote();
}

function updateQuoteQty(productId, delta) {
  const item = state.quote.find((entry) => entry.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromQuote(productId);
    return;
  }

  renderQuote();
}

function renderQuote() {
  quoteList.innerHTML = "";
  quoteEmpty.hidden = state.quote.length > 0;

  state.quote.forEach((item) => {
    const row = document.createElement("li");
    row.className = "quote-item";
    row.innerHTML = `
      <div>
        <strong>${item.title}</strong>
        <span>${getProductSection(item)} / ${getProductGroup(item)}, ${item.cores}, ${item.qty} шт.</span>
      </div>
      <div class="quote-controls" aria-label="Количество ${item.title}">
        <button class="quote-step" type="button" aria-label="Уменьшить ${item.title}" data-qty-id="${item.id}" data-qty-delta="-1">-</button>
        <strong class="quote-qty">${item.qty}</strong>
        <button class="quote-step" type="button" aria-label="Увеличить ${item.title}" data-qty-id="${item.id}" data-qty-delta="1">+</button>
        <button class="quote-remove" type="button" aria-label="Удалить ${item.title}" data-remove-id="${item.id}">x</button>
      </div>
    `;
    quoteList.append(row);
  });
}

function render() {
  renderFilters();
  renderProducts();
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

resetFilters.addEventListener("click", () => {
  state.section = "Все";
  state.group = "Все";
  state.conductor = "Все";
  state.search = "";
  state.sort = "popular";
  searchInput.value = "";
  sortSelect.value = "popular";
  render();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");
  if (!button) return;
  addToQuote(button.dataset.productId);
});

quoteList.addEventListener("click", (event) => {
  const qtyButton = event.target.closest("[data-qty-id]");
  if (qtyButton) {
    updateQuoteQty(qtyButton.dataset.qtyId, Number(qtyButton.dataset.qtyDelta));
    return;
  }

  const removeButton = event.target.closest("[data-remove-id]");
  if (!removeButton) return;
  removeFromQuote(removeButton.dataset.removeId);
});

clearQuote.addEventListener("click", () => {
  state.quote = [];
  renderQuote();
});

authOpen.addEventListener("click", async () => {
  if (state.auth.session?.access_token) {
    await handleLogout();
    return;
  }

  openAuthDialog("login");
});

authClose.addEventListener("click", () => {
  authDialog.close();
});

authLoginTab.addEventListener("click", () => setAuthMode("login"));
authRegisterTab.addEventListener("click", () => setAuthMode("register"));

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(authForm);
  const email = String(data.get("email") || "").trim();
  const password = String(data.get("password") || "");
  const isRegister = state.auth.mode === "register";

  authSubmit.disabled = true;
  authStatus.textContent = isRegister ? "Создаем аккаунт..." : "Проверяем данные...";

  try {
    const authPath = isRegister
      ? `/auth/v1/signup?redirect_to=${encodeURIComponent(window.location.origin + window.location.pathname)}`
      : "/auth/v1/token?grant_type=password";
    const payload = await supabaseAuthRequest(authPath, {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    const identities = payload?.user?.identities;
    const emailAlreadyRegistered = isRegister && Array.isArray(identities) && identities.length === 0;

    if (emailAlreadyRegistered) {
      setAuthMode("login");
      authForm.querySelector('[name="email"]').value = email;
      authStatus.textContent = "Этот email уже зарегистрирован. Используй вкладку входа.";
      return;
    }

    const session = normalizeSession(payload);

    if (session) {
      saveSession(session, payload.user);
      authStatus.textContent = isRegister ? "Аккаунт создан, вход выполнен." : "Вход выполнен.";
      setTimeout(() => authDialog.close(), 350);
    } else {
      authStatus.textContent = "Аккаунт создан. Подтверди почту, затем войди.";
    }
  } catch (error) {
    console.error("Auth error:", error);
    if (isRegister && /already|registered|exists/i.test(error.message)) {
      setAuthMode("login");
      authForm.querySelector('[name="email"]').value = email;
      authStatus.textContent = "Этот email уже зарегистрирован. Используй вкладку входа.";
    } else {
      authStatus.textContent = error.message.includes("Invalid login")
        ? "Неверный email или пароль."
        : `Не получилось: ${error.message}`;
    }
  } finally {
    authSubmit.disabled = false;
  }
});

requestForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (state.quote.length === 0) {
    formStatus.textContent = "Добавь хотя бы одну позицию в заявку.";
    return;
  }

  if (!state.auth.session?.access_token) {
    formStatus.textContent = "Сначала войди или зарегистрируйся, чтобы отправить заявку из аккаунта.";
    openAuthDialog("login");
    return;
  }

  try {
    await requireFreshAuthToken();
  } catch (error) {
    formStatus.textContent = "Сессия истекла. Войди заново и отправь заявку еще раз.";
    openAuthDialog("login");
    return;
  }

  const data = new FormData(requestForm);
  const customerName = String(data.get("name") || "").trim();
  const customerContact = String(data.get("contact") || "").trim();

  if (!customerName || !customerContact) {
    formStatus.textContent = "Укажи имя и телефон или email.";
    return;
  }

  const request = {
    customer_name: customerName,
    customer_contact: customerContact,
    comment: String(data.get("comment") || "").trim(),
    items: state.quote.map((item) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      type: item.type,
      conductor: item.conductor,
      voltage: item.voltage,
      cores: item.cores,
      qty: item.qty
    })),
    source: "catalog-site"
  };

  if (!isSupabaseConfigured()) {
    console.info("Prepared cable request", request);
    formStatus.textContent = "Подключение к базе еще не настроено.";
    return;
  }

  formStatus.textContent = "Отправляем заявку...";

  try {
    const [databaseResult, emailResult] = await Promise.allSettled([
      supabaseRequest(`/rest/v1/${SUPABASE_TABLES.requests}`, {
        method: "POST",
        headers: {
          Prefer: "return=minimal"
        },
        body: JSON.stringify(request)
      }),
      sendEmailNotification(request)
    ]);

    if (databaseResult.status === "rejected" && emailResult.status === "rejected") {
      throw new Error(`${databaseResult.reason?.message || "Database error"} / ${emailResult.reason?.message || "Email error"}`);
    }

    if (emailResult.status === "rejected") {
      console.error("Email notification error:", emailResult.reason);
      formStatus.textContent = "Заявка сохранена, но письмо не ушло. Проверь подтверждение почты centralasiaenerg@gmail.com.";
    } else if (databaseResult.status === "rejected") {
      console.error("Request save error:", databaseResult.reason);
      formStatus.textContent = "Заявка отправлена на почту. Мы скоро свяжемся.";
    } else {
      formStatus.textContent = "Заявка отправлена на почту и сохранена.";
    }

    state.quote = [];
    renderQuote();
    requestForm.reset();
  } catch (error) {
    console.error("Request submit error:", error);
    formStatus.textContent = "Не удалось отправить заявку. Попробуй еще раз или проверь настройки базы.";
  }
});

render();
renderQuote();
restoreAuthSession();
loadProductsFromSupabase();
