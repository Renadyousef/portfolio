const projects = [  {
    name: "The movie Big dataset analysis on AWS [Done]",
    description: "Analyzing big data on an EMR cluster using Spark system via PySpark and AWS clusters.",
    media: "Aws.png",
    links: [
      { label: "GitHub Repo", url: "https://github.com/Renadyousef/spark-job-on-EMR" },
      { label: "Research Paper", url: "https://drive.google.com/file/d/1pC9p48_hBiSylzA-zOKRDW27lBiMuAKC/view" }
    ]
  },{
  name: "Markaz [under progress graduation project]",
  description: `
    <ul>
      <li>AI-powered Arabic study tool built with React/Express</li>
      <li>Uses NLP to summarize materials, generate quizzes, and provide a responsive chatbot</li>
      <li>MVC architecture combined with pipe & filter design</li>
      <li>Testing practices applied throughout the project</li>
      <li>Did business Analysis and domain of the tool </li>
      <li>Accessibility features: text-to-speech and customizable fonts</li>
    </ul>
  `,
  url: "https://github.com/Renadyousef/Markaz-",
  media: "MarkazLogo.png"
}, {
  name: "Smart Schedule [under progress]",
  description: "Smart Schedule is a university schedule automation app built with React/Express. It highlights new skills from this semester:containers, deployment, security, and DevOps practices, delivering a mobile-first, scalable platform.",
  url: "https://github.com/Renadyousef/Smart-schedule-",
  media: "SmartSchedule.png"
}

,




  {
    name: "Najm [Add deom above]",
    description: "Najm is a mobile app that addresses a common challenge faced by many young adults and teenagers in Saudi Arabia: finding and pursuing personal interests and hobbies in a structured, supportive environment. In today's fast-paced world, it can be difficult for individuals to identify hobbies that not only entertain but also enrich their lives.",
    media: "Copy of NAJM_promo_withSound.mp4"
  },
{
  name: "Ethnographic Functional Mapping in UI Design",
  description: "A UI/UX project applying ethnographic-inspired design methods to map user functionality and improve interface experience. Focused on research-driven design and prototyping.",
  media: "EthnographicDesign.png", // optional screenshot or placeholder image
  links: [
    { label: "Design Process Document", url: "https://docs.google.com/document/d/1pMqz5dit_sNNrHizmg0h5RwLWWhv9OgBmaGA_eG1Siw/edit?tab=t.0" }
  ]
}
,
  {
    name: "Fake News Text Classifier",
    description: "A machine learning project using NLP techniques to detect and classify fake news articles. We trained models on labeled datasets, performed feature engineering, and optimized classification accuracy using Python libraries. It includes preprocessing pipelines, model evaluation metrics, and a simple UI for demoing predictions.",
    url: "https://github.com/Renadyousef/Fake-news-text-classfier",
    media: "FakeNewsClassifier.png"
  }
];

const projectsList = document.getElementById("projects-list");

projects.forEach(project => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  let mediaHTML = "";
  if (project.media.endsWith(".mp4")) {
    mediaHTML = `
      <video controls class="card-img-top">
        <source src="${project.media}" type="video/mp4">
        Your browser does not support the video tag.
      </video>`;
  } else {
    mediaHTML = `<img src="${project.media}" class="card-img-top" alt="${project.name}" style="width:100%; height:auto;">`;
  }

  col.innerHTML = `
    <div class="card h-100 shadow-sm">
      ${mediaHTML}
      <div class="card-body">
        <h5 class="card-title">${project.name}</h5>
        <p class="card-text">${project.description}</p>
        ${
          project.links
            ? project.links.map(link => `
              <a href="${link.url}" class="btn btn-primary btn-sm me-2" target="_blank">${link.label}</a>
            `).join("")
            : project.url 
              ? `<a href="${project.url}" class="btn btn-primary btn-sm" target="_blank">View Project</a>`
              : ""
        }
      </div>
    </div>
  `;

  projectsList.appendChild(col);
});
