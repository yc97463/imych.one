'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomepageHero() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="aspect-video overflow-hidden bg-gray-100"
        >
            <Image
                src="/assets/yc-and-ULB.jpeg"
                alt="yc's avatar"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
            />
        </motion.div>
    );
}
