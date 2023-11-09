import { BsGridFill } from 'react-icons/bs'
import { IoMdStats, IoMdSettings } from 'react-icons/io'
import { FaMapMarkedAlt, FaCalendarAlt } from 'react-icons/fa'

export interface tabInfo {
  id: number
  text: string
  icon: React.ReactNode
  destination: string
}

const tablist: tabInfo[] = [
  {
    id: 1,
    text: 'Dashboard',
    icon: <BsGridFill />,
    destination: '/account',
  },
  {
    id: 2,
    text: 'Statistics',
    icon: <IoMdStats />,
    destination: '/account?tab=statistics',
  },
  {
    id: 3,
    text: 'Map',
    icon: <FaMapMarkedAlt />,
    destination: '/account?tab=map',
  },
  {
    id: 4,
    text: 'Calender',
    icon: <FaCalendarAlt />,
    destination: '/account?tab=calendar',
  },
  {
    id: 5,
    text: 'Settings',
    icon: <IoMdSettings />,
    destination: '/account?tab=settings',
  },
]

export default tablist
