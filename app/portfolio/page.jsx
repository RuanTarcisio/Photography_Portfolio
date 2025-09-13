"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
    const [activeCategory, setActiveCategory] = useState("todos");

    // Dados de exemplo para o portfolio
    const portfolioItems = [
        { id: 1, src: "/img/portfolio/1.png", title: "Ensaio de Casal", category: "ensaios", description: "Sessão romântica no pôr do sol" },
        { id: 2, src: "/img/portfolio/2.png", title: "Casamento", category: "casamentos", description: "Cerimônia na praia" },
        { id: 3, src: "/img/portfolio/3.png", title: "Retrato Corporativo", category: "corporativo", description: "Perfil profissional" },
        { id: 4, src: "/img/portfolio/4.png", title: "Família", category: "ensaios", description: "Sessão em estúdio" },
        { id: 5, src: "/img/portfolio/5.png", title: "Evento Corporativo", category: "eventos", description: "Conferência anual" },
        { id: 6, src: "/img/portfolio/6.png", title: "Book Pessoal", category: "pessoal", description: "Ensaio artístico" },
        { id: 7, src: "/img/portfolio/5.png", title: "Produto", category: "comercial", description: "Fotografia publicitária" },
        { id: 8, src: "/img/portfolio/3.png", title: "Gestante", category: "ensaios", description: "Registro especial" },
        { id: 9, src: "/img/portfolio/2.png", title: "Aniversário", category: "eventos", description: "Celebração familiar" },
    ];

    const categories = [
        { id: "todos", name: "Todos" },
        { id: "ensaios", name: "Ensaios" },
        { id: "casamentos", name: "Casamentos" },
        { id: "corporativo", name: "Corporativo" },
        { id: "eventos", name: "Eventos" },
        { id: "pessoal", name: "Pessoal" },
    ];

    const filteredItems =
        activeCategory === "todos"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeCategory);
    
    console.log(filteredItems)

    return (
        <section className="section pt-[100px] lg:pt-[140px] pb-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Cabeçalho */}
                <div className="text-center mb-12">
                    <h1 className="h1 mb-4">Meu Portfólio</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Descubra minha visão artística através destes trabalhos selecionados.
                        Cada imagem conta uma história única e especial.
                    </p>
                </div>

                {/* Filtros de Categoria */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Grid de Portfolio */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl"
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={320}
                                height={400} // proporcional a 4/5
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay com informações */}
                            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end ">
                                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-accent">
                                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Call to Action no final */}
                <div className="text-center mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Pronto para criar algo incrível juntos?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        Vamos transformar seus momentos especiais em memórias eternas através da minha lente.
                    </p>
                    <Link
                        href="/contato"
                        className="inline-block bg-lime-300 hover:bg-lime-400 text-blue-800 hover:text-blue-900 font-semibold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        Vamos conversar?
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Page;
