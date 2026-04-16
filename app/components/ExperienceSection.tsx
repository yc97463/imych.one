'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/experience';

// 收集所有年份（排除全 hide 的），去重後降序排列
const allYears = [...new Set(
  experiences.filter((e) => !e.isHide).flatMap((e) => e.years)
)].sort((a, b) => b - a);

export default function ExperienceSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-8">經歷</h2>
      <div className="flex flex-col gap-8">
        {allYears.map((year, yi) => {
          const items = experiences.filter((e) => e.years.includes(year) && !e.isHide);
          return (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: yi * 0.05, ease: 'easeOut' }}
            >
              {/* year header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-semibold text-white/80">{year}</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* entries for this year */}
              <div className="flex flex-col gap-2 pl-1">
                {items.map((item, ii) => (
                  <motion.div
                    key={`${year}-${ii}`}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.25, delay: yi * 0.05 + ii * 0.04, ease: 'easeOut' }}
                    className="grid grid-cols-[8px_1fr] gap-x-3 items-start"
                  >
                    {/* dot */}
                    <div className="w-2 h-2 rounded-full bg-primary/70 mt-[5px]" />
                    <div>
                      <p className="text-white text-base font-medium leading-snug">{item.role}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/50 text-sm mt-0.5 underline decoration-dashed hover:decoration-solid hover:text-white underline-offset-4"
                        >
                          {item.org}
                        </a>
                      ) : (
                        <p className="text-white/50 text-sm mt-0.5">{item.org}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
