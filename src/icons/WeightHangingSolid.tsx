import * as React from 'react'

export function SvgWeightHangingSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 5c-1.645 0-3 1.355-3 3 0 .352.074.684.188 1h-5l-.157.813-3 15-.031.093V27h22v-2.094l-.031-.093-3-15L23.812 9h-5A2.95 2.95 0 0019 8c0-1.645-1.355-3-3-3zm0 2c.563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1 0-.563.438-1 1-1zm-6.188 4h12.376L25 25H7z" />
        </svg>
    )
}

export default SvgWeightHangingSolid
