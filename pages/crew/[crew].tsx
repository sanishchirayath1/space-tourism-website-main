import data from '../../data.json';
import type { Crew } from '../../type';
import type { GetStaticProps, GetStaticPaths } from "next"

function crew({crew} : {crew: Crew}) {
    console.log(crew)
    return (
        <div>
            this is {crew.name} page
        </div>
    )
}

export default crew

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = data.crew.map(crew => ({
        params: {
            crew: crew.id
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const crew = data.crew.find(crew => crew.id === params.crew)
    return {
        props: {
            crew
        }
    }
}

