type MenuCardProps = {
    title: string;
    description: string;
    imageUrl: string;
};

const MenuCard = (Prop: MenuCardProps) => {
    return (
        <div className="w-full px-4 py-4 rounded-4xl shadow-lg flex flex-col md:flex-row items-center md:items-center">
          <img
            src={Prop.imageUrl}
            alt={Prop.title}
            className="rounded-2xl object-cover border-4 border-amber-500 w-full h-48 md:w-52 md:h-52 aspect-square"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <div className="md:ml-6 flex flex-col justify-center h-full md:h-[208px] md:justify-center text-center md:text-left w-full mt-4 md:mt-0">
            <h2 className="text-xl font-semibold">{Prop.title}</h2>
            <p className="text-gray-600">{Prop.description}</p>
          </div>
        </div>
    )
}

export default MenuCard;