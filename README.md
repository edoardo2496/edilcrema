# Edil Crema — sito web

Sito statico Jekyll (compatibile con GitHub Pages).

## Struttura
- `_config.yml` — impostazioni globali (titolo, url, collezioni)
- `_data/` — contenuti strutturati in YAML (azienda, servizi, processo, numeri)
- `_includes/` — blocchi riutilizzabili (nav, footer, hero, card)
- `_layouts/` — modelli di pagina (default, post, progetto)
- `_posts/` — articoli del blog (`AAAA-MM-GG-titolo.md`)
- `_progetti/` — schede dei lavori realizzati (una per file)
- `assets/css`, `assets/js`, `assets/img/{brand,team,progetti,blog}`
- `index.html`, `progetti.html`, `blog.html`, `contatti.html` — pagine

## Anteprima in locale
    bundle exec jekyll serve
