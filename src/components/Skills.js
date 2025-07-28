import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
Python || SQL || Java || C# || JavaScript || TypeScript || React.js || Angular
Spring Boot || ASP.NET MVC || Ajax || MERN Stack || PySpark || Databricks || Alteryx
Power BI || Tableau || SQL Server || PostgreSQL || MongoDB || DBeaver || Git || Kafka
</p>
                      
<Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
    <div className="item">
        <img src={meter1} alt="Full Stack Web Development" />
        <h5>Full Stack Web Development</h5>
    </div>
    <div className="item">
        <img src={meter2} alt="Java" />
        <h5>Java</h5>
    </div>
    <div className="item">
        <img src={meter3} alt="C++" />
        <h5>C++</h5>
    </div>
    <div className="item">
        <img src={meter1} alt="Android" />
        <h5>Android</h5>
    </div>
    <div className="item">
        <img src={meter2} alt="Python" />
        <h5>Python</h5>
    </div>
    <div className="item">
        <img src={meter3} alt="JavaScript" />
        <h5>JavaScript</h5>
    </div>
    <div className="item">
        <img src={meter1} alt="React.js" />
        <h5>React.js</h5>
    </div>
    <div className="item">
        <img src={meter2} alt="Angular" />
        <h5>Angular</h5>
    </div>
    <div className="item">
        <img src={meter3} alt="Spring Boot" />
        <h5>Spring Boot</h5>
    </div>
    <div className="item">
        <img src={meter1} alt="ASP.NET" />
        <h5>ASP.NET</h5>
    </div>
    <div className="item">
        <img src={meter2} alt="MERN Stack" />
        <h5>MERN Stack</h5>
    </div>
    <div className="item">
        <img src={meter3} alt="MongoDB" />
        <h5>MongoDB</h5>
    </div>
    <div className="item">
        <img src={meter1} alt="SQL" />
        <h5>SQL</h5>
    </div>
    <div className="item">
        <img src={meter2} alt="Git" />
        <h5>Git</h5>
    </div>
    <div className="item">
        <img src={meter3} alt="DBeaver PostgreSQL" />
        <h5>DBeaver PostgreSQL</h5>
    </div>
    <div className="item">
        <img src={meter1} alt="Kafka" />
        <h5>Kafka</h5>
    </div>
</Carousel>

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
