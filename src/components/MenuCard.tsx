type MenuCardProps = {
    title: string;
    description: string;
    imageUrl: string;
};

const MenuCard = (Prop: MenuCardProps) => {
    return (
        <div className="w-100 bg-amber-400 p-4 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold">{Prop.title}</h2>
            <img src={Prop.imageUrl} alt={Prop.title} className="mt-5 mb-5 rounded-2xl w-50 h-50 object-cover" />
            <p className="text-gray-600">{Prop.description}</p>
        </div>
    )
}

export default MenuCard;