import * as React from 'react'

export function SvgIconsSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M5 5v22h22V5zm2 2h8v8H7zm10 0h8v8h-8zm-6 2l-3 4h6zm8 0v4h4V9zM7 17h8v8H7zm10 0h8v8h-8zm4 1l-2 3 2 3 2-3zm-10 1a1.999 1.999 0 100 4 1.999 1.999 0 100-4z" />
        </svg>
    )
}

export default SvgIconsSolid
