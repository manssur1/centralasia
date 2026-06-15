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
  },
  {
    id: "control-cabinet-shu",
    title: "Шкаф управления ШУ",
    category: "Шкафы / щиты",
    type: "Шкаф управления",
    conductor: "Металл",
    voltage: "380 В",
    cores: "напольный / навесной",
    badge: "Автоматика",
    image: "assets/control-cabinet.png",
    description: "Шкаф управления для автоматизации насосов, вентиляции, приводов и технологического оборудования.",
    tags: ["ШУ", "управление", "автоматика"],
    popularity: 92
  },
  {
    id: "distribution-cabinet-shr",
    title: "Шкаф распределительный ШР",
    category: "Шкафы / щиты",
    type: "Распределительный шкаф",
    conductor: "Металл",
    voltage: "0,4 кВ",
    cores: "до 630 А",
    badge: "Распределение",
    image: "assets/distribution-cabinet.png",
    description: "Распределительный шкаф для ввода, защиты и распределения электроэнергии на объекте.",
    tags: ["ШР", "0,4 кВ", "распределение"],
    popularity: 90
  },
  {
    id: "vru-cabinet",
    title: "Вводно-распределительное устройство ВРУ",
    category: "Шкафы / щиты",
    type: "ВРУ",
    conductor: "Металл",
    voltage: "0,4 кВ",
    cores: "по проекту",
    badge: "Ввод",
    image: "assets/vru-cabinet.png",
    description: "ВРУ для приема, учета и распределения электроэнергии в жилых, коммерческих и промышленных зданиях.",
    tags: ["ВРУ", "ввод", "учет"],
    popularity: 94
  },
  {
    id: "floor-switchboard-shcho",
    title: "Щит освещения ЩО",
    category: "Шкафы / щиты",
    type: "Щит освещения",
    conductor: "Металл",
    voltage: "220/380 В",
    cores: "12-36 модулей",
    badge: "Освещение",
    image: "assets/floor-switchboard.png",
    description: "Щит освещения для групповых линий, автоматов защиты и управления осветительными нагрузками.",
    tags: ["ЩО", "освещение", "автоматы"],
    popularity: 86
  },
  {
    id: "modular-panel-24",
    title: "Щит модульный навесной 24 модуля",
    category: "Шкафы / щиты",
    type: "Модульный щит",
    conductor: "Пластик / металл",
    voltage: "до 400 В",
    cores: "24 модуля",
    badge: "Модульный",
    image: "assets/modular-panel.png",
    description: "Навесной модульный щит для автоматов, УЗО, реле и компактного распределения линий.",
    tags: ["модульный", "DIN", "навесной"],
    popularity: 88
  },
  {
    id: "metering-panel-shchu",
    title: "Щит учета электроэнергии ЩУ",
    category: "Шкафы / щиты",
    type: "Щит учета",
    conductor: "Металл",
    voltage: "220/380 В",
    cores: "1-3 счетчика",
    badge: "Учет",
    image: "assets/metering-panel.png",
    description: "Щит учета для размещения счетчиков, вводных автоматов и пломбируемых устройств.",
    tags: ["ЩУ", "счетчик", "учет"],
    popularity: 84
  },
  {
    id: "outdoor-cabinet-ip54",
    title: "Шкаф уличный IP54",
    category: "Шкафы / щиты",
    type: "Уличный шкаф",
    conductor: "Металл",
    voltage: "по проекту",
    cores: "IP54",
    badge: "Улица",
    image: "assets/outdoor-cabinet.png",
    description: "Уличный шкаф с защитой от пыли и влаги для наружной установки оборудования и коммутации.",
    tags: ["IP54", "уличный", "защита"],
    popularity: 82
  },
  {
    id: "automation-cabinet-asu",
    title: "Шкаф автоматики АСУ",
    category: "Шкафы / щиты",
    type: "Шкаф автоматики",
    conductor: "Металл",
    voltage: "24/220/380 В",
    cores: "ПЛК / реле / индикация",
    badge: "АСУ",
    image: "assets/automation-cabinet.png",
    description: "Шкаф автоматики для размещения контроллеров, релейной логики, сигнализации и органов управления.",
    tags: ["АСУ", "ПЛК", "сигнализация"],
    popularity: 83
  },
  {
    id: "metal-enclosure-shmp",
    title: "Корпус металлический ЩМП",
    category: "Шкафы / щиты",
    type: "Корпус",
    conductor: "Металл",
    voltage: "универсальный",
    cores: "300x400 мм",
    badge: "Корпус",
    image: "assets/metal-enclosure.png",
    description: "Металлический корпус для сборки распределительных, учетных и управляющих щитов.",
    tags: ["ЩМП", "корпус", "сборка"],
    popularity: 81
  },
  {
    id: "lighting-panel-group",
    title: "Групповой щит освещения",
    category: "Шкафы / щиты",
    type: "Групповой щит",
    conductor: "Пластик / металл",
    voltage: "220/380 В",
    cores: "8-24 линии",
    badge: "Группы",
    image: "assets/lighting-panel.png",
    description: "Компактный групповой щит для распределения линий освещения, розеточных групп и малых нагрузок.",
    tags: ["групповой", "линии", "защита"],
    popularity: 79
  },
  {
    id: "server-rack-19",
    title: "Шкаф телекоммуникационный 19\"",
    category: "Шкафы / щиты",
    type: "Телеком шкаф",
    conductor: "Металл",
    voltage: "слаботочные сети",
    cores: "19 дюймов",
    badge: "СКС",
    image: "assets/server-rack.png",
    description: "Телекоммуникационный шкаф для серверного, сетевого и кроссового оборудования.",
    tags: ["19\"", "СКС", "серверный"],
    popularity: 77
  },
  {
    id: "panel-accessory-kit",
    title: "Комплект аксессуаров для щитов",
    category: "Шкафы / щиты",
    type: "Аксессуары",
    conductor: "Металл / пластик",
    voltage: "DIN / клеммы / шины",
    cores: "комплект",
    badge: "Комплект",
    image: "assets/accessory-panel.png",
    description: "Аксессуары для сборки щитов: DIN-рейки, шины, клеммы, маркировка и монтажные элементы.",
    tags: ["аксессуары", "DIN", "клеммы"],
    popularity: 75
  },
  {
    id: "socket-single-grounded",
    title: "Розетка одноместная с заземлением 16А",
    category: "Розетки / выключатели / коробки",
    type: "Розетка",
    conductor: "Пластик / контакты латунь",
    voltage: "250 В / 16 А",
    cores: "1 пост, скрытая установка",
    badge: "Розетка",
    image: "assets/outlet-single.png",
    description: "Базовая силовая розетка для жилых, офисных и коммерческих помещений, подходит для стандартных подрозетников.",
    tags: ["розетка", "16А", "заземление"],
    popularity: 91
  },
  {
    id: "socket-double-grounded",
    title: "Розетка двухместная с заземлением 16А",
    category: "Розетки / выключатели / коробки",
    type: "Розетка",
    conductor: "Пластик / контакты латунь",
    voltage: "250 В / 16 А",
    cores: "2 поста, скрытая установка",
    badge: "2 поста",
    image: "assets/outlet-double.png",
    description: "Двойная розетка для рабочих зон, кухонь, офисных столов и точек подключения бытового оборудования.",
    tags: ["двойная", "16А", "скрытая"],
    popularity: 90
  },
  {
    id: "socket-ip44",
    title: "Розетка влагозащищенная IP44",
    category: "Розетки / выключатели / коробки",
    type: "Влагозащищенная розетка",
    conductor: "Пластик / крышка",
    voltage: "250 В / 16 А",
    cores: "IP44",
    badge: "IP44",
    image: "assets/outlet-ip44.png",
    description: "Розетка с защитной крышкой для влажных помещений, технических зон, гаражей и наружных точек под навесом.",
    tags: ["IP44", "крышка", "влага"],
    popularity: 87
  },
  {
    id: "socket-with-cover",
    title: "Розетка с защитной крышкой",
    category: "Розетки / выключатели / коробки",
    type: "Розетка с крышкой",
    conductor: "Пластик",
    voltage: "250 В / 16 А",
    cores: "1 пост",
    badge: "Крышка",
    image: "assets/outlet-lid.png",
    description: "Универсальная розетка с крышкой для защиты контактов от пыли, случайного касания и брызг.",
    tags: ["крышка", "защита", "розетка"],
    popularity: 84
  },
  {
    id: "data-outlet-rj45",
    title: "Компьютерная розетка RJ45",
    category: "Розетки / выключатели / коробки",
    type: "Слаботочная розетка",
    conductor: "RJ45 / Cat.5e-Cat.6",
    voltage: "LAN",
    cores: "1 порт",
    badge: "RJ45",
    image: "assets/data-outlet-rj45.png",
    description: "Информационная розетка для подключения компьютерных сетей, рабочих мест, камер и слаботочных линий.",
    tags: ["RJ45", "LAN", "СКС"],
    popularity: 82
  },
  {
    id: "tv-outlet",
    title: "Телевизионная розетка TV",
    category: "Розетки / выключатели / коробки",
    type: "Слаботочная розетка",
    conductor: "TV / коаксиал",
    voltage: "антенная линия",
    cores: "1 выход",
    badge: "TV",
    image: "assets/tv-outlet.png",
    description: "TV-розетка для аккуратного подключения антенного или коаксиального кабеля в жилых и офисных помещениях.",
    tags: ["TV", "коаксиал", "слаботочка"],
    popularity: 76
  },
  {
    id: "switch-single-key",
    title: "Выключатель одноклавишный",
    category: "Розетки / выключатели / коробки",
    type: "Выключатель",
    conductor: "Пластик / механизм",
    voltage: "250 В / 10 А",
    cores: "1 клавиша",
    badge: "1 клавиша",
    image: "assets/switch-single.png",
    description: "Классический выключатель для одной группы освещения, подходит для скрытого монтажа в стандартный подрозетник.",
    tags: ["выключатель", "1 клавиша", "свет"],
    popularity: 89
  },
  {
    id: "switch-double-key",
    title: "Выключатель двухклавишный",
    category: "Розетки / выключатели / коробки",
    type: "Выключатель",
    conductor: "Пластик / механизм",
    voltage: "250 В / 10 А",
    cores: "2 клавиши",
    badge: "2 клавиши",
    image: "assets/switch-double.png",
    description: "Выключатель для раздельного управления двумя группами освещения: люстра, зона, подсветка или вентиляция.",
    tags: ["2 клавиши", "освещение", "механизм"],
    popularity: 88
  },
  {
    id: "switch-pass-through",
    title: "Выключатель проходной",
    category: "Розетки / выключатели / коробки",
    type: "Проходной выключатель",
    conductor: "Пластик / механизм",
    voltage: "250 В / 10 А",
    cores: "1 клавиша, схема 6",
    badge: "Проходной",
    image: "assets/switch-pass.png",
    description: "Проходной выключатель для управления светом из двух точек: коридоры, лестницы, спальни и длинные помещения.",
    tags: ["проходной", "лестница", "свет"],
    popularity: 81
  },
  {
    id: "dimmer-rotary",
    title: "Светорегулятор поворотный",
    category: "Розетки / выключатели / коробки",
    type: "Диммер",
    conductor: "Пластик / электроника",
    voltage: "220 В",
    cores: "поворотный механизм",
    badge: "Диммер",
    image: "assets/dimmer.png",
    description: "Диммер для плавной регулировки яркости совместимых светильников и создания комфортных сценариев освещения.",
    tags: ["диммер", "яркость", "освещение"],
    popularity: 74
  },
  {
    id: "frame-two-gang",
    title: "Рамка декоративная на 2 поста",
    category: "Розетки / выключатели / коробки",
    type: "Рамка",
    conductor: "Пластик",
    voltage: "для механизмов",
    cores: "2 поста",
    badge: "Рамка",
    image: "assets/frame-switch.png",
    description: "Декоративная рамка для объединения двух механизмов: розеток, выключателей, TV или RJ45-модулей.",
    tags: ["рамка", "2 поста", "механизмы"],
    popularity: 72
  },
  {
    id: "mounting-box-concrete",
    title: "Подрозетник для бетона",
    category: "Розетки / выключатели / коробки",
    type: "Монтажная коробка",
    conductor: "Пластик",
    voltage: "68 мм",
    cores: "для бетона / кирпича",
    badge: "68 мм",
    image: "assets/mount-box-concrete.png",
    description: "Монтажная коробка для установки розеток и выключателей в бетонные, кирпичные и блочные стены.",
    tags: ["подрозетник", "бетон", "68 мм"],
    popularity: 86
  },
  {
    id: "mounting-box-drywall",
    title: "Подрозетник для гипсокартона",
    category: "Розетки / выключатели / коробки",
    type: "Монтажная коробка",
    conductor: "Пластик / лапки",
    voltage: "68 мм",
    cores: "для ГКЛ",
    badge: "ГКЛ",
    image: "assets/mount-box-drywall.png",
    description: "Подрозетник с крепежными лапками для надежного монтажа механизмов в гипсокартонные перегородки.",
    tags: ["подрозетник", "ГКЛ", "лапки"],
    popularity: 85
  },
  {
    id: "junction-box-indoor",
    title: "Коробка распределительная внутренняя",
    category: "Розетки / выключатели / коробки",
    type: "Распределительная коробка",
    conductor: "Пластик",
    voltage: "до 400 В",
    cores: "80x80 мм",
    badge: "Распайка",
    image: "assets/junction-box-indoor.png",
    description: "Коробка для соединения и ответвления проводов внутри помещений, подходит для обслуживаемых узлов электропроводки.",
    tags: ["распредкоробка", "соединение", "проводка"],
    popularity: 83
  },
  {
    id: "junction-box-ip65",
    title: "Коробка распределительная IP65",
    category: "Розетки / выключатели / коробки",
    type: "Герметичная коробка",
    conductor: "Пластик / уплотнение",
    voltage: "до 400 В",
    cores: "IP65",
    badge: "IP65",
    image: "assets/junction-box-ip65.png",
    description: "Герметичная распределительная коробка для наружного монтажа, влажных зон, складов и технических помещений.",
    tags: ["IP65", "герметичная", "наружная"],
    popularity: 84
  },
  {
    id: "floor-outlet-block",
    title: "Напольный блок розеток",
    category: "Розетки / выключатели / коробки",
    type: "Напольный блок",
    conductor: "Металл / пластик",
    voltage: "220 В / LAN",
    cores: "2-4 модуля",
    badge: "Пол",
    image: "assets/floor-outlet-block.png",
    description: "Напольный блок для рабочих мест, переговорных и open-space зон, где питание и связь выводятся из пола.",
    tags: ["напольный", "офис", "модули"],
    popularity: 78
  }
];

