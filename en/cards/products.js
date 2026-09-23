// Данные товаров для шаблона слайдов (slides.html).
// Демо: бренды NORDA и AQUELLE вымышленные, характеристики придуманы для портфолио.
// Чтобы сделать карточку клиента: скопируй объект, поменяй тексты, тему и art (или photo).
window.PRODUCTS = {
  norda: {
    sku: "norda-450",
    name: "NORDA travel mug, 450 ml",
    seo_title: "NORDA insulated travel mug 450 ml, leak-proof flip lid, stainless steel 304",
    seo_text: "A 450 ml travel mug for coffee and tea on the go. Double stainless steel 304 walls with vacuum between them keep hot drinks hot for up to 6 hours and cold drinks cold for up to 12. The flip lid latches shut, so the mug can travel in a bag, and it opens with one hand. The 7.5 cm base fits a standard car cup holder. Weight 310 g. A spare silicone ring and a cleaning brush are included. Hand wash only, not for the dishwasher or microwave. 12-month warranty.",
    theme: { bg: "#f2ede4", bg2: "#e6dccb", ink: "#1b2b26", muted: "#5d6b64", accent: "#d9893b", deep: "#1f3a32", onDeep: "#f2ede4" },
    art: "mug",
    slides: [
      { type: "cover",
        badge: "Hot for up to 6 hours",
        title: "Travel mug\n450 ml",
        sub: "Flip lid that seals:\nno leaks in your bag",
        chips: ["Steel 304", "7.5 cm wide", "310 g"] },
      { type: "specs",
        title: "Size\nand materials",
        dims: { h: "21 cm", w: "7.5 cm" },
        rows: [["Volume", "450 ml"], ["Weight", "310 g"], ["Body", "AISI 304 steel"], ["Walls", "double, vacuum"], ["Lid", "BPA-free Tritan"]] },
      { type: "chart",
        title: "Keeps heat\nall workday long",
        sub: "Coffee temperature, poured at 95 °C",
        points: [[0, 95], [2, 83], [4, 72], [6, 63], [8, 55], [12, 44]],
        unit: "°C", xunit: "h",
        mark: 3, markText: "63 °C after 6 hours" },
      { type: "grid3",
        title: "Take it\nanywhere",
        items: [
          { icon: "car",  head: "In the car",  text: "7.5 cm: fits a cup holder" },
          { icon: "bag",  head: "In your bag", text: "Latched lid, no leaks" },
          { icon: "hand", head: "On the go",   text: "Opens with one hand" } ] },
      { type: "box",
        title: "What\u0027s in the box",
        items: ["Travel mug", "Flip lid", "Spare silicone ring", "Cleaning brush"],
        notes: ["Hand wash only", "Not for dishwasher or microwave"],
        seal: "12-month\nwarranty" }
    ]
  },

  aquelle: {
    sku: "aquelle-ha30",
    name: "AQUELLE hyaluronic acid serum, 30 ml",
    seo_title: "AQUELLE face serum with 2% hyaluronic acid and niacinamide, 30 ml",
    seo_text: "A hydrating face serum for all skin types. It contains 2% hyaluronic acid in two forms, 4% niacinamide and 1% panthenol. Hyaluronic acid helps the skin hold on to water, niacinamide evens out skin tone, panthenol softens the skin after cleansing. Fragrance-free and alcohol-free, pH 5.5. Apply 2-3 drops to clean, slightly damp skin morning and evening, then your cream. The 30 ml dark glass bottle with a dropper lasts about two months of daily use. Shelf life 24 months, 6 months after opening. Patch test on the inside of your elbow before first use.",
    theme: { bg: "#eaf1f1", bg2: "#d5e5e6", ink: "#14323a", muted: "#557077", accent: "#2d9c9f", deep: "#14323a", onDeep: "#eaf1f1" },
    art: "serum",
    slides: [
      { type: "cover",
        badge: "2% hyaluronic acid",
        title: "Hydrating\nface serum",
        sub: "For all skin types,\nmorning and evening",
        chips: ["30 ml", "Fragrance-free", "pH 5.5"] },
      { type: "grid3",
        title: "Three active\ningredients",
        items: [
          { big: "2%", head: "Hyaluronic acid", text: "Two forms: helps skin hold on to water" },
          { big: "4%", head: "Niacinamide", text: "Evens out skin tone" },
          { big: "1%", head: "Panthenol", text: "Softens skin after cleansing" } ] },
      { type: "facts",
        title: "The short\nversion",
        items: [
          { big: "30 ml", text: "lasts about 2 months" },
          { big: "pH 5.5", text: "close to skin\u0027s natural pH" },
          { big: "0%", text: "fragrance and alcohol" } ] },
      { type: "steps",
        title: "How to\napply",
        items: [
          { head: "Cleanse", text: "Skin should be clean and slightly damp" },
          { head: "2-3 drops", text: "Spread over face and neck" },
          { head: "Cream on top", text: "After a minute, to lock in moisture" } ] },
      { type: "box",
        title: "Bottle\nand storage",
        items: ["Dark glass protects from light", "Dropper for precise dosing", "24 months shelf life", "6 months after opening"],
        notes: ["Before first use, patch test", "on the inside of your elbow"],
        seal: "For all\nskin types" }
    ]
  }
};
