'use client';

import {
  DISCORD_LINK,
  GITHUB_LINK,
  COMMUNITY_LINK,
  TWITTER_LINK,
} from 'src/links';
import ArrowSvg from 'src/svg/ArrowSvg';

const docLinks = [
  { href: COMMUNITY_LINK, title: '$MOCHI' },
  { href: GITHUB_LINK, title: 'Github' },
  { href: DISCORD_LINK, title: 'Discord' },
  // { href: FIGMA_LINK, title: 'Figma' },
  { href: TWITTER_LINK, title: 'X' },
];

export default function Footer() {
  return (
    <section className="mt-auto mb-8 pb-8 flex w-full flex-col justify-between gap-2 md:mt-8 md:mb-12 md:pb-12 md:flex-row">
      <aside className="flex flex-col items-start pt-2 md:pt-0">
        <h3 className="mr-2 mb-2 text-m md:mb-0">
          Built with{' '}
          <a
            href={GITHUB_LINK}
            target="_blank"
            rel="noreferrer"
            title="OnchainKit"
            className="font-semibold hover:text-indigo-600 transition-colors duration-200"
          >
            OnchainKit Template
          </a>
        </h3>
        <p className="text-sm text-gray-500 italic">This is a personal project for demo purposes only and not affiliated with any organization.</p>
      </aside>
      <ul className="mt-4 flex max-w-full flex-col flex-wrap justify-center gap-3 md:mt-0 md:flex-row md:justify-start md:gap-6">
        {docLinks.map(({ href, title }) => (
          <li className="flex" key={href}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              title={title}
              className="flex items-center gap-1 hover:text-indigo-600 transition-colors duration-200"
            >
              <p>{title}</p>
              <ArrowSvg className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}