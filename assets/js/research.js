/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Application of Data Mining to Determine Promotion Strategy Using Algorithm Clustering at SMK Yadika 1",
    authors:
      "Jerry Watulangkouw, S.Pd, M.Kom",
    conferences:
      "Master of Computer Science Study Program, Faculty of Information Technology, Budi Luhur University",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "Jerry Watulangkouw - Master of Computer Science Study Program.",
    },
    abstract:
      "Please Click Link : https://www.researchgate.net/publication/361424329_Application_of_Data_Mining_to_Determine_Promotion_Strategy_Using_Algorithm_Clustering_at_SMK_Yadika_1",
    absbox: "absPopup1",
  },

  {
    title: "The Influence of the Video-Assisted Cooperative Script Learning Model on Student Learning Outcomes on the Material on Changes in Surrounding Objects in the Field of Science Studies",
    authors:
      "Jerry Watulangkouw, Cosmas  Poluakan , dan Zusje W. M. Warouw",
    conferences:
      "Science Education, Faculty of Mathematics and Natural Sciences, Manado State University",
    researchYr: 2019,
    citebox: "popup2",
    image: "assets/images/research-page/crossLingual.png",
    citation: {
      vancouver:
        "Jerry Watulangkouw, Cosmas  Poluakan , dan Zusje W. M. Warouw. The Influence of the Video-Assisted Cooperative Script Learning Model on Student Learning Outcomes on the Material on Changes in Surrounding Objects in the Field of Science Studies 2019.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
