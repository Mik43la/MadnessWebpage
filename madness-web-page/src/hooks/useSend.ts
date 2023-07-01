import { useState } from "react";

const useSend = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const authToken =
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg4MjQzMTk5LCJleHAiOjE2OTA4MzUxOTl9.Swyps8IOPavayQnXlSAgTLDpOLeM4jXRXqW5TmnGFwc";
  const postData = async (formData) => {
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("xi")
        setSuccess(true);
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return { loading, success, error, postData };
};

export default useSend;