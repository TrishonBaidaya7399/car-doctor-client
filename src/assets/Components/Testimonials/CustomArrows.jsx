import PropTypes from 'prop-types'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <BsArrowLeftCircleFill className='z-30 text-orange-500 text-6xl mb-1/2 md:ml-[-10px] lg:ml-[-20px]'/>
    </div>
  );
}

export function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <BsArrowRightCircleFill className='z-30 text-orange-500 text-6xl mb-1/2 md:ml-[-30px]'/>
    </div>
  );
}

CustomPrevArrow.propTypes = {
    className:PropTypes.node, 
    style:PropTypes.node, 
    onClick:PropTypes.node,
};
CustomNextArrow.propTypes = {
    className:PropTypes.node, 
    style:PropTypes.node, 
    onClick:PropTypes.node,
};