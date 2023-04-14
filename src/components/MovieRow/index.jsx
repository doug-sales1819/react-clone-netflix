import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import 'swiper/css/effect-fade'

import './MovieRow.css';

const MovieRow = ({ title, items }) => {
  return (
    <div>
      <div className="rowHeader">
        <div className="rowHeader-title">
          <h2 className="rowTitle">{title}</h2>
        </div>
      </div>

      <div className="movieRow--listArea">
        <Swiper 
          navigation={true}
          loop={true}
          fadeEffect={true}
          spaceBetween={10}
          slidesPerView={8}
          modules={[Navigation, EffectFade]} 
          className="mySwiper"
        >
        {items.results.length > 0 && items.results.map((item, key) => (
          <SwiperSlide key={key}>
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
};

MovieRow.propTypes = {
  title: PropTypes.string,
  items: PropTypes.object,
};

export default MovieRow;
