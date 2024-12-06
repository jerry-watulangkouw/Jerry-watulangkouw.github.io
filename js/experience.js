AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Branding & Design Graphic",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "PT. Parsaoran Global Datatrans",
    time: "(Feb, 2024 - Juli, 2024 )",
    desp: "<li>Create brand identity by combining colors, graphics, and typography.</li> <li>Create promotional materials such as posters, brochures, banners and advertisements.</li> <li>Have proficiency in various relevant design software, such as Adobe Photoshop, Adobe Illustrator & AI Design.</li><li>Communicate ideas that inspire and captivate consumers.</li> <li>Create designs to meet specific promotional and commercial needs such as logos, packaging, displays, or images for digital and print products.</li> <li>Develop production designs and overall layouts for advertisements, magazines, banners, products, brochures, and more.</li><li>Create various graphics and layouts for product illustrations, company logos, and websites with software such as Adobe Photoshop.</li> <li>Videographer and Photographer.</li>",
  },
  {
    title: "Digital Marketing Specialist",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "PT. Java Pusat Edukasi",
    time: "(Octo, 2020 - Feb, 2024)",
    desp: "<li>Hosting Live Streaming Events.</li><li>Content Design and Video Editing.</li><li>Videographer and Photographer.</li><li>Analyzing Social Media Developments.</li><li>Creating Campaigns and successfully increasing sales.</li><li>Leading Social Media Team, for social media development and strategy.</li>",
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

