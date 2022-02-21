import { IconType } from 'react-icons/lib'

export type MenuProps = { menu: MenuOptions[] }
MenuOptions = { name: string, icon: IconType, route: string }
