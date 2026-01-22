import React from 'react'
import Link from 'next/link'

export default function BlogComponent({ title, subTitle, date, url, headerImage, body }) {
    return (
        <>
            <h3>
                {url ? <Link href={url}>{title}</Link> : title}
            </h3>

            <p>{subTitle}</p>

            <p> {date} </p>

            {headerImage && <div>{headerImage}</div>}

            <div>
                {body}
            </div>

            {url && (
                <Link href={url} className="read-more">Read More</Link>
            )}
            
        </>
    )
}
