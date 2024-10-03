import React from 'react'

const image = ({src, href, aclass, bclass}) => {
  return (
    <a href={href} className={aclass}>
        <picture>
            <img src={src} alt="" className={bclass}/>
        </picture>
    </a>
  )
}

export default image