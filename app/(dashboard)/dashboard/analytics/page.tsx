import { auth } from "@/auth";
import { SignOut } from "@/components/shared/signOut";
import { redirect } from "next/navigation";


const Analytics = async () => {

    const session = await auth()

    if (!session){
        redirect('/')
    }

    return (
        <div>
            <h1 className="red">Analytics</h1>
            <SignOut/>
        </div>

    );
}

export default Analytics;