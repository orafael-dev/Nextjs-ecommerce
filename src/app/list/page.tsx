import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px64 relative">
      {/* CAMPANHA */}
      <div className="hidden sm:flex bg-pink-50 px-4 justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Receba até 50% de desconto
            <br /> em produtos selecionados
          </h1>
          <button className="rounded-3xl bg-rosa text-white w-max py-3 px-5 text-sm">
            Ver Promos
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/woman.png"
            alt="Woman Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="text-xl mt-12 font-semibold"> Celulares para Você!</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
