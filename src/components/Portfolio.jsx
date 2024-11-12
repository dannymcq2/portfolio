function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "https://github.com/dannymcq2/img/blob/main/Screenshot%202024-09-25%20at%206.43.04%E2%80%AFPM.png?raw=true",
      appLink: "https://dannymcq2.github.io/6weatherboard/",
      repoLink: "https://github.com/dannymcq2/6weatherboard",
    },
    {
      title: "Project 2",
      image: "https://github.com/dannymcq2/img/blob/main/Screenshot%202024-09-25%20at%206.53.20%E2%80%AFPM.png?raw=true",
      appLink: "https://dannymcq2.github.io/module3employeedata/",
      repoLink: "https://github.com/dannymcq2/module3employeedata",
    },
    {
      title: "Project 3",
      image: "https://github.com/dannymcq2/img/blob/main/Screenshot%202024-09-25%20at%206.55.21%E2%80%AFPM.png?raw=true",
      appLink: "https://dannymcq2.github.io/module4blogging/",
      repoLink: "https://github.com/dannymcq2/module4blogging",
    },
    {
      title: "Project 4",
      image: "https://github.com/dannymcq2/img/blob/main/Screenshot%202024-09-25%20at%206.57.29%E2%80%AFPM.png?raw=true",
      appLink: "https://dannymcq2.github.io/module5tasks/",
      repoLink: "https://github.com/dannymcq2/module5tasks",
    },
    {
      title: "Project 5",
      image: "https://github.com/dannymcq2/img/blob/main/Screenshot%202024-11-11%20at%203.05.22%E2%80%AFPM.png?raw=true",
      appLink: "https://dannymcq2.github.io/beatvisualizer/",
      repoLink: "https://github.com/dannymcq2/beatvisualizer",
    }
  ];
  
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              style={{ width: '250px', height: '250px', borderRadius: '10px' }}
            />
            <p>
              <a href={project.appLink} target="_blank" rel="noopener noreferrer">
                View App
              </a>
              {' | '}
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;