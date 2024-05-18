import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import style from './AdminDashboard.module.css'
import { ArtistTable } from '../../components/ArtistTable/ArtistTable'

export const AdminDashboard = () => {


  return (
    <div className={style.adminDashboard}>
      <Sidebar />
      <section className={style.homeSection}>
        {/* header */}
        <section className={style.header}>
          <div className={style.inputDiv}>
            <img src='images/mainSection/search-normal.png' alt='' className={style.search} />
            <input className={style.searchInput} placeholder='Search artists, projects' />
          </div>
          <div className={style.profileSection}>
            <div className={style.profiledetails}>
              <img src='images/mainSection/profileimage.png' />
              <div className={style.userDetails}>
                <div className={style.userName}>Karim Benzema</div>
                <div className={style.userDesignation}>Admin</div>
              </div>
            </div>
            <img src='images/mainSection/alert.png' className={style.alert} />
          </div>
        </section>

        {/* Content Section */}

        <section className={style.contentSection}>
          <section className={style.mainContentSection}>
            <div>In the last 30 days,</div>
            <div className={style.salesImages}>
              <div className={style.backgroundImage}>
                <div className={style.imageOverlay}>
                  <div className={style.imageNumber}>30,000</div>
                  <div className={style.imageSubtext}>Art sales</div>
                </div>
              </div>
              <div className={style.backgroundImage}>
                <div className={style.imageOverlay}>
                  <div className={style.imageNumber}>250</div>
                  <div className={style.imageSubtext}>New artists</div>
                </div>
              </div>
              <div className={style.backgroundImage}>
                <div className={style.imageOverlay}>
                  <div className={style.imageNumber}>$400,000</div>
                  <div className={style.imageSubtext}>Revenue generated</div>
                </div>
              </div>
            </div>
            <div className={style.fliterSection}>
              <div className={style.fliterSectionText}>
                <div className={style.allArtistText}>All artists</div>
                <div className={style.allArtistSubtext}>Monitor artist sales, reviews, etc.</div>
              </div>
              <div className={style.filterInputSection}>
                <div className={style.searchArtist}>
                  <img src='images/mainSection/search-normal.png' alt='' className={style.search} />
                  <input className={style.searchArtistInput} placeholder='Search artists' />
                </div>
                <div className={style.filterButton}>
                  <img src='images/mainSection/filter-search.png'/>
                  <div>Filter</div>
                </div>
              </div>
            </div>
            <ArtistTable />
          </section>
          <section className={style.leaderboardSection}>
            <div className={style.bestSellingArtist}>
              <div className={style.bestSellingArtistTitle}>Best-selling artists</div>
              <div className={style.artistsDetails}>
                <div className={style.artist}>
                  <div className={style.artistName}><img src='images/artist/1.png' /> Flotsam</div>
                  <div className={style.artistDetail}>40k+ sales</div>
                  <div className={style.artistDetail}>$1.4m revenue</div>
                </div>
                <div className={style.artist}>
                  <div className={style.artistName}><img src='images/artist/2.png' />Siuuuuu</div>
                  <div className={style.artistDetail}>40k+ sales</div>
                  <div className={style.artistDetail}>$1.4m revenue</div>
                </div>
                <div className={style.artist}>
                  <div className={style.artistName}><img src='images/artist/3.png' />Bluenose</div>
                  <div className={style.artistDetail}>40k+ sales</div>
                  <div className={style.artistDetail}>$1.4m revenue</div>
                </div>
              </div>
              <button className={style.viewAllButton}>View all artists</button>
            </div>
            <div className={style.bestSellingArtist}>
              <div className={style.bestSellingArtistTitle}>Best-selling projects</div>
              <div className={style.artistsDetails}>
                <div className={style.artist}>
                  <div className={style.artistName}><img src='images/projects/1.png' /> Flotsam</div>
                  <div className={style.artistDetail}>40k+ sales</div>
                  <div className={style.artistDetail}>$1.4m revenue</div>
                </div>
                <div className={style.artist}>
                  <div className={style.artistName}><img src='images/projects/2.png' />Astrom</div>
                  <div className={style.artistDetail}>40k+ sales</div>
                  <div className={style.artistDetail}>$1.4m revenue</div>
                </div>
                <div className={style.artist}>
                  <div className={style.artistName}><img src='images/projects/3.png' />$Moon</div>
                  <div className={style.artistDetail}>40k+ sales</div>
                  <div className={style.artistDetail}>$1.4m revenue</div>
                </div>
              </div>
              <button className={style.viewAllButton}>View all projects</button>
            </div>
            <div className={style.dateTime}>
              <div className={style.time}>
                <div>10</div>
                <div>:</div>
                <div>34</div>
                <div>PM</div>
              </div>
              <div className={style.date}>11/05/2022</div>
            </div>
          </section>
        </section>

      </section>
    </div>
  )
}
