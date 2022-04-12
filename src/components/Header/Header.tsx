import { Space } from "antd"
import { UserOutlined } from '@ant-design/icons'

import cn from "classnames"
import s from './Header.less'
import Logo from './Logo'

export default function Header() {
  return (
    <div className={cn(s.header, 'flex flex-row justify-between font-medium text-xl')}>
      <Logo />
      <Space size="large">
        <span>search</span>
        <UserOutlined />
      </Space>
    </div>
  )
}
