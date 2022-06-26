import SideBar from "./SideBar"

interface DashboardProps {
    id: string;
}

const Dashboard = (props: DashboardProps) => {
    return (
        <SideBar id={props.id}/>
    )
}

export default Dashboard