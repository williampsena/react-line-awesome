import * as React from 'react'

function SvgHackerNewsSquare(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v22h22V5zm2 2h18v18H7zm4 3l4 7v5h2v-5l4-7h-2l-3 5.25L13 10z" />
        </svg>
    )
}

export default SvgHackerNewsSquare
