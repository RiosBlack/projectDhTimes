import React from 'react';

export default function HomePage() {
    const input =
        'h-11 w-72 text-slate-700 placeholder:text-slate-700 placeholder:font-semibold p-2 rounded-md';

    return (
        <div className="w-screen h-screen grid justify-items-center content-center bg-gradient-to-t from-gray-700 via-gray-900 to-black">
            <img className="w-56 mb-10" src="../logo.png" alt="" />
            <form className="grid gap-6 border-2 p-5 rounded-3xl">
                <input
                    className={input}
                    type="text"
                    placeholder="Informe o e-mail"
                />
                <input
                    className={input}
                    type="text"
                    placeholder="Informe a senha"
                />
                <input
                    className="text-slate-200 bg-slate-700 rounded-md font-semibold text-lg py-2 mt-5"
                    type="submit"
                    value="ENTRAR"
                />
            </form>
        </div>
    );
}
