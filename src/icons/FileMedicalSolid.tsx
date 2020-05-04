import * as React from 'react'

function SvgFileMedicalSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M6 3v26h20V9.6l-.3-.3-6-6-.3-.3H6zm2 2h10v6h6v16H8V5zm12 1.4L22.6 9H20V6.4zM15 14v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" />
        </svg>
    )
}

export default SvgFileMedicalSolid
