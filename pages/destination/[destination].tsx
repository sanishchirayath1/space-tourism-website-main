import data from '../../data.json';
import type { Destination } from '../../type';
import type { GetStaticProps, GetStaticPaths } from "next"

function destination({destination} : {destination: Destination}) {
    console.log(destination)
    return (
        <div>
            this is {destination.name} page
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

