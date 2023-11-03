import AppleIcon from './svg/AppleIcon'
import GoogleIcon from './svg/GoogleIcon'
import BellIcon from './svg/BellIcon'
import EyeIcon from './svg/EyeIcon'
import InputNameIcon from './svg/InputNameIcon'
import LockIcon from './svg/LockIcon'
import BrandLogo from './svg/BrandLogo'
import SearchIcon from './svg/SearchIcon'
import EmailIcon from './svg/EmailIcon'
import LineIcon from './svg/LineIcon'
import EyeCrossIcon from './svg/EyeCrossIcon'
import UserIcon from './svg/UserIcon'
import DashboardIcon from './svg/DashboardIcon'
import SalesIcon from './svg/SalesIcon'
import MenuIcon from './svg/MenuIcon'
import MoreOptionsIcon from './svg/MoreOptionsIcon'

interface IconMap {
  [name: string]: React.ElementType
}

const icons: IconMap = {
  appleIcon: AppleIcon,
  googleIcon: GoogleIcon,
  bellIcon: BellIcon,
  eyeIcon: EyeIcon,
  nameIcon: InputNameIcon,
  lockIcon: LockIcon,
  brandLogo: BrandLogo,
  searchIcon: SearchIcon,
  emailIcon: EmailIcon,
  lineIcon: LineIcon,
  eyeCross: EyeCrossIcon,
  userIcon: UserIcon,
  dashboardIcon: DashboardIcon,
  salesIcon: SalesIcon,
  menuIcon: MenuIcon,
  moreOptionsIcon: MoreOptionsIcon
}

interface IconsProps {
  name: string
}

const Icon = (props: IconsProps) => {
  const { name } = props
  const Icon = icons[name]

  return <Icon />
}

export default Icon
