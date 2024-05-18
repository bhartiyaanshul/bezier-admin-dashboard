import React from 'react'
import style from './ArtistTable.module.css';

export const ArtistTable = () => {

    const artists = [
        {
            artistImage : "./images/artistTable/artist1.png",
            artistName : 'Bluenose',
            veriStatus : 'Verified',
            rating : './images/artistTable/rating1.png',
            sold : '400',
            sales : '$400,000'
        },
        {
            artistImage : "./images/artistTable/artist2.png",
            artistName : 'Pennywise',
            veriStatus : 'Pending',
            rating : './images/artistTable/rating2.png',
            sold : '200',
            sales : '$400,000'
        },
        {
            artistImage : "./images/artistTable/artist3.png",
            artistName : 'Flotsam',
            veriStatus : 'Verified',
            rating : './images/artistTable/rating3.png',
            sold : '40,000',
            sales : '$1,400,000'
        },
        {
            artistImage : "./images/artistTable/artist4.png",
            artistName : 'Gregautsch',
            veriStatus : 'Unverified',
            rating : './images/artistTable/rating1.png',
            sold : '0',
            sales : '$0'
        },
        {
            artistImage : "./images/artistTable/artist5.png",
            artistName : 'ElPistolero',
            veriStatus : 'Verified',
            rating : './images/artistTable/rating5.png',
            sold : '30',
            sales : '$25,000'
        },
        {
            artistImage : "./images/artistTable/artist6.png",
            artistName : 'Siuuuuuuuu',
            veriStatus : 'Pending',
            rating : './images/artistTable/rating6.png',
            sold : '40',
            sales : '$400,000'
        },
    ]

  return (
    <div className={style.artistTable}>
        <div className={style.tableHeading}>
            <div className={style.headingArtistName}>Artist</div>
            <div className={style.headingArtistStatus}>Status</div>
            <div className={style.headingArtistRating}>Ratings</div>
            <div className={style.headingArtistSold}>Projects sold</div>
            <div className={style.headingArtistSale}>Highest sale</div>
        </div>
        <div>
            {
                artists.map((value, index)=>{
                    console.log(value.veriStatus);
                    return(
                        <div>
                            <div key={index} className={style.artistDetails}>
                                <div className={style.artistDetail}>
                                    <img src={value.artistImage} alt=''/>
                                    <div className={style.artistname}>{value.artistName}</div>
                                </div>
                                <div className={style.verificationStatus} style={{'color' : `${value.veriStatus}` === 'Verified' ? '#427A5B' : '#938406','background-color': `${value.veriStatus}` === 'Verified' ? '#DEEDE5' : '#FDF8CE'}}>
                                    {value.veriStatus}
                                </div>
                                <div className={style.artistRating}><img src={value.rating} /></div>
                                <div className={style.artistSold}>{value.sold}</div>
                                <div>{value.sales}</div>
                            </div>
                            <div className={style.tableLine}></div>
                        </div>
                    )
                })
            }
        </div>
        <div className={style.tableBottom}>
            <div className={style.previousPage}>Previous page</div>
            <div className={style.pages}>
                <div className={style.page}>1</div>
                <div className={style.page}>2</div>
                <div className={style.page}>3</div>
                <div className={style.page}>4</div>
                <div className={style.page}>5</div>
                <div className={style.page}>6</div>
                <div className={style.page}>7</div>
            </div>
            <div>Next page</div>
        </div>
    </div>
  )
}
