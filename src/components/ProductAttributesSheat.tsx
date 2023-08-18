function ProductAttributesSheat(options: {
  productAttrib: { title: string; attrib: { attribTitle: string; attr: string }[] }[];
}) {
  const { productAttrib } = options;

  return (
    <div className="flex flex-col md:flex-row flex-wrap w-full md:gap-[2%] gap-6">
      {productAttrib.map((pdtAttr) => {
        return (
          <div key={pdtAttr.title} className=" bg-secondary p-6 flex flex-col gap-6 w-full md:w-[49%]">
            <h4 className=" text-3xl font-semibold">{pdtAttr.title}</h4>
            <div className=" w-full">
              {pdtAttr.attrib.map((attributes) => {
                return (
                  <div key={attributes.attribTitle} className=" odd:bg-white flex text-xl p-2">
                    <div className="w-full">{attributes.attribTitle}</div>
                    <div className="w-full">{attributes.attr}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductAttributesSheat;
