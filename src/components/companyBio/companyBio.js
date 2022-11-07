import React from "react";

import "./companyBio.css";

export default function CompanyBio() {
  return (
    <div className="companyBioWrapper">
      <h1 className="companyBioTitle">Who We Are</h1>
      <h3 className="companyBioText">
        NPhase is an audio engineering collective of like-minded music producers
        and audio engineers, founded in Austin, TX. The collective works within
        several genres and mediums, providing artists with the resources to
        complete high quality audio projects.
        <br />
        <br />
        With over 20 years of combined production experience and certifications,
        NPhase members believe that great music is built on the foundation of
        good composition. We have aligned our individual goals as a collective,
        to build a body of work that is professional, enjoyable and equitable.
        <br />
        <br />
        We hope to share our commitment to strong technique, musical knowledge,
        and creativity in collaboration with other artists and creators.
      </h3>
    </div>
  );
}
