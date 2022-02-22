import { IconType } from 'react-icons/lib'

export type MenuProps = { menu: MenuOptions[] }
export type MenuOptions = { name: string; icon: IconType; route: string }
export type NavProps = { scrollValue: number }
