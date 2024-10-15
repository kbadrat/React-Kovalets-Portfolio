import project01 from "./../img/projects/01.jpg";
import project01Big from "./../videos/projects/01-big.mp4";

import project02 from "./../img/projects/02.jpg";
import project02Big from "./../videos/projects/02-big.mp4";

import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

const projects = [
    {
        id: 0,
        title: "Detecting cards in poker",
        skills: "Python, YOLO, OpenCV, PyTorch",
        img: project01,
        video: project01Big,
        gitHubLink: "https://github.com/kbadrat/IBT-Bachelors_Thesis",
        vutLink: "https://www.vut.cz/studenti/zav-prace/detail/155626"
    },
    {
        id: 1,
        title: "Plant care reminder iOS app",
        skills: "Flutter, Dart, Figma",
        img: project02,
        video: project02Big,
        gitHubLink: "https://github.com/kbadrat/ITU-User_Interface_Programming",
    },
    {
        id: 2,
        title: "Student tournament system",
        skills: "Python, Django, MySQL, HTML",
        img: project03,
        imgBig: project03Big,
        gitHubLink: "https://github.com/kbadrat/IIS-Information_Systems",
    },
    
    
];

export {projects}
