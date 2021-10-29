import React from "react";

const News = (props) => {
    const outerContainerStyles = {
        display : "flex",
        boxShadow: "-3px 2px 12px 0px rgba(0,0,0,0.75)",
        minHeight: "200px",
        borderRadius: "10px",
        padding: "20px 10px",
        backgroundColor: ""
    }
  return (
    <div style = {outerContainerStyles}>
      <a href={props.url} target="_blank" style = {{display:"flex" , textDecoration: "none" , gap:"20px" , justifyContent: "space-around"}}>
        <div>
            <img src = {props.image} alt = "news_image" width = "200px"/>
        </div>
        <div>
            <h1 style = {{color:"#082850" , fontWeight:"600" , fontSize:"larger"}}>
                {props.title}
            </h1>
            <p style = {{paddingRight:"30px"}}>{props.description}</p>
            <span style = {{color:"#082850"}}>Author : {(props.author) ? props.author : ""}</span>
            <p className = "text-gray-500">Source : {props.sourceName}</p>
        </div>
      </a>
    </div>
  );
};

export default News;
