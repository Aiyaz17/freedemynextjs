import React from "react";
function Skeleton(props) {
  var classes = `skeleton ${props.type}`;
  var stylesO = {
    width: props.width,
  };
  return <div className={classes} style={stylesO}></div>;
}
export default Skeleton;