const wiringDeviceSeriesProducts = [
  {
    id: "legrand-forix-series",
    title: "Розетки / Выключатели Legrand Forix",
    category: "Розетки / выключатели / коробки",
    type: "Серия Legrand",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "розетки, выключатели, рамки",
    badge: "Legrand",
    image: "assets/wiring-legrand.png",
    description: "Серия Forix для открытого и аккуратного бытового монтажа: розетки, выключатели и аксессуары для помещений.",
    tags: ["Legrand", "Forix", "розетки"],
    popularity: 92
  },
  {
    id: "legrand-mosaic-series",
    title: "Розетки / Выключатели Legrand Mosaic",
    category: "Розетки / выключатели / коробки",
    type: "Серия Legrand",
    conductor: "Пластик / модульная система",
    voltage: "250 В / 10-16 А",
    cores: "модули, рамки, механизмы",
    badge: "Mosaic",
    image: "assets/wiring-legrand.png",
    description: "Модульная серия Mosaic для офисов, рабочих мест, слаботочных и силовых точек в едином дизайне.",
    tags: ["Legrand", "Mosaic", "модульная"],
    popularity: 91
  },
  {
    id: "legrand-suno-series",
    title: "Розетки / Выключатели Legrand SUNO",
    category: "Розетки / выключатели / коробки",
    type: "Серия Legrand",
    conductor: "Пластик / декоративные цвета",
    voltage: "250 В / 10-16 А",
    cores: "алюминий, антрацит, белый, слоновая кость, шампань",
    badge: "SUNO",
    image: "assets/wiring-legrand.png",
    description: "Линейка SUNO с популярными цветами и механизмами для жилых, офисных и коммерческих интерьеров.",
    tags: ["Legrand", "SUNO", "цветные серии"],
    popularity: 90
  },
  {
    id: "legrand-nilo-step-series",
    title: "Розетки / Выключатели Legrand Nilo Step",
    category: "Розетки / выключатели / коробки",
    type: "Серия Legrand",
    conductor: "Пластик / декоративные цвета",
    voltage: "250 В / 10-16 А",
    cores: "алюминий, белый, черный, сталь, слоновая кость",
    badge: "Nilo Step",
    image: "assets/wiring-legrand.png",
    description: "Серия Nilo Step для современных интерьеров: розетки, выключатели, рамки и базовые механизмы.",
    tags: ["Legrand", "Nilo Step", "механизмы"],
    popularity: 89
  },
  {
    id: "lezard-switches-sockets",
    title: "Розетки / Выключатели LEZARD",
    category: "Розетки / выключатели / коробки",
    type: "Серия электроустановочная",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "розетки, выключатели, рамки",
    badge: "LEZARD",
    image: "assets/wiring-systeme.png",
    description: "Популярные электроустановочные изделия LEZARD для бытовых и офисных линий.",
    tags: ["LEZARD", "розетки", "выключатели"],
    popularity: 84
  },
  {
    id: "schneider-electric-switches-sockets",
    title: "Розетки / Выключатели Schneider Electric",
    category: "Розетки / выключатели / коробки",
    type: "Серия Schneider Electric",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "розетки, выключатели, рамки",
    badge: "Schneider",
    image: "assets/wiring-systeme.png",
    description: "Серии Schneider Electric для аккуратного монтажа силовых, световых и слаботочных точек.",
    tags: ["Schneider Electric", "розетки", "выключатели"],
    popularity: 88
  },
  {
    id: "iek-aquatic-series",
    title: "Розетки / Выключатели IEK AQUATIC",
    category: "Розетки / выключатели / коробки",
    type: "Серия IEK",
    conductor: "Пластик / влагозащита",
    voltage: "250 В / 10-16 А",
    cores: "влагозащищенные механизмы",
    badge: "AQUATIC",
    image: "assets/wiring-iek.png",
    description: "Серия AQUATIC для влажных зон, подсобных помещений и технических участков.",
    tags: ["IEK", "AQUATIC", "влагозащита"],
    popularity: 87
  },
  {
    id: "iek-germes-series",
    title: "Розетки / Выключатели IEK ГЕРМЕС",
    category: "Розетки / выключатели / коробки",
    type: "Серия IEK",
    conductor: "Пластик / наружный монтаж",
    voltage: "250 В / 10-16 А",
    cores: "розетки и выключатели",
    badge: "ГЕРМЕС",
    image: "assets/wiring-iek.png",
    description: "Серия ГЕРМЕС для открытого монтажа и быстрых электромонтажных работ.",
    tags: ["IEK", "ГЕРМЕС", "наружный монтаж"],
    popularity: 86
  },
  {
    id: "iek-kvarta-series",
    title: "Розетки / Выключатели IEK КВАРТА",
    category: "Розетки / выключатели / коробки",
    type: "Серия IEK",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "розетки, выключатели, рамки",
    badge: "КВАРТА",
    image: "assets/wiring-iek.png",
    description: "Базовая серия КВАРТА для квартир, офисов и стандартных точек электропроводки.",
    tags: ["IEK", "КВАРТА", "скрытый монтаж"],
    popularity: 85
  },
  {
    id: "iek-oktava-series",
    title: "Розетки / Выключатели IEK ОКТАВА",
    category: "Розетки / выключатели / коробки",
    type: "Серия IEK",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "розетки, выключатели, рамки",
    badge: "ОКТАВА",
    image: "assets/wiring-iek.png",
    description: "Серия ОКТАВА для аккуратного внутреннего монтажа с простым подбором механизмов.",
    tags: ["IEK", "ОКТАВА", "механизмы"],
    popularity: 84
  },
  {
    id: "stove-socket-plug",
    title: "Розетки / Вилки для плиты",
    category: "Розетки / выключатели / коробки",
    type: "Силовая розетка",
    conductor: "Пластик / силовые контакты",
    voltage: "250-400 В",
    cores: "для электроплит",
    badge: "Плита",
    image: "assets/industrial-plug.png",
    description: "Силовые розетки и вилки для подключения электроплит, варочных панелей и мощной бытовой нагрузки.",
    tags: ["плита", "силовая розетка", "вилка"],
    popularity: 83
  },
  {
    id: "iek-fors-series",
    title: "Розетки / Выключатели IEK ФОРС",
    category: "Розетки / выключатели / коробки",
    type: "Серия IEK",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "розетки и выключатели",
    badge: "ФОРС",
    image: "assets/wiring-iek.png",
    description: "Серия ФОРС для быстрых комплектаций объекта розетками, выключателями и рамками.",
    tags: ["IEK", "ФОРС", "розетки"],
    popularity: 83
  },
  {
    id: "iek-bolero-series",
    title: "Розетки / Выключатели IEK BOLERO",
    category: "Розетки / выключатели / коробки",
    type: "Серия IEK",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "розетки, выключатели, рамки",
    badge: "BOLERO",
    image: "assets/wiring-iek.png",
    description: "Серия BOLERO для декоративных и стандартных точек электромонтажа.",
    tags: ["IEK", "BOLERO", "декоративная серия"],
    popularity: 82
  },
  {
    id: "iek-brite-series",
    title: "Розетки / Выключатели IEK BRITE",
    category: "Розетки / выключатели / коробки",
    type: "Серия IEK",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "розетки, выключатели, рамки",
    badge: "BRITE",
    image: "assets/wiring-iek.png",
    description: "Серия BRITE для современных интерьеров и комплектных электромонтажных заявок.",
    tags: ["IEK", "BRITE", "выключатели"],
    popularity: 82
  },
  {
    id: "extension-cords",
    title: "Удлинители / Шнуры",
    category: "Розетки / выключатели / коробки",
    type: "Удлинители",
    conductor: "Медь / ПВС",
    voltage: "220 В",
    cores: "2-6 гнезд, разные длины",
    badge: "Удлинители",
    image: "assets/extension-cord.png",
    description: "Удлинители и сетевые шнуры для временного питания рабочих мест, инструмента и бытовой техники.",
    tags: ["удлинитель", "шнур", "ПВС"],
    popularity: 86
  },
  {
    id: "power-filters",
    title: "Сетевые фильтры",
    category: "Розетки / выключатели / коробки",
    type: "Сетевой фильтр",
    conductor: "Медь / защитный модуль",
    voltage: "220 В",
    cores: "3-6 гнезд",
    badge: "Фильтр",
    image: "assets/power-filter.png",
    description: "Сетевые фильтры для компьютеров, офисной техники и рабочих зон с несколькими точками питания.",
    tags: ["сетевой фильтр", "удлинитель", "защита"],
    popularity: 85
  },
  {
    id: "triple-adapters",
    title: "Тройники универсальные / Адаптера",
    category: "Розетки / выключатели / коробки",
    type: "Адаптер",
    conductor: "Пластик / контактная группа",
    voltage: "220 В",
    cores: "универсальные переходники",
    badge: "Адаптеры",
    image: "assets/adapter-triple.png",
    description: "Тройники, переходники и адаптеры для бытовых подключений и временного распределения питания.",
    tags: ["тройник", "адаптер", "переходник"],
    popularity: 80
  },
  {
    id: "power-connectors-rubber",
    title: "Силовые разъёмы папа-мама каучук",
    category: "Розетки / выключатели / коробки",
    type: "Силовые разъёмы",
    conductor: "Каучук / силовые контакты",
    voltage: "220-380 В",
    cores: "папа-мама",
    badge: "Каучук",
    image: "assets/industrial-plug.png",
    description: "Каучуковые силовые разъёмы для надежного подключения оборудования, инструмента и временных линий.",
    tags: ["силовой разъем", "каучук", "папа-мама"],
    popularity: 84
  },
  {
    id: "power-connectors-plastic",
    title: "Силовые разъёмы папа-мама пластик",
    category: "Розетки / выключатели / коробки",
    type: "Силовые разъёмы",
    conductor: "Пластик / силовые контакты",
    voltage: "220-380 В",
    cores: "папа-мама, EXPERT, штекеры",
    badge: "Разъёмы",
    image: "assets/industrial-plug.png",
    description: "Пластиковые силовые разъёмы, штекеры и комплектующие для сборки переносных линий питания.",
    tags: ["силовой разъем", "штекер", "EXPERT"],
    popularity: 83
  },
  {
    id: "unit-vita-astra-series",
    title: "Розетки / Выключатели UNIT VITA / ASTRA",
    category: "Розетки / выключатели / коробки",
    type: "Серия UNIT",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "VITA, ASTRA",
    badge: "UNIT",
    image: "assets/wiring-unit.png",
    description: "Серии UNIT VITA и ASTRA для базовой комплектации квартир, офисов и коммерческих помещений.",
    tags: ["UNIT", "VITA", "ASTRA"],
    popularity: 81
  },
  {
    id: "unit-tetranew-smart-series",
    title: "Розетки / Выключатели UNIT TETRANEW / SMART / ELEMENT",
    category: "Розетки / выключатели / коробки",
    type: "Серия UNIT",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "TETRANEW, SMART, ELEMENT",
    badge: "UNIT",
    image: "assets/wiring-unit.png",
    description: "Серии UNIT TETRANEW, SMART и ELEMENT для современных точек питания и управления светом.",
    tags: ["UNIT", "TETRANEW", "SMART", "ELEMENT"],
    popularity: 80
  },
  {
    id: "unit-rock-quattro-series",
    title: "Розетки / Выключатели UNIT ROCK / QUATTRO",
    category: "Розетки / выключатели / коробки",
    type: "Серия UNIT",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "ROCK, QUATTRO",
    badge: "UNIT",
    image: "assets/wiring-unit.png",
    description: "Серии UNIT ROCK и QUATTRO для подбора розеток, выключателей и рамок в одном стиле.",
    tags: ["UNIT", "ROCK", "QUATTRO"],
    popularity: 79
  },
  {
    id: "systeme-aqua-atlas-series",
    title: "Розетки / Выключатели Systeme Electric AQUA / ATLAS",
    category: "Розетки / выключатели / коробки",
    type: "Серия Systeme Electric",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "AQUA, ATLAS, ATLAS IP54",
    badge: "Systeme",
    image: "assets/wiring-systeme.png",
    description: "Серии AQUA и ATLAS для бытовых, технических и влагозащищенных точек монтажа.",
    tags: ["Systeme Electric", "AQUA", "ATLAS"],
    popularity: 86
  },
  {
    id: "systeme-wessen-series",
    title: "Розетки / Выключатели Systeme Electric WESSEN 59",
    category: "Розетки / выключатели / коробки",
    type: "Серия Systeme Electric",
    conductor: "Пластик / декоративные цвета",
    voltage: "250 В / 10-16 А",
    cores: "бук, матовый, сосна, датская сосна",
    badge: "WESSEN 59",
    image: "assets/wiring-systeme.png",
    description: "Серия WESSEN 59 с декоративными вариантами для интерьеров и стандартных механизмов.",
    tags: ["Systeme Electric", "WESSEN 59", "декор"],
    popularity: 85
  },
  {
    id: "systeme-etud-blanca-glossa-series",
    title: "Розетки / Выключатели Systeme Electric ЭТЮД / Blanca / GLOSSA",
    category: "Розетки / выключатели / коробки",
    type: "Серия Systeme Electric",
    conductor: "Пластик / контактная группа",
    voltage: "250 В / 10-16 А",
    cores: "ЭТЮД, ЭТЮД IP44, Blanca, GLOSSA, ARTGALLERY",
    badge: "Systeme",
    image: "assets/wiring-systeme.png",
    description: "Популярные серии Systeme Electric для скрытого, открытого и декоративного монтажа.",
    tags: ["Systeme Electric", "ЭТЮД", "Blanca", "GLOSSA"],
    popularity: 87
  },
  {
    id: "automatic-boxes",
    title: "Коробки под автоматы",
    category: "Розетки / выключатели / коробки",
    type: "Коробки",
    conductor: "Пластик",
    voltage: "до 400 В",
    cores: "под автоматы и модульные устройства",
    badge: "Коробки",
    image: "assets/wiring-boxes.png",
    description: "Коробки и боксы под автоматы для компактной установки модульной защиты и распределения.",
    tags: ["коробка", "автоматы", "модульная"],
    popularity: 84
  },
  {
    id: "installation-boxes-family",
    title: "Коробки установочные / Подрозетники",
    category: "Розетки / выключатели / коробки",
    type: "Коробки",
    conductor: "Пластик",
    voltage: "68 мм и другие размеры",
    cores: "установочные, распределительные, прямой монтаж",
    badge: "Подрозетники",
    image: "assets/wiring-boxes.png",
    description: "Установочные коробки, подрозетники, распределительные коробки и решения для прямого монтажа.",
    tags: ["подрозетник", "установочная коробка", "монтаж"],
    popularity: 88
  },
  {
    id: "terminal-blocks",
    title: "Колодки без заземления / с заземлением",
    category: "Розетки / выключатели / коробки",
    type: "Колодки",
    conductor: "Пластик / контактная группа",
    voltage: "220 В",
    cores: "без заземления, с заземлением",
    badge: "Колодки",
    image: "assets/terminal-block.png",
    description: "Розеточные колодки для сборки удлинителей, переносок и временных точек питания.",
    tags: ["колодка", "заземление", "удлинитель"],
    popularity: 82
  },
  {
    id: "cable-reels-frames",
    title: "Катушки / Рамки",
    category: "Розетки / выключатели / коробки",
    type: "Катушки и рамки",
    conductor: "Пластик / металл",
    voltage: "220 В",
    cores: "катушки, рамки, аксессуары",
    badge: "Катушки",
    image: "assets/cable-reel.png",
    description: "Катушки, рамки и аксессуары для переносных линий питания, удлинителей и монтажных комплектов.",
    tags: ["катушка", "рамка", "удлинитель"],
    popularity: 78
  },
  {
    id: "bells-buttons",
    title: "Звонки / Кнопки",
    category: "Розетки / выключатели / коробки",
    type: "Звонки и кнопки",
    conductor: "Пластик / контактный механизм",
    voltage: "220 В / слаботочные линии",
    cores: "кнопки, звонки",
    badge: "Звонки",
    image: "assets/doorbell-button.png",
    description: "Кнопки вызова, звонки и аксессуары для входных групп, квартир и офисных помещений.",
    tags: ["звонок", "кнопка", "вызов"],
    popularity: 77
  },
  {
    id: "universal-plugs",
    title: "Вилки универсальные",
    category: "Розетки / выключатели / коробки",
    type: "Вилки",
    conductor: "Пластик / контактная группа",
    voltage: "220 В",
    cores: "универсальные вилки",
    badge: "Вилки",
    image: "assets/universal-plug.png",
    description: "Универсальные вилки для ремонта шнуров, сборки переносок и подключения бытовой техники.",
    tags: ["вилка", "универсальная", "шнур"],
    popularity: 79
  }
];

