import React, {useState} from "react";
import "../styles/Home.css";


function Home() {
  const [icon,updateIcon] = useState(false);
  
  return (
    <div className="home">
      <div className="about">
        <img className="profilePic" src ={require("../assets/picPro.JPG")} alt ="Pic Profile"/> 
        
        <h2 className="nameTitle"> Hi, My Name is Ryan</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <p>As a Business Analyics student and avid aficionado of technology, I am continuously expanding my competencies. 
             I am experienced in the field of Data Analytics and Product Management as well. </p>
        </div>
      </div>
      <div className="skills">
        <h1 className="skillHeader"> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2 className="languages"> Languages I code in</h2>
            <div className="logosDiv">
              <img className="techStackLogo" src={require("../assets/HTMLLogo.png")} alt="HTML Logo"/>
              <img className="techStackLogo" src={require("../assets/CSSLogo.png")} alt="CSS Logo"/>
              <img className="techStackLogo" src={require("../assets/JavaScriptLogo.png")} alt="JS Logo"/>
              <img className="techStackLogo" src={require("../assets/pythonLogo.png")} alt="Python Logo"/>
              <img className="techStackLogo" src={require("../assets/R_logo.png")} alt="r Logo"/>
              <img className="techStackLogo" src={require("../assets/javaLogo.png")} alt="r Logo"/>

            </div>
          </li>
          <li className="item">
            <h2 className="techStackNames">Technology I have worked with</h2>
            <div className="techStackDiv">
            <img className="techStackLogo" src={require("../assets/reactLogo.png")} alt="react Logo"/>
            <img className="techStackLogo" src={require("../assets/nltkLogo.png")} alt="NLTK Logo"/>
            <img className="techStackLogo" src={require("../assets/pytorchLogo.png")} alt="pytorch Logo"/>
            <img className="techStackLogo" src={require("../assets/mySQLLogo.png")} alt="mySQL Logo"/>
            <img className="techStackLogo" src={require("../assets/MDBLogo.png")} alt="MongoDB Logo"/>
            <img className="techStackLogo" src={require("../assets/firebaseLogo.png")} alt="firbase Logo"/>
            <img className="techStackLogo" src={require("../assets/nodeJSLogo.png")} alt="NodeJS Logo"/>
            <img className="techStackLogo" src={require("../assets/TableauLogo.png")} alt="Tab Logo"/>
            <img className="techStackLogo" src={require("../assets/PBILogo.png")} alt="PowerBI Logo"/>
            <img className="techStackLogo" src={require("../assets/NumpyLogo.png")} alt="NumPy Logo"/>
            <img className="techStackLogo" src={require("../assets/pandasLogo.png")} alt="Pandas Logo"/>
            <img className="techStackLogo" src={require("../assets/scikitlearnLogo.png")} alt="scikitlearn Logo"/>
            <img className="techStackLogo" src={require("../assets/seabornLogo.png")} alt="Seaborn Logo"/>
            <img className="techStackLogo" src={require("../assets/ggplotLogo.png")} alt="ggplot Logo"/>
            <img className="techStackLogo" src={require("../assets/gitLogo.png")} alt="git Logo"/>
            </div>
            
          </li>
          
        </ol>
      </div>
    </div>
  );
}

export default Home;
