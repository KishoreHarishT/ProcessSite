import React, { useState, useEffect } from "react";
import { Card } from 'antd';
import { Avatar } from 'antd';

import '../Styles/HomePage.css'

function HomePage() {

  const colors = ["#C8792B", "#4BA75E", "#DDBC3F", "#1E1E1E", "#AB84B0"];

  const cardData = [
    {
      title: "Acima",
      lastVersion: "Latest Version: v1.0.51",
      lastRelease: "Last Release: 4 May 2023",
      image: require("../Images/Icons/acima-icon.png"),
      users: ['K', 'G', 'H', 'A'],

    },
    {
      title: "Arizona Tile",
      lastVersion: "Latest Version: v1.0.51",
      lastRelease: "Last Release: 4 May 2023",
      image: require("../Images/Icons/az-icon.png"),
      users: ['K', 'G', 'H', 'A'],
    },
    {
      title: "SVDP",
      lastVersion: "Latest Version: v1.0.51",
      lastRelease: "Last Release: 4 May 2023",
      image: require("../Images/Icons/svdp-icon.png"),
      users: ['K', 'G', 'H', 'A'],
    },
    {
      title: "Ward",
      lastVersion: "Latest Version: v1.0.51",
      lastRelease: "Last Release: 4 May 2023",
      image: require("../Images/Icons/ward-icon.png"),
      users: ['K', 'G', 'H', 'A'],
    },
    {
      title: "SDI",
      lastVersion: "Latest Version: v1.0.51",
      lastRelease: "Last Release: 4 May 2023",
      image: require("../Images/Icons/sdi-icon.png"),
      users: ['K', 'G', 'H', 'A'],
    },


  ];


  const [filteredCards, setFilteredCards] = useState(cardData);

  return (
    <>
      <div className='home-parent'>
        
        <div className="gridview-parent" >
          <h3 className='projects-title'>Projects</h3>

          <div className="gridview">
            <div className="card-container-home">
              {filteredCards.map((data, index) => (

                <Card
                  className="card"
                  style={{
                    width: 370,
                  }}
                >
                  <div className="card-content">
                    <div className="card-top">
                      <img src={data.image} alt="" className="card-image" />
                      <h3 className="card-title">{data.title}</h3>
                      <p className="card-version">{data.lastVersion}</p>
                    </div>

                    <div className="card-bottom">
                      <p className="card-release">{data.lastRelease}</p>

                      <Avatar.Group maxCount={3}
                        maxStyle={{
                          color: '#ffffff',
                          backgroundColor: '#304165',
                          border: '2px solid white'
                        }}>
                        {data.users.map((profile, index) => (
                          <Avatar
                            style={{ border: '2px solid white', backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}

                          >{profile}</Avatar>
                        ))}
                      </Avatar.Group>
                    </div>
                  </div>

                </Card>
              ))}
              <Card className="card"
                style={{
                  width: 370,
                }}>
                <div className="add-card">
                  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.34029 10.4164C2.34029 6.32434 2.34029 4.27832 3.61152 3.00708C4.88276 1.73584 6.92879 1.73584 11.0208 1.73584C15.1129 1.73584 17.1589 1.73584 18.4302 3.00708C19.7014 4.27832 19.7014 6.32434 19.7014 10.4164C19.7014 14.5084 19.7014 16.5545 18.4302 17.8257C17.1589 19.097 15.1129 19.097 11.0208 19.097C6.92879 19.097 4.88276 19.097 3.61152 17.8257C2.34029 16.5545 2.34029 14.5084 2.34029 10.4164Z" stroke="#C0C4CF" stroke-width="1.5625" />
                    <path d="M13.625 10.4167L11.0208 10.4167M11.0208 10.4167L8.41667 10.4167M11.0208 10.4167L11.0208 7.8125M11.0208 10.4167L11.0208 13.0208" stroke="#C0C4CF" stroke-width="1.5625" stroke-linecap="round" />
                  </svg>
                  <p className="add-card-title">Add Project</p>

                </div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HomePage