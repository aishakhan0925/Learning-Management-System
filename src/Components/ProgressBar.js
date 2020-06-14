import React, { Component } from "react";
import "../App.css";

class Progress extends Component {
  render() {
    const val = 10;
    return (
      <div className="prgrs">
        <progress
          id="health"
          max="100"
          value={val}
          style={{ width: "60%", height: "40px" }}
        ></progress>
        
        <br />
      </div>
    );
  }
}
export default Progress;

// import React from "react";
// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import "../App.css";

// function LinearProgressWithLabel(props) {
//   return (
//     <div className="prgrs">
//       <Box display="flex" alignItems="center" justifyContent="center">
//         <Box width="50%">
//           <LinearProgress variant="determinate" {...props} id="progressID" />
//         </Box>
//         <Box minWidth={35}>
//           <Typography variant="body2" color="textSecondary">{`${Math.round(
//             props.value
//           )}%`}</Typography>
//         </Box>
//       </Box>
//     </div>
//   );
// }
// // LinearProgressWithLabel.propTypes = {
// //   /**
// //    * The value of the progress indicator for the determinate and buffer variants.
// //    * Value between 0 and 100.
// //    */
// //   value: PropTypes.number.isRequired,
// // };

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//   },
// });
// export default function Progress(props) {
//   const classes = useStyles();
//   const [progress, setProgress] = React.useState(10);
//   const [progressOne, setProgressOne] = React.useState(props.seen);

//   // console.log(props);

//   // React.useEffect(() => {
//   //   if (props) {
//   //     setProgress((prevProgress) =>
//   //       prevProgress >= 100 ? 10 : prevProgress + 10
//   //     );
//   //     break;
//   //     console.log("working");
//   //   } else {
//   //     console.log("not working");
//   //   }
//   // });

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) =>
//         prevProgress >= 100 ? 10 : prevProgress + 10
//       );
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <div className={classes.root}>
//       <LinearProgressWithLabel value={progress} />
//       <button>done</button>
//     </div>
//   );
// }
