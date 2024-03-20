import { Avatar } from '@nextui-org/react'

const UserAvatar = () => {

    const userFullname = localStorage.getItem("current_user");

    console.log("User's full name", userFullname);

    return (
        <div className='flex text-sm items-center space-x-2'>
            <Avatar showFallback src={'https://images.unsplash.com/broken'} size='sm'/>
            <p>{userFullname}</p>
        </div>
    )
}

export default UserAvatar