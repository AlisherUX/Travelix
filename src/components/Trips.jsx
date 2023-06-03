import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Trips = () => {
  return (
    <div className="container">
      <div className="entries titles-component">
        <p className="entries-text trips-subtitle">Recomanded Packages</p>
        <p className="title">Best Value Trips</p>
        <p className="entries-text services-text">
          There was consensus, not surprisingly, that quality traditional travel
          agencies provide value for money. However, this was accompanied by a
          high level of concern that many consumers
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, vitae
          expedita! Enim quod architecto earum aliquam obcaecati sed, iusto
          beatae eligendi eum iure totam corporis ab doloremque velit cum
          tempore animi, ea explicabo dolorem veritatis id ipsam? Aspernatur
          voluptates minus natus mollitia esse omnis magnam delectus. Culpa
          obcaecati similique vel non fugiat dicta perspiciatis laborum quidem
          cumque aliquam explicabo deleniti beatae nisi provident libero illum
          id corporis deserunt molestiae reprehenderit officia voluptatem, quia
          dolores! Repudiandae quod fuga deserunt ducimus, aperiam nostrum
          perspiciatis, hic modi dolore, impedit eum eos cupiditate nulla.
          Repudiandae animi nobis facere accusantium eligendi quaerat, vel
          distinctio nam?
        </SwiperSlide>
        <SwiperSlide>Slide 2          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, vitae
          expedita! Enim quod architecto earum aliquam obcaecati sed, iusto
          beatae eligendi eum iure totam corporis ab doloremque velit cum
          tempore animi, ea explicabo dolorem veritatis id ipsam? Aspernatur
          voluptates minus natus mollitia esse omnis magnam delectus. Culpa
          obcaecati similique vel non fugiat dicta perspiciatis laborum quidem
          cumque aliquam explicabo deleniti beatae nisi provident libero illum
          id corporis deserunt molestiae reprehenderit officia voluptatem, quia
          dolores! Repudiandae quod fuga deserunt ducimus, aperiam nostrum
          perspiciatis, hic modi dolore, impedit eum eos cupiditate nulla.
          Repudiandae animi nobis facere accusantium eligendi quaerat, vel
          distinctio nam?</SwiperSlide>
        <SwiperSlide>Slide 3          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, vitae
          expedita! Enim quod architecto earum aliquam obcaecati sed, iusto
          beatae eligendi eum iure totam corporis ab doloremque velit cum
          tempore animi, ea explicabo dolorem veritatis id ipsam? Aspernatur
          voluptates minus natus mollitia esse omnis magnam delectus. Culpa
          obcaecati similique vel non fugiat dicta perspiciatis laborum quidem
          cumque aliquam explicabo deleniti beatae nisi provident libero illum
          id corporis deserunt molestiae reprehenderit officia voluptatem, quia
          dolores! Repudiandae quod fuga deserunt ducimus, aperiam nostrum
          perspiciatis, hic modi dolore, impedit eum eos cupiditate nulla.
          Repudiandae animi nobis facere accusantium eligendi quaerat, vel
          distinctio nam?</SwiperSlide>
        <SwiperSlide>Slide 4          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, vitae
          expedita! Enim quod architecto earum aliquam obcaecati sed, iusto
          beatae eligendi eum iure totam corporis ab doloremque velit cum
          tempore animi, ea explicabo dolorem veritatis id ipsam? Aspernatur
          voluptates minus natus mollitia esse omnis magnam delectus. Culpa
          obcaecati similique vel non fugiat dicta perspiciatis laborum quidem
          cumque aliquam explicabo deleniti beatae nisi provident libero illum
          id corporis deserunt molestiae reprehenderit officia voluptatem, quia
          dolores! Repudiandae quod fuga deserunt ducimus, aperiam nostrum
          perspiciatis, hic modi dolore, impedit eum eos cupiditate nulla.
          Repudiandae animi nobis facere accusantium eligendi quaerat, vel
          distinctio nam?</SwiperSlide>
        <SwiperSlide>Slide 5          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, vitae
          expedita! Enim quod architecto earum aliquam obcaecati sed, iusto
          beatae eligendi eum iure totam corporis ab doloremque velit cum
          tempore animi, ea explicabo dolorem veritatis id ipsam? Aspernatur
          voluptates minus natus mollitia esse omnis magnam delectus. Culpa
          obcaecati similique vel non fugiat dicta perspiciatis laborum quidem
          cumque aliquam explicabo deleniti beatae nisi provident libero illum
          id corporis deserunt molestiae reprehenderit officia voluptatem, quia
          dolores! Repudiandae quod fuga deserunt ducimus, aperiam nostrum
          perspiciatis, hic modi dolore, impedit eum eos cupiditate nulla.
          Repudiandae animi nobis facere accusantium eligendi quaerat, vel
          distinctio nam?</SwiperSlide>
        <SwiperSlide>Slide 6          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, vitae
          expedita! Enim quod architecto earum aliquam obcaecati sed, iusto
          beatae eligendi eum iure totam corporis ab doloremque velit cum
          tempore animi, ea explicabo dolorem veritatis id ipsam? Aspernatur
          voluptates minus natus mollitia esse omnis magnam delectus. Culpa
          obcaecati similique vel non fugiat dicta perspiciatis laborum quidem
          cumque aliquam explicabo deleniti beatae nisi provident libero illum
          id corporis deserunt molestiae reprehenderit officia voluptatem, quia
          dolores! Repudiandae quod fuga deserunt ducimus, aperiam nostrum
          perspiciatis, hic modi dolore, impedit eum eos cupiditate nulla.
          Repudiandae animi nobis facere accusantium eligendi quaerat, vel
          distinctio nam?</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Trips;
