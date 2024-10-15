import { useParams } from "react-router-dom";
import { projects } from "./../helpers/projectsList";
import BtnGitHib from "../components/btnGitHub/BtnGitHub";
import BtnVUT from "../components/btnVUT/BtnVUT";

const Project = () => {
    const { id } = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    {project.imgBig ? (
                        <img
                            src={project.imgBig}
                            alt={project.title}
                            className="project-details__cover"
                        />
                    ) : (
                        <video controls className="project-details__cover">
                            <source src={project.video} type="video/mp4" />
                        </video>
                    )}

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    <div className="button-container">
                        {project.gitHubLink && (
                            <BtnGitHib link={project.gitHubLink} />
                        )}

                        {project.vutLink && <BtnVUT link={project.vutLink} />}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Project;
