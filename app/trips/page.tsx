import EmptyState from "../components/empty-state";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";
import TripsClient from "./trips-client";

const TripsPage = async () => {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return(
            <EmptyState 
                title="Unauthorized"
                subtitle="Please login"
            />
        )
    }

    const reservations = await getReservations({
        userId: currentUser.id
    });

    if(reservations.length===0) {
        return(
            <EmptyState 
                title='No trips found'
                subtitle='Looks like you have not reserved any trips yet.'
            />
        )
    }

    return(
        <TripsClient 
            reservations={reservations}
            currentUser={currentUser}
        />
    )

}

export default TripsPage;