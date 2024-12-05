AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "IT Technical Support Officer",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Crevs Group, Manado",
    time: "(Jun, 2015 - Juli, 2019 )",
    desp: "<li>Ensure that all information technology systems are running smoothly.</li> <li>Installing and configuring network components.</li> <li>Train users on how the product or service used works.</li><li>Perform troubleshooting or identify problems that occur in hardware and software.</li> <li>Recommend solutions to solve problems.</li> <li>Diagnose problems by asking users questions.</li>",
  },
  {
    title: "IT Support and Operators",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Petra Alpha School, Jakarta",
    time: "(Augs, 2019 - Juli, 2020)",
    desp: "<li>IT Support (hardware, Software and network).</li><li>Managing Dapodik Applications (Education Basic Data).</li><li>Manage PMP (Educational Quality Mapping) Applications.</li><li>Manage SPM Applications (Minimum Service Standards).</li><li>Submission of KIP (Smart Indonesia Card) to implement the PIP Program.</li><li>Managing the BIOUN Application (National Examination Biodata).</li><li>Manage Inventory of Facilities and Infrastructure IT.</li>",
  },
  {
    title: "Freelance Website Developer",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Curug, Gunung Sindur, Bogor",
    time: "(Marc, 2023 - Present)",
    desp: "<li>Design, build, optimize and maintain websites and software using HTML, CSS and Java Script programming languages.</li><li>Design responsive and attractive website page layouts and interfaces.</li><li>Conduct testing and QA to ensure the website is accessible on various devices and browsers.</li><li>Evaluate code to ensure that it meets standards, is valid, well-structured, and compatible with the browser, device, or OS.</li><li>Identify problems found from feedback or testing and fix them.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
