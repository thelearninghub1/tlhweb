
import React, { Fragment } from 'react';
import './MiniFooter.css';
import Slider  from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const MiniFooter = () => {

    const homes = [ 
        {
            icon: "https://i.ibb.co/GTw5ZKy/E-SDG-Icons-01.jpg",

        },
        {
            icon: "https://i.ibb.co/74n67Y9/E-SDG-Icons-02.jpg"



        },  {
            icon: "https://i.ibb.co/y5Zs7d6/E-SDG-Icons-03.jpg"

        },
          {
            icon: "https://i.ibb.co/V9XQ2x6/E-SDG-Icons-04.jpg"

        }, 
         {
            icon: "https://i.ibb.co/MVMdxCC/E-SDG-Icons-05.jpg"

        },
          {
            icon: "https://i.ibb.co/6mZ74jQ/E-SDG-Icons-06.jpg"

        },
          {
            icon: "https://i.ibb.co/zmknNWL/E-SDG-Icons-07.jpg"

        },  {
          
            icon: "https://i.ibb.co/H4gn8mt/E-SDG-Icons-08.jpg"

        }, 
         {
            icon: "https://i.ibb.co/Z1b8Cz2/E-SDG-Icons-09.jpg"

        },
          {
            icon: "https://i.ibb.co/fGHKwxw/E-SDG-Icons-10.jpg"


        },
          {
            icon: "https://i.ibb.co/ngY5VV8/E-SDG-Icons-11.jpg"

        },
          {
            icon: "https://i.ibb.co/D7RfDFQ/E-SDG-Icons-12.jpg"
          

        },
          {
            icon:"https://i.ibb.co/XsZSD6G/E-SDG-Icons-13.jpg" 

        },
          {
            icon: "https://i.ibb.co/JQRnJq7/E-SDG-Icons-14.jpg" 


        },
          {
            icon: "https://i.ibb.co/8s3dPLW/E-SDG-Icons-15.jpg"


        },
          {
            icon: "https://i.ibb.co/b7hN9xp/E-SDG-Icons-16.jpg" 


        },
          {
            icon: "https://i.ibb.co/Khx3hzs/E-SDG-Icons-17.jpg" 

        },
    ];

    var settings = {
      dots: false,
    infinite: true,
    slidesToShow: 15,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed:2000,
    pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    
  return (
    <Fragment>



<div className="skillsContainer">
<Slider  className='bhaiii' {...settings}>


  {
    homes && homes.map((home) => (
      <div className="skillsCardContainer" >

<h3>{home.number}</h3>
<h4>{home.heading} </h4>
<img src={home.icon} alt="" />
</div>
    ))
  }
    

    

</Slider>


      </div>

    
    </Fragment>
  )
}

export default MiniFooter