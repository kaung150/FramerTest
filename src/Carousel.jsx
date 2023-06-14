import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Carousel = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    const splideInstance = splideRef.current.splide;

    // Example: Autoplay
    splideInstance.options = {
      ...splideInstance.options,
      autoplay: true,
      interval: 3000,
    };

    // Destroy Splide instance on unmount
    return () => {
      splideInstance.destroy();
    };
  }, []);

  return (
    <Splide
      options={{
        perPage: 1,
        arrows: true,
        pagination: false,
      }}
      ref={splideRef}
    >
      <SplideSlide>
        <img src="slide1.jpg" alt="Slide 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="slide2.jpg" alt="Slide 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="slide3.jpg" alt="Slide 3" />
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
