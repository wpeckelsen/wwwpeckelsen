import React from 'react'
import Link from 'next/link'

export default function BlogComponent({ title, subTitle, date, url, headerImage, body }) {
    return (
        <>
            <h3>{title}</h3>

            <p>{subTitle}</p>

            <p> {date} </p>

            {url && (
                <Link href={url} target="_blank" rel="noopener noreferrer">{url}</Link>
            )}

            <div>{headerImage}</div>

            <div>
                {body}
            </div>

            
        </>
    )
}
