import { Reuleaux } from 'ldrs/react'
import 'ldrs/react/Reuleaux.css'

// Default values shown
import { useState } from "react";
import { useEffect } from "react";

export default function SingleProduct() {
    return (
        <div className="container">
<div className='loader'>
<Reuleaux
  size="300"
  stroke="5"
  strokeLength="0.15"
  bgOpacity="0.3"
  speed="1.2"
  color="black" 
/>
</div>
</div>
)
}