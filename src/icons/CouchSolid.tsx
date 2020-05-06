import * as React from 'react'

export function SvgCouchSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M6 7c-1.645 0-3 1.355-3 3v2.188c-1.156.417-2 1.519-2 2.812v11h2v-2h26v2h2V15c0-1.293-.844-2.395-2-2.813V10c0-1.645-1.355-3-3-3zm0 2h20c.555 0 1 .445 1 1v2.188c-1.156.417-2 1.519-2 2.812v2H7v-2c0-1.293-.844-2.395-2-2.813V10c0-.555.445-1 1-1zm-2 5c.555 0 1 .445 1 1v4h22v-4c0-.555.445-1 1-1 .555 0 1 .445 1 1v7H3v-7c0-.555.445-1 1-1z" />
        </svg>
    )
}

export default SvgCouchSolid
