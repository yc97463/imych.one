---
title: "東華應數系 線上空間借用系統"
description: "提供校內師生線上登記與審核的空間借用平台，部署在 Cloudflare Pages 上，搭配 D1 資料庫。"
date: "2026-05-01"
tags: ["Next.js", "Cloudflare", "UX"]
cover: "/images/ndhuam-booking-system.png"
isPublished: true
isPage: true
isFeatured: true
links:
  - label: "Visit"
    href: "https://room.am.ndhu.edu.tw/"
---

> 請注意，這是一篇示範用的專案介紹，內容不完全真實。

## 背景

東華大學應用數學系的場地借用一直依賴紙本流程，老師和助教需要手動核對借用時段，容易產生衝突與漏失。這個專案的目標是將整個流程搬到線上，讓師生能夠隨時查看場地狀態並提出申請。

## 技術選型

- **前端框架**：Next.js App Router，提供 SSR 與靜態生成的彈性
- **資料庫**：Cloudflare D1（SQLite），部署在 Edge，低延遲
- **部署平台**：Cloudflare Pages，免費方案足夠應付系上流量
- **UI**：Tailwind CSS，快速組裝介面

選用 Cloudflare 生態系的原因是它的免費額度對學術小專案非常友善，同時 D1 的 SQL 介面讓資料操作直覺許多。

## 功能

- 師生可以瀏覽每週的借用日曆
- 線上填寫借用申請，包含使用目的與時段
- 管理員後台審核、核准或拒絕申請
- 申請狀態即時更新，無需來回寄信確認

## 遇到的挑戰

Cloudflare D1 在開發階段仍有一些限制，尤其是本地端模擬環境與正式環境之間的行為差異。解決方式是統一使用 `wrangler dev --remote` 直接對遠端資料庫開發，雖然速度略慢，但省去了本地/遠端不一致的問題。

另一個挑戰是時區處理。D1 儲存的時間戳是 UTC，而使用者介面需要顯示台灣時間（UTC+8），在 Edge 環境中沒有方便的 `Intl` polyfill，最後選擇在前端統一做時區轉換。

## 成果

系統上線後，空間借用流程從「找助教、填紙本、等確認」縮短到「線上申請、當天審核」，大幅減少助教的行政負擔。
