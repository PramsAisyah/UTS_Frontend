import react from "react";

const Card = ({gambar,title,content}) => {
  return ( 
    <div className="card">
      <img src={gambar} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
      <a href="#" className="btn btn-primary"></a>
      BUY NOW
    </div>
  );
}
 
export default Card;
