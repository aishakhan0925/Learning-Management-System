import React from "react";

function nextLesson(){
  alert('Entered in New Lesson');
  return false;
}
function Button() {
  return (
    <div className="buttonDiv">
      <button id='next' onClick={nextLesson}>
        Next <i class="fas fa-arrow-circle-right"></i>
      </button>
    </div>
  );
}
export default Button;
