import consts from '../consts';
import { useLocation } from 'react-router';
import SideBar from '../components/sidebar/SideBar';

const PeriodDetail = () => {

    const pathName = useLocation().pathname;
    const activePage = consts.menuList.find(menu => menu.path === pathName)?.id;

    return (
        <div className='flex bg-[#f3f8ff] h-[100vh]'>
            <SideBar activePage={activePage} />
            <div className='px-8 space-y-4 flex-grow lg:ml-[240px]'>
            </div>
        </div>
    )
}

export default PeriodDetail