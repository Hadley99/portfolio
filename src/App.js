import Projects from "./components/projects/Projects";
import Wrapper from "./components/Wrapper";
import { projectData } from "./components/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Home from "./components/home/Home";

function App() {
  return (
    <main className="w-screen h-screen snap-y snap-mandatory  overflow-scroll ">
      <Wrapper title="HELLO">
        <Home />
      </Wrapper>

      <Wrapper title="SKILLS"></Wrapper>

      <Wrapper title="PROJECTS">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
        >
          {projectData.map((project) => (
            <SwiperSlide key={project.id}>
              <Projects
                title={project.title}
                description={project.description}
                code={project.code}
                themeColor={project.color}
                image={project.image}
                link={project.link}
                id={project.id}
                tools={project.tools}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </main>
  );
}

export default App;
