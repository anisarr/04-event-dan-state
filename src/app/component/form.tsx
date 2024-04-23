import { error } from "console";
import { useState } from "react";

export default function Form(){
    const [jawaban, setJawaban] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>Yay... Jawaban Benar!</h1>
    }

    async function handleSubmit(e: { preventDefault: () -> void; }) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(jawaban);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setDefaultResultOrder(err);
        }
    }

    function handleTestareaChange(e) {
        setJawaban(e.target.value);
    }

    return(
        <>
            <div className="w-full max-w-xs">
                <h2>Tebak Nama Hewan</h2>
                <p>Hewan apa yang ditakuti oleh doraemon?</p>

                <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400" onSubmit={handleSubmit}>
                    <textarea value={jawaban} onChange={handleTestareaChange} disabled={status === 'submitting'}></textarea>
                    <br />
                    <button className="bg-blue-400 p-2 m-2 rounded text-sm text-white" disabled={jawaban.length === 0 || status === 'submitting'}>
                        submit
                    </button>
                    {error !== null && <p className="Error text-red-500 text-sm">{error.message}</p>}
                </form>
            </div>

        </>
    );
    
}

function submitForm(jawaban) {
    return new Promise<void>((resolve, reject) => {
        set Timeout(() => {
            let shouldError = jawaban.toLowerCase() !== 'tikus'
            if (shouldError) {
                reject (new Error ('Tebakan yang bagus tetapi jawaban salah. Silahkan coba lagi!'));
            } else {
                resolve();
            }
        },500);
    });
}