products = [...products, ...wiringDeviceSeriesProducts];

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

const ASSET_VERSION = "20260613-ekt-wiring-series";
const AUTH_STORAGE_KEY = "cae_supabase_session";
const QUOTE_STORAGE_KEY = "cae_quote_items";
const REQUEST_RATE_KEY = "cae_request_rate";
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const REQUEST_COOLDOWN_MS = 30 * 1000;
const MAX_QUOTE_ITEMS = 40;
const MAX_ITEM_QTY = 999;
const MAX_SEARCH_LENGTH = 80;
const MAX_NAME_LENGTH = 80;
const MAX_CONTACT_LENGTH = 120;
const MAX_COMMENT_LENGTH = 800;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

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
const floatingQuote = document.createElement("button");
const toast = document.createElement("div");

floatingQuote.className = "floating-quote";
floatingQuote.type = "button";
floatingQuote.hidden = true;
floatingQuote.setAttribute("aria-label", "Перейти к заявке");

toast.className = "toast";
toast.setAttribute("role", "status");
toast.setAttribute("aria-live", "polite");
toast.hidden = true;
document.body.append(floatingQuote, toast);

function isSupabaseConfigured() {
  return /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(SUPABASE_CONFIG.url);
}

function normalizeWhitespace(value, maxLength) {
  return String(value ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function normalizeMultiline(value, maxLength) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, " ")
    .replace(/[ \t]+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function safeProductId(value) {
  return String(value ?? "").replace(/[^a-z0-9_-]/gi, "").slice(0, 80);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
}

function isValidContact(value) {
  const contact = normalizeWhitespace(value, MAX_CONTACT_LENGTH);
  const digits = contact.replace(/\D/g, "");
  return isValidEmail(contact) || digits.length >= 7;
}

function getCooldownLeft() {
  try {
    const sentAt = Number(localStorage.getItem(REQUEST_RATE_KEY) || 0);
    return Math.max(0, REQUEST_COOLDOWN_MS - (Date.now() - sentAt));
  } catch {
    return 0;
  }
}

function markRequestSent() {
  try {
    localStorage.setItem(REQUEST_RATE_KEY, String(Date.now()));
  } catch {
    // Rate limiting is best-effort in private browsing modes.
  }
}

function getQuoteQty(productId) {
  return state.quote.find((item) => item.id === productId)?.qty || 0;
}

function getQuoteTotals() {
  return state.quote.reduce((totals, item) => {
    totals.items += 1;
    totals.qty += Number(item.qty) || 0;
    return totals;
  }, { items: 0, qty: 0 });
}

function saveQuote() {
  try {
    const items = state.quote.map((item) => ({
      id: safeProductId(item.id),
      qty: Math.max(1, Math.min(MAX_ITEM_QTY, Number(item.qty) || 1))
    }));
    localStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.warn("Quote save failed:", error);
  }
}

function restoreQuote() {
  try {
    const saved = JSON.parse(localStorage.getItem(QUOTE_STORAGE_KEY) || "[]");
    if (!Array.isArray(saved)) return;

    state.quote = saved
      .slice(0, MAX_QUOTE_ITEMS)
      .map((entry) => {
        const product = products.find((item) => item.id === safeProductId(entry.id));
        if (!product) return null;
        return {
          ...product,
          qty: Math.max(1, Math.min(MAX_ITEM_QTY, Number(entry.qty) || 1))
        };
      })
      .filter(Boolean);
  } catch (error) {
    console.warn("Quote restore failed:", error);
    state.quote = [];
  }
}

let toastTimer = null;
function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
    toast.hidden = true;
  }, 2200);
}

