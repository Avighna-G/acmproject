import React from 'react'
import '../styles/upcoming.css'
import { DetailsUpcmng } from '../jsonfiles/UpComing'
import { Link, Navigate } from 'react-router-dom'
import {BsBoxArrowUpRight} from 'react-icons/bs'

function UpComingEvns() {
  return (
    <div className="wrapper">
    <h2 className='mt-[40px]'>
      <strong>What's New?</strong>
    </h2>
    <div className="news">
      {DetailsUpcmng.map((article, index) => (
        <figure className="article" key={index}>
          <img src={require(`../imagProps/upcomingPosters/${article.posterPath}`)} alt={`News ${index + 1}`} />
          <figcaption>
            <h3>{article.title}</h3>
            <p>{article.desc}</p>
            <a className="button-151"href={article.regLink}>Register Here</a>
          </figcaption>
        </figure>
      ))}
    </div>
    <div className='link'>
      <Link className='linkstyle' to="/events/events22-23">View All Events < BsBoxArrowUpRight className='icon-style'/> </Link>
    </div>
  </div>

  )
}

export default UpComingEvns