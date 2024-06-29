import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Heading } from "../components/exports";

function Contact() {
  const [state, handleSubmit] = useForm(import.meta.VITE_FORM_ID);
  // Form States
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!fname || !lname || !email || !msg) {
      alert("Please fill all of the fields!");
      return;
    }
    // Submit the form after validation
    handleSubmit(e);
    // Formspree's methods
    if (state.succeeded) {
      alert("Message Sent!");
      window.location.reload();
    }
  };

  return (
    <div className="w-full sm:mt-28 md:w-5/6 md:mx-auto h-screen flex flex-col gap-10 justify-start p-5">
      <Heading text="Contact Me" />
      <form
        action={`https://formspree.io/f/${import.meta.VITE_FORM_ID}`}
        method="POST"
        onSubmit={handleSubmission}
        className="w-full lg:w-5/6 lg:mx-auto flex flex-col gap-10"
      >
        <section className="w-full flex flex-col gap-10 md:flex-row ">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            autoComplete="off"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="input
            p-2 w-full bg-transparent outline-none border border-accent-500/50 text-text-50 rounded-md "
          />
          <ValidationError
            prefix="First Name"
            field="firstName"
            errors={state.errors}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            autoComplete="off"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className="input p-2 w-full outline-none bg-transparent border border-accent-500/50 text-text-50 rounded-md "
          />
          <ValidationError
            prefix="Last Name"
            field="lastName"
            errors={state.errors}
          />
        </section>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input p-2 outline-none bg-transparent border border-accent-500/50 text-text-50 rounded-md  "
        />
        <ValidationError prefix="email" field="email" errors={state.errors} />
        <textarea
          type="text"
          name="msg"
          placeholder="Your Message"
          autoComplete="off"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="w-full h-40 outline-none resize-none p-2 bg-transparent border border-accent-500/50 text-text-50 rounded-md  "
        ></textarea>
        <ValidationError prefix="Message" field="msg" errors={state.errors} />
        <button
          type="submit"
          className="input p-3 border border-accent-500/50 hover:bg-accent-500 hover:border-accent-500 hover:text-text-50 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
