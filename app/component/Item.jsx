import React from 'react'
import Link from 'next/link'

export default function Item({ title, description, tech, date, website, githubLink }) {



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

                <li>
                    <Link href={website}>Website</Link>
                    {link}
                </li>
                <li>
                    <Link href={githubLink}>Github</Link>
                </li>

            </ul>



        </>
    )
}
