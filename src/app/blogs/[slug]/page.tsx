"use client";

import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { marked } from 'marked';
import { motion } from 'framer-motion';
import { use, useEffect, useState } from 'react';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);
  const [contentHtml, setContentHtml] = useState('');

  useEffect(() => {
    if (post) {
      const html = marked.parse(post.content);
      if (html instanceof Promise) {
        html.then(setContentHtml);
      } else {
        setContentHtml(html);
      }
    }
  }, [post]);

  if (!post) {
    notFound();
  }

  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-black text-white antialiased selection:bg-purple-500 selection:text-white">
        <Header />
        <main className="pt-32 pb-40">
          <article className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                href="/blogs"
                className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white mb-20 transition-all group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
                Back to Discourse
              </Link>
            </motion.div>

            <header className="mb-20 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-bold tracking-[0.4em] uppercase text-purple-400">
                  {post.category}
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="text-5xl md:text-[6rem] font-bold leading-[0.9] tracking-tighter"
              >
                {post.title}
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex flex-wrap items-center gap-10 text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 border-y border-white/5 py-10"
              >
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-purple-500" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span>{post.readTime}</span>
                </div>
              </motion.div>
            </header>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative aspect-[21/9] rounded-[3rem] overflow-hidden mb-24 border border-white/10 group"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-[3s] group-hover:scale-105"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="prose prose-invert prose-purple max-w-4xl mx-auto prose-headings:font-bold prose-headings:tracking-tighter prose-p:text-white/60 prose-p:text-xl prose-p:font-light prose-p:leading-relaxed prose-strong:text-white prose-blockquote:border-purple-500 prose-blockquote:bg-white/5 prose-blockquote:p-8 prose-blockquote:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </article>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}
