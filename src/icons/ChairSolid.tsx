import * as React from 'react'

export function SvgChairSolid(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M11 4v12.438c-.102.027-.223.066-.313.093-.484.149-.82.305-1.062.469a1.986 1.986 0 00-.313.25c-.078.082-.187.25-.187.25L9 17.719V20h1v8h2v-8h8v8h2v-8h1v-2.281l-.125-.219s-.11-.168-.188-.25a1.986 1.986 0 00-.312-.25c-.242-.164-.578-.32-1.063-.469-.09-.027-.21-.066-.312-.093V4h-2v1h-6V4zm2 3h2v9.031c-.758.02-1.438.04-2 .094zm4 0h2v9.125c-.563-.055-1.242-.074-2-.094z" />
        </svg>
    )
}

export default SvgChairSolid
