import React, { useState } from 'react';

type Form = {
    name: string;
    message: string;
};

type Status = {
    type: "success" | "error";
    text: string;
};

function Contact() {
    const [form, setForm] = useState<Form>({ name: "", message: "" });
    const [status, setStatus] = useState<Status | null>(null);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!form.name.trim() || !form.message.trim()) {
            setStatus({
                type: "error",
                text: "Name and message cannot be empty."
            });
            return;
        }

        setStatus({
            type: "success",
            text: `Your message has been sent! Thank you, ${form.name}.`
        });

        setForm({ name: "", message: "" });
    }

    return (
        <section className="contact">
            <h2>Contact Me</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                />

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                ></textarea>

                <button type="submit">Send</button>
            </form>

            {status && <p className={status.type}>{status.text}</p>}
        </section>
    );
}

export default Contact;