export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  image?: string;  // 封面圖路徑或 URL，選填
};

export const projects: Project[] = [
  {
    title: "東華應數系 線上空間借用系統",
    description:
      "由 Next.js 驅動設計，提供校內師生線上登記與審核，部署在 Cloudflare Pages 上，搭配 D1 資料庫。",
    tags: ["Next.js", "Cloudflare", "UX"],
    links: [
      { label: "Visit", href: "https://ndhuam-booking.pages.dev/" },
    ],
    // image: "/images/ndhu-booking-system.png",
  },
  {
    title: "東華大學公告爬蟲 API",
    description:
      "使用 Golang 爬蟲撰寫成 JSON API，搭配 Tailwind CSS 設計的網頁，讓你在手機上也能好好讀公告。",
    tags: ["Golang", "Tailwind CSS", "Web Scraping"],
    links: [
      { label: "Crawler GitHub", href: "https://github.com/yc97463/ndhu-announcement-crawler" },
      { label: "Viewer GitHub", href: "https://github.com/yc97463/ndhu-announcement-viewer" },
    ],
  },
  {
    title: "東華學生會資訊服務 API",
    description:
      "DHSA RESTful API 以 Node.js 和 Express 框架為基礎所開發，旨在提供東華大學學生會一個穩定、可靠、多元化的 API 服務。",
    tags: ["Node.js", "Express", "RESTful API"],
    links: [
      { label: "GitHub", href: "https://github.com/yc97463/dhsa-api" },
    ],
  },
  {
    title: "SITCON 2022 閉幕影片",
    description:
      "擔任 SITCON 2022 閉幕影片導演、規劃、剪輯。",
    tags: ["影片製作", "導演", "剪輯"],
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=YGXinEClNWI" },
    ],
  },
  {
    title: "高雄市立龍華國中畢業影片",
    description:
      "107 學年度第 35 屆畢業影片 MV 暨謝師專欄。當我們一起走過的那些時光，畢業影片導演、剪輯兼拍攝。",
    tags: ["影片製作", "導演", "剪輯"],
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=rXJbEFxJLv8" },
    ],
  },
  {
    title: "RPage 公告小工具",
    description:
      "快速取得以 RPage 為基底的校園公告，方便嵌入至個人網頁中。",
    tags: ["JavaScript", "Widget", "校園工具"],
    links: [
      { label: "GitHub", href: "https://github.com/yc97463/rpage-announcement" },
    ],
  },
  {
    title: "耶晚亂數抽獎機",
    description:
      "高中學生會的亂數抽獎器，有時候我選擇困難時也會拿來抽。",
    tags: ["JavaScript", "Web App"],
    links: [
      { label: "GitHub", href: "https://github.com/yc97463/random-lucky-draw" },
    ],
  },
  {
    title: "CSCheckin 線上點名系統",
    description:
      "因應疫情，一款能幫助老師快速掌握線上學生的工具。",
    tags: ["Web App", "教育", "疫情工具"],
    links: [],
  },
  {
    title: "RNRS 實名（聯）制進場系統",
    description:
      "疫情下，一套能夠快速消化活動人流的活動進場整合系統。",
    tags: ["Web App", "活動管理", "疫情工具"],
    links: [],
  },
  {
    title: "學期成績計算神器 v2",
    description:
      "快速計算三次段考要考多少才會期末歐趴～",
    tags: ["JavaScript", "Web App", "教育"],
    links: [
      { label: "GitHub", href: "https://github.com/yc97463/grade-calculator" },
    ],
  },
  {
    title: "社團線上展示卡片",
    description:
      "以網頁卡片的方式，展示社團簡介、照片，以及社團社群資訊。",
    tags: ["HTML", "CSS", "Web"],
    links: [
      { label: "GitHub", href: "https://github.com/yc97463/club-card" },
    ],
  },
  {
    title: "學習歷程解疑網",
    description:
      "整理新課綱學習歷程檔案的疑難雜症手冊。",
    tags: ["文件", "教育", "新課綱"],
    links: [
      { label: "GitHub", href: "https://github.com/yc97463/learning-portfolio-guide" },
    ],
  },
  {
    title: "防疫叫車平台",
    description:
      "2020 臺灣青年黑客松參賽作品，對「疫情下的共享經濟」思索，如何在兼顧資訊科技的同時也能發揮最大效益。",
    tags: ["Hackathon", "共享經濟", "疫情工具"],
    links: [
      { label: "GitHub", href: "https://github.com/yc97463/anti-epidemic-taxi" },
    ],
  },
];
