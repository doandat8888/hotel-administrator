import { useNavigate } from 'react-router';

import { IconType } from 'react-icons';

interface Props {
    logo: IconType,
    content: string,
    isActive?: boolean,
    path?: string
}

const MenuItem = ({ logo: Icon, content, isActive, path }: Props) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(path ? path : "")} className={`${isActive ? 'bg-[#e3eeff] text-[#1975fe]' : 'text-[#757575]'} px-4 rounded-md flex py-4 font-bold space-x-2 items-center  cursor-pointer`}>
            <Icon className='logo'/>
            <p>{content}</p>
        </div>
    )
}

export default MenuItem