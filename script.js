const projects = [
     
      {
        name: "Markaz Quiz Generator Model [Arabic Generative AI]",
        description: `
          <ul>
            <li>AI-powered quiz generation module for the <b>Markaz web App</b> study platform</li>
            <li>Uses <b>NLP</b> and <b>Generative AI</b> (Hugging Face & GPT models) to create context-based quizzes from Arabic study materials</li>
            <li>Generates diverse question types: MCQs, fill-in-the-blanks, TF</li>
            <li>Deployed as a <b>Flask microservice</b> with a dedicated API route integrated into the main React/Express app</li>
             <li>Nlp-Tasks evalution methodolgy testing with <b>domain and human-based testing</b></li>
          </ul>
        `,
        media: "test.png",
        links: [
          { label: "GitHub Repo", url: "https://github.com/Renadyousef/Markaz-NLP-model" }
        ]
      },
     {
        name: "Markaz [graduation project]",
        description: `
          <ul>
            <li>AI-powered Arabic study tool built with React/Express</li>
            <li>Uses NLP to summarize materials, generate quizzes, and provide a responsive chatbot</li>
            <li>MVC architecture combined with pipe & filter design</li>
            <li>Testing practices applied throughout the project using unit test with jest etc..</li>
            <li>Did business Analysis and domain of the tool</li>
            <li>Accessibility features: text-to-speech and customizable fonts</li>
          </ul>
        `,
        url: "https://github.com/Renadyousef/Markaz-",
        media: [
          "logo.png",
          "1.png",
          
         
        ]
      },
      {
        name: "Smart Schedule [prototype deployed below]",
        description: "Smart Schedule is a university schedule automation platform built with React and Express.js. The project demonstrates skills in containerization, deployment, web security, and DevOps practices, delivering a mobile-first, scalable architecture.Note: Some production features are currently disabled due to service cost limitations. Recruiters can still log in using GitHub OAuth to explore core functionality.",
        links: [
          { label: "GitHub Repo", url: "https://github.com/Renadyousef/Smart-schedule-" },
          { label: "Public link of the website", url: "https://smart-schedule-phi.vercel.app/" }
        ],
        media: "SmartSchedule.png"
      },
       {
        name: "The movie Big dataset analysis on AWS [Done]",
        description: "Analyzing big data on an EMR cluster using Spark system via PySpark and AWS clusters.",
        media: "Aws.png",
        links: [
          { label: "GitHub Repo", url: "https://github.com/Renadyousef/spark-job-on-EMR" },
          { label: "Research Paper", url: "https://drive.google.com/file/d/1pC9p48_hBiSylzA-zOKRDW27lBiMuAKC/view" }
        ]
      },
       {
        name: "Najm [demo above]",
        description: "Najm is a mobile app that addresses a common challenge faced by many young adults and teenagers in Saudi Arabia: finding and pursuing personal interests and hobbies in a structured, supportive environment.",
        media: "Copy of NAJM_promo_withSound.mp4"
      },
       {
        name: "Fake News Classifier [NLP]",
        description: "A machine learning project using NLP techniques to detect and classify fake news articles. We trained models on labeled datasets, performed feature engineering, and optimized classification accuracy using Python libraries. It includes preprocessing pipelines, model evaluation metrics, and a simple UI for demoing predictions.",
        url: "https://github.com/Renadyousef/Fake-news-text-classfier",
        media: "FakeNewsClassifier.png"
      },
        {
        name: "Spam Email Classifier (NLP Project) 🚨",
        description: "Spam emails often contain scams, phishing links, or unwanted ads that can put users at risk. This project tackles the challenge of automatically detecting and classifying emails as spam or ham using Natural Language Processing (NLP) techniques. The goal is to improve email security and reduce user exposure to unsafe or irrelevant content.",
        media: "spam.png",
        links: [
          { label: "GitHub Repo", url: "https://github.com/Renadyousef/SWE485-Project-Group1" }
        ]
      },
     
      {
        name: "Ethnographic Functional Mapping in UI Design",
        description: "A UI/UX project applying ethnographic-inspired design methods to map user functionality and improve interface experience. Focused on research-driven design and prototyping.",
        media: "EthnographicDesign.png",
        links: [
          { label: "Design Process Document", url: "https://docs.google.com/document/d/1pMqz5dit_sNNrHizmg0h5RwLWWhv9OgBmaGA_eG1Siw/edit?tab=t.0" }
        ]
      },
     
    ];

    const projectsList = document.getElementById("projects-list");

    projects.forEach(project => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";

      let mediaHTML = "";

      if (Array.isArray(project.media)) {
        // Carousel for multiple images
        mediaHTML = `
          <div id="carousel-${project.name.replace(/\s/g,'')}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${project.media.map((img, index) => `
                <div class="carousel-item ${index === 0 ? "active" : ""}">
                  <img src="${img}" class="d-block w-100" alt="${project.name}">
                </div>
              `).join('')}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${project.name.replace(/\s/g,'')}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel-${project.name.replace(/\s/g,'')}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        `;
      } else if (project.media.endsWith(".mp4")) {
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
