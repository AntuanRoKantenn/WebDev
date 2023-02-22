export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [

  {
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

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/