'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type BaseItem = { years: number[]; isHide?: boolean };

type Props<T extends BaseItem> = {
  id?: string;
  title: string;
  items: T[];
  renderItem: (item: T, indices: { yi: number; ii: number }) => ReactNode;
  layout?: 'vertical' | 'horizontal';
};

function groupByYear<T extends BaseItem>(items: T[]) {
  const years = [...new Set(
    items.filter((i) => !i.isHide).flatMap((i) => i.years)
  )].sort((a, b) => b - a);

  return years.map((year) => ({
    year,
    entries: items.filter((i) => i.years.includes(year) && !i.isHide),
  }));
}

export default function TimelineSection<T extends BaseItem>({ title, items, renderItem, layout = 'vertical' }: Props<T>) {
  const groups = groupByYear(items);

  const latestYear = groups[0]?.year;
  if (latestYear !== undefined && new Date().getFullYear() - latestYear > 4) return null;

  return (
    <section>
      <h1 className="text-lg tracking-widest uppercase text-gray-400 mb-4">{title}</h1>

      {layout === 'horizontal' ? (
        /* Year columns grid */
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
          {groups.map(({ year, entries }, yi) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: yi * 0.04, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-gray-400 shrink-0">{year}</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="flex flex-col gap-3">
                {entries.map((item, ii) => (
                  <div key={`${year}-${ii}`}>
                    {renderItem(item, { yi, ii })}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Vertical timeline */
        <div className="flex flex-col gap-8">
          {groups.map(({ year, entries }, yi) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: yi * 0.05, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-gray-400">{year}</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="flex flex-col gap-3">
                {entries.map((item, ii) => (
                  <motion.div
                    key={`${year}-${ii}`}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.25, delay: yi * 0.05 + ii * 0.04, ease: 'easeOut' }}
                    className="flex gap-3 items-start"
                  >
                    <div className="w-1 h-1 bg-primary shrink-0 mt-[6px]" />
                    <div>{renderItem(item, { yi, ii })}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
