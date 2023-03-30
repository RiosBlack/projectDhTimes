import React from 'react';

export default function HeaderComponents() {
    return (
        <header className="flex justify-between items-center px-5 py-2 text-slate-200 font-bold">
            <img className="w-32" src="../logo.png" alt="" />
            <div className='flex'>
                <h1 className='mr-5'>Olá, Usuário</h1>
                <button>Sair</button>
            </div>
        </header>
    );
}
