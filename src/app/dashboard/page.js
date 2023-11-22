import DashboardTitleCard from "../components/login/DashBoardTitleCard";
import ProgresRing from "../components/login/ProgresRing";
import RightSide from "../components/login/RightSide";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX, faWallet,faHandHoldingDollar,faPiggyBank,faReceipt} from '@fortawesome/free-solid-svg-icons'
import TransactionList from "../components/login/TransactionList";
const Dashboard=()=>{

    return (
        <>
            {/* <RightSide/> */}
            {/* <ProgresRing/> */}
            {/* <div className="flex gap-3 bg-gray-300 p-5">
                <DashboardTitleCard  title={"Balance"} price={123} icon={<FontAwesomeIcon icon={faWallet} />}/>
                <DashboardTitleCard  title={"Income"} price={123} icon={<FontAwesomeIcon icon={faHandHoldingDollar} />}/>
                <DashboardTitleCard  title={"Savings"} price={123} icon={<FontAwesomeIcon icon={faPiggyBank} />}/>
                <DashboardTitleCard  title={"Expenses"} price={123} icon={<FontAwesomeIcon icon={faReceipt} />}/>
            </div> */}
            <TransactionList/>
        </>
    )
} 

export default Dashboard;