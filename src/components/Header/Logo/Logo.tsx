import { NavLink } from 'umi'

interface IProps {
  style?: any;
}
export default function Logo(props: IProps) {
  const {style} = props
  return (
    <NavLink to="/123" activeStyle={style}>
      Logo
    </NavLink>
  )
}
