import * as React from 'react'

export function SvgTagsSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M14.594 4l-.313.281-11 11-.687.719.687.719 9 9 .719.687.719-.687 11-11 .281-.313V4zm.844 2H23v7.563l-10 10L5.437 16zM26 7v2h1v8.156l-9.5 9.438-1.25-1.25-1.406 1.406 1.937 1.969.719.687.688-.687 10.53-10.407L29 18V7zm-6 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
        </svg>
    )
}

export default SvgTagsSolid
