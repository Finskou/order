import React from 'react'
import './LinkTemplate.css'

const LinkTemplate = ({ className, imgHeight, action, logo, block, text, children, ...rest }) =>
  <div className={block ? `s-link-block-border ${className}` : `s-link-block ${className}`} {...rest}>
    <a onClick={action} className="s-link-highlighted" >{text || children}</a>
    {logo ? <img className="s-link-img-resize" style={{height: imgHeight}} src={logo} alt="logo link" /> : ''}
  </div>

export default LinkTemplate