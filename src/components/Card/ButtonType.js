import React from 'react';

const Trash = props => {
  return (
    <svg height={props.height} width={props.width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
	    <title>trash simple</title>
	    <g fill="#ffffff" stroke="#ffffff" strokeWidth="1">
		    <path d="M2.5,6.5v7 c0,1.105,0.895,2,2,2h8c1.105,0,2-0.895,2-2v-7" fill="none" stroke="#ffffff" strokeLinecap="round"/>
		    <line fill="none" strokeLinecap="round" x1="1.5" x2="15.5" y1="3.5" y2="3.5"/>
		    <polyline fill="none" points=" 6.5,3.5 6.5,0.5 10.5,0.5 10.5,3.5 " strokeLinecap="round"/>
		    <line fill="none" stroke="#ffffff" strokeLinecap="round" x1="8.5" x2="8.5" y1="7.5" y2="12.5"/>
		    <line fill="none" stroke="#ffffff" strokeLinecap="round" x1="11.5" x2="11.5" y1="7.5" y2="12.5"/>
		    <line fill="none" stroke="#ffffff" strokeLinecap="round" x1="5.5" x2="5.5" y1="7.5" y2="12.5"/>
	    </g>
    </svg>
  )
}

const Like = props => {
  return (
    <svg height={props.height} width={props.width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
	    <g fill="#ffffff">
		    <path d="M14,6H8V2c0-1.2-0.8-2-2-2L3,7H1C0.4,7,0,7.4,0,8v7c0,0.6,0.4,1,1,1h11c1.4,0,2.7-1,2.9-2.4l1-5.2 C16.2,7.2,15.3,6,14,6z" fill="#ffffff"/>
	    </g>
    </svg>
  )
}

const DisLike = props => {
  return (
    <svg height={props.height} width={props.width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
	    <title>like no</title>
	    <g fill="#ffffff">
		    <path d="M14,10H8v4c0,1.2-0.8,2-2,2L3,9H1C0.4,9,0,8.6,0,8V1c0-0.6,0.4-1,1-1h11c1.4,0,2.7,1,2.9,2.4l1,5.2 C16.2,8.8,15.3,10,14,10z" fill="#ffffff"/>
	    </g>
    </svg>
  )
}

const ButtonType = props => {
  if(props.isLike){
    return <Like width={16} height={16} />
  } else if(props.isDislike) {
    return <DisLike width={16} height={16} />
  } else {
    return <Trash width={16} height={16} />
  }
}

export default ButtonType;