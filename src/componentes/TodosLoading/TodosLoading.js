import React from "react";
import "./TodosLoading.css"


function TodosLoading(){
 
    return (
        <>
        <div className="item-container-skeleton">
            <div className="img-round skeleton"></div>
            <p className="skeleton skeleton-text__body skeleton-text"></p>
            <div className="img-round skeleton"></div>
        </div>
         <div className="item-container-skeleton">
            <div className="img-round skeleton"></div>
            <p className="skeleton skeleton-text__body skeleton-text"></p>
            <div className="img-round skeleton"></div>
         </div>
         <div className="item-container-skeleton">
            <div className="img-round skeleton"></div>
            <p className="skeleton skeleton-text__body skeleton-text"></p>
            <div className="img-round skeleton"></div>
         </div>
         </>
);
  }

  export {TodosLoading};