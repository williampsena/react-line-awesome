import * as React from 'react'

function SvgMonumentSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 4a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm0 4h-4v2h1.469l-.438 10H10v6H8v2h16v-2h-2v-6h-3.031l-.438-10H20V8zm-.531 2h1.062l.438 10H15.03zM12 22h8v4h-8z" />
        </svg>
    )
}

export default SvgMonumentSolid
