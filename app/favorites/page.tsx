import EmptyState from "../components/empty-state";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./favorites-client";

const ListingPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (listings.length===0){
        return(
            <EmptyState 
                title='No favorites found'
                subtitle='Looks like you have no favorite listings'
    
            />
        )
    }

    return(
        <FavoritesClient 
            listings={listings}
            currentUser={currentUser}
        />
    )    
}

export default ListingPage;