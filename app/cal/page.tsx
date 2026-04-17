'use client';

import Image from 'next/image';
import styles from '../../styles/calendar.module.css';
import Link from 'next/link';

const calendarIds = [
    // "eW91dWFsYW44N0BnbWFpbC5jb20",
    // "NmEyb210djhzZzI2NWZlMGliNXBxNjI1OThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
    // "Mjg2bDBoN2xjZWdpaTJja3FqazR1ZzI4cHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
    // "Zm9wMHZtcDk5OWVqZDU3MTkzYnJrbmdqMzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
    // "MDJodmwwdXViMHFzbTA1ZDg1cHY0cmFhYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
    "aGlAaW15Y2gub25l",
    // "anE3anBsamJkazY1MnRkMThqZTBycGk0cHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
    // "cWZ2cmw5OHBoMzVkcTd1NGdhMW1lMG5jMzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
    // "MTM3bTVsMXIyaXVnbmcwcmZxdmljMWN0bjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
    // "Ymc3ZWV2cmptMDVpbGkybXRzcmNvcmd1czBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
    // "YnMxYWZ0NnJncDdtZDhrODQ4Zm9qZzlnaGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
    "af988e3ddbe6c8d6fea0ab997aa280ac12189f23a4e106b6564faa85eee03f92%40group.calendar.google.com",
    "o2hurnpofl0on7n9tban24il14@group.calendar.google.com",
    // "YjI0ODM2NDZhZTUwMzBlMmZlMTJiNzA3NDA1NDZjNjM3MTA3MzMwZWZhMDBkYmJmMDhhZTRjMTEwY2ZiNDJkYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
    // "33b15557dbd8ba29b710be0f9bcf59e05f5aa125f2324e5e335f3feb31bcd937%40group.calendar.google.com",
    // "eWM5NzQ2M0BzdHJhaXRwb3J0LmNvbQ",
    "ZTkxMWRmNmM5NDYyNzU3M2Q0ODRmNGU5NjZkNjI0NGIzYTYwY2YzY2ZjZDNjYzdjMWQyNTVkYzZhZDI4YjcyZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
];

export default function CalendarPage() {
    const calendarUrl = `https://calendar.google.com/calendar/embed?ctz=Asia/Taipei&wkst=2&mode=WEEK&title=YC+%E7%9A%84%E8%A1%8C%E7%A8%8B%E8%A1%A8&${calendarIds
        .map((id) => `src=${id}`)
        .join('&')}`;

    return (
        <main className={`${styles.background} flex flex-col items-center gap-4 pt-4`}>
            <div className="h-14" />
            <Image
                src="/assets/cal/title.svg"
                alt="yc's schedule"
                width={256}
                height={64}
                className={styles.title}
            />

            <Link
                href="https://calendar.app.google/XWUrpKWa21oNn2Q9A"
                target="_blank"
                className="relative z-[2] px-4 py-1 text-white bg-primary hover:text-white transition-colors"
            >
                來泡杯茶？預約 30 分鐘 ↗
            </Link>

            <div className="w-full flex-1 min-h-0 lg:max-w-[1800px] lg:px-4 md:mb-6">
                <iframe
                    src={calendarUrl}
                    className={`${styles.iframe} w-full h-full rounded-t-lg md:rounded-none`}
                />
            </div>
        </main>
    );
}
