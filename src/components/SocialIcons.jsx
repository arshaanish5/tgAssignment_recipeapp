import React from 'react'

const SocialIcons = () => {
	const icons = ["facebook",  "instagram" , "whatsapp"];
  return (
	<div className="socials">
		<h3>Share By</h3>
	{icons.map((name) => (
	  <a key={name} href={`https://${name}.com`} target="_blank" rel="noreferrer" className="icon">
		<img src={`/${name}.svg`} alt={name} />
	  </a>
	))}
  </div>
  )
}

export default SocialIcons