'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Github } from 'lucide-react';
import { Markdown } from '@/components/common/Markdown';

export const ProjectsSection = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          id="projects-heading"
          className="mb-10 text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,360px))] justify-center gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="transition-transform duration-300 ease-out hover:z-10 hover:scale-105 md:hover:scale-105 lg:hover:scale-110"
            >
              <Card className="group flex h-full flex-col">
                <CardHeader className="h-28 overflow-hidden">
                  <CardTitle>{p.title}</CardTitle>
                  <Markdown className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                    {p.description}
                  </Markdown>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="relative mb-3 h-48 w-full overflow-hidden rounded-md bg-gray-100 transition-all duration-300 ease-out hover:h-64 group-hover:h-64 dark:bg-gray-800 md:h-56 md:hover:h-72 md:group-hover:h-72 lg:h-60 lg:hover:h-80 lg:group-hover:h-80">
                    {/* Placeholder image block; real image path included in data */}
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className={
                        p.imageFit === 'contain'
                          ? 'object-contain'
                          : 'object-cover'
                      }
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>
                  <ul className="mb-3 list-disc space-y-1 pl-5 text-sm">
                    {p.features.slice(0, 3).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">{p.impact}</div>
                  <div className="flex gap-2">
                    {p.githubUrl && (
                      <Button
                        as="a"
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="sm"
                        aria-label={`View ${p.title} on GitHub`}
                      >
                        <Github className="mr-1 h-4 w-4" /> Code
                      </Button>
                    )}
                    {p.liveUrl && (
                      <Button
                        as="a"
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="sm"
                        aria-label={`Visit ${p.title} live site`}
                      >
                        Live
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
