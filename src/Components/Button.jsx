import React from 'react'

const Button = ({children, className, href}) => (
<button className={`${className || ""} transition-colors duration-200 py-2 px-3 rounded-md`}>
    <a href={href}>{children}</a>
</button>
)

export default Button
