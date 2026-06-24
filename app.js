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

const cableSupportCatalogProducts = [
  {
    id: "direct-mount-cable-holders",
    title: "Держатели кабельные для прямого монтажа",
    type: "Прямой монтаж",
    conductor: "Пластик",
    voltage: "для кабеля и трубы",
    cores: "крепление к стене / потолку",
    badge: "Монтаж",
    image: "assets/fasteners.png",
    description: "Кабельные держатели для аккуратного прямого монтажа кабеля, гофры и небольших трасс без лотка.",
    tags: ["держатели", "прямой монтаж", "Промрукав"],
    popularity: 88
  },
  {
    id: "direct-mount-corrugation-clips",
    title: "Клипсы под гофру",
    type: "Прямой монтаж",
    conductor: "Пластик",
    voltage: "под гофрированную трубу",
    cores: "диаметр по запросу",
    badge: "Клипсы",
    image: "assets/fasteners.png",
    description: "Клипсы для фиксации гофрированных труб ПВХ и ПНД на стенах, потолках и монтажных поверхностях.",
    tags: ["клипса", "гофра", "труба"],
    popularity: 87
  },
  {
    id: "direct-mount-gun-pads",
    title: "Площадки под пистолет",
    type: "Прямой монтаж",
    conductor: "Пластик",
    voltage: "для монтажного пистолета",
    cores: "быстрая фиксация",
    badge: "Пистолет",
    image: "assets/fasteners.png",
    description: "Площадки для быстрого крепления кабеля и труб монтажным пистолетом на строительных объектах.",
    tags: ["площадка", "монтажный пистолет", "крепеж"],
    popularity: 82
  },
  {
    id: "direct-mount-reinforced-clamps",
    title: "Скобы усиленные",
    type: "Прямой монтаж",
    conductor: "Пластик / металл",
    voltage: "усиленная фиксация",
    cores: "размер по запросу",
    badge: "Скоба",
    image: "assets/fasteners.png",
    description: "Усиленные скобы для надежной фиксации кабеля, труб и легких трасс на несущих поверхностях.",
    tags: ["скоба", "усиленная", "крепеж"],
    popularity: 81
  },
  {
    id: "ceiling-baguette",
    title: "Багет потолочный",
    type: "Багет потолочный",
    conductor: "ПВХ",
    voltage: "декоративная прокладка",
    cores: "потолочный монтаж",
    badge: "Багет",
    image: "assets/cable-channel.png",
    description: "Потолочный багет для скрытой и аккуратной прокладки кабеля вдоль потолка и стен.",
    tags: ["багет", "потолочный", "ПВХ"],
    popularity: 78
  },
  {
    id: "floor-boxes-components",
    title: "Коробки напольные и комплектующие",
    type: "Напольные системы",
    conductor: "Пластик / металл",
    voltage: "напольный монтаж",
    cores: "коробки и комплектующие",
    badge: "Пол",
    image: "assets/floor-channel.png",
    description: "Напольные коробки и комплектующие для организации кабельных линий в офисах, торговых залах и рабочих местах.",
    tags: ["напольная коробка", "пол", "комплектующие"],
    popularity: 84
  },
  {
    id: "floor-sockets",
    title: "Напольные розетки",
    type: "Напольные системы",
    conductor: "Пластик / металл",
    voltage: "220 В",
    cores: "силовые и слаботочные точки",
    badge: "Розетки",
    image: "assets/floor-outlet-block.png",
    description: "Напольные розетки для рабочих зон, переговорных, залов и мест, где питание нужно вывести из пола.",
    tags: ["напольная розетка", "питание", "офис"],
    popularity: 86
  },
  {
    id: "metal-hose-insulated-broach",
    title: "Металлорукав изолированный с протяжкой",
    type: "Металлорукав",
    conductor: "Оцинкованная сталь",
    voltage: "механическая защита",
    cores: "с протяжкой",
    badge: "Защита",
    image: "assets/metal-hose.png",
    description: "Изолированный металлорукав с протяжкой для защиты кабеля и быстрого монтажа на сложных участках трассы.",
    tags: ["металлорукав", "изолированный", "протяжка"],
    popularity: 90
  },
  {
    id: "metal-hose-noninsulated-broach",
    title: "Металлорукав неизолированный с протяжкой",
    type: "Металлорукав",
    conductor: "Оцинкованная сталь",
    voltage: "механическая защита",
    cores: "с протяжкой",
    badge: "Металл",
    image: "assets/metal-hose.png",
    description: "Неизолированный металлорукав с протяжкой для защиты кабеля от ударов, истирания и внешних воздействий.",
    tags: ["металлорукав", "неизолированный", "протяжка"],
    popularity: 88
  },
  {
    id: "metal-hose-clamp",
    title: "Скоба к металлорукаву",
    type: "Металлорукав",
    conductor: "Сталь",
    voltage: "крепление металлорукава",
    cores: "диаметр по запросу",
    badge: "Скоба",
    image: "assets/fasteners.png",
    description: "Скоба для надежного крепления металлорукава к стенам, потолкам и монтажным конструкциям.",
    tags: ["скоба", "металлорукав", "крепеж"],
    popularity: 80
  },
  {
    id: "metal-hose-gun-clamp",
    title: "Скоба для монтажного пистолета",
    type: "Металлорукав",
    conductor: "Сталь",
    voltage: "быстрый монтаж",
    cores: "под монтажный пистолет",
    badge: "Пистолет",
    image: "assets/fasteners.png",
    description: "Скоба для фиксации металлорукава и труб при монтаже с использованием строительного пистолета.",
    tags: ["скоба", "монтажный пистолет", "металлорукав"],
    popularity: 79
  },
  {
    id: "metal-tray-perforated-nonperforated",
    title: "Лоток металлический перфорированный / неперфорированный",
    type: "Лоток металлический",
    conductor: "Оцинкованная сталь",
    voltage: "перфорация / без перфорации",
    cores: "размер по запросу",
    badge: "Лоток",
    image: "assets/tray-sheet.png",
    description: "Металлический перфорированный или неперфорированный лоток для открытой прокладки силовых и слаботочных трасс.",
    tags: ["лоток", "перфорированный", "неперфорированный"],
    popularity: 94
  },
  {
    id: "metal-tray-ladder",
    title: "Лоток металлический лестничный",
    type: "Лоток металлический",
    conductor: "Сталь",
    voltage: "высокая несущая способность",
    cores: "лестничный",
    badge: "Нагрузка",
    image: "assets/ladder-tray.png",
    description: "Лестничный металлический лоток для тяжелых кабельных линий, магистралей и промышленных трасс.",
    tags: ["лоток", "лестничный", "магистраль"],
    popularity: 89
  },
  {
    id: "metal-tray-wire",
    title: "Лоток металлический проволочный",
    type: "Лоток металлический",
    conductor: "Оцинкованная сталь",
    voltage: "проволочная конструкция",
    cores: "размер по запросу",
    badge: "Проволочный",
    image: "assets/wire-tray.png",
    description: "Проволочный металлический лоток для легких и удобных в обслуживании кабельных трасс.",
    tags: ["лоток", "проволочный", "кабельная трасса"],
    popularity: 87
  },
  {
    id: "cable-channel-perforated-iek",
    title: "Кабель-канал перфорированный IEK",
    type: "Кабель-канал",
    conductor: "ПВХ",
    voltage: "перфорированный",
    cores: "размер по запросу",
    badge: "IEK",
    image: "assets/cable-channel.png",
    description: "Перфорированный кабель-канал IEK для щитов, шкафов автоматики и аккуратной разводки проводов.",
    tags: ["кабель-канал", "перфорированный", "IEK"],
    popularity: 89
  },
  {
    id: "cable-channel-mainline",
    title: "Кабель-канал магистральный",
    type: "Кабель-канал",
    conductor: "ПВХ",
    voltage: "магистральная прокладка",
    cores: "размер по запросу",
    badge: "Магистраль",
    image: "assets/cable-channel.png",
    description: "Магистральный кабель-канал для прокладки основных линий по стенам, офисам и техническим помещениям.",
    tags: ["кабель-канал", "магистральный", "ПВХ"],
    popularity: 86
  },
  {
    id: "cable-channel-floor-primer",
    title: "Напольный кабель-канал Праймер",
    type: "Кабель-канал",
    conductor: "ПВХ / резина",
    voltage: "защита проходов",
    cores: "напольный",
    badge: "Праймер",
    image: "assets/floor-channel.png",
    description: "Напольный кабель-канал Праймер для защиты кабеля в проходных зонах, офисах и временных трассах.",
    tags: ["кабель-канал", "напольный", "Праймер"],
    popularity: 84
  },
  {
    id: "tray-accessories-nuts-anchors-hardware",
    title: "Гайки / анкера / метизы для лотков",
    type: "Аксессуары к лоткам",
    conductor: "Сталь",
    voltage: "крепеж трассы",
    cores: "М6-М8 и другие",
    badge: "Метизы",
    image: "assets/fasteners.png",
    description: "Метизы, гайки и анкера для соединения, подвеса и крепления кабельных лотков.",
    tags: ["метизы", "анкера", "гайки"],
    popularity: 82
  },
  {
    id: "tray-accessories-hangers-clamps",
    title: "Держатели / подвесы / скобы потолочные",
    type: "Аксессуары к лоткам",
    conductor: "Сталь",
    voltage: "потолочный подвес",
    cores: "для кабельных лотков",
    badge: "Подвес",
    image: "assets/console-bracket.png",
    description: "Держатели, подвесы и потолочные скобы для крепления лотков к перекрытиям и конструкциям.",
    tags: ["держатель", "подвес", "скоба"],
    popularity: 83
  },
  {
    id: "tray-accessories-end-caps",
    title: "Заглушки для лотков",
    type: "Аксессуары к лоткам",
    conductor: "Сталь",
    voltage: "закрытие торца",
    cores: "размер по запросу",
    badge: "Заглушка",
    image: "assets/tray-cover.png",
    description: "Заглушки для закрытия торцев кабельных лотков и аккуратного завершения трассы.",
    tags: ["заглушка", "лоток", "аксессуар"],
    popularity: 78
  },
  {
    id: "tray-accessories-crosses",
    title: "Крестовины для лотков",
    type: "Аксессуары к лоткам",
    conductor: "Оцинкованная сталь",
    voltage: "разветвление трассы",
    cores: "крестовое соединение",
    badge: "Крестовина",
    image: "assets/tray-sheet.png",
    description: "Крестовины для организации пересечений и ответвлений кабельных трасс на базе лотков.",
    tags: ["крестовина", "разветвление", "лоток"],
    popularity: 77
  },
  {
    id: "tray-accessories-brackets",
    title: "Кронштейны для лотков",
    type: "Аксессуары к лоткам",
    conductor: "Сталь",
    voltage: "настенный монтаж",
    cores: "длина по запросу",
    badge: "Кронштейн",
    image: "assets/console-bracket.png",
    description: "Кронштейны для настенного и опорного крепления кабельных лотков.",
    tags: ["кронштейн", "лоток", "опора"],
    popularity: 81
  },
  {
    id: "tray-accessories-covers",
    title: "Крышки на лотки и аксессуары",
    type: "Аксессуары к лоткам",
    conductor: "Оцинкованная сталь",
    voltage: "защита трассы",
    cores: "ширина по запросу",
    badge: "Крышка",
    image: "assets/tray-cover.png",
    description: "Крышки и аксессуары для защиты открытых кабельных лотков от пыли, контакта и механического воздействия.",
    tags: ["крышка", "лоток", "защита"],
    popularity: 82
  },
  {
    id: "tray-accessories-reducers",
    title: "Переходники для лотков",
    type: "Аксессуары к лоткам",
    conductor: "Оцинкованная сталь",
    voltage: "переход ширины",
    cores: "размер по запросу",
    badge: "Переход",
    image: "assets/tray-sheet.png",
    description: "Переходники для изменения ширины или направления кабельной трассы из металлических лотков.",
    tags: ["переходник", "лоток", "трасса"],
    popularity: 76
  },
  {
    id: "tray-accessories-connection-plate",
    title: "Пластина соединительная для лотков",
    type: "Аксессуары к лоткам",
    conductor: "Сталь",
    voltage: "соединение секций",
    cores: "h 50 / h 80 и другие",
    badge: "Соединение",
    image: "assets/mounting-profile.png",
    description: "Соединительная пластина для надежного стыка секций кабельных лотков.",
    tags: ["пластина", "соединительная", "лоток"],
    popularity: 79
  },
  {
    id: "cable-channel-accessory-outside-corner-kmn",
    title: "Внешний угол КМН",
    type: "Аксессуары к кабель-каналам",
    conductor: "ПВХ",
    voltage: "наружный поворот",
    cores: "для кабель-канала",
    badge: "Угол",
    image: "assets/cable-channel.png",
    description: "Внешний угол КМН для аккуратного наружного поворота кабель-канала.",
    tags: ["КМН", "внешний угол", "кабель-канал"],
    popularity: 76
  },
  {
    id: "cable-channel-accessory-inside-corner-kmv",
    title: "Внутренний угол КМВ",
    type: "Аксессуары к кабель-каналам",
    conductor: "ПВХ",
    voltage: "внутренний поворот",
    cores: "для кабель-канала",
    badge: "Угол",
    image: "assets/cable-channel.png",
    description: "Внутренний угол КМВ для аккуратного прохождения кабель-канала по внутренним углам.",
    tags: ["КМВ", "внутренний угол", "кабель-канал"],
    popularity: 76
  },
  {
    id: "cable-channel-accessory-end-cap-kmz",
    title: "Заглушка КМЗ",
    type: "Аксессуары к кабель-каналам",
    conductor: "ПВХ",
    voltage: "закрытие торца",
    cores: "для кабель-канала",
    badge: "Заглушка",
    image: "assets/cable-channel.png",
    description: "Заглушка КМЗ для закрытия торца кабель-канала и завершения линии.",
    tags: ["КМЗ", "заглушка", "кабель-канал"],
    popularity: 75
  },
  {
    id: "cable-channel-accessory-turn-90-kmp",
    title: "Поворот 90 КМП",
    type: "Аксессуары к кабель-каналам",
    conductor: "ПВХ",
    voltage: "поворот 90 градусов",
    cores: "для кабель-канала",
    badge: "Поворот",
    image: "assets/cable-channel.png",
    description: "Поворот 90 КМП для изменения направления кабель-канала без грубых стыков.",
    tags: ["КМП", "поворот 90", "кабель-канал"],
    popularity: 77
  },
  {
    id: "cable-channel-accessory-joint-kms",
    title: "Соединитель на стык КМС",
    type: "Аксессуары к кабель-каналам",
    conductor: "ПВХ",
    voltage: "стыковое соединение",
    cores: "для кабель-канала",
    badge: "Стык",
    image: "assets/cable-channel.png",
    description: "Соединитель КМС закрывает стык между секциями кабель-канала и делает линию аккуратной.",
    tags: ["КМС", "соединитель", "стык"],
    popularity: 76
  },
  {
    id: "cable-channel-accessory-t-corner-kmt",
    title: "Т-образный угол КМТ",
    type: "Аксессуары к кабель-каналам",
    conductor: "ПВХ",
    voltage: "Т-образное ответвление",
    cores: "для кабель-канала",
    badge: "Т-угол",
    image: "assets/cable-channel.png",
    description: "Т-образный угол КМТ для ответвления кабель-канала в дополнительном направлении.",
    tags: ["КМТ", "Т-образный", "ответвление"],
    popularity: 76
  },
  {
    id: "cable-channel-accessory-modules-inserts",
    title: "Модули / Вставки для кабель-каналов",
    type: "Аксессуары к кабель-каналам",
    conductor: "Пластик",
    voltage: "комплектация канала",
    cores: "модули и вставки",
    badge: "Модули",
    image: "assets/cable-channel.png",
    description: "Модули и вставки для комплектации кабель-каналов, установки точек подключения и аккуратной разводки.",
    tags: ["модули", "вставки", "кабель-канал"],
    popularity: 78
  },
  {
    id: "dlp-legrand-cable-channel-accessories",
    title: "Аксессуары и комплектующие для кабель-каналов DLP Legrand",
    type: "Аксессуары к кабель-каналам",
    conductor: "Пластик",
    voltage: "DLP Legrand",
    cores: "аксессуары и комплектующие",
    badge: "Legrand",
    image: "assets/cable-channel.png",
    description: "Аксессуары и комплектующие DLP Legrand для сборки кабель-каналов и рабочих мест.",
    tags: ["DLP", "Legrand", "кабель-канал"],
    popularity: 82
  },
  {
    id: "pipe-clip-fastener",
    title: "Крепеж-клипса для труб",
    type: "Аксессуары для труб ПНД / ПВХ",
    conductor: "Пластик",
    voltage: "крепление труб",
    cores: "диаметр по запросу",
    badge: "Клипса",
    image: "assets/fasteners.png",
    description: "Крепеж-клипса для фиксации труб ПВХ и ПНД на стенах, потолках и монтажных поверхностях.",
    tags: ["клипса", "труба", "ПВХ"],
    popularity: 84
  },
  {
    id: "pipe-entry-coupling",
    title: "Муфта вводная для трубы",
    type: "Аксессуары для труб ПНД / ПВХ",
    conductor: "Пластик",
    voltage: "ввод трубы",
    cores: "ПНД / ПВХ",
    badge: "Муфта",
    image: "assets/pvc-corrugated.png",
    description: "Вводная муфта для аккуратного ввода трубы в коробку, шкаф или монтажный узел.",
    tags: ["муфта", "ввод", "труба"],
    popularity: 82
  },
  {
    id: "pipe-connection-coupling",
    title: "Муфта соединительная для трубы",
    type: "Аксессуары для труб ПНД / ПВХ",
    conductor: "Пластик",
    voltage: "соединение труб",
    cores: "ПНД / ПВХ",
    badge: "Муфта",
    image: "assets/pvc-corrugated.png",
    description: "Соединительная муфта для стыковки труб ПНД и ПВХ при прокладке кабельной трассы.",
    tags: ["муфта", "соединительная", "труба"],
    popularity: 82
  },
  {
    id: "pipe-tee-connector",
    title: "Тройник соединительный для трубы",
    type: "Аксессуары для труб ПНД / ПВХ",
    conductor: "Пластик",
    voltage: "разветвление трубы",
    cores: "Т-образный",
    badge: "Тройник",
    image: "assets/pvc-corrugated.png",
    description: "Соединительный тройник для разветвления трубной кабельной трассы.",
    tags: ["тройник", "соединительный", "труба"],
    popularity: 80
  },
  {
    id: "pipe-90-angle-connector",
    title: "Угол 90 соединительный для трубы",
    type: "Аксессуары для труб ПНД / ПВХ",
    conductor: "Пластик",
    voltage: "поворот трубы 90 градусов",
    cores: "ПНД / ПВХ",
    badge: "Угол 90",
    image: "assets/pvc-corrugated.png",
    description: "Угол 90 для соединения труб ПНД и ПВХ с аккуратным поворотом трассы.",
    tags: ["угол 90", "труба", "соединитель"],
    popularity: 80
  },
  {
    id: "pipe-corrugated-pvc-broach",
    title: "Гофрированная труба ПВХ с протяжкой",
    type: "Трубы",
    conductor: "ПВХ",
    voltage: "гибкая прокладка",
    cores: "с протяжкой",
    badge: "ПВХ",
    image: "assets/pvc-corrugated.png",
    description: "Гофрированная труба ПВХ с протяжкой для защиты кабеля и удобной протяжки проводов.",
    tags: ["гофра", "ПВХ", "протяжка"],
    popularity: 90
  },
  {
    id: "pipe-corrugated-pnd-broach",
    title: "Гофрированная труба ПНД с протяжкой",
    type: "Трубы",
    conductor: "ПНД",
    voltage: "гибкая прокладка",
    cores: "с протяжкой",
    badge: "ПНД",
    image: "assets/pvc-corrugated.png",
    description: "Гофрированная труба ПНД с протяжкой для наружной и внутренней кабельной прокладки.",
    tags: ["гофра", "ПНД", "протяжка"],
    popularity: 89
  },
  {
    id: "pipe-double-wall-pnd-broach",
    title: "Гофрированная двустенная труба ПНД с протяжкой",
    type: "Трубы",
    conductor: "ПНД",
    voltage: "усиленная защита",
    cores: "двустенная, с протяжкой",
    badge: "Двустенная",
    image: "assets/pvc-corrugated.png",
    description: "Двустенная гофрированная труба ПНД с протяжкой для защищенных наружных и подземных трасс.",
    tags: ["двустенная", "ПНД", "протяжка"],
    popularity: 88
  },
  {
    id: "pipe-rigid-smooth-pvc",
    title: "Жесткая гладкая труба ПВХ",
    type: "Трубы",
    conductor: "ПВХ",
    voltage: "жесткая прокладка",
    cores: "гладкая",
    badge: "Жесткая",
    image: "assets/pvc-corrugated.png",
    description: "Жесткая гладкая труба ПВХ для прямых участков кабельных трасс внутри помещений.",
    tags: ["жесткая", "гладкая", "ПВХ"],
    popularity: 86
  },
  {
    id: "pipe-rigid-smooth-pnd",
    title: "Жесткая гладкая труба ПНД",
    type: "Трубы",
    conductor: "ПНД",
    voltage: "жесткая прокладка",
    cores: "гладкая",
    badge: "Жесткая",
    image: "assets/pvc-corrugated.png",
    description: "Жесткая гладкая труба ПНД для защищенной прокладки кабеля на прямых участках.",
    tags: ["жесткая", "гладкая", "ПНД"],
    popularity: 85
  },
  {
    id: "heat-resistant-tut-tube",
    title: "Термоустойчивая труба ТУТ",
    type: "Трубы",
    conductor: "Пластик",
    voltage: "термозащита",
    cores: "ТУТ",
    badge: "ТУТ",
    image: "assets/pvc-corrugated.png",
    description: "Термоустойчивая труба ТУТ для защиты проводов и кабеля в местах с повышенной температурой.",
    tags: ["ТУТ", "термостойкая", "труба"],
    popularity: 82
  },
  {
    id: "cambric-tube",
    title: "Трубка кембрик",
    type: "Трубы",
    conductor: "Пластик",
    voltage: "изоляция проводников",
    cores: "диаметр по запросу",
    badge: "Кембрик",
    image: "assets/pvc-corrugated.png",
    description: "Трубка кембрик для дополнительной изоляции, маркировки и защиты отдельных проводников.",
    tags: ["кембрик", "изоляция", "провод"],
    popularity: 78
  },
  {
    id: "pipe-bandage",
    title: "Бандаж для труб и кабельной трассы",
    type: "Трубы",
    conductor: "Пластик",
    voltage: "фиксация трассы",
    cores: "по запросу",
    badge: "Бандаж",
    image: "assets/fasteners.png",
    description: "Бандаж для фиксации труб, кабеля и элементов кабельной трассы при монтаже.",
    tags: ["бандаж", "труба", "фиксация"],
    popularity: 76
  }
].map((product) => ({
  category: "Кабеленесущие системы",
  ...product
}));

