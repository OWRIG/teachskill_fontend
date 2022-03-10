import { NavLink } from "umi"
import { Space } from "antd"

import cn from "classnames"
import s from './Header.less'
import Logo from './Logo/Logo'
import SearchBox from "./SearchBox/SearchBox"
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher"
import PersonalIcon from "./PersonalIcon/PersonalIcon"
import MessageRing from "./MessageRing/MessageRing"

export default function Header() {
  return (
    <div className={s.header}>
      <div className={cn(s.container,'flex flex-row')}>
        <Logo />
        <div className="flex flex-row justify-between w-full text-center">
        <div className={cn(s.header_primary,'flex flex-row justify-center')}>
            <NavLink to="/teach-videos">
             教学展示
            </NavLink>
            <NavLink to="/guide">
              使用指南
            </NavLink>
            <NavLink to="/about-site">
              关于本站
            </NavLink>
            <NavLink to="/friendly-link">
              友情链接
            </NavLink>
        </div>
        <div className={s.header_secondary}>
          <Space>
            <SearchBox />
            <LanguageSwitcher />
            <MessageRing />
            <PersonalIcon />
          </Space>
        </div>
        </div>
      </div>
    </div>
  )
}
