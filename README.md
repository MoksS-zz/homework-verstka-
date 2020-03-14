имя ветки адаптировать 
блоки вместо элементов внутри карточки

# Shri 2020 Task 1

### Инструменты 
- **Gulp**  - сборка css 
- **Sass**  - инструмен облегчает написание BEM стилей
- **AutoPrefixer** - для кроссбраузерной верстки


``
несжатый  css лежит в папке build
``

## **Ответы на вопросы**


### **Правильное использование БЭМ-сущностей**
- **какие части макета являются одним и тем же блоком?**

    Кнопки, иконки, само собой заголовок и footer, текст в большинстве своем, карточки с  коммитами.

- **какие стили относятся к блокам, а какие к элементам и модификаторам?**

    Cтили, которые могут жить самостоятельно, вне суности элемента, а так же повторно использоваться - являються блоками. 
    
    Стили, которые дополняют(описывают) основной блок - модификаторами.

    Стиль, чье существование ограничено сущьностю родителя - элемент.

- **где нужно использовать каскады и почему?**

    Каскады используються с модификаторами блока или с миксами для преопределения стандартных значений блока или его поведения, позволяя нам не создавать новый класс с нуля, тем самым не дублировать код.

### Консистентность

- **какие видите базовые и семантические константы?**

    Размеры шрифта, отступы, цвет текста/иконок, радиус скругления рамки

- **какие видите закономерности в интерфейсе?**

    На каждой странице статично имеется заголовок и footer, имеющие одинаковое поведение и цвет, за исключением кнопок в заголовке)

    В моем случае верстки брейкпоинт имеет одинаковый размер на всех страницах, Ну и в целом общая цветовая палитра поддерживается единого стиля, взять хотя бы 50 оттенков серого :3 В целом иконки практически визде имеют одинаковый размер, за исключением некоторых случаев, которые решаются модификатором блока.

### Адаптивность


- **где видите вариативность данных и как это обрабатываете?**

  вариативность данных наблюдается в отступах, размерах некоторых иконок, текста, блоков, наличие или отсутсвие самого текста, в целом изменчивость элементов при адаптивности.

  Обрабатываю через @media в css  и модификаторов блока

- **какие видите особенности, связанные с размером экрана?**

    явно не указаны брекпоинты для переключения стилей под мобилки,
    особенно это явно чувствуется на странице setting. Поэтому при ширине экрана меньше 824px сделал дизайн резиновым, для того, чтобы свободное пространство экрана на телефоне пользователя не простаивало.

- **что еще повлияло на вашу вёрстку?**


  Я называю это "слабоумие и отвага", сейчас объясню) 
  
  Вместо того, чтобы сначала ответить на вопросы и продумать дизайн систему, я сразу приступил к верстке из-за чего столкнулся с разного рода трудностями и препядствиями вынуждающими писаться костыли. Осознав и довольно поздно, что я делаю что то не то, приступил к рефакторингу)


#### Я не против упоминания моей работы в качестве примера "Как делать не надо"

Отдельное спасибо за задание, не скажу что я прям взял и резко научился верстать хорошо, нет ни в коем случае, для этого нужно больше практики, но ближе к концу, я проникся БЕМ методологией и осознанием того, как надо было делать изначально. Под конец с помощью нее было верстать довольно просто и самое главное быстро.

Так же что касается цветов, цвета я брал через пипетку  и отказался от rgba, так как в случае смена фона блока элемента, его изначально задуманный цвет потеряет свой оттенок. Возможно я не прав, крайне интересно услышать что об этом думает человек, который сделал макет для задания.