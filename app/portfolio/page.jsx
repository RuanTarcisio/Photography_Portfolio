import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
    return (
        <section className="section pt-[100px] lg:pt-[140px]">
            <div className="container mx-auto relative">
                {/* Usando grid para dividir texto e imagens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12 pb-16">
                    {/* Coluna de texto */}
                    <div className="lg:sticky lg:top-[calc(140px+1rem)] self-start">
                        <h1 className="h1">Portfolio</h1>
                        <p className="mb-6 max-w-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                            <b>Quo, voluptates tempora facilis officiis</b>, aliquam aliquid a
                            amet ad nemo.
                        </p>
                        <p className="mb-8 max-w-md text-lg">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                            dolorem.
                        </p>
                        <Link href="/contato" className="btn mt-4 px-8 py-3 w-80 bg-lime-300 text-2xl rounded-4xl text-blue-800/90 font-semibold hover:bg-lime-400 hover:text-blue-900/90 transition-all">
                            Vamos conversar?
                        </Link>
                    </div>

                    {/* Container de imagens com grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-[95%] ml-1">
                        {/* Imagem 1 */}
                        <div
                            className="w-full bg-gray-200 overflow-hidden rounded-lg shadow-lg"
                            onClick={ console.log("Clicou na imagem 1")}
                        >
                            <Image
                                src="/img/portfolio/1.png"
                                alt="Foto do portfólio 1"
                                width={320}
                                height={220}
                                className="w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
                                priority
                            />
                        </div>

                        {/* Imagem 2 */}
                        <div className="w-full bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/img/portfolio/2.png"
                                alt="Foto do portfólio 2"
                                width={320}
                                height={220}
                                className="w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Imagem 3 */}
                        <div className="w-full bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/img/portfolio/3.png"
                                alt="Foto do portfólio 3"
                                width={320}
                                height={220}
                                className="w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Imagem 4 */}
                        <div className="w-full bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/img/portfolio/4.png"
                                alt="Foto do portfólio 4"
                                width={320}
                                height={220}
                                className="w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Imagem 5 */}
                        <div className="w-full bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/img/portfolio/5.png"
                                alt="Foto do portfólio 5"
                                width={320}
                                height={220}
                                className="w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Imagem 6 */}
                        <div className="w-full bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/img/portfolio/6.png"
                                alt="Foto do portfólio 6"
                                width={320}
                                height={220}
                                className="w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Imagem 7 */}
                        <div className="w-full bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/img/portfolio/5.png"
                                alt="Foto do portfólio 7"
                                width={320}
                                height={220}
                                className="w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Imagem 8 */}
                        <div className="w-full bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/img/portfolio/3.png"
                                alt="Foto do portfólio 8"
                                width={320}
                                height={220}
                                className="w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Imagem 9 */}
                        <div className="w-full bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/img/portfolio/2.png"
                                alt="Foto do portfólio 9"
                                width={320}
                                height={220}
                                className="w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
