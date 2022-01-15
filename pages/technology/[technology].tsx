import data from '../../data.json';
import type { Technology } from '../../type';
import type { GetStaticProps, GetStaticPaths } from "next"
import Image from 'next/image';
import NumberNav from '../../components/NumberNav';

function crew({technology} : {technology: Technology}) {
    console.log(technology)
    return (
        <div>
            <h1><span>03</span> Space lunch 101</h1>
            <Image
                src={technology.images.landscape}
                alt={technology.name}
                width={375}
                height={200} 
            />
            <NumberNav/>
            <div>The terminology...</div>
            <h2>{technology.name}</h2>
            <p>
                {technology.description}
            </p>
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
        const technology = data.technology.find(technology => technology.id === params?.technology)
        return {
            props: {
                technology
            }
        }
        
}


