---
name: mjml-email
description: MJML арқылы адаптивті HTML email жасау және оны React редакторына қосу негіздері. "MJML", "email", "HTML хат" дегенде қолдан.
---

# MJML — Responsive Email

Ресми құжат: https://mjml.io/ (try it live: https://mjml.io/try-it-live)

## Неге MJML?
Email клиенттер (Outlook, Gmail) flex/grid, көп CSS-ті қолдамайды → table-layout + inline style керек. MJML жоғары деңгейлі тегтерді сондай кросс-клиент HTML-ге компиляциялайды.

## Құрылым
```xml
<mjml>
  <mj-head>
    <mj-attributes><mj-all font-family="Arial, sans-serif" /></mj-attributes>
  </mj-head>
  <mj-body width="600px">
    <mj-section background-color="#ffffff">
      <mj-column>
        <mj-image src="https://placehold.co/600x200" alt="Hero" />
        <mj-text font-size="20px">Привет, MAXA!</mj-text>
        <mj-button href="https://example.com">Толығырақ</mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```
Негізгі ереже: `mj-body > mj-section > mj-column > контент` (mj-text, mj-image, mj-button, mj-divider, mj-spacer). Мобильде column-дар автоматты түрде бір-бірінің астына түседі.

## React-пен
- Компиляция: `mjml` (Node) немесе браузерде `mjml-browser` → `mjml2html(source).html`.
- Редактор идеясы: блоктар тізімі (state: `Block[]`, discriminated union `{type:'text'|'image'|'button', ...}`) → MJML string генерациясы → `<iframe srcDoc={html}>` preview.
- Тест: Litmus/Email on Acid орнына оқу үшін Gmail-ге жіберіп көру жеткілікті.

Түсіндіру тілі — қазақша, терминдер ағылшынша.
