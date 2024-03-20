import consts from '../consts';
import { useLocation } from 'react-router';
import SideBar from '../components/sidebar/SideBar';
import { Button, Input } from '@nextui-org/react';
import { CiInboxIn } from 'react-icons/ci';

const PeriodDetail = () => {

    const pathName = useLocation().pathname;
    const activePage = consts.menuList.find(menu => menu.path === pathName)?.id;

    return (
        <div className='flex bg-[#f3f8ff] h-[100vh]'>
            <SideBar activePage={activePage} />
            <div className='px-8 space-y-4 flex-grow lg:ml-[240px]'>
                <p className='font-bold text-xl py-4'>Period detail</p>
                <div className='grid justify-between items-end lg:grid-cols-4 grid-cols-1 gap-10'>
                    <Input 
                        type='date'
                        isRequired
                        label="From"
                        placeholder='dd-mm-yyyy'
                        labelPlacement='outside'
                    />
                    <Input 
                        type='date'
                        isRequired
                        label="To"
                        placeholder='dd-mm-yyyy'
                        labelPlacement='outside'
                    />
                    <Button
                        endContent={<CiInboxIn className='text-xl'/>}
                        color='primary'
                        className='lg:w-[50%] w-[100%]'
                    >
                            Export
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PeriodDetail