products = [...products, ...wiringDeviceSeriesProducts, ...cableSupportCatalogProducts];

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

const helperApi = window.CAEHelpers || {};
const ASSET_VERSION = "20260624-grouped-catalog";
const AUTH_STORAGE_KEY = "cae_supabase_session";
const QUOTE_STORAGE_KEY = "cae_quote_items";
const CATALOG_STATE_KEY = "cae_catalog_state";
const REQUEST_RATE_KEY = "cae_request_rate";
const LANGUAGE_STORAGE_KEY = "cae_language";
const THEME_STORAGE_KEY = "cae_theme";
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const REQUEST_COOLDOWN_MS = 30 * 1000;
const MAX_QUOTE_ITEMS = 40;
const MAX_ITEM_QTY = 999;
const MAX_SEARCH_LENGTH = 80;
const MAX_NAME_LENGTH = 80;
const MAX_CONTACT_LENGTH = 120;
const MAX_COMMENT_LENGTH = 800;
const MAX_PROJECT_FILE_SIZE_BYTES = helperApi.MAX_PROJECT_FILE_SIZE_BYTES || 15 * 1024 * 1024;
const MIN_REQUEST_FILL_TIME_MS = helperApi.MIN_REQUEST_FILL_TIME_MS || 2500;
const getSkeletonCardCount = helperApi.getSkeletonCardCount || ((viewportWidth) => {
  const width = Number(viewportWidth || 0);
  if (width <= 620) return 3;
  if (width <= 1040) return 4;
  return 6;
});
const sanitizeQuoteItems = helperApi.sanitizeQuoteItems || ((items) => {
  if (!Array.isArray(items)) return [];
  return items
    .slice(0, MAX_QUOTE_ITEMS)
    .map((item) => {
      const rawId = String(item?.id ?? "");
      const id = rawId.replace(/[^a-z0-9_-]/gi, "").slice(0, 80);
      const qty = Math.max(1, Math.min(MAX_ITEM_QTY, Number(item?.qty) || 1));
      if (!id || id !== rawId) return null;
      return { id, qty };
    })
    .filter(Boolean);
});
const sanitizeCatalogState = helperApi.sanitizeCatalogState || ((rawState, defaults) => ({ ...defaults, ...(rawState || {}) }));
const shouldTrapBotSubmission = helperApi.shouldTrapBotSubmission || (({ honeypotValue, elapsedMs }) => {
  return Boolean(String(honeypotValue || "").trim()) || Number(elapsedMs || 0) < MIN_REQUEST_FILL_TIME_MS;
});
const validateProjectFile = helperApi.validateProjectFile || ((file) => {
  if (!file || !file.name || !Number(file.size || 0)) return { ok: true, reason: "" };
  if (Number(file.size) > MAX_PROJECT_FILE_SIZE_BYTES) {
    return { ok: false, reason: "Файл проекта слишком большой. Максимум 15 МБ." };
  }
  return { ok: true, reason: "" };
});
const normalizeLanguage = helperApi.normalizeLanguage || ((value) => (["ru", "kz"].includes(value) ? value : "ru"));
const normalizeTheme = helperApi.normalizeTheme || ((value) => (["light", "dark"].includes(value) ? value : "light"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let requestFormReadyAt = Date.now();
let isSubmittingRequest = false;

function readStoredPreference(key) {
  try {
    return localStorage.getItem(key) || "";
  } catch {
    return "";
  }
}

const state = {
  section: "Все",
  group: "Все",
  conductor: "Все",
  search: "",
  sort: "popular",
  language: normalizeLanguage(readStoredPreference(LANGUAGE_STORAGE_KEY) || "ru"),
  theme: normalizeTheme(readStoredPreference(THEME_STORAGE_KEY) || "light"),
  loadingProducts: isSupabaseConfigured(),
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
const searchClear = document.querySelector("#searchClear");
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
const requestSubmitButton = requestForm?.querySelector('button[type="submit"]');
const languageButtons = document.querySelectorAll("[data-lang]");
const themeToggle = document.querySelector("#themeToggle");
const REQUEST_SUBMIT_DEFAULT_LABEL = requestSubmitButton?.textContent || "Подготовить заявку";
const backToTop = document.createElement("button");
const scrollProgress = document.createElement("div");
const floatingQuote = document.createElement("button");
const toast = document.createElement("div");

backToTop.className = "back-to-top";
backToTop.type = "button";
backToTop.hidden = true;
backToTop.setAttribute("aria-label", "Вернуться наверх");
backToTop.innerHTML = "<span aria-hidden=\"true\">↑</span><span>Наверх</span>";

scrollProgress.className = "scroll-progress";
scrollProgress.setAttribute("aria-hidden", "true");

floatingQuote.className = "floating-quote";
floatingQuote.type = "button";
floatingQuote.hidden = true;
floatingQuote.setAttribute("aria-label", "Перейти к заявке");

toast.className = "toast";
toast.setAttribute("role", "status");
toast.setAttribute("aria-live", "polite");
toast.hidden = true;
document.body.append(scrollProgress, backToTop, floatingQuote, toast);

const LANGUAGE_META = {
  ru: { htmlLang: "ru", label: "RU" },
  kz: { htmlLang: "kk", label: "KZ" }
};

const I18N = {
  ru: {
    "nav.catalog": "Каталог",
    "nav.selection": "Подбор",
    "nav.request": "Заявка",
    "nav.contacts": "Контакты",
    "theme.light": "Светлая",
    "theme.dark": "Темная",
    "theme.toLight": "Включить светлую тему",
    "theme.toDark": "Включить темную тему",
    "trust.warranty": "Гарантия до 12 месяцев",
    "trust.gost": "Имеется сертификат качества ГОСТ",
    "trust.whatsapp": "Устная заявка в WhatsApp",
    "trust.write": "Пишите: 8 702 945 53 44",
    "auth.eyebrow": "защищенный доступ",
    "auth.title": "Вход в аккаунт",
    "auth.close": "Закрыть",
    "auth.loginTab": "Вход",
    "auth.registerTab": "Регистрация",
    "auth.password": "Пароль",
    "auth.passwordPlaceholder": "Минимум 6 символов",
    "auth.login": "Войти",
    "auth.logout": "Выйти",
    "auth.register": "Зарегистрироваться",
    "auth.openTitle": "Войти или зарегистрироваться",
    "auth.logoutTitle": "Выйти из {email}",
    "auth.noteIn": "Заявка будет отправлена из аккаунта {email}.",
    "auth.noteOut": "Для отправки заявки войдите или зарегистрируйтесь. Заявка будет привязана к вашему аккаунту.",
    "hero.eyebrow": "электромонтаж, снабжение, проектные поставки",
    "hero.title": "Кабель, щиты и электроустановочные изделия",
    "hero.copy": "Быстрый подбор силовых кабелей, шкафов, щитов, розеток, выключателей, коробок, лотков, труб и крепежа для объекта, склада или тендерной заявки.",
    "hero.catalog": "Открыть каталог",
    "hero.request": "Собрать заявку",
    "hero.positions": "позиций",
    "hero.groups": "групп",
    "hero.assortment": "ассортимент",
    "hero.assortmentValue": "кабель + щиты + розетки",
    "quick.1.title": "Для электромонтажа",
    "quick.1.copy": "ВВГнг, ПВС, ПВ-3, розетки, выключатели и коробки для внутренних сетей, щитов и подключений.",
    "quick.2.title": "Для улицы и трасс",
    "quick.2.copy": "СИП, морозостойкий кабель, лотки, трубы и металлорукав для наружных и открытых линий.",
    "quick.3.title": "Для связи",
    "quick.3.copy": "UTP, FTP, контрольные кабели, шкафы автоматики и телеком-оборудование для слаботочных систем.",
    "seo.eyebrow": "CentralAsiaEnergetics",
    "seo.title": "Каталог кабеля и электрики для объектов в Казахстане",
    "seo.copy": "CentralAsiaEnergetics помогает быстро собрать заявку на кабель, провод, СИП, силовой кабель, кабеленесущие системы, шкафы, щиты, розетки, выключатели и монтажные коробки. Каталог сделан для электромонтажа, снабжения, проектных поставок и подбора материалов по объекту.",
    "seo.keyword.1": "кабель и провод",
    "seo.keyword.2": "силовой кабель",
    "seo.keyword.3": "самонесущий СИП",
    "seo.keyword.4": "лотки и кабель-каналы",
    "seo.keyword.5": "шкафы и щиты",
    "seo.keyword.6": "розетки, выключатели, коробки",
    "catalog.eyebrow": "каталог CentralAsiaEnergetics",
    "catalog.title": "Каталог кабеля, щитов и электрики",
    "catalog.copy": "Фильтруй по назначению, материалу и запросу. В каталоге есть кабели, провод, шкафы, щиты, розетки, выключатели, коробки, лотки, трубы, короба и монтажные элементы.",
    "filter.section": "Раздел",
    "filter.group": "Подгруппа",
    "filter.material": "Материал",
    "filter.sort": "Сортировка",
    "sort.popular": "Сначала популярные",
    "sort.name": "По названию",
    "sort.voltage": "По параметру",
    "search.label": "Поиск",
    "search.placeholder": "Например, ВВГ, СИП, розетка, выключатель, коробка или щит",
    "search.clear": "Очистить поиск",
    "search.hint": "Нажми `/`, чтобы быстро перейти к поиску.",
    "catalog.reset": "Сбросить фильтры",
    "catalog.empty": "Ничего не найдено. Попробуй другой запрос.",
    "catalog.loading": "Загрузка...",
    "product.parameter": "Параметр",
    "product.execution": "Исполнение",
    "product.add": "В заявку",
    "product.inQuote": "В заявке: {qty}",
    "request.eyebrow": "быстрая заявка",
    "request.title": "Собери список позиций",
    "request.copy": "Добавляй кабели, шкафы, щиты, розетки, выключатели, коробки, лотки, трубы и крепеж из каталога, укажи контакты и комментарий. Форма сохраняет заявки и помогает быстро передать список позиций менеджеру. Если есть проект, его тоже можно приложить.",
    "quote.title": "В заявке",
    "quote.clear": "Очистить",
    "quote.empty": "Пока пусто. Добавь нужные позиции из каталога.",
    "quote.qtyLabel": "Количество {title}",
    "quote.decrease": "Уменьшить {title}",
    "quote.increase": "Увеличить {title}",
    "quote.remove": "Удалить {title}",
    "quote.meta": "{section} / {group}, {cores}, {qty} шт.",
    "quote.float": "Заявка",
    "quote.unit": "шт.",
    "request.name": "Имя",
    "request.namePlaceholder": "Как к вам обращаться",
    "request.contact": "Телефон или email",
    "request.contactPlaceholder": "+7 или почта",
    "request.comment": "Комментарий",
    "request.commentPlaceholder": "Метраж, сроки, объект, город",
    "request.project": "Проект",
    "request.projectHint": "Необязательно. Можно приложить проект, смету или ТЗ в любом формате.",
    "request.submit": "Подготовить заявку",
    "contacts.eyebrow": "Контакты CentralAsiaEnergetics",
    "contacts.title": "Связаться быстро и без лишних шагов",
    "contacts.copy": "Если удобнее обсудить позиции голосом или сразу написать в WhatsApp, используй нужный контакт ниже. Оба канала связи работают круглосуточно.",
    "contacts.badge.request": "Устная заявка",
    "contacts.badge.tech": "Тех. связь",
    "contacts.shift": "Круглосуточно",
    "contacts.requestTitle": "Прием заявок и быстрый устный подбор",
    "contacts.requestCopy": "Для срочного запроса по кабелю, щитам, розеткам, коробкам и монтажным позициям. Можно сразу продиктовать список или объект.",
    "contacts.techTitle": "Технический куратор и digital-поддержка проекта",
    "contacts.techCopy": "По вопросам сайта, каталога, структуры заявок и доработок. Если нужно что-то улучшить, ускорить или автоматизировать, можно писать сюда напрямую.",
    "contacts.call": "Позвонить",
    "footer.title": "CentralAsiaEnergetics - каталог кабеля и электрики",
    "footer.contacts": "Контакты",
    "form.sending": "Отправляем...",
    "toast.cleared": "Заявка очищена",
    "toast.added": "{title} добавлен в заявку",
    "toast.language": "Язык переключен",
    "toast.themeDark": "Темная тема включена",
    "toast.themeLight": "Светлая тема включена"
  },
  kz: {
    "nav.catalog": "Каталог",
    "nav.selection": "Таңдау",
    "nav.request": "Өтінім",
    "nav.contacts": "Байланыс",
    "theme.light": "Жарық",
    "theme.dark": "Қараңғы",
    "theme.toLight": "Жарық тақырыпты қосу",
    "theme.toDark": "Қараңғы тақырыпты қосу",
    "trust.warranty": "Кепілдік 12 айға дейін",
    "trust.gost": "ГОСТ сапа сертификаты бар",
    "trust.whatsapp": "WhatsApp арқылы ауызша өтінім",
    "trust.write": "Жазыңыз: 8 702 945 53 44",
    "auth.eyebrow": "қорғалған қолжетімділік",
    "auth.title": "Аккаунтқа кіру",
    "auth.close": "Жабу",
    "auth.loginTab": "Кіру",
    "auth.registerTab": "Тіркелу",
    "auth.password": "Құпиясөз",
    "auth.passwordPlaceholder": "Кемінде 6 таңба",
    "auth.login": "Кіру",
    "auth.logout": "Шығу",
    "auth.register": "Тіркелу",
    "auth.openTitle": "Кіру немесе тіркелу",
    "auth.logoutTitle": "{email} аккаунтынан шығу",
    "auth.noteIn": "Өтінім {email} аккаунтынан жіберіледі.",
    "auth.noteOut": "Өтінім жіберу үшін кіріңіз немесе тіркеліңіз. Өтінім аккаунтыңызға байланысады.",
    "hero.eyebrow": "электромонтаж, жабдықтау, жобалық жеткізілім",
    "hero.title": "Кабель, қалқандар және электр бұйымдары",
    "hero.copy": "Нысанға, қоймаға немесе тендерлік өтінімге күштік кабельдер, шкафтар, қалқандар, розеткалар, ажыратқыштар, қораптар, лотоктар, құбырлар мен бекітпелерді жылдам таңдаңыз.",
    "hero.catalog": "Каталогты ашу",
    "hero.request": "Өтінім жинау",
    "hero.positions": "позиция",
    "hero.groups": "топ",
    "hero.assortment": "ассортимент",
    "hero.assortmentValue": "кабель + қалқан + розетка",
    "quick.1.title": "Электромонтаж үшін",
    "quick.1.copy": "ВВГнг, ПВС, ПВ-3, розеткалар, ажыратқыштар және ішкі желілерге арналған қораптар.",
    "quick.2.title": "Көше және трасса үшін",
    "quick.2.copy": "СИП, аязға төзімді кабель, лотоктар, құбырлар және сыртқы желілерге арналған металлорукав.",
    "quick.3.title": "Байланыс үшін",
    "quick.3.copy": "UTP, FTP, бақылау кабельдері, автоматика шкафтары және әлсіз ток жүйелеріне арналған жабдық.",
    "seo.eyebrow": "CentralAsiaEnergetics",
    "seo.title": "Қазақстандағы нысандарға арналған кабель және электр каталогы",
    "seo.copy": "CentralAsiaEnergetics кабель, сым, СИП, күштік кабель, кабель жүргізу жүйелері, шкафтар, қалқандар, розеткалар, ажыратқыштар және монтаж қораптары бойынша өтінімді тез жинауға көмектеседі.",
    "seo.keyword.1": "кабель және сым",
    "seo.keyword.2": "күштік кабель",
    "seo.keyword.3": "өзін-өзі ұстайтын СИП",
    "seo.keyword.4": "лотоктар және кабель-каналдар",
    "seo.keyword.5": "шкафтар және қалқандар",
    "seo.keyword.6": "розеткалар, ажыратқыштар, қораптар",
    "catalog.eyebrow": "CentralAsiaEnergetics каталогы",
    "catalog.title": "Кабель, қалқан және электр каталогы",
    "catalog.copy": "Мақсаты, материалы және іздеу сұранысы бойынша сүзгілеңіз. Каталогта кабель, сым, шкаф, қалқан, розетка, ажыратқыш, қорап, лоток, құбыр және монтаж элементтері бар.",
    "filter.section": "Бөлім",
    "filter.group": "Ішкі топ",
    "filter.material": "Материал",
    "filter.sort": "Сұрыптау",
    "sort.popular": "Алдымен танымал",
    "sort.name": "Атауы бойынша",
    "sort.voltage": "Параметр бойынша",
    "search.label": "Іздеу",
    "search.placeholder": "Мысалы: ВВГ, СИП, розетка, ажыратқыш, қорап немесе қалқан",
    "search.clear": "Іздеуді тазалау",
    "search.hint": "Іздеуге тез өту үшін `/` басыңыз.",
    "catalog.reset": "Сүзгілерді тазалау",
    "catalog.empty": "Ештеңе табылмады. Басқа сұраныс жасап көріңіз.",
    "catalog.loading": "Жүктелуде...",
    "product.parameter": "Параметр",
    "product.execution": "Орындау",
    "product.add": "Өтінімге",
    "product.inQuote": "Өтінімде: {qty}",
    "request.eyebrow": "жылдам өтінім",
    "request.title": "Позициялар тізімін жинаңыз",
    "request.copy": "Каталогтан кабель, шкаф, қалқан, розетка, ажыратқыш, қорап, лоток, құбыр және бекітпелерді қосып, байланыс деректерін жазыңыз. Жобаңыз болса, файлды да тіркей аласыз.",
    "quote.title": "Өтінімде",
    "quote.clear": "Тазалау",
    "quote.empty": "Әзірге бос. Қажетті позицияларды каталогтан қосыңыз.",
    "quote.qtyLabel": "{title} саны",
    "quote.decrease": "{title} азайту",
    "quote.increase": "{title} көбейту",
    "quote.remove": "{title} жою",
    "quote.meta": "{section} / {group}, {cores}, {qty} дана",
    "quote.float": "Өтінім",
    "quote.unit": "дана",
    "request.name": "Аты-жөні",
    "request.namePlaceholder": "Сізге қалай хабарласайық",
    "request.contact": "Телефон немесе email",
    "request.contactPlaceholder": "+7 немесе пошта",
    "request.comment": "Пікір",
    "request.commentPlaceholder": "Метраж, мерзім, нысан, қала",
    "request.project": "Жоба",
    "request.projectHint": "Міндетті емес. Жоба, смета немесе ТТ файлын кез келген форматта тіркеуге болады.",
    "request.submit": "Өтінімді дайындау",
    "contacts.eyebrow": "CentralAsiaEnergetics байланыстары",
    "contacts.title": "Тез әрі артық қадамсыз байланысу",
    "contacts.copy": "Позицияларды дауыспен талқылау немесе WhatsApp-қа жазу ыңғайлы болса, төмендегі контактіні таңдаңыз. Екі арна да тәулік бойы жұмыс істейді.",
    "contacts.badge.request": "Ауызша өтінім",
    "contacts.badge.tech": "Тех. байланыс",
    "contacts.shift": "Тәулік бойы",
    "contacts.requestTitle": "Өтінім қабылдау және жылдам ауызша таңдау",
    "contacts.requestCopy": "Кабель, қалқан, розетка, қорап және монтаж позициялары бойынша шұғыл сұранысқа арналған.",
    "contacts.techTitle": "Техникалық куратор және digital-қолдау",
    "contacts.techCopy": "Сайт, каталог, өтінім құрылымы және жақсартулар бойынша сұрақтарға арналған байланыс.",
    "contacts.call": "Қоңырау шалу",
    "footer.title": "CentralAsiaEnergetics - кабель және электр каталогы",
    "footer.contacts": "Байланыс",
    "form.sending": "Жіберілуде...",
    "toast.cleared": "Өтінім тазартылды",
    "toast.added": "{title} өтінімге қосылды",
    "toast.language": "Тіл ауыстырылды",
    "toast.themeDark": "Қараңғы тақырып қосылды",
    "toast.themeLight": "Жарық тақырып қосылды"
  },
  en: {
    "nav.catalog": "Catalog",
    "nav.selection": "Selection",
    "nav.request": "Request",
    "nav.contacts": "Contacts",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.toLight": "Switch to light theme",
    "theme.toDark": "Switch to dark theme",
    "trust.warranty": "Warranty up to 12 months",
    "trust.gost": "GOST quality certificate available",
    "trust.whatsapp": "Verbal request via WhatsApp",
    "trust.write": "Write: 8 702 945 53 44",
    "auth.eyebrow": "secure access",
    "auth.title": "Account sign in",
    "auth.close": "Close",
    "auth.loginTab": "Sign in",
    "auth.registerTab": "Register",
    "auth.password": "Password",
    "auth.passwordPlaceholder": "At least 6 characters",
    "auth.login": "Sign in",
    "auth.logout": "Log out",
    "auth.register": "Create account",
    "auth.openTitle": "Sign in or create an account",
    "auth.logoutTitle": "Log out of {email}",
    "auth.noteIn": "The request will be sent from {email}.",
    "auth.noteOut": "Sign in or register to send a request. The request will be linked to your account.",
    "hero.eyebrow": "electrical installation, supply, project deliveries",
    "hero.title": "Cables, panels and electrical installation products",
    "hero.copy": "Quick selection of power cables, cabinets, panels, sockets, switches, boxes, trays, pipes and fasteners for projects, warehouses or tender requests.",
    "hero.catalog": "Open catalog",
    "hero.request": "Build request",
    "hero.positions": "items",
    "hero.groups": "groups",
    "hero.assortment": "assortment",
    "hero.assortmentValue": "cables + panels + sockets",
    "quick.1.title": "For electrical installation",
    "quick.1.copy": "VVGng, PVS, PV-3, sockets, switches and boxes for indoor networks, panels and connections.",
    "quick.2.title": "For outdoor lines",
    "quick.2.copy": "SIP, frost-resistant cable, trays, pipes and metal conduit for outdoor and open routes.",
    "quick.3.title": "For communications",
    "quick.3.copy": "UTP, FTP, control cables, automation cabinets and telecom equipment for low-current systems.",
    "seo.eyebrow": "CentralAsiaEnergetics",
    "seo.title": "Cable and electrical catalog for projects in Kazakhstan",
    "seo.copy": "CentralAsiaEnergetics helps quickly assemble requests for cables, wires, SIP, power cable, cable support systems, cabinets, panels, sockets, switches and installation boxes.",
    "seo.keyword.1": "cables and wires",
    "seo.keyword.2": "power cable",
    "seo.keyword.3": "self-supporting SIP",
    "seo.keyword.4": "trays and cable ducts",
    "seo.keyword.5": "cabinets and panels",
    "seo.keyword.6": "sockets, switches, boxes",
    "catalog.eyebrow": "CentralAsiaEnergetics catalog",
    "catalog.title": "Cable, panel and electrical catalog",
    "catalog.copy": "Filter by purpose, material and search. The catalog includes cables, wires, cabinets, panels, sockets, switches, boxes, trays, pipes and mounting elements.",
    "filter.section": "Section",
    "filter.group": "Subgroup",
    "filter.material": "Material",
    "filter.sort": "Sort",
    "sort.popular": "Most popular first",
    "sort.name": "By name",
    "sort.voltage": "By parameter",
    "search.label": "Search",
    "search.placeholder": "For example: VVG, SIP, socket, switch, box or panel",
    "search.clear": "Clear search",
    "search.hint": "Press `/` to jump to search.",
    "catalog.reset": "Reset filters",
    "catalog.empty": "Nothing found. Try another query.",
    "catalog.loading": "Loading...",
    "product.parameter": "Parameter",
    "product.execution": "Configuration",
    "product.add": "Add to request",
    "product.inQuote": "In request: {qty}",
    "request.eyebrow": "quick request",
    "request.title": "Build a list of items",
    "request.copy": "Add cables, cabinets, panels, sockets, switches, boxes, trays, pipes and fasteners from the catalog, then leave contacts and comments. You can also attach a project file.",
    "quote.title": "In request",
    "quote.clear": "Clear",
    "quote.empty": "Empty for now. Add the required items from the catalog.",
    "quote.qtyLabel": "Quantity for {title}",
    "quote.decrease": "Decrease {title}",
    "quote.increase": "Increase {title}",
    "quote.remove": "Remove {title}",
    "quote.meta": "{section} / {group}, {cores}, {qty} pcs.",
    "quote.float": "Request",
    "quote.unit": "pcs.",
    "request.name": "Name",
    "request.namePlaceholder": "How should we address you",
    "request.contact": "Phone or email",
    "request.contactPlaceholder": "+7 or email",
    "request.comment": "Comment",
    "request.commentPlaceholder": "Length, deadline, project, city",
    "request.project": "Project",
    "request.projectHint": "Optional. Attach a project, estimate or technical brief in any format.",
    "request.submit": "Prepare request",
    "contacts.eyebrow": "CentralAsiaEnergetics contacts",
    "contacts.title": "Get in touch quickly",
    "contacts.copy": "If it is easier to discuss items by voice or write directly on WhatsApp, use the contact below. Both channels work 24/7.",
    "contacts.badge.request": "Verbal request",
    "contacts.badge.tech": "Tech contact",
    "contacts.shift": "24/7",
    "contacts.requestTitle": "Request intake and quick verbal selection",
    "contacts.requestCopy": "For urgent requests about cables, panels, sockets, boxes and installation items. You can dictate the list or project right away.",
    "contacts.techTitle": "Technical curator and digital project support",
    "contacts.techCopy": "For questions about the site, catalog, request structure and improvements.",
    "contacts.call": "Call",
    "footer.title": "CentralAsiaEnergetics - cable and electrical catalog",
    "footer.contacts": "Contacts",
    "form.sending": "Sending...",
    "toast.cleared": "Request cleared",
    "toast.added": "{title} added to request",
    "toast.language": "Language changed",
    "toast.themeDark": "Dark theme enabled",
    "toast.themeLight": "Light theme enabled"
  }
};

const VALUE_LABELS = {
  "Все": { kz: "Барлығы", en: "All" },
  "Кабели": { kz: "Кабельдер", en: "Cables" },
  "Кабеленесущие системы": { kz: "Кабель жүргізу жүйелері", en: "Cable support systems" },
  "Шкафы / щиты": { kz: "Шкафтар / қалқандар", en: "Cabinets / panels" },
  "Розетки / выключатели / коробки": { kz: "Розеткалар / ажыратқыштар / қораптар", en: "Sockets / switches / boxes" },
  "Силовой": { kz: "Күштік", en: "Power" },
  "Гибкий": { kz: "Иілгіш", en: "Flexible" },
  "Самонесущий": { kz: "Өзін-өзі ұстайтын", en: "Self-supporting" },
  "Связь": { kz: "Байланыс", en: "Communication" },
  "Контрольный": { kz: "Бақылау", en: "Control" },
  "Установочный": { kz: "Монтаждық", en: "Installation" },
  "Специальный": { kz: "Арнайы", en: "Special" },
  "Листовые лотки": { kz: "Табақ лотоктар", en: "Sheet trays" },
  "Проволочные лотки": { kz: "Сым лотоктар", en: "Wire trays" },
  "Лестничные лотки": { kz: "Сатылы лотоктар", en: "Ladder trays" },
  "Прямой монтаж": { kz: "Тікелей монтаж", en: "Direct mounting" },
  "Багет потолочный": { kz: "Төбелік багет", en: "Ceiling baguette" },
  "Напольные системы": { kz: "Еден жүйелері", en: "Floor systems" },
  "Металлорукав": { kz: "Металлорукав", en: "Metal conduit" },
  "Лоток металлический": { kz: "Металл лоток", en: "Metal tray" },
  "Кабель-каналы": { kz: "Кабель-каналдар", en: "Cable ducts" },
  "Трубы и металлорукав": { kz: "Құбырлар және металлорукав", en: "Pipes and metal conduit" },
  "Аксессуары к лоткам": { kz: "Лоток аксессуарлары", en: "Tray accessories" },
  "Аксессуары к кабель-каналам": { kz: "Кабель-канал аксессуарлары", en: "Cable duct accessories" },
  "Аксессуары для труб": { kz: "Құбыр аксессуарлары", en: "Pipe accessories" },
  "Трубы": { kz: "Құбырлар", en: "Pipes" },
  "Крепеж и аксессуары": { kz: "Бекітпе және аксессуарлар", en: "Fasteners and accessories" },
  "Щиты освещения": { kz: "Жарықтандыру қалқандары", en: "Lighting panels" },
  "Управление и автоматика": { kz: "Басқару және автоматика", en: "Control and automation" },
  "Корпуса и боксы": { kz: "Корпустар және бокстар", en: "Enclosures and boxes" },
  "Силовые шкафы": { kz: "Күштік шкафтар", en: "Power cabinets" },
  "Модульные щиты": { kz: "Модульдік қалқандар", en: "Modular panels" },
  "Уличные шкафы": { kz: "Сыртқы шкафтар", en: "Outdoor cabinets" },
  "Серия Legrand": { kz: "Legrand сериясы", en: "Legrand series" },
  "Серия Schneider": { kz: "Schneider сериясы", en: "Schneider series" },
  "Серия UNIT": { kz: "UNIT сериясы", en: "UNIT series" },
  "Монтажные коробки": { kz: "Монтаж қораптары", en: "Installation boxes" },
  "Разъемы и вилки": { kz: "Қосқыштар және айырлар", en: "Connectors and plugs" },
  "ВРУ": { kz: "ВРУ", en: "VRU" },
  "Медь": { kz: "Мыс", en: "Copper" },
  "Алюминий": { kz: "Алюминий", en: "Aluminum" },
  "Сталь": { kz: "Болат", en: "Steel" },
  "ПВХ": { kz: "ПВХ", en: "PVC" },
  "Пластик": { kz: "Пластик", en: "Plastic" },
  "Металл": { kz: "Металл", en: "Metal" },
  "Пластик / металл": { kz: "Пластик / металл", en: "Plastic / metal" },
  "ПНД": { kz: "ПНД", en: "HDPE" },
  "Оцинкованная сталь": { kz: "Мырышталған болат", en: "Galvanized steel" }
};

const PRODUCT_TEXT_LABELS = {
  "ВВГнг(А)-LS 3x2,5": { kz: "VVGng(A)-LS 3x2,5", en: "VVGng(A)-LS 3x2.5" },
  "ПВС 3x1,5": { kz: "PVS 3x1,5", en: "PVS 3x1.5" },
  "Вводно-распределительное устройство ВРУ": {
    kz: "ВРУ кіріс-тарату құрылғысы",
    en: "VRU input distribution unit"
  },
  "Медный силовой кабель для групп освещения, розеточных линий и распределительных щитов.": {
    kz: "Жарықтандыру топтары, розетка желілері және тарату қалқандары үшін мыс күштік кабель.",
    en: "Copper power cable for lighting groups, socket lines and distribution panels."
  },
  "Провод для удлинителей, подключения бытового и монтажного оборудования.": {
    kz: "Ұзартқыштарға, тұрмыстық және монтаж жабдықтарын қосуға арналған сым.",
    en: "Wire for extension cords and connecting household or installation equipment."
  },
  "ВРУ для приема, учета и распределения электроэнергии в жилых, коммерческих и промышленных зданиях.": {
    kz: "Тұрғын, коммерциялық және өндірістік ғимараттарда электр энергиясын қабылдау, есепке алу және таратуға арналған ВРУ.",
    en: "VRU for receiving, metering and distributing power in residential, commercial and industrial buildings."
  },
  "Хит": { kz: "Таңдаулы", en: "Popular" },
  "Популярно": { kz: "Танымал", en: "Popular" },
  "Ввод": { kz: "Кіріс", en: "Input" },
  "Трасса": { kz: "Трасса", en: "Route" },
  "Офис": { kz: "Кеңсе", en: "Office" },
  "Автоматика": { kz: "Автоматика", en: "Automation" },
  "внутренний": { kz: "ішкі", en: "indoor" },
  "медь": { kz: "мыс", en: "copper" },
  "подключение": { kz: "қосу", en: "connection" },
  "ввод": { kz: "кіріс", en: "input" },
  "учет": { kz: "есеп", en: "metering" },
  "по проекту": { kz: "жоба бойынша", en: "by project" }
};

const PRODUCT_TERM_REPLACEMENTS = {
  en: [
    ["Вводно-распределительное устройство", "Input distribution unit"],
    ["Алюминиевый самонесущий изолированный", "Aluminum self-supporting insulated"],
    ["Алюминиевый неизолированный со стальным сердечником", "Aluminum bare with steel core"],
    ["Алюминиевый неизолированный", "Aluminum bare"],
    ["Медный силовой кабель", "Copper power cable"],
    ["Алюминиевый силовой кабель", "Aluminum power cable"],
    ["контрольный кабель", "control cable"],
    ["Контрольный кабель", "Control cable"],
    ["самонесущий провод", "self-supporting wire"],
    ["Самонесущий провод", "Self-supporting wire"],
    ["кабельный лоток", "cable tray"],
    ["Кабельный лоток", "Cable tray"],
    ["кабель-канал", "cable duct"],
    ["Кабель-канал", "Cable duct"],
    ["распределительный щит", "distribution panel"],
    ["Распределительный щит", "Distribution panel"],
    ["групповой щит", "group panel"],
    ["Групповой щит", "Group panel"],
    ["розетки", "sockets"],
    ["Розетки", "Sockets"],
    ["выключатели", "switches"],
    ["Выключатели", "Switches"],
    ["коробки", "boxes"],
    ["Коробки", "Boxes"],
    ["для групп освещения", "for lighting groups"],
    ["розеточных линий", "socket lines"],
    ["распределительных щитов", "distribution panels"],
    ["для удлинителей", "for extension cords"],
    ["подключения бытового", "connecting household"],
    ["монтажного оборудования", "installation equipment"],
    ["для приема, учета и распределения электроэнергии", "for receiving, metering and distributing power"],
    ["в жилых, коммерческих и промышленных зданиях", "in residential, commercial and industrial buildings"],
    ["по запросу", "on request"],
    ["по проекту", "by project"],
    ["кВ", "kV"],
    [" В", " V"],
    ["жила", "core"],
    ["жилы", "cores"],
    ["жил", "cores"],
    ["Медь", "Copper"],
    ["медь", "copper"],
    ["Алюминий", "Aluminum"],
    ["алюминий", "aluminum"],
    ["Сталь", "Steel"],
    ["сталь", "steel"],
    ["Пластик", "Plastic"],
    ["Металл", "Metal"],
    ["металл", "metal"],
    ["ВРУ", "VRU"],
    ["СИП", "SIP"],
    ["ПВС", "PVS"],
    ["ВВГнг", "VVGng"],
    ["ПВХ", "PVC"],
    ["нг-LS", "ng-LS"],
    ["внутренний", "indoor"],
    ["наружный", "outdoor"],
    ["питание", "power"],
    ["объект", "project"],
    ["фасад", "facade"],
    ["щит", "panel"],
    ["монтаж", "installation"],
    ["сеть", "network"],
    ["данные", "data"],
    ["экран", "shield"],
    ["ввод", "input"],
    ["учет", "metering"],
    ["офис", "office"],
    ["Трасса", "Route"],
    ["Хит", "Popular"]
  ],
  kz: [
    ["Вводно-распределительное устройство", "Кіріс-тарату құрылғысы"],
    ["Медный силовой кабель", "Мыс күштік кабель"],
    ["Алюминиевый силовой кабель", "Алюминий күштік кабель"],
    ["для групп освещения", "жарықтандыру топтары үшін"],
    ["розеточных линий", "розетка желілері"],
    ["распределительных щитов", "тарату қалқандары"],
    ["для удлинителей", "ұзартқыштар үшін"],
    ["подключения бытового", "тұрмыстық жабдықты қосу"],
    ["монтажного оборудования", "монтаж жабдығы"],
    ["для приема, учета и распределения электроэнергии", "электр энергиясын қабылдау, есепке алу және тарату үшін"],
    ["в жилых, коммерческих и промышленных зданиях", "тұрғын, коммерциялық және өндірістік ғимараттарда"],
    ["по запросу", "сұраныс бойынша"],
    ["по проекту", "жоба бойынша"],
    ["кВ", "кВ"],
    [" В", " В"],
    ["жила", "жила"],
    ["жилы", "жила"],
    ["жил", "жила"],
    ["Медь", "Мыс"],
    ["медь", "мыс"],
    ["Алюминий", "Алюминий"],
    ["алюминий", "алюминий"],
    ["Сталь", "Болат"],
    ["сталь", "болат"],
    ["Пластик", "Пластик"],
    ["Металл", "Металл"],
    ["металл", "металл"],
    ["внутренний", "ішкі"],
    ["наружный", "сыртқы"],
    ["питание", "қуат"],
    ["объект", "нысан"],
    ["фасад", "фасад"],
    ["щит", "қалқан"],
    ["монтаж", "монтаж"],
    ["сеть", "желі"],
    ["данные", "деректер"],
    ["экран", "экран"],
    ["ввод", "кіріс"],
    ["учет", "есеп"],
    ["офис", "кеңсе"]
  ]
};

function t(key, values = {}) {
  const dictionary = I18N[state.language] || I18N.ru;
  const template = dictionary[key] || I18N.ru[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ""));
}

function translateValue(value) {
  const label = VALUE_LABELS[value];
  if (!label) return value;
  return label[state.language] || value;
}

function translateProductText(value) {
  const text = String(value ?? "");
  if (state.language === "ru" || !text) return text;

  const exact = PRODUCT_TEXT_LABELS[text]?.[state.language];
  if (exact) return exact;

  return (PRODUCT_TERM_REPLACEMENTS[state.language] || []).reduce((current, [from, to]) => {
    return current.split(from).join(to);
  }, text);
}

function updateText(selector, key, root = document) {
  const node = root.querySelector(selector);
  if (node) node.textContent = t(key);
}

function updateAttr(selector, attr, key, root = document) {
  const node = root.querySelector(selector);
  if (node) node.setAttribute(attr, t(key));
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Preferences are non-critical and can fail in strict private modes.
  }
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute("content", state.theme === "dark" ? "#0d1117" : "#0b9187");
}

function renderPreferenceControls() {
  const meta = LANGUAGE_META[state.language] || LANGUAGE_META.ru;
  document.documentElement.lang = meta.htmlLang;
  savePreference(LANGUAGE_STORAGE_KEY, state.language);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === state.language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (!themeToggle) return;
  const isDark = state.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? t("theme.toLight") : t("theme.toDark"));
  const themeText = themeToggle.querySelector(".theme-toggle-text");
  const themeIcon = themeToggle.querySelector(".theme-toggle-icon");
  if (themeText) themeText.textContent = isDark ? t("theme.light") : t("theme.dark");
  if (themeIcon) themeIcon.textContent = isDark ? "☀" : "◐";
}

