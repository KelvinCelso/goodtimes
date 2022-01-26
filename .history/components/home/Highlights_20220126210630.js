import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import View from "./View";

const Highlights = (props) => {
  let settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img
              src="https://lh3.googleusercontent.com/DLEjpo2RyGoURtP2Ji5g_rfydqPs7oLZf_tCyKLWWDmIgSv38_dKDNB6ti3dwDmfAyZ01BOM=w1080-h608-p-no-v0"
              alt=""
            />
            <Info>
              <img
                className="img2"
                src="https://www.100makas.com/sites/default/files/styles/business-list/public/photos/bp_malony_view.jpg?itok=z4k3daF8"
              />
              <p>Bar</p>
            </Info>
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img
              src="https://pizzahutnearme.net/storage/pizza-hut-julius-nyerere-no-424-avenida-julius-nyerere-61977cb71dc14.jpg"
              alt=""
            />
            <Info>
              <img
                className="img2"
                src="https://www.pizzahut-tt.com/wp-content/uploads/2017/08/PizzaHut-logo-name-2014.png"
              />
              <p>Restaurante</p>
            </Info>
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/207165148.jpg?k=30a4da251bd0498ebbe5c61bb09eb3411a99af2373b8c523553f1486b555265d&o=&hp=1"
              alt=""
            />
            <Info>
              <img
                className="img2"
                src="https://www.smbc.co.mz/wp-content/uploads/2019/07/smbc-logo-color.png"
              />
              <p>Lodge</p>
            </Info>
          </a>
        </Wrap>
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  z-index: -1;
  background-color: black;
  margin-bottom: 100px;
`;
const Carousel = styled(Slider)`
  top: 0;
  z-index: -1;
  height: 80vh;
  & > button {
    opacity: 0;
    height: 100%;
    width: 6vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }

  slick-next {
    left: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;

  top: 0;
  /* position: relative; */
  a {
    border-radius: 4px;
    /* box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
    cursor: pointer;
    display: block;
    position: relative;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 768px) {
      height: 40vh;
    }

    img {
      position: relative;
      width: 100%;
      height: 100%;
      mask-image: linear-gradient(rgba(0, 0, 0, 1) 88%, transparent);
      z-index: -1;
    }
    &:hover {
      padding: 0px;
      transition-duration: 300ms;
    }
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 330px;
  left: 100px;
  color: white;
  font-size: 1.5em;
  .img2 {
    width: 250px;
    height: 120px;
  }
  @media (max-width: 768px) {
    top: 160px;
    left: 100px;
  }
`;

export default Highlights;
