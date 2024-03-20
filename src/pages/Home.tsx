import { useNavigate } from 'react-router';
import consts from '../consts/index';
import { useLocation } from 'react-router'
import SideBar from '../components/sidebar/SideBar';
import UserAvatar from '../components/user/UserAvatar';
import RevenueTable from '../components/revenue/RevenueTable';

const Home = () => {

    const pathName = useLocation().pathname;
    const activePage = consts.menuList.find(menu => menu.path === pathName)?.id;
    const navigate = useNavigate();

    return (
        <div className='flex bg-[#f3f8ff] h-[100vh]'>
            <SideBar activePage={activePage} />
            <div className='px-8 space-y-4 flex-grow lg:ml-[240px]'>
                <div className="flex justify-between">
                    <p className='font-bold text-xl py-4'>Welcome to hotel dashboard</p>
                    <UserAvatar />
                </div>
                <div className="flex space-x-3">
                    <RevenueTable />
                </div>
            </div>
        </div>
    )
}

export default Home