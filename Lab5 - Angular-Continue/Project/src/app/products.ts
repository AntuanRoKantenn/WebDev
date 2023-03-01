export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
//books - 3; goods - 3; food - 1; technique - 3;
export const products = [

  {
    //category - book
    id: 1,
    name: 'Книга Бeрнетт Ф. Э. Х.: Таинственный сад',
    description: [
      {subdescr: '-Автор/Редактор Бeрнетт Ф. Э. Х.'},
      {subdescr: '-Издательство Эксмо'},
      {subdescr: '-ISBN 9785171199784'} ,
      {subdescr: '-Размеры 180x115x22 мм'} ,
      {subdescr: '-Количество страниц 320'} ,
      {subdescr: '-Год издания 2020'} ,
      {subdescr: '-Переплет: мягкий переплет'}
    ],
    price: 1895,
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/bernett-f-e-h-tainstvennyi-sad-101375607/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/hc6/34300229976094/bernett-f-e-h-tainstvennyj-sad-101375607-1.jpg'
  },
  {
    //category - book
    id: 2,
    name: 'Книга Оруэлл Дж.: 1984',
    description: [
      {subdescr: '-Автор/Редактор Оруэлл Дж'},
      {subdescr: '-Издательство ACT'},
      {subdescr: '-ISBN 978-5-17-148844-4'} ,
      {subdescr: '-Возраст 16+'} ,
      {subdescr: '-Количество страниц 320'} ,
      {subdescr: '-Год издания 2022'} ,
      {subdescr: '-Переплет: мягкий переплет'}
    ],
    price: 1995,
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/oruell-dzh-1984-105221802/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h34/51390686953502/oruell-dz-1984-105221802-1.jpg'
  },

  {
    // category - goods
    id: 3,
    name: 'Фигура "Ворон на черепе" ',
    price: 13_900,
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
    link: 'https://kaspi.kz/shop/p/lavka-magicheskih-atributov-figurka-figura-voron-na-cherepe-26-sm-gips-107444647/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/hd0/65389589069854/figura-voron-na-cherepe-107444647-1.jpg'
  },

  {
    //category - food
    id: 4,
    name: 'Энергетический напиток Red Bull классический 4 шт по 250 мл',
    price: 2378,
    description: [
      {subdescr: '-вид напитка: тонизирующий'},
      {subdescr: '-стимулирующее вещество: таурин'},
      {subdescr: '-страна производства: Австрия'}
    ],
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/red-bull-klassicheskii-4-sht-po-250-ml-100801779/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/h55/32639634964510/red-bull-toniziruusij-lajm-250-ml-100801779-1-Container.jpg'
  },

  {
    //category - technique
    id: 5,
    name: 'Кабель Apple USB - Lightning 1 м',
    price: 14_590,
    description: [
      {subdescr: '-тип: кабель'},
      {subdescr: '-разъемы: Apple Lightning (M), ,USB 2.0 (M)'},
      {subdescr: '-длина: 1 м'}
    ],
    rating: 1.0,
    link: 'https://kaspi.kz/shop/p/kabel-apple-usb-type-c---lightning-1-m-40500508/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/he9/32024009637918/kabel-apple-usb-type-c-lightning-1-m-40500508-1.jpg'
  },
  {
    //category - goods
    id: 6,
    name: 'Ароматическая свеча STELLA FRAGRANCE',
    price: 4990,
    description: [
      {subdescr: '-назначение: ароматическая свеча'},
      {subdescr: '-форма: цилиндрическая'},
      {subdescr: '-цвет: коричневый'}
    ],
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/aromaticheskaja-svecha-stella-fragrance-89090949-korichnevyi-1-sht-107316946/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/h90/65008736665630/aromaticheskaya-svecha-stella-fragrance-89090949-korichnevyi-1-sht-107316946-1.jpg'
  },
  {
    //category - goods
    id: 7,
    name: 'Сувениры из мраморной крошки фигурка Афродита II',
    price: 30_077,
    description: [
      {subdescr: '-тип: фигурка'},
      {subdescr: '-тематика: люди'},
      {subdescr: '-материал: мрамор'},
      {subdescr: '-высота: 31 см'}
    ],
    rating: 3.1,
    link: 'https://kaspi.kz/shop/p/suveniry-iz-mramornoi-kroshki-figurka-afrodita-ii-31-sm-mramor-107398438/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/h98/65276221751326/suveniry-iz-mramornoi-kroshki-figurka-afrodita-ii-31-sm-mramor-107398438-1.jpg'
  },
  {
    //category - technique
    id: 8,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 480_550,
    description: [
      {subdescr: '-диагональ экрана: 13.3 дюйм'},
      {subdescr: '-процессор: Apple M1'},
      {subdescr: '-видеокарта: Apple M1 7 core'},
      {subdescr: '-размер оперативной памяти: 8 ГБ'},
      {subdescr: '-тип жесткого диска: SSD'},
      {subdescr: '-общий объем накопителей: 256 ГБ'}
    ],
    rating: 4.2,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg'
  },
  {
    //category - technique
    id: 9,
    name: 'Наушники Marshall Major IV коричневый',
    price: 145_760,
    description: [
      {subdescr: '-тип: гарнитура'} ,
      {subdescr: '-вид: накладные'} ,
      {subdescr: '-подключение: беспроводное'} ,
      {subdescr: '-тип акустического оформления: закрытые'} ,
      {subdescr: '-тип крепления: оголовье'} ,
      {subdescr: '-система активного шумоподавления: Нет'}
    ],
    rating: 4.6,
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-korichnevyi-104024603/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h42/49221103910942/marshall-major-iv-koricnevyj-104024603-1.jpg'
  },
  {
    //category - books
    id: 10,
    name: 'Книга Набоков В. В.: Приглашение на казнь',
    price: 3250,
    description: [
      {subdescr: '-жанр: всемирная классика'},
      {subdescr: '-SBN: 978-5-17-137833-2'} ,
      {subdescr: '-язык издания: русский'} ,
      {subdescr: '-переплет: твердый переплет'}
    ],
    rating: 4.0,
    link: 'https://kaspi.kz/shop/p/nabokov-v-v-priglashenie-na-kazn--103331351/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf6/h75/48036447780894/nabokov-v-v-priglasenie-na-kazn-103331351-1.jpg'
  },
];
