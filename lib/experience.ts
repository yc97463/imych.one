export type Experience = {
  years: number[];  // 出現在哪些年份的 section，多年份則重複出現
  role: string;
  org: string;
  link?: string;
  isHide?: boolean;
};

export const experiences: Experience[] = [
  {
    years: [2026],
    role: "系統開發組副組長",
    org: "HITCON 2026",
    link: "https://hitcon.org/2026/"
  },
  {
    years: [2026],
    role: "快樂ㄉ組員",
    org: "SITCON 2026 開發組",
    link: "https://sitcon.org/2026/"
  },
  {
    years: [2026],
    role: "",
    org: "g0v Summit 2026",
    isHide: true,
  },
  {
    years: [2026],
    role: "北區佳作",
    org: "全國技能競賽第 56 屆 雲端運算分區賽",
  },
  {
    years: [2026],
    role: "決賽佳作",
    org: "2025 ITSA 全國大專校院程式設計極客挑戰賽",
    link: "https://am.ndhu.edu.tw/p/406-1038-253130,r4551.php?Lang=zh-tw"
  },
  {
    years: [2024, 2025, 2026],
    role: "系所網站維護工讀生",
    org: "國立東華大學 應用數學系",
    link: "https://am.ndhu.edu.tw/app/home.php?Lang=zh-TW"
  },
  {
    years: [2025, 2026],
    role: "新生網站開發工讀生",
    org: "國立東華大學 學生事務處",
    link: "https://ndhufreshman.ndhu.edu.tw/"
  },
  {
    years: [2025],
    role: "系統開發組副組長",
    org: "HITCON 2025",
    link: "https://hitcon.org/2025/"
  },
  {
    years: [2023, 2024],
    role: "社群領袖",
    org: "Google 學生開發者社群 — 國立東華大學",
  },
  {
    years: [2022, 2023],
    role: "Intern Lead",
    org: "GDSC NDHU",
    isHide: true,
  },
  {
    years: [2021, 2022],
    role: "共同發起人",
    org: "築夢學院",
    isHide: true,
  },
  {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
    role: "成員",
    org: "鹿鯊工作室",
    isHide: true,
  },
  {
    years: [2023],
    role: "場務組員",
    org: "MOPCON 2023",
  },
  {
    years: [2023],
    role: "資訊組、課程講者、隊輔組副組長",
    org: "SITCON 2023 Summer Camp",
  },
  {
    years: [2023, 2024],
    role: "學生權益部部長",
    org: "東華大學學生會",
    link: "https://dhsa.ndhu.edu.tw"
  },
  {
    years: [2022, 2023],
    role: "資訊政委",
    org: "東華大學學生會",
    link: "https://dhsa.ndhu.edu.tw"
  },
  {
    years: [2022],
    role: "Hour of Code 高雄場總召、講者",
    org: "SITCON 2022",
  },
  {
    years: [2022],
    role: "場務組員",
    org: "MOPCON 2022",
  },
  {
    years: [2022],
    role: "隊輔",
    org: "TYAD 全國高級中等學校學生自治培力營",
  },
  {
    years: [2022],
    role: "場務組員、紀錄組動態攝影股組長",
    org: "SITCON 2022",
  },
  {
    years: [2022],
    role: "場務組員、製播組員",
    org: "COSCUP 2022",
  },
  {
    years: [2021, 2022],
    role: "Developer",
    org: "RNRS",
    isHide: true,
  },
  {
    years: [2021],
    role: "議程講者",
    org: "MOPCON 2021",
  },
  {
    years: [2021],
    role: "Project Manager",
    org: "CSCheckin",
  },
  {
    years: [2020, 2021, 2022],
    role: "Foundator",
    org: "SMHS Open Source Organization",
    isHide: true,
  },
  {
    years: [2020],
    role: "文書兼資訊",
    org: "三民高中班級代表聯合會",
    isHide: true,
  },
];