function renderStaticText() {
  renderPreferenceControls();

  updateText(".nav-links a[href='#catalog']", "nav.catalog");
  updateText(".nav-links a[href='#selection']", "nav.selection");
  updateText(".nav-links a[href='#request']", "nav.request");
  updateText(".nav-links a[href='#contacts']", "nav.contacts");
  updateText(".header-action", "hero.request");

  updateText(".trust-strip-inner span:nth-child(1)", "trust.warranty");
  updateText(".trust-strip-inner span:nth-child(2)", "trust.gost");
  updateText(".trust-strip-callout", "trust.whatsapp");
  updateText(".trust-strip-inner a", "trust.write");

  updateText(".auth-card-head .eyebrow", "auth.eyebrow");
  updateText("#authTitle", "auth.title");
  updateAttr("#authClose", "aria-label", "auth.close");
  updateText("#authLoginTab", "auth.loginTab");
  updateText("#authRegisterTab", "auth.registerTab");
  updateText(".auth-card label:nth-of-type(2) span", "auth.password");
  updateAttr(".auth-card label:nth-of-type(2) input", "placeholder", "auth.passwordPlaceholder");

  updateText(".hero .eyebrow", "hero.eyebrow");
  updateText("#hero-title", "hero.title");
  updateText(".hero-copy", "hero.copy");
  updateText(".hero-actions .primary-button", "hero.catalog");
  updateText(".hero-actions .ghost-button", "hero.request");
  updateText(".hero-metrics div:nth-child(1) dd", "hero.positions");
  updateText(".hero-metrics div:nth-child(2) dd", "hero.groups");
  updateText(".hero-metrics div:nth-child(3) dt", "hero.assortmentValue");
  updateText(".hero-metrics div:nth-child(3) dd", "hero.assortment");

  updateText(".quick-strip article:nth-child(1) h2", "quick.1.title");
  updateText(".quick-strip article:nth-child(1) p", "quick.1.copy");
  updateText(".quick-strip article:nth-child(2) h2", "quick.2.title");
  updateText(".quick-strip article:nth-child(2) p", "quick.2.copy");
  updateText(".quick-strip article:nth-child(3) h2", "quick.3.title");
  updateText(".quick-strip article:nth-child(3) p", "quick.3.copy");

  updateText(".brand-seo .eyebrow", "seo.eyebrow");
  updateText("#brand-seo-title", "seo.title");
  updateText(".brand-seo-copy p", "seo.copy");
  document.querySelectorAll(".keyword-list li").forEach((node, index) => {
    node.textContent = t(`seo.keyword.${index + 1}`);
  });

  updateText("#catalog .section-heading .eyebrow", "catalog.eyebrow");
  updateText("#catalog-title", "catalog.title");
  updateText("#catalog .section-heading > p", "catalog.copy");
  updateText(".filter-group:nth-child(1) .filter-title", "filter.section");
  updateText(".filter-group:nth-child(2) .filter-title", "filter.group");
  updateText(".filter-group:nth-child(3) .filter-title", "filter.material");
  updateText(".filters .field span", "filter.sort");
  updateText("#sortSelect option[value='popular']", "sort.popular");
  updateText("#sortSelect option[value='name']", "sort.name");
  updateText("#sortSelect option[value='voltage']", "sort.voltage");
  updateText(".catalog-search > span", "search.label");
  updateAttr("#searchInput", "placeholder", "search.placeholder");
  updateAttr("#searchClear", "aria-label", "search.clear");
  updateText(".catalog-search .field-hint", "search.hint");
  updateText("#resetFilters", "catalog.reset");
  updateText("#emptyState", "catalog.empty");

  updateText("#request .request-copy .eyebrow", "request.eyebrow");
  updateText("#request-title", "request.title");
  updateText(".request-copy > p:not(.eyebrow)", "request.copy");
  updateText(".quote-panel-head h3", "quote.title");
  updateText("#clearQuote", "quote.clear");
  updateText("#quoteEmpty", "quote.empty");
  updateText(".request-form > label:nth-of-type(1) span", "request.name");
  updateAttr(".request-form > label:nth-of-type(1) input", "placeholder", "request.namePlaceholder");
  updateText(".request-form > label:nth-of-type(2) span", "request.contact");
  updateAttr(".request-form > label:nth-of-type(2) input", "placeholder", "request.contactPlaceholder");
  updateText(".request-form > label:nth-of-type(3) span", "request.comment");
  updateAttr(".request-form > label:nth-of-type(3) textarea", "placeholder", "request.commentPlaceholder");
  updateText(".request-form > label:nth-of-type(4) span", "request.project");
  updateText(".request-form > label:nth-of-type(4) .field-hint", "request.projectHint");
  if (requestSubmitButton && !requestSubmitButton.disabled) requestSubmitButton.textContent = t("request.submit");

  updateText("#contacts .eyebrow", "contacts.eyebrow");
  updateText("#contacts-title", "contacts.title");
  updateText("#contacts .section-heading > p", "contacts.copy");
  document.querySelectorAll(".contact-shift").forEach((node) => { node.textContent = t("contacts.shift"); });
  updateText(".contact-card:nth-child(1) .contact-badge", "contacts.badge.request");
  updateText(".contact-card:nth-child(1) h3", "contacts.requestTitle");
  updateText(".contact-card:nth-child(1) p", "contacts.requestCopy");
  updateText(".contact-card:nth-child(2) .contact-badge", "contacts.badge.tech");
  updateText(".contact-card:nth-child(2) h3", "contacts.techTitle");
  updateText(".contact-card:nth-child(2) p", "contacts.techCopy");
  document.querySelectorAll(".ghost-contact-button").forEach((node) => { node.textContent = t("contacts.call"); });

  updateText(".site-footer span:nth-child(1)", "footer.title");
  updateText(".site-footer a[href='#contacts']", "footer.contacts");
  renderAuthState();
}

