import { AiOutlineHome, AiOutlineStar } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineMovieCreation } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';
import { HiOutlineFire } from 'react-icons/hi';

export const icons = [
    {
        title: 'Home',
        link: '/home',
        icon: <AiOutlineHome className="icon"/>,
    },
    {
        title: 'Favorite',
        link: '/favorite',
        icon: <BsHeart className="icon"/>,
    },
    {
        title: 'Search',
        link: '/search',
        icon: <IoSearchOutline className="icon"/>,
    },
    {
        title: 'Playing',
        link: '/playing',
        icon: <MdOutlineMovieCreation className="icon"/>,
    },
    {
        title: 'Upcoming',
        link: '/upcoming',
        icon: <BsCalendarDate className="icon"/>,
    },
    {
        title: 'Popular',
        link: '/popular',
        icon: <HiOutlineFire className="icon"/>,
    },
    {
        title: 'TopMovie',
        link: '/top-rated',
        icon: <AiOutlineStar className="icon"/>,
    },
]