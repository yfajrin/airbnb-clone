import { Http2ServerRequest } from "http2";
import Container from "./components/container.component";
import EmptyState from "./components/empty-state";
import getListings from "./actions/getListings";
import ListingCard from "./components/listings/listing-card";
import getCurrentUser from "./actions/getCurrentUser";


export default async function Home() {
  const listings = await getListings()
  const currentUser = await getCurrentUser();
  
  if(listings.length === 0) {
    return(
      <EmptyState showReset />
    )
  }
  

  return (
    <Container>
      <div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        <div>
          {listings.map((listing) => {
            return (
              <ListingCard 
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            )
          })}
        </div>
      </div>
    </Container>
  )
}