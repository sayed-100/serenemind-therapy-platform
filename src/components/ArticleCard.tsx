import React from 'react';
import { Clock, ArrowRight, User } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onReadArticle: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onReadArticle }) => {
  return (
    <article
      id={`article-card-${article.id}`}
      onClick={() => onReadArticle(article)}
      className="bg-white border border-[#E7E2D6] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer group"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-[#EFE9DD]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#2A4839] shadow-xs">
          {article.category}
        </span>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-[#717E75] mb-2.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#86958B]" />
              {article.readingTime}
            </span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1F2421] group-hover:text-[#2D4D3E] transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#546258] mt-2 line-clamp-3 leading-relaxed">
            {article.shortDescription}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-[#F2EDE2] flex items-center justify-between text-xs">
          <span className="text-[#647269] flex items-center gap-1.5 font-medium">
            <User className="w-3.5 h-3.5 text-[#8A988E]" />
            {article.author}
          </span>
          <span className="text-[#3D5A4C] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            Read Guide <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
};
