import Image from 'next/image'

export function AppLogoImg() {
  return <Image src={'https://dummyimage.com/240x80/ffd900/000000&text=H1LOGO'} alt="H1LOGO" width={120} height={40} />
}
export function AppMenuSignOutImg() {
  return (
    <Image src={'https://dummyimage.com/80x80/ffd900/000000&text=sign out'} alt="sign-out" width={40} height={40} />
  )
}
