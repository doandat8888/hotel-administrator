import { IoMdArrowDropup } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import { formatVNDCurrency } from '../../utils/formatCurrency'
import { calcTotalExpense, calcTotalIncome } from '../../utils/calcMoney'

interface Props {
    transactions: any[]
}

const TotalRevenue = ({transactions}: Props) => {
    return (
        <div className='rounded-md bg-[#ffffff] p-4 shadow-sm space-y-2 min-w-[280px]'>
            <p className='text-[12px] text-[#a5a5a5]'>Total revenue</p>
            <div className='flex justify-between items-center'>
                <div className="flex items-center space-x-2">
                    <p className='font-bold text-2xl'>{formatVNDCurrency(Array.isArray(transactions) ? calcTotalIncome(transactions) - calcTotalExpense(transactions) : 0)}</p>
                    <div className="py-1 px-1 rounded-md bg-[#049c6b] text-white"><p className='text-[10px] flex items-center'><IoMdArrowDropup />2.3%</p></div>
                </div>
                <IoNotificationsOutline />
            </div>
        </div>
    )
}

export default TotalRevenue