function easeInOutCubic(progress) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function smoothScrollTo(target) {
  if (!target) return;

  if (prefersReducedMotion.matches) {
    target.scrollIntoView({ block: "start" });
    return;
  }

  const headerOffset = 82;
  const startY = window.scrollY;
  const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);
  const distance = targetY - startY;
  const duration = Math.min(900, Math.max(420, Math.abs(distance) * 0.45));
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

function animateCatalogArrival() {
  const catalog = document.querySelector("#catalog");
  if (!catalog || prefersReducedMotion.matches) return;

  catalog.classList.remove("is-catalog-arriving");
  void catalog.offsetWidth;
  catalog.classList.add("is-catalog-arriving");
  window.setTimeout(() => catalog.classList.remove("is-catalog-arriving"), 1400);
}

function handleAnchorNavigation(event) {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;

  const hash = link.getAttribute("href");
  if (!hash || hash === "#") return;

  const target = document.querySelector(hash);
  if (!target) return;

  event.preventDefault();
  smoothScrollTo(target);
  if (hash === "#catalog") animateCatalogArrival();
  history.pushState(null, "", hash);
}

function setupRevealAnimations() {
  const revealNodes = document.querySelectorAll([
    ".hero-content",
    ".quick-strip article",
    ".section-heading",
    ".request-copy",
    ".request-layout"
  ].join(","));

  revealNodes.forEach((node) => node.classList.add("reveal-on-scroll"));

  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.14,
    rootMargin: "0px 0px -8% 0px"
  });

  revealNodes.forEach((node) => observer.observe(node));
  window.requestAnimationFrame(() => {
    revealNodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        node.classList.add("is-revealed");
        observer.unobserve(node);
      }
    });
  });
}

