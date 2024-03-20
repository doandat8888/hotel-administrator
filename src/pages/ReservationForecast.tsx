import consts from '../consts';
import { useLocation } from 'react-router';
import SideBar from '../components/sidebar/SideBar';
import ChartStatistic from '../components/chart/ChartStatistic';

const ReservationForecast = () => {

    const pathName = useLocation().pathname;
    const activePage = consts.menuList.find(menu => menu.path === pathName)?.id;

    return (
        <div className='flex bg-[#f3f8ff] h-[100vh]'>
            <SideBar activePage={activePage} />
            <div className='px-8 space-y-4 flex-grow lg:ml-[240px]'>
                <p className='font-bold text-xl py-4'>Reservations forecast</p>
                {/* <Select
                    color='default'
                    label="Time forecast"
                    placeholder="Select time forecast"
                    className="max-w-xs"
                >
                    {consts.timeForecasts.map((time) => (
                        <SelectItem key={time.name} value={time.name}>
                            {time.display}
                        </SelectItem>
                    ))}
                </Select> */}
                <ChartStatistic data={consts.reservationsForecast}/>
            </div>
        </div>
    )
}

export default ReservationForecast