import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

// 博客网站名称
export const siteConfig: SiteConfig = {
  title: 'PasserByNaOH',
  subtitle: 'PasserByNaOH Blog',
  lang: 'zh-CN',
  themeHue: 250,
  banner: {
    enable: true,
    src: 'assets/images/background.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/PasserByNaOH/',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/pp.jpg',
  name: 'PasserByNaOH',
  bio: '这是一个博客',
  links: [
/*     {
      name: 'BiliBili',
      icon: 'fa6-brands:bilibili',
      url: 'https://www.bilibili.com',
    }, */
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/PasserByNaOH/',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
