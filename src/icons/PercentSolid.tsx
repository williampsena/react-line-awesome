import * as React from 'react'

export function SvgPercentSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M9.5 6A3.514 3.514 0 006 9.5v3C6 14.422 7.578 16 9.5 16s3.5-1.578 3.5-3.5v-3C13 7.578 11.422 6 9.5 6zm11.25 0l-12 20h2.5l12-20zM9.5 8c.84 0 1.5.66 1.5 1.5v3c0 .84-.66 1.5-1.5 1.5S8 13.34 8 12.5v-3C8 8.66 8.66 8 9.5 8zm13 8a3.514 3.514 0 00-3.5 3.5v3c0 1.922 1.578 3.5 3.5 3.5s3.5-1.578 3.5-3.5v-3c0-1.922-1.578-3.5-3.5-3.5zm0 2c.84 0 1.5.66 1.5 1.5v3c0 .84-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5v-3c0-.84.66-1.5 1.5-1.5z" />
        </svg>
    )
}

export default SvgPercentSolid
