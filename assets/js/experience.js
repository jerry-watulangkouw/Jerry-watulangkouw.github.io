// === Animate on Scroll ===
AOS.init();

// =============================
// EXPERIENCE SECTION
// =============================
const experiencecards = document.querySelector(".experience-cards");

const exp = [
  {
    title: "Web Developer & Web Designer",
    cardImage: "assets/images/experience-page/tengen.png", // Ganti dengan logo perusahaan kamu
    place: "PT. Tengen Industrial Group Indonesia",
    time: "(July 2025 – Present)",
    desp: `
      <li>Developed the entire <b>tengenindonesia.com</b> website from scratch using <b>Laravel 11</b>.</li>
      <li>Designed and implemented a <b>multilingual product catalog</b> (Indonesian, English, Chinese) with JSON-based localization.</li>
      <li>Built a responsive UI using <b>Tailwind CSS</b> and Blade templates for consistent branding.</li>
      <li>Integrated <b>Google Tag Manager</b>, SEO metadata, and dynamic sitemap to improve search visibility.</li>
      <li>Configured and deployed website on <b>VPS (Ubuntu, Nginx, PHP 8.3, MySQL)</b> with security and performance optimization.</li>
      <li>Maintained website content updates and managed catalog expansion according to company growth.</li>
    `,
  },
    {
    title: "Web Developer & Web Designer",
    cardImage: "assets/images/experience-page/kmil.png", // Ganti dengan logo perusahaan kamu
    place: "PT. Kurnia Mustika Indah Lestari",
    time: "(December 2024 – July 2025)",
    desp: `
      <li>Developed the entire <b>tengenindonesia.com</b> website from scratch using <b>Laravel 11</b>.</li>
      <li>Designed and implemented a <b>multilingual product catalog</b> (Indonesian, English, Chinese) with JSON-based localization.</li>
      <li>Built a responsive UI using <b>Tailwind CSS</b> and Blade templates for consistent branding.</li>
      <li>Integrated <b>Google Tag Manager</b>, SEO metadata, and dynamic sitemap to improve search visibility.</li>
      <li>Configured and deployed website on <b>VPS (Ubuntu, Nginx, PHP 8.3, MySQL)</b> with security and performance optimization.</li>
      <li>Maintained website content updates and managed catalog expansion according to company growth.</li>
    `,
  },
{
  title: "Web Support & Content Designer",
  cardImage: "assets/images/experience-page/java.png", // Logo PT. Java Pusat Edukasi
  place: "PT. Java Pusat Edukasi",
  time: "(2023 – 2024)",
  desp: `
    <li>Provided <b>website content management</b> support including design updates, article publishing, and visual improvements.</li>
    <li>Designed and maintained web layouts, banners, and visual elements to align with company branding.</li>
    <li>Assisted in developing a <b>multilingual product catalog website</b> by coordinating with the development team.</li>
    <li>Created and edited product descriptions, images, and articles in <b>Indonesian, English, and Chinese</b> versions.</li>
    <li>Monitored website performance, user interface consistency, and SEO metadata for better online visibility.</li>
    <li>Collaborated with developers and marketing teams to ensure accurate, up-to-date web content and visual presentation.</li>
  `,
},
  {
    title: "Web Developer",
    cardImage: "assets/images/experience-page/crevs.png", // Logo Crevs Group
    place: "Crevs Group",
    time: "(July 2018 – November 2024)",
    desp: `
      <li>Developed and maintained custom business websites and web applications using PHP and MySQL.</li>
      <li>Implemented responsive layouts and optimized performance for mobile and desktop users.</li>
      <li>Collaborated with clients and internal teams to enhance UI/UX design and improve functionality.</li>
      <li>Provided technical documentation and continuous maintenance for deployed projects.</li>
    `,
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(({ title, cardImage, place, time, desp }) => {
    output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image" alt="${place}"/>
        <article class="card-body">
          <header>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>`;
  });
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);