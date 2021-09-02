import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
const slugify = require('slugify')

import SimpleCountryButton from '../components/SimpleCountryButton'


const Home = () => {
  const [ countries, setCountries ] = useState([])

  const slugifyIfCapital = (country) => {
    console.log(country)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // console.log(response.data.map(c => ({...c, slug: slugify(c.capital, { 
        //   lower: true,
        //   strict: true,
        // })})))

        //first remove all the countries with no capital (e.g. Antarctica)

        const countriesWithCapitals = response.data.filter(country => country.capital !== "")
        //console.log('countriesWithCapitals: ', countriesWithCapitals)
        // setCountries(response.data.map(c => ({...c, slug: slugify(c.capital, { 
        //   lower: true,
        //   strict: true,
        // })})))
        

        //then setCountries to the remaining countries with capitals
        setCountries(countriesWithCapitals.map(c => ({...c, slug: slugify(c.capital, { 
          lower: true,
          strict: true,
        })})))
        //console.log(response.data)
      })
  }, [])

  if (!countries) {
    return (
      <div>
        Weather app; countries not loaded yet
      </div>
    )
  } else {
    return (
      <div>
        <p>
          Weather app: countries loaded. See below.
        </p>
        <ul>
          {countries.map((c, index) => (
            <li key={index}>
              <Link href={`/cities/${encodeURIComponent(c.slug)}`}>
                <a>View weather at {c.capital}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }


}

export default Home
