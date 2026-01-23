import React from 'react'
import Link from 'next/link'

export default function CodingComponent({ title, description, tech, date, url1, url2 }) {
    return (
        <>
            <h3>{title}</h3>
            <ul>
                <li>
                    <p> {date} </p>
                </li>
                <li>
                    <p>Tech used: {tech}</p>
                </li>
                <li>
                    <p>{description}</p>
                </li>
                {url1 && (
                    <li>
                        <Link href={url1} target="_blank" rel="noopener noreferrer">{url1}</Link>
                    </li>
                )}
                {url2 && (
                    <li>
                        <Link href={url2} target="_blank" rel="noopener noreferrer">{url2}</Link>
                    </li>
                )}
            </ul>
        </>
    )
}
