r"""Рендер слайдов карточек в JPG через Playwright.

    python render_cards.py                 # все товары из products.js
    python render_cards.py norda           # один товар

Результат: <sku>/wb/slide-N.jpg (900x1200) и <sku>/ozon/slide-N.jpg (1200x1600).
Нужен: pip install playwright && playwright install chromium
"""
import json
import re
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

HERE = Path(__file__).resolve().parent
SIZES = {"wb": 1.0, "ozon": 4 / 3}          # базовый слайд 900x1200, Ozon = x4/3


def load_products() -> dict:
    js = (HERE / "products.js").read_text(encoding="utf-8")
    keys = re.findall(r"^  (\w+): \{", js, re.M)
    counts = {}
    for k in keys:
        block = js.split(f"  {k}: {{", 1)[1]
        m = re.search(r'sku: "([^"]+)"', block)
        n = len(re.findall(r'\{ type: "', block.split("\n  },", 1)[0]))
        counts[k] = (m.group(1), n)
    return counts


def main() -> None:
    products = load_products()
    only = sys.argv[1:]
    url = (HERE / "slides.html").as_uri()
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        for size, scale in SIZES.items():
            page = browser.new_page(viewport={"width": 900, "height": 1200}, device_scale_factor=scale)
            for key, (sku, n) in products.items():
                if only and key not in only:
                    continue
                out = HERE / sku / size
                out.mkdir(parents=True, exist_ok=True)
                for i in range(1, n + 1):
                    page.goto(f"{url}?p={key}&s={i}")
                    page.wait_for_selector("body[data-ready='1']")
                    page.locator(".slide").screenshot(path=str(out / f"slide-{i}.jpg"), type="jpeg", quality=90)
                print(f"{sku}: {n} слайдов -> {out}")
        browser.close()


if __name__ == "__main__":
    main()
