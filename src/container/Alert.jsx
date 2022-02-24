import React from "react";
import { useSelector } from "react-redux";

export default function Alert() {
  const { daDangKy, loading, error } = useSelector(
    (state) => state.dangKyReducer
  );
  return <div>
    
  </div>;
}
