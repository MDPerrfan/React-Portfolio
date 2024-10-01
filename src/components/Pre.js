import React from "react";
import { useSelector } from "react-redux";
function Pre() {
  const {loading}=useSelector((state)=>state.root)
  return <div id={loading ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
