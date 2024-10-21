import notImg from "../../img/image-not-found.jpg";

const Avatar = ({src, alt, w, h}) => {
  return (
    <div style={{width: `${w}px`, height: `${h}px`, overflow: "hidden", borderRadius: "100%"}}>
      <img src={src || notImg} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};
export default Avatar;
