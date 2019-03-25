import React from "react";

function Profile() {
  return (
    <div className="row mt-3 row-one ">
      <div className="col-sm-6">
        <div className="card card-body">
          <img
            className="img-thumbnail rounded-circle"
            src={require("./img/jpaulino.jpg")}
            alt=""
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card card-body">
          <p className="text-muted text-center">
            I am a passionate, and highly motivated devOps engineer with ample
            experience in cloud computing, web development and systems administration.                        
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
