import TwitterSVG from '@/assets/images/socials/twitter.svg?react';
import GithubSVG from '@/assets/images/socials/github.svg?react';
import DiscordSVG from '@/assets/images/socials/discord.svg?react';
import MediumSVG from '@/assets/images/socials/medium.svg?react';
import styles from './Socials.module.scss';

const socials = [
  { href: 'https://twitter.com/gear_techs', icon: TwitterSVG },
  { href: 'https://github.com/gear-tech', icon: GithubSVG },
  { href: 'https://discord.com/invite/7BQznC9uD9', icon: DiscordSVG },
  { href: 'https://medium.com/@gear_techs', icon: MediumSVG },
];

function Socials() {
  const getItems = () =>
    socials.map(({ href, icon: Icon }) => (
      <li key={href}>
        <a href={href} target="_blank" rel="noreferrer">
          <Icon />
        </a>
      </li>
    ));

  return <ul className={styles.socials}>{getItems()}</ul>;
}

export { Socials };
