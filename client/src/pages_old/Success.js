import React, { useEffect } from "react";

function Success() {
  useEffect(() => {
    //set timer to automatically redirect to homepage after 3s upon successful purchase
    setTimeout(function() {window.location.assign('/')}, 3000);
  })

  return (
    <div className="center-children-vertical">
      <div className="center-children-vertical margin-top">
        <h1 className="larger-font">Success!</h1>
        <h2 className="large-font">Thank you for your purchase!</h2>
        <h2 className="large-font">
          You will now be redirected to the homepage.
        </h2>
      </div>
    </div>
  );
}

export default Success;
