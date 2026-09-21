# Демо-работы

Портфолио-демо для фриланса. Бренды вымышленные, вёрстка настоящая.

```
index.html        витрина со ссылками на демо
coffee/index.html кофейня «Зерно»
beauty/index.html студия красоты LUMA
*/img/            фотографии (необязательно, см. ниже)
```

## Фотографии

Страницы работают без фото: вместо картинок рисуются градиенты. Чтобы демо выглядело
дороже, положи снимки со стоков (Unsplash, Pexels — бесплатная лицензия) с такими именами:

- `coffee/img/` → `about.jpg`, `g1.jpg` … `g6.jpg`
- `beauty/img/` → `hero.jpg`, `m1.jpg`, `m2.jpg`, `m3.jpg`, `g1.jpg` … `g5.jpg`

Формат: JPG, ширина 1200–1600 px, вес до 300 КБ на файл (сожми на squoosh.app).
Фото с маркетплейсов и чужих сайтов не бери — на них есть права.

## Публикация

Отдельный репозиторий, внутри папки агента, но со своей историей — чтобы `.env`
и `agent.db` физически не могли попасть в публичный репозиторий.

```bat
cd %USERPROFILE%\Desktop\freelance-agent\demo
git init
git add .
git commit -m "demo: два лендинга и витрина"
git branch -M main
git remote add origin https://github.com/ИМЯ/demo.git
git push -u origin main
```

Дальше в GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
Через 1–2 минуты адреса:

- витрина — `https://ИМЯ.github.io/demo/`
- кофейня — `https://ИМЯ.github.io/demo/coffee/`
- салон — `https://ИМЯ.github.io/demo/beauty/`

## Обновить после правок

```bat
cd %USERPROFILE%\Desktop\freelance-agent\demo
git add .
git commit -m "что изменил"
git push
```
