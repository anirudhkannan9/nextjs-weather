import { useState } from "react"
import Image from 'next/image'
const slugify = require('slugify')



const SimpleCountryButton = ({ country }) => {
    const handleClick = () => {
    }

    return (
        <div>
            <Image src={country.flag} height={50} width={100} alt='flag'/>
            <p>
                {country.capital}
            </p>
            <button onClick={handleClick}>
                View weather at {country.capital}
            </button>
        </div>
    )
}

export default SimpleCountryButton