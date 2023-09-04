import Image from 'next/image'

import setting from '@/assets/images/ico_setting.svg'
import bell from '@/assets/images/ico_bell.svg'
import active from '@/assets/images/ico_active.svg'
import menu from '@/assets/images/ico_menu.svg'
import lang from '@/assets/images/ico_lang.svg'
import globe from '@/assets/images/ico_globe.svg'
import theme from '@/assets/images/ico_theme.svg'
import arrow_right from '@/assets/images/ico_arrow_right.svg'

export function AppLogoImg() {
  return <Image src={'https://dummyimage.com/240x80/ffd900/000000&text=H1LOGO'} alt="H1LOGO" width={120} height={40} />
}
export function AppMenuSignOutImg() {
  return (
    <Image src={'https://dummyimage.com/80x80/ffd900/000000&text=sign out'} alt="sign-out" width={40} height={40} />
  )
}

export function AppIcon({ name = 'setting', size = [16, 16] }: { name: string; size: [number, number] }) {
  const icons = [
    { name: 'setting', src: setting },
    { name: 'bell', src: bell },
    { name: 'active', src: active },
    { name: 'menu', src: menu },
    { name: 'lang', src: lang },
    { name: 'globe', src: globe },
    { name: 'theme', src: theme },
    { name: 'arrow_right', src: arrow_right },
  ]
  const [width, heigh] = size
  const target = icons.find((icon) => icon.name === name) || icons[0]
  return <Image src={target.src} alt={target.name} width={width} height={heigh} />
}