function getSavedSession() {
  try {
    const saved = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "null");
    if (!saved?.session?.access_token) return null;
    if (saved.createdAt && Date.now() - Number(saved.createdAt) > SESSION_MAX_AGE_MS) {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      return null;
    }
    return saved;
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
      user: state.auth.user,
      createdAt: Date.now()
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
  if (!path.startsWith("/auth/v1/")) {
    throw new Error("Blocked unsafe auth endpoint.");
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
  if (!path.startsWith("/rest/v1/")) {
    throw new Error("Blocked unsafe data endpoint.");
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

function secureProduct(product) {
  return {
    ...product,
    id: safeProductId(product.id),
    title: normalizeWhitespace(product.title, 140),
    category: normalizeWhitespace(product.category, 80),
    type: normalizeWhitespace(product.type, 80),
    conductor: normalizeWhitespace(product.conductor, 80),
    voltage: normalizeWhitespace(product.voltage, 80),
    cores: normalizeWhitespace(product.cores, 80),
    badge: normalizeWhitespace(product.badge, 40),
    image: /^assets\/[a-z0-9._/-]+\.(png|jpe?g|webp|gif|svg)$/i.test(String(product.image || "")) && !String(product.image || "").includes("..")
      ? String(product.image)
      : "assets/power-cable.png",
    description: normalizeWhitespace(product.description, 260),
    tags: Array.isArray(product.tags)
      ? product.tags.slice(0, 8).map((tag) => normalizeWhitespace(tag, 40)).filter(Boolean)
      : [],
    popularity: Number.isFinite(Number(product.popularity)) ? Number(product.popularity) : 0
  };
}

function assetUrl(path) {
  const safePath = String(path || "");
  if (!/^assets\/[a-z0-9._/-]+\.(png|jpe?g|webp|gif|svg)$/i.test(safePath) || safePath.includes("..")) {
    return `assets/power-cable.png?v=${ASSET_VERSION}`;
  }
  return `${safePath}?v=${ASSET_VERSION}`;
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
    _next: `${window.location.origin}${window.location.pathname}#request`,
    "Сайт": window.location.href,
    "Имя клиента": request.customer_name,
    "Телефон или email": request.customer_contact,
    "Комментарий": request.comment || "без комментария",
    "Аккаунт": accountEmail,
    "Дата": submittedAt,
    "Позиций": String(request.items.length),
    "Состав заявки": formatQuoteForEmail(request.items)
  };

  try {
    const formData = createEmailFormData(payload);
    const response = await fetch(EMAIL_CONFIG.endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
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
      throw new Error(body?.message || `FormSubmit returned ${response.status}`);
    }

    if (body?.message && isFormSubmitActivationMessage(body.message)) {
      throw new Error(body.message);
    }

    if (response.ok) {
      return body;
    }
  } catch (error) {
    if (isFormSubmitActivationMessage(error.message)) {
      throw error;
    }
    console.warn("Email ajax delivery failed, trying iframe fallback:", error);
    return submitEmailFallback(payload);
  }
}

function isFormSubmitActivationMessage(message = "") {
  return /activate|activation|confirm|confirmation|verify|verification/i.test(String(message));
}

function createEmailFormData(payload) {
  const formData = new FormData();
  Object.entries(payload).forEach(([name, value]) => {
    formData.append(name, String(value));
  });
  return formData;
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
  if (product.category === "Розетки / выключатели / коробки") return "Розетки / выключатели / коробки";
  if (product.category === "Шкафы / щиты") return "Шкафы / щиты";
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

function getCabinetGroup(product) {
  const text = `${product.type || ""} ${product.title}`.toLowerCase();

  if (text.includes("вру") || text.includes("ввод")) return "ВРУ";
  if (text.includes("распредел")) return "Распределительные шкафы";
  if (text.includes("управ") || text.includes("автоматик") || text.includes("асу")) return "Управление и автоматика";
  if (text.includes("освещ")) return "Щиты освещения";
  if (text.includes("учет") || text.includes("счет")) return "Щиты учета";
  if (text.includes("модуль")) return "Модульные щиты";
  if (text.includes("улич")) return "Уличные шкафы";
  if (text.includes("телеком") || text.includes("19")) return "Телеком шкафы";
  return "Корпуса и аксессуары";
}

function getWiringDeviceGroup(product) {
  const text = `${product.type || ""} ${product.title}`.toLowerCase();

  if (text.includes("legrand")) return "Серии Legrand";
  if (
    text.includes("iek") ||
    text.includes("aquatic") ||
    text.includes("гермес") ||
    text.includes("кварта") ||
    text.includes("октава") ||
    text.includes("форс") ||
    text.includes("bolero") ||
    text.includes("brite")
  ) return "Серии IEK";
  if (
    text.includes("unit") ||
    text.includes("vita") ||
    text.includes("astra") ||
    text.includes("tetranew") ||
    text.includes("smart") ||
    text.includes("element") ||
    text.includes("rock") ||
    text.includes("quattro")
  ) return "Серии UNIT";
  if (
    text.includes("schneider") ||
    text.includes("systeme") ||
    text.includes("wessen") ||
    text.includes("atlas") ||
    text.includes("aqua") ||
    text.includes("этюд") ||
    text.includes("blanca") ||
    text.includes("glossa") ||
    text.includes("artgallery")
  ) return "Schneider / Systeme Electric";
  if (text.includes("удлин") || text.includes("сетев") || text.includes("шнур")) return "Удлинители и фильтры";
  if (text.includes("разъ") || text.includes("каучук") || text.includes("штекер")) return "Силовые разъёмы";
  if (text.includes("тройник") || text.includes("адаптер") || text.includes("вилк") || text.includes("колод")) return "Колодки, вилки и адаптеры";
  if (text.includes("звон") || text.includes("кноп")) return "Звонки и кнопки";
  if (text.includes("катуш")) return "Катушки и рамки";
  if (text.includes("rj45") || text.includes("tv") || text.includes("слаботоч")) return "Слаботочные розетки";
  if (text.includes("подрозет") || text.includes("монтаж")) return "Монтажные коробки";
  if (text.includes("распредел") || text.includes("гермет")) return "Распределительные коробки";
  if (text.includes("розет") || text.includes("напольн")) return "Розетки";
  if (text.includes("выключ") || text.includes("диммер") || text.includes("светорегулятор")) return "Выключатели";
  if (text.includes("рамк")) return "Рамки и механизмы";
  return "Электроустановочные изделия";
}

function getProductGroup(product) {
  const section = getProductSection(product);
  if (section === "Кабеленесущие системы") return getSystemGroup(product);
  if (section === "Шкафы / щиты") return getCabinetGroup(product);
  if (section === "Розетки / выключатели / коробки") return getWiringDeviceGroup(product);
  return getCableGroup(product);
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
      rows.map(normalizeProduct).map(secureProduct).forEach((product) => {
        if (!product.id) return;
        const localProduct = merged.get(product.id) || {};
        merged.set(product.id, {
          ...localProduct,
          ...product
        });
      });
      products = [...merged.values()];
      state.section = "Все";
      state.group = "Все";
      state.conductor = "Все";
      restoreQuote();
      render();
      renderQuote();
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
  const quoteQty = getQuoteQty(product.id);
  card.className = "product-card product-card-enter";
  card.innerHTML = `
    <div class="product-media">
      <img src="${assetUrl(product.image)}" alt="${escapeAttribute(product.title)}" loading="lazy" decoding="async">
      <span class="product-badge">${escapeHtml(product.badge)}</span>
    </div>
    <div class="product-body">
      <div class="product-topline">
        <span>${escapeHtml(getProductSection(product))} / ${escapeHtml(getProductGroup(product))}</span>
        <span>${product.type ? `${escapeHtml(product.type)} / ` : ""}${escapeHtml(product.conductor)}</span>
      </div>
      <h3 class="product-title">${escapeHtml(product.title)}</h3>
      <p class="product-desc">${escapeHtml(product.description)}</p>
      <dl class="spec-list">
        <div><dt>Параметр</dt><dd>${escapeHtml(product.voltage)}</dd></div>
        <div><dt>Исполнение</dt><dd>${escapeHtml(product.cores)}</dd></div>
      </dl>
      <div class="tag-row">
        ${product.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
      </div>
      <button class="card-action${quoteQty ? " is-added" : ""}" type="button" data-product-id="${escapeAttribute(product.id)}">${quoteQty ? `В заявке: ${escapeHtml(quoteQty)}` : "В заявку"}</button>
    </div>
  `;
  return card;
}

function animateProductCards() {
  if (prefersReducedMotion.matches) {
    productGrid.querySelectorAll(".product-card-enter").forEach((card) => {
      card.classList.add("is-visible");
    });
    return;
  }

  productGrid.querySelectorAll(".product-card-enter").forEach((card, index) => {
    const delay = Math.min(index, 11) * 38;
    window.setTimeout(() => card.classList.add("is-visible"), delay);
  });
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
  animateProductCards();
}

function updateProductActionStates() {
  productGrid.querySelectorAll("[data-product-id]").forEach((button) => {
    const qty = getQuoteQty(button.dataset.productId);
    button.classList.toggle("is-added", qty > 0);
    button.textContent = qty > 0 ? `В заявке: ${qty}` : "В заявку";
  });
}

function renderFloatingQuote() {
  const totals = getQuoteTotals();
  floatingQuote.hidden = totals.items === 0;
  floatingQuote.innerHTML = `
    <span>Заявка</span>
    <strong>${escapeHtml(totals.qty)} шт.</strong>
  `;
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
  const id = safeProductId(productId);
  const product = products.find((item) => item.id === id);
  if (!product) return;

  const existing = state.quote.find((item) => item.id === id);
  if (existing) {
    existing.qty = Math.min(MAX_ITEM_QTY, existing.qty + 1);
  } else {
    if (state.quote.length >= MAX_QUOTE_ITEMS) {
      formStatus.textContent = "В одной заявке можно добавить до 40 позиций.";
      return;
    }
    state.quote.push({ ...product, qty: 1 });
  }

  renderQuote();
  showToast(`${product.title} добавлен в заявку`);
}

function removeFromQuote(productId) {
  const id = safeProductId(productId);
  state.quote = state.quote.filter((item) => item.id !== id);
  renderQuote();
}

function updateQuoteQty(productId, delta) {
  const id = safeProductId(productId);
  const item = state.quote.find((entry) => entry.id === id);
  if (!item) return;

  item.qty = Math.min(MAX_ITEM_QTY, item.qty + delta);
  if (item.qty <= 0) {
    removeFromQuote(id);
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
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(getProductSection(item))} / ${escapeHtml(getProductGroup(item))}, ${escapeHtml(item.cores)}, ${escapeHtml(item.qty)} шт.</span>
      </div>
      <div class="quote-controls" aria-label="Количество ${escapeAttribute(item.title)}">
        <button class="quote-step" type="button" aria-label="Уменьшить ${escapeAttribute(item.title)}" data-qty-id="${escapeAttribute(item.id)}" data-qty-delta="-1">-</button>
        <strong class="quote-qty">${escapeHtml(item.qty)}</strong>
        <button class="quote-step" type="button" aria-label="Увеличить ${escapeAttribute(item.title)}" data-qty-id="${escapeAttribute(item.id)}" data-qty-delta="1">+</button>
        <button class="quote-remove" type="button" aria-label="Удалить ${escapeAttribute(item.title)}" data-remove-id="${escapeAttribute(item.id)}">x</button>
      </div>
    `;
    quoteList.append(row);
  });

  saveQuote();
  updateProductActionStates();
  renderFloatingQuote();
}

function render() {
  renderFilters();
  renderProducts();
}

searchInput.addEventListener("input", (event) => {
  state.search = normalizeWhitespace(event.target.value, MAX_SEARCH_LENGTH);
  if (event.target.value !== state.search) event.target.value = state.search;
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
  showToast("Заявка очищена");
});

floatingQuote.addEventListener("click", () => {
  smoothScrollTo(document.querySelector("#request"));
});

document.addEventListener("click", handleAnchorNavigation);
window.addEventListener("hashchange", () => {
  if (window.location.hash === "#catalog") animateCatalogArrival();
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
  const email = normalizeWhitespace(data.get("email"), MAX_CONTACT_LENGTH).toLowerCase();
  const password = String(data.get("password") || "");
  const isRegister = state.auth.mode === "register";

  if (!isValidEmail(email)) {
    authStatus.textContent = "Укажи корректный email.";
    return;
  }

  if (password.length < 6 || password.length > 128) {
    authStatus.textContent = "Пароль должен быть от 6 до 128 символов.";
    return;
  }

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

  const cooldownLeft = getCooldownLeft();
  if (cooldownLeft > 0) {
    formStatus.textContent = `Подожди ${Math.ceil(cooldownLeft / 1000)} сек. перед следующей отправкой.`;
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
  const customerName = normalizeWhitespace(data.get("name"), MAX_NAME_LENGTH);
  const customerContact = normalizeWhitespace(data.get("contact"), MAX_CONTACT_LENGTH);
  const comment = normalizeMultiline(data.get("comment"), MAX_COMMENT_LENGTH);

  if (!customerName || !customerContact) {
    formStatus.textContent = "Укажи имя и телефон или email.";
    return;
  }

  if (!isValidContact(customerContact)) {
    formStatus.textContent = "Укажи корректный телефон или email.";
    return;
  }

  const request = {
    customer_name: customerName,
    customer_contact: customerContact,
    comment,
    items: state.quote.map((item) => ({
      id: safeProductId(item.id),
      title: normalizeWhitespace(item.title, 140),
      category: normalizeWhitespace(item.category, 80),
      type: normalizeWhitespace(item.type, 80),
      conductor: normalizeWhitespace(item.conductor, 80),
      voltage: normalizeWhitespace(item.voltage, 80),
      cores: normalizeWhitespace(item.cores, 80),
      qty: Math.max(1, Math.min(MAX_ITEM_QTY, Number(item.qty) || 1))
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
    markRequestSent();
  } catch (error) {
    console.error("Request submit error:", error);
    if (isFormSubmitActivationMessage(error.message)) {
      formStatus.textContent = "FormSubmit ждет подтверждение почты centralasiaenerg@gmail.com. Открой письмо Activate Form и нажми подтверждение.";
    } else {
      formStatus.textContent = "Не удалось отправить заявку. Попробуй еще раз или проверь настройки базы.";
    }
  }
});

products = products.map(secureProduct).filter((product) => product.id);
restoreQuote();
setupRevealAnimations();
render();
renderQuote();
restoreAuthSession();
loadProductsFromSupabase();

if (window.location.hash === "#catalog") {
  window.setTimeout(animateCatalogArrival, 260);
}
