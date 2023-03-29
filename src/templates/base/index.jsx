import React from 'react';
import FooterComponents from '../../components/footer';
import HeaderComponents from '../../components/header';

export default function TemplateBase(props) {
    return (
        <div className="w-screen h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black">
            <HeaderComponents />
            {props.children}
            <FooterComponents />
        </div>
    );
}
