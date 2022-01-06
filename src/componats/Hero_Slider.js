import React from 'react';
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Wrapper from "../componats/UI/Wrapper/Wrapper";
import Title from "../componats/UI/Title/Title";
import Subtitle from "../componats/UI/Subtitle/Subtitle";

// Images
const bogliasco = "https://www.3afoods.com.au/wp-content/uploads/2020/08/shutterstock_583484791_sm.jpg";
const countyClare = "https://st.depositphotos.com/1003368/2896/i/950/depositphotos_28962755-stock-photo-healthy-organic-vegetables-on-a.jpg";
const craterRock = "https://images7.alphacoders.com/339/339700.jpg";
const giauPass = "https://images5.alphacoders.com/394/thumb-1920-394645.jpg";



const Hero_Slider =(props)=>{
	return (
        <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={nextSlide => console.log("onChange", nextSlide)}
        onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.33)"
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 5000,
          height: "70vh"
        }}
      >
        <OverlayContainer>
          <Wrapper>
            <Title></Title>
            <Subtitle></Subtitle>
          </Wrapper>
        </OverlayContainer>
  
        <Slide
          background={{
            backgroundImage: giauPass,
            backgroundAttachment: "fixed"
          }}
        />
  
        <Slide
          background={{
            backgroundImage: bogliasco,
            backgroundAttachment: "fixed"
          }}
        />
  
        <Slide
          background={{
            backgroundImage: countyClare,
            backgroundAttachment: "fixed"
          }}
        />
  
        <Slide
          background={{
            backgroundImage: craterRock,
            backgroundAttachment: "fixed"
          }}
        />
  
        <Nav />
      </HeroSlider>
	);
	
}
export default Hero_Slider;