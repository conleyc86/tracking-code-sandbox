'use client';
  
import { useEffect } from "react";

const GeoMarketoForm = () => {
  useEffect(() => {
    // Dynamically load the Marketo Forms2 script
    const script = document.createElement("script");
    script.src = "//go2.trimble.com/js/forms2/js/forms2.min.js";
    script.async = true;

    script.onload = () => {
      // Ensure the script has loaded before initializing the form
      if (window.MktoForms2) {
        window.MktoForms2.loadForm("//go2.trimble.com", "168-CRJ-586", 4661);
      }
    };

    document.body.appendChild(script);

    // Cleanup the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <form id="mktoForm_4661"></form>;
};

export default GeoMarketoForm;
