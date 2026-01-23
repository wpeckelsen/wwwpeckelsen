// components/blogPreview/BlogPreview.jsx
import React from 'react'
import Link from 'next/link'
import './BlogPreview.scss'

export default function BlogPreview({ title, subTitle, date, url, headerImage, body }) {
  return (
    <article className="blog-preview">
      <div className="blog-preview-header">
        <h3 className="blog-preview-title">
          {url ? <Link href={url}>{title}</Link> : title}
        </h3>
        
        {subTitle && (
          <p className="blog-preview-subtitle">{subTitle}</p>
        )}
        
        {date && (
          <p className="blog-preview-date">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
      </div>
      
      {headerImage && (
        <div className="blog-preview-header-image">
          {headerImage}
        </div>
      )}
      
      {body && (
        <div className="blog-preview-body">
          {body}
        </div>
      )}
      
      {url && (
        <Link href={url} className="blog-preview-read-more">
          Read More
        </Link>
      )}
    </article>
  )
}