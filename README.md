# 🐕 伊薩帶路｜ISA Walk

> 關渡生活探索——跟著伊薩散步，在生活的縫隙裡遇見適合的家。

不是房屋網站，而是「用狗帶你體驗生活，最後自然看到房子」的互動產品。

## 技術

- Next.js 14（App Router）+ TypeScript
- Tailwind CSS v3
- 無後端，本地 JSON 模擬資料
- 響應式（手機優先）

## 在瀏覽器確認

```bash
cd /Users/you/isa-walk
npm install
npm run dev
```

打開 http://localhost:3100

> port 3000 被 `niputay-web` 佔用，所以 isa-walk 用 3100。

## 頁面

| 路徑 | 說明 |
|---|---|
| `/` | 首頁——伊薩邀你開始散步 |
| `/select` | 選擇今天想怎麼走（放鬆／日常／通勤） |
| `/route?type=xxx` | 路線頁：伊薩帶路 + 灰色假地圖 + 沿途景點 + 房源 |

## 專案結構

```
app/
  layout.tsx
  page.tsx
  select/page.tsx
  route/page.tsx
components/
  DogCharacter.tsx
  RouteCard.tsx
  PlaceCard.tsx
  PropertyCard.tsx
  MapView.tsx
data/
  properties.ts
  places.ts
```