function setLanguage(language) {
  const nextLanguage = normalizeLanguage(language);
  if (nextLanguage === state.language) return;
  state.language = nextLanguage;
  savePreference(LANGUAGE_STORAGE_KEY, state.language);
  renderStaticText();
  render();
  renderQuote();
  showToast(t("toast.language"));
}

function setTheme(theme) {
  const nextTheme = normalizeTheme(theme);
  state.theme = nextTheme;
  savePreference(THEME_STORAGE_KEY, state.theme);
  applyTheme();
  renderPreferenceControls();
}

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
    const items = sanitizeQuoteItems(state.quote);
    localStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.warn("Quote save failed:", error);
  }
}

function restoreQuote() {
  try {
    const saved = sanitizeQuoteItems(JSON.parse(localStorage.getItem(QUOTE_STORAGE_KEY) || "[]"));
    state.quote = saved
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

function getCatalogStateDefaults() {
  return {
    section: "Р’СЃРµ",
    group: "Р’СЃРµ",
    conductor: "Р’СЃРµ",
    search: "",
    sort: "popular"
  };
}

function saveCatalogState() {
  try {
    const safeState = sanitizeCatalogState({
      section: state.section,
      group: state.group,
      conductor: state.conductor,
      search: state.search,
      sort: state.sort
    }, getCatalogStateDefaults());
    localStorage.setItem(CATALOG_STATE_KEY, JSON.stringify(safeState));
  } catch (error) {
    console.warn("Catalog state save failed:", error);
  }
}

function restoreCatalogState() {
  try {
    const saved = JSON.parse(localStorage.getItem(CATALOG_STATE_KEY) || "null");
    if (!saved) return;

    const safeState = sanitizeCatalogState(saved, getCatalogStateDefaults());
    state.section = safeState.section;
    state.group = safeState.group;
    state.conductor = safeState.conductor;
    state.search = safeState.search;
    state.sort = safeState.sort;
  } catch (error) {
    console.warn("Catalog state restore failed:", error);
  }
}

function refreshSearchClear() {
  if (!searchClear) return;
  searchClear.hidden = !state.search;
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

function updateScrollChrome() {
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
  scrollProgress.style.setProperty("--scroll-progress", progress.toFixed(4));
  backToTop.hidden = window.scrollY < 560;
}

function isTypingContext(node) {
  return Boolean(node?.closest?.("input, textarea, select, [contenteditable='true']"));
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
    ".catalog-shell",
    ".request-copy",
    ".request-layout",
    ".contacts-heading",
    ".contact-card"
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

  authOpen.textContent = isAuthenticated ? t("auth.logout") : t("auth.login");
  authOpen.title = isAuthenticated ? t("auth.logoutTitle", { email }) : t("auth.openTitle");
  authOpen.classList.toggle("is-authenticated", isAuthenticated);

  if (requestAuthNote) {
    requestAuthNote.textContent = isAuthenticated
      ? t("auth.noteIn", { email })
      : t("auth.noteOut");
  }
}

function setAuthMode(mode) {
  state.auth.mode = mode;
  const isRegister = mode === "register";
  authSubmit.textContent = isRegister ? t("auth.register") : t("auth.login");
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
    "Проект": request.project_file_name || "не приложен",
    "Состав заявки": formatQuoteForEmail(request.items)
  };

  try {
    const formData = createEmailFormData(payload, request.project_file);
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
    return submitEmailFallback(payload, request.source_form);
  }
}

function isFormSubmitActivationMessage(message = "") {
  return /activate|activation|confirm|confirmation|verify|verification/i.test(String(message));
}

function createEmailFormData(payload, projectFile) {
  const formData = new FormData();
  Object.entries(payload).forEach(([name, value]) => {
    formData.append(name, String(value));
  });
  if (projectFile instanceof File && projectFile.size > 0) {
    formData.append("project_file", projectFile, projectFile.name);
  }
  return formData;
}

function submitEmailFallback(payload, sourceForm) {
  if (sourceForm instanceof HTMLFormElement) {
    return submitEmailFallbackFromSourceForm(payload, sourceForm);
  }
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

function submitEmailFallbackFromSourceForm(payload, sourceForm) {
  return new Promise((resolve) => {
    const iframeName = `email_target_${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.hidden = true;

    const originalAction = sourceForm.getAttribute("action");
    const originalMethod = sourceForm.getAttribute("method");
    const originalTarget = sourceForm.getAttribute("target");
    const originalEnctype = sourceForm.getAttribute("enctype");

    const hiddenInputs = Object.entries(payload).map(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = String(value);
      return input;
    });

    document.body.append(iframe);
    hiddenInputs.forEach((input) => sourceForm.append(input));

    sourceForm.method = "POST";
    sourceForm.action = EMAIL_CONFIG.endpoint.replace("/ajax/", "/");
    sourceForm.target = iframeName;
    sourceForm.enctype = "multipart/form-data";

    sourceForm.submit();

    setTimeout(() => {
      hiddenInputs.forEach((input) => input.remove());
      iframe.remove();

      restoreFormAttribute(sourceForm, "action", originalAction);
      restoreFormAttribute(sourceForm, "method", originalMethod);
      restoreFormAttribute(sourceForm, "target", originalTarget);
      restoreFormAttribute(sourceForm, "enctype", originalEnctype);

      resolve({ success: true, fallback: true });
    }, 1200);
  });
}

function restoreFormAttribute(form, name, value) {
  if (value === null) {
    form.removeAttribute(name);
    return;
  }
  form.setAttribute(name, value);
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

  if (text.includes("прямой монтаж") || text.includes("держател") || text.includes("клипсы под гофру") || text.includes("площадки под пистолет") || text.includes("скобы усиленные")) return "Прямой монтаж";
  if (text.includes("багет")) return "Багет потолочный";
  if (text.includes("напольн")) return "Напольные системы";
  if (text.includes("аксессуары к лоткам") || text.includes("кронштейн") || text.includes("крышк") || text.includes("пластина соедин") || text.includes("переходник") || text.includes("крестовин")) return "Аксессуары к лоткам";
  if (text.includes("аксессуары к кабель-каналам") || text.includes("кмн") || text.includes("кмв") || text.includes("кмз") || text.includes("кмп") || text.includes("кмс") || text.includes("кмт") || text.includes("dlp")) return "Аксессуары к кабель-каналам";
  if (text.includes("аксессуары для труб") || text.includes("муфта") || text.includes("тройник") || text.includes("угол 90")) return "Аксессуары для труб";
  if (text.includes("металлорукав")) return "Металлорукав";
  if (text.includes("лоток металлический")) return "Лоток металлический";
  if (text.includes("трубы") || text.includes("гофр") || text.includes("труба") || text.includes("тут") || text.includes("кембрик") || text.includes("бандаж")) return "Трубы";
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
  state.loadingProducts = true;
  renderProducts();

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
  } finally {
    state.loadingProducts = false;
    renderProducts();
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
    button.textContent = translateValue(value);
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
        translateProductText(product.title),
        product.category,
        product.type,
        product.conductor,
        product.description,
        translateProductText(product.description),
        product.voltage,
        translateProductText(product.voltage),
        product.cores,
        translateProductText(product.cores),
        ...product.tags,
        ...product.tags.map(translateProductText)
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

function shouldGroupCatalogResults(filteredProducts) {
  return filteredProducts.length > 0 && state.group === "Все";
}

const CATALOG_GROUP_ORDER = {
  "Кабели": [
    "Силовой",
    "Гибкий",
    "Самонесущий",
    "Связь",
    "Контрольный",
    "Установочный",
    "Специальный",
    "Прочие кабели"
  ],
  "Кабеленесущие системы": [
    "Прямой монтаж",
    "Багет потолочный",
    "Напольные системы",
    "Металлорукав",
    "Лоток металлический",
    "Листовые лотки",
    "Проволочные лотки",
    "Лестничные лотки",
    "Кабель-каналы",
    "Аксессуары к лоткам",
    "Аксессуары к кабель-каналам",
    "Аксессуары для труб",
    "Трубы",
    "Крепеж и аксессуары"
  ],
  "Шкафы / щиты": [
    "ВРУ",
    "Распределительные шкафы",
    "Щиты освещения",
    "Управление и автоматика",
    "Модульные щиты",
    "Силовые шкафы",
    "Уличные шкафы",
    "Корпуса и аксессуары"
  ],
  "Розетки / выключатели / коробки": [
    "Серии Legrand",
    "Серии IEK",
    "Серии UNIT",
    "Schneider / Systeme Electric",
    "Розетки",
    "Выключатели",
    "Монтажные коробки",
    "Распределительные коробки",
    "Удлинители и фильтры",
    "Силовые разъёмы",
    "Колодки, вилки и адаптеры",
    "Звонки и кнопки",
    "Слаботочные розетки",
    "Рамки и механизмы",
    "Электроустановочные изделия"
  ]
};

function getCatalogGroupOrder() {
  const visibleGroups = uniqueValues("group").filter((group) => group !== "Все");
  const sectionOrder = CATALOG_GROUP_ORDER[state.section] || [];
  const ordered = sectionOrder.filter((group) => visibleGroups.includes(group));
  visibleGroups.forEach((group) => {
    if (!ordered.includes(group)) ordered.push(group);
  });
  return ordered;
}

function groupProductsForCatalog(filteredProducts) {
  const grouped = new Map();
  filteredProducts.forEach((product) => {
    const group = getProductGroup(product);
    if (!grouped.has(group)) grouped.set(group, []);
    grouped.get(group).push(product);
  });

  const orderedGroups = getCatalogGroupOrder().filter((group) => grouped.has(group));
  grouped.forEach((_items, group) => {
    if (!orderedGroups.includes(group)) orderedGroups.push(group);
  });

  return orderedGroups.map((group) => ({
    group,
    products: grouped.get(group)
  }));
}

function createProductCard(product) {
  const card = document.createElement("article");
  const quoteQty = getQuoteQty(product.id);
  const productTitle = translateProductText(product.title);
  const productBadge = translateProductText(product.badge);
  const productDescription = translateProductText(product.description);
  const productVoltage = translateProductText(product.voltage);
  const productCores = translateProductText(product.cores);
  const productGroup = translateValue(getProductGroup(product));
  let productType = product.type ? translateProductText(translateValue(product.type)) : "";
  if (productType === productGroup) productType = "";
  const productConductor = translateProductText(translateValue(product.conductor));
  const productTags = product.tags.map(translateProductText);
  card.className = "product-card product-card-enter";
  card.innerHTML = `
    <div class="product-media">
      <img class="is-pending" src="${assetUrl(product.image)}" alt="${escapeAttribute(productTitle)}" loading="lazy" decoding="async">
      <span class="product-badge">${escapeHtml(productBadge)}</span>
    </div>
      <div class="product-body">
        <div class="product-topline">
        <span>${escapeHtml(translateValue(getProductSection(product)))} / ${escapeHtml(productGroup)}</span>
        <span>${productType ? `${escapeHtml(productType)} / ` : ""}${escapeHtml(productConductor)}</span>
      </div>
      <h3 class="product-title">${escapeHtml(productTitle)}</h3>
      <p class="product-desc">${escapeHtml(productDescription)}</p>
      <dl class="spec-list">
        <div><dt>${escapeHtml(t("product.parameter"))}</dt><dd>${escapeHtml(productVoltage)}</dd></div>
        <div><dt>${escapeHtml(t("product.execution"))}</dt><dd>${escapeHtml(productCores)}</dd></div>
      </dl>
      <div class="tag-row">
        ${productTags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
      </div>
      <button class="card-action${quoteQty ? " is-added" : ""}" type="button" data-product-id="${escapeAttribute(product.id)}">${quoteQty ? escapeHtml(t("product.inQuote", { qty: quoteQty })) : escapeHtml(t("product.add"))}</button>
    </div>
  `;
  const image = card.querySelector("img");
  if (image) {
    const markLoaded = () => {
      image.classList.remove("is-pending");
      image.classList.add("is-loaded");
    };

    if (image.complete) {
      markLoaded();
    } else {
      image.addEventListener("load", markLoaded, { once: true });
      image.addEventListener("error", markLoaded, { once: true });
    }
  }
  return card;
}

function createProductGroupSection(group, groupProducts) {
  const section = document.createElement("section");
  section.className = "catalog-product-group product-card-enter";
  section.dataset.catalogGroup = group;
  section.innerHTML = `
    <header class="catalog-product-group-head">
      <div>
        <span>${escapeHtml(translateValue(getProductSection(groupProducts[0])))} / ${escapeHtml(t("filter.group"))}</span>
        <h3>${escapeHtml(translateValue(group))}</h3>
      </div>
      <strong>${escapeHtml(pluralize(groupProducts.length))}</strong>
    </header>
    <div class="catalog-product-group-grid"></div>
  `;

  const grid = section.querySelector(".catalog-product-group-grid");
  groupProducts.forEach((product) => grid.append(createProductCard(product)));
  return section;
}

function createSkeletonCard() {
  const card = document.createElement("article");
  card.className = "product-card product-card-enter product-card-skeleton";
  card.setAttribute("aria-hidden", "true");
  card.innerHTML = `
    <div class="product-media product-media-skeleton"></div>
    <div class="product-body">
      <div class="skeleton-line skeleton-line-top"></div>
      <div class="skeleton-line skeleton-line-title"></div>
      <div class="skeleton-line skeleton-line-title short"></div>
      <div class="skeleton-line skeleton-line-copy"></div>
      <div class="skeleton-line skeleton-line-copy short"></div>
      <div class="spec-list spec-list-skeleton">
        <div><span class="skeleton-line skeleton-line-label"></span><span class="skeleton-line skeleton-line-value"></span></div>
        <div><span class="skeleton-line skeleton-line-label"></span><span class="skeleton-line skeleton-line-value short"></span></div>
      </div>
      <div class="tag-row skeleton-tag-row">
        <span class="skeleton-pill"></span>
        <span class="skeleton-pill"></span>
        <span class="skeleton-pill short"></span>
      </div>
      <div class="card-action skeleton-action"></div>
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
  if (state.language === "kz") return `${count} позиция`;
  if (state.language === "en") return `${count} ${count === 1 ? "item" : "items"}`;

  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return `${count} позиция`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} позиции`;
  return `${count} позиций`;
}

function renderProducts() {
  productGrid.innerHTML = "";
  productGrid.classList.remove("has-groups");
  heroProductCount.textContent = products.length;
  searchInput.value = state.search;
  sortSelect.value = state.sort;
  refreshSearchClear();

  if (state.loadingProducts) {
    resultCount.textContent = t("catalog.loading");
    emptyState.hidden = true;
    const skeletonCount = getSkeletonCardCount(window.innerWidth);
    for (let index = 0; index < skeletonCount; index += 1) {
      productGrid.append(createSkeletonCard());
    }
    animateProductCards();
    return;
  }

  const filteredProducts = getFilteredProducts();
  resultCount.textContent = pluralize(filteredProducts.length);
  emptyState.hidden = filteredProducts.length > 0;

  if (shouldGroupCatalogResults(filteredProducts)) {
    productGrid.classList.add("has-groups");
    groupProductsForCatalog(filteredProducts).forEach(({ group, products: groupProducts }) => {
      productGrid.append(createProductGroupSection(group, groupProducts));
    });
  } else {
    filteredProducts.forEach((product) => productGrid.append(createProductCard(product)));
  }

  animateProductCards();
}

function updateProductActionStates() {
  productGrid.querySelectorAll("[data-product-id]").forEach((button) => {
    const qty = getQuoteQty(button.dataset.productId);
    button.classList.toggle("is-added", qty > 0);
    button.textContent = qty > 0 ? t("product.inQuote", { qty }) : t("product.add");
  });
}

function renderFloatingQuote() {
  const totals = getQuoteTotals();
  floatingQuote.hidden = totals.items === 0;
  floatingQuote.innerHTML = `
    <span>${escapeHtml(t("quote.float"))}</span>
    <strong>${escapeHtml(totals.qty)} ${escapeHtml(t("quote.unit"))}</strong>
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
  showToast(t("toast.added", { title: product.title }));
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
    const itemTitle = translateProductText(item.title);
    row.className = "quote-item";
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(itemTitle)}</strong>
        <span>${escapeHtml(t("quote.meta", {
          section: translateValue(getProductSection(item)),
          group: translateValue(getProductGroup(item)),
          cores: translateProductText(item.cores),
          qty: item.qty
        }))}</span>
      </div>
      <div class="quote-controls" aria-label="${escapeAttribute(t("quote.qtyLabel", { title: itemTitle }))}">
        <button class="quote-step" type="button" aria-label="${escapeAttribute(t("quote.decrease", { title: itemTitle }))}" data-qty-id="${escapeAttribute(item.id)}" data-qty-delta="-1">-</button>
        <strong class="quote-qty">${escapeHtml(item.qty)}</strong>
        <button class="quote-step" type="button" aria-label="${escapeAttribute(t("quote.increase", { title: itemTitle }))}" data-qty-id="${escapeAttribute(item.id)}" data-qty-delta="1">+</button>
        <button class="quote-remove" type="button" aria-label="${escapeAttribute(t("quote.remove", { title: itemTitle }))}" data-remove-id="${escapeAttribute(item.id)}">x</button>
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
  saveCatalogState();
}

searchInput.addEventListener("input", (event) => {
  state.search = normalizeWhitespace(event.target.value, MAX_SEARCH_LENGTH);
  if (event.target.value !== state.search) event.target.value = state.search;
  renderProducts();
  saveCatalogState();
});

searchClear?.addEventListener("click", () => {
  state.search = "";
  searchInput.value = "";
  renderProducts();
  saveCatalogState();
  searchInput.focus();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
  saveCatalogState();
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

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

themeToggle?.addEventListener("click", () => {
  const nextTheme = state.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  showToast(t(nextTheme === "dark" ? "toast.themeDark" : "toast.themeLight"));
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
  showToast(t("toast.cleared"));
});

floatingQuote.addEventListener("click", () => {
  smoothScrollTo(document.querySelector("#request"));
});

backToTop.addEventListener("click", () => {
  smoothScrollTo(document.querySelector("#top"));
});

document.addEventListener("click", handleAnchorNavigation);
document.addEventListener("keydown", (event) => {
  if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;

  if (event.key === "/" && !isTypingContext(document.activeElement)) {
    event.preventDefault();
    searchInput.focus();
    searchInput.select();
    return;
  }

  if (event.key !== "Escape") return;

  if (authDialog.open) {
    authDialog.close();
    return;
  }

  if (document.activeElement === searchInput && state.search) {
    state.search = "";
    searchInput.value = "";
    renderProducts();
    saveCatalogState();
  }
});
window.addEventListener("hashchange", () => {
  if (window.location.hash === "#catalog") animateCatalogArrival();
});
window.addEventListener("scroll", updateScrollChrome, { passive: true });
window.addEventListener("resize", updateScrollChrome);

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

  if (isSubmittingRequest) return;

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
  if (shouldTrapBotSubmission({
    honeypotValue: data.get("company_website"),
    elapsedMs: Date.now() - requestFormReadyAt
  })) {
    formStatus.textContent = "Не удалось отправить заявку. Проверь поля и попробуй еще раз.";
    return;
  }
  const customerName = normalizeWhitespace(data.get("name"), MAX_NAME_LENGTH);
  const customerContact = normalizeWhitespace(data.get("contact"), MAX_CONTACT_LENGTH);
  const comment = normalizeMultiline(data.get("comment"), MAX_COMMENT_LENGTH);
  const projectFile = data.get("project");
  const hasProjectFile = projectFile instanceof File && projectFile.size > 0 && projectFile.name;
  const projectValidation = validateProjectFile(hasProjectFile ? projectFile : null);

  if (!customerName || !customerContact) {
    formStatus.textContent = "Укажи имя и телефон или email.";
    return;
  }

  if (!isValidContact(customerContact)) {
    formStatus.textContent = "Укажи корректный телефон или email.";
    return;
  }

  if (!projectValidation.ok) {
    formStatus.textContent = projectValidation.reason;
    return;
  }

  const safeQuoteItems = sanitizeQuoteItems(state.quote);
  const requestItems = safeQuoteItems
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return null;
      return {
        id: item.id,
        title: normalizeWhitespace(product.title, 140),
        category: normalizeWhitespace(product.category, 80),
        type: normalizeWhitespace(product.type, 80),
        conductor: normalizeWhitespace(product.conductor, 80),
        voltage: normalizeWhitespace(product.voltage, 80),
        cores: normalizeWhitespace(product.cores, 80),
        qty: item.qty
      };
    })
    .filter(Boolean);

  if (requestItems.length === 0) {
    formStatus.textContent = "Список заявки нужно обновить. Добавь товары заново и отправь еще раз.";
    state.quote = [];
    saveQuote();
    renderQuote();
    updateProductActionStates();
    renderFloatingQuote();
    return;
  }

  const request = {
    customer_name: customerName,
    customer_contact: customerContact,
    comment,
    items: requestItems,
    source: "catalog-site"
  };

  const emailRequest = {
    ...request,
    project_file: hasProjectFile ? projectFile : null,
    project_file_name: hasProjectFile ? normalizeWhitespace(projectFile.name, 180) : "",
    source_form: requestForm
  };

  if (!isSupabaseConfigured()) {
    console.info("Prepared cable request", request);
    formStatus.textContent = "Подключение к базе еще не настроено.";
    return;
  }

  formStatus.textContent = "Отправляем заявку...";

  isSubmittingRequest = true;
  requestForm.setAttribute("aria-busy", "true");
  if (requestSubmitButton) {
    requestSubmitButton.disabled = true;
    requestSubmitButton.textContent = t("form.sending");
  }

  try {
    const [databaseResult, emailResult] = await Promise.allSettled([
      supabaseRequest(`/rest/v1/${SUPABASE_TABLES.requests}`, {
        method: "POST",
        headers: {
          Prefer: "return=minimal"
        },
        body: JSON.stringify(request)
      }),
      sendEmailNotification(emailRequest)
    ]);

    if (databaseResult.status === "rejected" && emailResult.status === "rejected") {
      throw new Error(`${databaseResult.reason?.message || "Database error"} / ${emailResult.reason?.message || "Email error"}`);
    }

    if (emailResult.status === "rejected") {
      console.error("Email notification error:", emailResult.reason);
      formStatus.textContent = "Заявка сохранена, но письмо пока не ушло: почта для заявок ждет подтверждения.";
    } else if (databaseResult.status === "rejected") {
      console.error("Request save error:", databaseResult.reason);
      formStatus.textContent = "Заявка отправлена на почту. Мы скоро свяжемся.";
    } else {
      formStatus.textContent = "Заявка отправлена на почту и сохранена.";
    }

    state.quote = [];
    renderQuote();
    requestForm.reset();
    requestFormReadyAt = Date.now();
    markRequestSent();
  } catch (error) {
    console.error("Request submit error:", error);
    if (isFormSubmitActivationMessage(error.message)) {
      formStatus.textContent = "Почта для заявок ждет подтверждения. Открой centralasiaenerg@gmail.com и нажми Activate Form.";
    } else {
      formStatus.textContent = "Не удалось отправить заявку. Попробуй еще раз или проверь настройки базы.";
    }
  } finally {
    isSubmittingRequest = false;
    requestForm.removeAttribute("aria-busy");
    if (requestSubmitButton) {
      requestSubmitButton.disabled = false;
      requestSubmitButton.textContent = t("request.submit") || REQUEST_SUBMIT_DEFAULT_LABEL;
    }
  }
});

products = products.map(secureProduct).filter((product) => product.id);
restoreCatalogState();
restoreQuote();
setupRevealAnimations();
applyTheme();
renderStaticText();
render();
renderQuote();
restoreAuthSession();
loadProductsFromSupabase();
updateScrollChrome();

if (window.location.hash === "#catalog") {
  window.setTimeout(animateCatalogArrival, 260);
}
