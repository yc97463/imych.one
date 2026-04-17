export type Talk = {
  years: number[];
  title: string;
  event: string;
  link?: string;
  isHide?: boolean;
};

export const talks: Talk[] = [
  {
    years: [2024],
    title: "開源社群探險 Go Go! 從 FOSDEM 到臺灣的社群分享",
    event: "GDSC NDHU 四月小聚",
    link: "https://drive.google.com/file/d/1GDfqmYXP_2FHMkiLNeiCigFgiei22Qzt/view?usp=sharing",
  },
  {
    years: [2024],
    title: "Info Session 暨招募實習 Lead 說明會",
    event: "GDSC NDHU 三月小聚",
    link: "https://drive.google.com/file/d/1e36PQm8oRPhb-c2KQS8ngncRCaO_Gb6W/view?usp=sharing",
  },
  {
    years: [2024],
    title: "紀錄組動態攝影分享",
    event: "SITCON 2024 負一籌辦會議",
    link: "https://docs.google.com/presentation/d/1RyMEafKlgOeKD8a7cJZb6Ii3T8OxvSjjCn-AJEGOCZE/edit?usp=sharing",
  },
  {
    years: [2023],
    title: "Lightning Talk",
    event: "MOPCON 2023",
    link: "https://docs.google.com/presentation/d/1K-MU2M2ao3DxXyvT_RDwTLMeFyny8j2_XbzaIkB5ofA/edit?usp=sharing",
  },
  {
    years: [2023],
    title: "文明的根本 Telegram Bot Intro",
    event: "SITCON Camp 2023",
    link: "https://speakerdeck.com/yc97463/telegram-bot-intro",
  },
  {
    years: [2023],
    title: "跨域探索 Interdisciplinary Exploration — Info Session",
    event: "GDSC NDHU 十月小聚",
    link: "https://drive.google.com/file/d/12Xci8GTPK6Tb7e1YHeaLcf_U1WChe-or/view?usp=drive_link",
  },
  {
    years: [2023],
    title: "東華 VIP 垂直整合專題分享",
    event: "國立東華大學 VIP 專題分享會",
    link: "https://drive.google.com/file/d/1DG7E0TOephGmUho-uMP29DeKg0ubS8UE/view",
  },
  {
    years: [2022],
    title: "不插電課程講者",
    event: "SITCON 2022 Hour of Code 高雄場",
    link: "https://drive.google.com/file/d/1VgfiXjp8Bi1Vs9oIJ3REAn7VDk655O0s/view?usp=sharing",
  },
  {
    years: [2021],
    title: "應到未到，一看就知道！",
    event: "MOPCON 2021",
    link: "https://drive.google.com/file/d/1wf8-u87KzskP6FOgVbV53vH2J1NDZE4u/view",
  },
  {
    years: [2021],
    title: "學習歷程檔案分享",
    event: "國立東華大學新生入學",
    link: "https://drive.google.com/file/d/1aM7btZtjO4zYjwIUW_W8Fp2kqh1ZqVM2/view?usp=sharing",
  },
];
