import data from '../../data.json';
import type { Technology } from '../../type';
import type { GetStaticProps, GetStaticPaths } from "next"

function crew({technology} : {technology: Technology}) {
    console.log(technology)
    return (
        <div>
            this is {technology.name} page
        </div>
    )
}

export default crew

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = data.technology.map(technology => ({
        params: {
            technology: technology.id
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const technology = data.technology.find(technology => technology.id === params.technology)
    return {
        props: {
            technology
        }
    }
}

