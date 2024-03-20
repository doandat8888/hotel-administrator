import { CiHome } from "react-icons/ci";
import { useNavigate } from "react-router";

interface Props {
    textSize: string
}

const Logo = ({ textSize }: Props) => {

    const navigate = useNavigate();

    return (
        <div className={`flex items-center select-none  ${textSize} cursor-pointer`} onClick={() => navigate('/')}>
            <CiHome className="text-[#0068ff]"/>
            <p className={`text-[#0068ff] ml-2 font-bold tracking-widest`}>DOTEL</p>
        </div>
    )
}

export default Logo