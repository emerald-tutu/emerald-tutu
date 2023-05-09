import * as Blocks from '@/blocks'

export default function Section({name, contents}) {
    return(
        <div className="site-container anchor mb-3 g-0" id={name}>
            <h2 className="font-monument d-flex text me-auto mb-2 pt-3 text-uppercase text-underline-green">{name}</h2>
            {contents.map((block) => {
                const Component = Blocks[block.__typename]

                if (!Component) return null

                return <Component key={block.id} {...block} />
            })}
        </div>
    )
}
