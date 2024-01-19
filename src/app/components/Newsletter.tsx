'use client'
import { useState } from "react";
import { FaSpoon } from "react-icons/fa6";

export default function Newsletter() {
    const [email, setEmail] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmission = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSubmitted(true);
        setEmail('');
    }

    const subscribeButton = (
        <button className="p-2 border-2 border-yellow-100 rounded-sm" onClick={handleSubmission}>Subscribe</button>
    )

    const subscribed = (
        <p className="p-2 border-2 border-green-400 rounded-sm">Subscribed!</p>
    )

    const subscribeInfo = submitted ? subscribed : subscribeButton;

    return (
        <div className="w-full max-w-2xl m-auto flex flex-col items-center justify-center p-3 border-2 border-yellow-100">
            <h2 className="font-bold">Newsletter</h2>
            <FaSpoon className="mb-3" />
            <h3 className="mb-3 text-5xl leading-relaxed text-yellow-400 text-center">Subscribe To Our Newsletter</h3>
            <p className="mb-3">And Never Miss The Latest Updates!</p>
            <input className="bg-black border-1 rounded-sm border-yellow-100 mb-3 p-1 peer invalid:border-red-600 invalid:text-red-600" type="text" pattern=".+@.+" placeholder="Enter email address..." value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="peer hidden peer-invalid:block text-red-600">Please enter a valid email</p>
            {subscribeInfo}
        </div>
    )
}