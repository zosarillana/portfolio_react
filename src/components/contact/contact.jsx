import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null);
  const [emailValid, setEmailValid] = useState(true);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleSendEmail = () => {
    if (name && email && message) {
      emailjs
        .send(
          "service_ve7j53f", // Replace with your EmailJS service ID
          "template_ogj1cmr", // Replace with your EmailJS template ID
          { name, email, message },
          "4ciYWIJxJEuHjY9HP" // Replace with your EmailJS Public API Key
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setAlertType("success");
          setAlertMessage("Successfully sent email.");
        })
        .catch((err) => {
          console.error("FAILED...", err);
          setAlertType("error");
          setAlertMessage("Something went wrong.");
        })
        .finally(() => {
          setTimeout(() => {
            setAlertMessage(null);
            setAlertType(null);
          }, 3000);
        });
    } else {
      setAlertType("error");
      setAlertMessage("Please fill in all fields correctly.");
      setTimeout(() => {
        setAlertMessage(null);
        setAlertType(null);
      }, 3000);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlertMessage(null);
      setAlertType(null);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alertMessage, alertType]);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="w-full max-w-4xl p-6 bg-base-300 shadow-lg">
        <h1 className="text-5xl font-bold">Contact me</h1>
        {/* Contact information */}
        <div className="flex space-x-4 mt-5 items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-blue-500"
            href="#">
            {/* Replace with your icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className="fill-current w-5 h-5">
              <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
            </svg>
          </a>
          <p>+63 9531829691</p>
        </div>
        {/* Social media links */}
        <div className="flex space-x-4 mt-5 items-center">
          <a
            href="https://www.facebook.com/zjakesarillana"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-blue-500">
            {/* Replace with your icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current w-5 h-5">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          <p>facebook.com/zjakesarillana</p>
        </div>
        <div className="flex space-x-4 mt-5 items-center">
          <a
            href="https://www.instagram.com/zo.jake999/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-blue-500">
            {/* Replace with your icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="fill-current w-5 h-5">
              <path
                d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9
C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
            </svg>
          </a>
          <p>instagram.com/zo.jake999/</p>
        </div>
        <div className="flex space-x-4 mt-5 items-center">
          <a
            href="https://github.com/zosarillana"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-blue-500">
            {/* Replace with your icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="fill-current w-5 h-5">
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481 C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>
          <p>github.com/zosarillana</p>
        </div>

        {/* Collapsible section for email form */}
        <div
          className={`collapse collapse-arrow border border-base-300 bg-base-200 mt-5 ${
            isOpen ? "collapse-open" : ""
          }`}>
          <div
            tabIndex={0}
            className="collapse-title text-xl font-medium cursor-pointer"
            onClick={toggleCollapse}>
            Click me to send an Email
          </div>
          {isOpen && (
            <div className="collapse-content mt-4">
              <div>
                <textarea
                  className="textarea textarea-secondary w-full"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

              <div className="join w-full" tabIndex={0}>
                <input
                  className="input input-bordered join-item w-full"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className={`input input-bordered join-item w-full ${
                    emailValid ? "" : "input-error"
                  }`}
                  placeholder="email@gmail.com"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailValid(e.target.checkValidity());
                  }}
                  required
                />
                <button
                  className="btn join-item border-base-300 bg-base-400"
                  onClick={handleSendEmail}>
                  Send Email
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Alert messages */}
        {alertMessage && (
          <div
            role="alert"
            className={`alert mt-5 ${
              alertType === "success" ? "alert-success" : "alert-error"
            }`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24">
              {alertType === "success" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              )}
            </svg>
            <span>{alertMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
