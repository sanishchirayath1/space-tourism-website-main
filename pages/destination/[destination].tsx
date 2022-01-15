import data from '../../data.json';
import type { Destination } from '../../type';
import type { GetStaticProps, GetStaticPaths } from "next"
import Image from 'next/image';
import SecondaryNavbar from '../../components/SecondaryNavbar';

function destination({destination} : {destination: Destination}) {
    console.log(destination)
    return (
        <div>
            <h1> <span>01</span> Pick your destination</h1>
            <Image
                src={destination.images.webp}
                alt={destination.name}
                height={200}
                width={200}
            />
            <SecondaryNavbar />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <div>
                <h3>Avg. Distance</h3>
                <p>{destination.distance}</p>
                <h3>Est. travrl time</h3>
                <p>{destination.travel}</p>
            </div>
        </div>
    )
}

export default destination

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = data.destinations.map(destination => ({
        params: {
            destination: destination.id
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const destination = data.destinations.find(destination => destination.id === params?.destination)
    return {
        props: {
            destination
        }
    }
}

