export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

//books - 3; goods - 3; food - 1; technique - 3;
export const products = [

  {
    id: 1,
    category: 'book',
    name: 'Книга Бeрнетт Ф. Э. Х.: Таинственный сад',
    price: 1895,
    isLikePressed: false,

    description: [
      {subdescr: '-Автор/Редактор Бeрнетт Ф. Э. Х.'},
      {subdescr: '-Издательство Эксмо'},
      {subdescr: '-ISBN 9785171199784'} ,
      {subdescr: '-Размеры 180x115x22 мм'} ,
      {subdescr: '-Количество страниц 320'} ,
      {subdescr: '-Год издания 2020'} ,
      {subdescr: '-Переплет: мягкий переплет'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/bernett-f-e-h-tainstvennyi-sad-101375607/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/hc6/34300229976094/bernett-f-e-h-tainstvennyj-sad-101375607-1.jpg'
  },
  {
    id: 2,
    category: 'book',
    name: 'Книга Оруэлл Дж.: 1984',
    price: 1995,
    isLikePressed: false,
    description: [
      {subdescr: '-Автор/Редактор Оруэлл Дж'},
      {subdescr: '-Издательство ACT'},
      {subdescr: '-ISBN 978-5-17-148844-4'} ,
      {subdescr: '-Возраст 16+'} ,
      {subdescr: '-Количество страниц 320'} ,
      {subdescr: '-Год издания 2022'} ,
      {subdescr: '-Переплет: мягкий переплет'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/oruell-dzh-1984-105221802/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h34/51390686953502/oruell-dz-1984-105221802-1.jpg'
  },

  {
    id: 3,
    category: 'goods',
    name: 'Фигура "Ворон на черепе" ',
    price: 13_900,
    isLikePressed: false,
    description: [
      {subdescr: '-Тип: фигурка'},
      {subdescr: '-Тематика: птицы, религия и мифология'},
      {subdescr: '-Материал: гипс'},
      {subdescr: '-Длина: 16 см'},
      {subdescr: '-Ширина: 18 см'},
      {subdescr: '-Высота: 26 см'},
      {subdescr: '-Вес: 1.4 г'}
    ],
    rating: 0.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/lavka-magicheskih-atributov-figurka-figura-voron-na-cherepe-26-sm-gips-107444647/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/hd0/65389589069854/figura-voron-na-cherepe-107444647-1.jpg'
  },

  {
    id: 4,
    category: 'goods',
    name: 'Энергетический напиток Red Bull классический 4 шт по 250 мл',
    price: 2378,
    isLikePressed: false,
    description: [
      {subdescr: '-вид напитка: тонизирующий'},
      {subdescr: '-стимулирующее вещество: таурин'},
      {subdescr: '-страна производства: Австрия'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/red-bull-klassicheskii-4-sht-po-250-ml-100801779/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/h55/32639634964510/red-bull-toniziruusij-lajm-250-ml-100801779-1-Container.jpg'
  },

  {
    id: 5,
    category: 'supply',
    name: 'Кабель Apple USB - Lightning 1 м',
    price: 14_590,
    isLikePressed: false,
    description: [
      {subdescr: '-тип: кабель'},
      {subdescr: '-разъемы: Apple Lightning (M), ,USB 2.0 (M)'},
      {subdescr: '-длина: 1 м'}
    ],
    rating: 1.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/kabel-apple-usb-type-c---lightning-1-m-40500508/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/he9/32024009637918/kabel-apple-usb-type-c-lightning-1-m-40500508-1.jpg'
  },
  {
    id: 6,
    category: 'goods',
    name: 'Ароматическая свеча STELLA FRAGRANCE',
    price: 4990,
    isLikePressed: false,
    description: [
      {subdescr: '-назначение: ароматическая свеча'},
      {subdescr: '-форма: цилиндрическая'},
      {subdescr: '-цвет: коричневый'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/aromaticheskaja-svecha-stella-fragrance-89090949-korichnevyi-1-sht-107316946/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/h90/65008736665630/aromaticheskaya-svecha-stella-fragrance-89090949-korichnevyi-1-sht-107316946-1.jpg'
  },
  {
    id: 7,
    category: 'goods',
    name: 'Сувениры из мраморной крошки фигурка Афродита II',
    price: 30_077,
    isLikePressed: false,
    description: [
      {subdescr: '-тип: фигурка'},
      {subdescr: '-тематика: люди'},
      {subdescr: '-материал: мрамор'},
      {subdescr: '-высота: 31 см'}
    ],
    rating: 3.1,
    like: 3,
    link: 'https://kaspi.kz/shop/p/suveniry-iz-mramornoi-kroshki-figurka-afrodita-ii-31-sm-mramor-107398438/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/h98/65276221751326/suveniry-iz-mramornoi-kroshki-figurka-afrodita-ii-31-sm-mramor-107398438-1.jpg'
  },
  {
    id: 8,
    category: 'laptop',
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 480_550,
    isLikePressed: false,
    description: [
      {subdescr: '-диагональ экрана: 13.3 дюйм'},
      {subdescr: '-процессор: Apple M1'},
      {subdescr: '-видеокарта: Apple M1 7 core'},
      {subdescr: '-размер оперативной памяти: 8 ГБ'},
      {subdescr: '-тип жесткого диска: SSD'},
      {subdescr: '-общий объем накопителей: 256 ГБ'}
    ],
    rating: 4.2,
    like: 3,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg'
  },
  {
    id: 9,
    category: 'supply',
    name: 'Наушники Marshall Major IV коричневый',
    price: 145_760,
    isLikePressed: false,
    description: [
      {subdescr: '-тип: гарнитура'} ,
      {subdescr: '-вид: накладные'} ,
      {subdescr: '-подключение: беспроводное'} ,
      {subdescr: '-тип акустического оформления: закрытые'} ,
      {subdescr: '-тип крепления: оголовье'} ,
      {subdescr: '-система активного шумоподавления: Нет'}
    ],
    rating: 4.6,
    like: 3,
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-korichnevyi-104024603/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h42/49221103910942/marshall-major-iv-koricnevyj-104024603-1.jpg'
  },
  {
    id: 10,
    category: 'book',
    name: 'Книга Набоков В. В.: Приглашение на казнь',
    price: 3250,
    isLikePressed: false,
    description: [
      {subdescr: '-жанр: всемирная классика'},
      {subdescr: '-SBN: 978-5-17-137833-2'} ,
      {subdescr: '-язык издания: русский'} ,
      {subdescr: '-переплет: твердый переплет'}
    ],
    rating: 4.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/nabokov-v-v-priglashenie-na-kazn--103331351/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf6/h75/48036447780894/nabokov-v-v-priglasenie-na-kazn-103331351-1.jpg'
  },
  {
    id: 11,
    category: 'phones',
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 366_850,
    isLikePressed: false,
    description: [
      {subdescr: 'технология NFC: Да'},
      {subdescr: 'цвет: белый'},
      {subdescr: 'тип экрана: OLED, Super Retina XDR'},
      {subdescr: 'диагональ: 6.1 дюйм'},
      {subdescr: 'размер оперативной памяти: 4 ГБ'},
      {subdescr: 'процессор: 6-ядерный Apple A15 Bionic'},
      {subdescr: 'объем встроенной памяти: 128 ГБ'},
      {subdescr: 'емкость аккумулятора: 3095 мАч'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg'
  },
  {
    id: 12,
    category: 'phones',
    name: 'Смартфон Apple iPhone 14 Pro 256Gb фиолетовый',
    price: 628_800,
    isLikePressed: false,
    description: [
      {subdescr: 'технология NFC: Да'},
      {subdescr: 'цвет: фиолетовый'},
      {subdescr: 'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы'},
      {subdescr: 'диагональ: 6.1 дюйм'},
      {subdescr: 'размер оперативной памяти: 6 ГБ'},
      {subdescr: 'процессор: 6-ядерный Apple A16 Bionic'},
      {subdescr: 'объем встроенной памяти: 256 ГБ'},
      {subdescr: 'емкость аккумулятора: 3125 мАч'}
    ],
    rating: 4.6,
    like: 3,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg'
  },
  {
    id: 13,
    category: 'phones',
    isLikePressed: false,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
    price: 89_260,
    description: [
      {subdescr: 'технология NFC: Да'},
      {subdescr: 'цвет: черный'},
      {subdescr: 'тип экрана: PLS TFT LCD сенсорный, мультитач'},
      {subdescr: 'диагональ: 6.6 дюйм'},
      {subdescr: 'размер оперативной памяти: 4 ГБ'},
      {subdescr: 'процессор: 8-ядерный Exynos 850'},
      {subdescr: 'объем встроенной памяти: 128 ГБ'},
      {subdescr: 'емкость аккумулятора: 5000 мАч'}
    ],
    rating: 4.8,
    like: 3,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg'
  },
  {
    id: 14,
    category: 'phones',
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: 414_389,
    isLikePressed: false,
    description: [
      {subdescr: 'технология NFC: Да'},
      {subdescr: 'цвет: черный'},
      {subdescr: 'тип экрана: OLED, Super Retina XDR display'},
      {subdescr: 'диагональ: 6.1 дюйм'},
      {subdescr: 'размер оперативной памяти: 6 ГБ'},
      {subdescr: 'процессор: 6-ядерный Apple A15 Bionic'},
      {subdescr: 'объем встроенной памяти: 128 ГБ'},
      {subdescr: 'емкость аккумулятора: 3279 мАч'}
    ],
    rating: 4.3,
    like: 3,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg'
  },
  {
    id: 15,
    category: 'watch',
    name: 'Смарт-часы Amazfit Bip U Pro черный',
    isLikePressed: false,
    description: [
      {subdescr: '-поддержка платформ: iOS'},
      {subdescr: '-материал корпуса: пластик'},
      {subdescr: '-цвет корпуса: черный'} ,
      {subdescr: '-технология экрана: OLED'} ,
      {subdescr: '-объем встроенной памяти: 32 Гб'} ,
      {subdescr: '-интерфейсы: Bluetooth, ,Wi-Fi, ,NFC'} ,
      {subdescr: '-время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов'}
    ],
    price: 231_980,
    rating: 4.2,
    like: 3,
    link: 'https://kaspi.kz/shop/p/amazfit-bip-u-pro-chernyi-100914321/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/ha5/33549396574238/amazfit-bip-u-pro-cernyj-100914321-1-Container.jpg'
  },
  {
    id: 16,
    category: 'watch',
    name: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм черный',
    isLikePressed: false,
    description: [
      {subdescr: '-поддержка платформ: iOS'},
      {subdescr: '-материал корпуса: пластик'},
      {subdescr: '-цвет корпуса: черный'} ,
      {subdescr: '-технология экрана: OLED'} ,
      {subdescr: '-объем встроенной памяти: 32 Гб'} ,
      {subdescr: '-интерфейсы: Bluetooth, ,Wi-Fi, ,NFC'} ,
      {subdescr: '-время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов'}
    ],
    price: 155_980,
    rating: 4.9,
    like: 10,
    link: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-chernyi-106362731/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/h6c/62711069311006/apple-watch-se-2nd-generation-40-mm-cernyj-106362731-1.jpg'
  },
  {
    id: 17,
    category: 'watch',
    name: 'Смарт-часы Apple Watch Series 7 45 мм черный',
    isLikePressed: false,
    description: [
      {subdescr: '-поддержка платформ: iOS'},
      {subdescr: '-материал корпуса: пластик'},
      {subdescr: '-цвет корпуса: черный'} ,
      {subdescr: '-технология экрана: OLED'} ,
      {subdescr: '-объем встроенной памяти: 32 Гб'} ,
      {subdescr: '-интерфейсы: Bluetooth, ,Wi-Fi, ,NFC'} ,
      {subdescr: '-время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов'}
    ],
    price: 233_980,
    rating: 4.9,
    like: 10,
    link: 'https://kaspi.kz/shop/p/apple-watch-series-7-45-mm-chernyi-102582811/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hcf/46553394249758/apple-watch-series-7-41-mm-cernyj-102582811-1.jpg'
  },
  {
    id: 18,
    category: 'supply',
    name: 'Зарядное устройство Baseus Super Si Quick Charge 20W черный',
    price: 8000,
    isLikePressed: false,
    description: [
      {subdescr: '-тип: сетевая зарядка'},
      {subdescr: '-количество подключаемых устройств: 1'},
      {subdescr: '-быстрая зарядка: Да'},
      {subdescr: '-разъем подключения: USB Type-C, ,Lightning'},
      {subdescr: '-стандарт быстрой зарядки: Quick Charge 3.0'}
    ],
    rating: 3.0,
    like: 104,
    link: 'https://kaspi.kz/shop/p/baseus-super-si-quick-charge-20w-chernyi-103557342/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/h21/48502979297310/baseus-super-si-quick-charge-20w-cernyj-103557342-1.jpg'
  },
  {
    id: 19,
    category: 'laptop',
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 169_990,
    isLikePressed: false,
    description: [
      {subdescr: '-диагональ экрана: 15.6 дюйм'},
      {subdescr: '-процессор: Intel Pentium Gold 7505'},
      {subdescr: '-видеокарта: Intel UHD Graphics'},
      {subdescr: '-размер оперативной памяти: 8 ГБ'},
      {subdescr: '-тип жесткого диска: SSD'},
      {subdescr: '-общий объем накопителей: 256 ГБ'}
    ],
    rating: 3.6,
    like: 12,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg'
  },
  {
    id: 20,
    category: 'laptop',
    name: 'Ноутбук Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый',
    price: 139_990,
    isLikePressed: false,
    description: [
      {subdescr: '-диагональ экрана: 14 дюйм'},
      {subdescr: '-процессор: Intel Celeron N4020'},
      {subdescr: '-видеокарта: Intel UHD Graphics 600'},
      {subdescr: '-размер оперативной памяти: 4 ГБ'},
      {subdescr: '-тип жесткого диска: SSD'},
      {subdescr: '-общий объем накопителей: 128 ГБ'}
    ],
    rating: 3.2,
    like: 11,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/he2/67940461740062/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg'
  },
];
