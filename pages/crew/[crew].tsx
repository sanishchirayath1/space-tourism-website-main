import data from '../../data.json';
import type { Crew } from '../../type';
import type { GetStaticProps, GetStaticPaths } from "next"
import Image from 'next/image';
import Dots from '../../components/Dots';

function crew({crew} : {crew: Crew}) {
    console.log(crew)
    return (
        <div>
            <h1> <span>02</span> Meet your crew</h1>
            <Image
               src={crew.images.webp}
               alt={crew.name}
               height={200}
               width={200}
            />
            <Dots />
            <div>{crew.role}</div>
            <h2>{crew.name}</h2>
            <p>{crew.bio}</p>
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
    const crew = data.crew.find(crew => crew.id === params?.crew)
    return {
        props: {
            crew
        }
    }
}

