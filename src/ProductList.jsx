import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './styles/ProductList.css'
import CartItem from './CartItem';
import { addItem } from './CartSlice';
function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Plantas purificadoras de aire",
            plants: [
                {
                    name: "Planta serpiente",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produce oxígeno por la noche, mejorando la calidad del aire.",
                    cost: "$15"
                },
                {
                    name: "Planta araña",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filtra el formaldehído y el xileno del aire.",
                    cost: "$12"
                },
                {
                    name: "Lirio de la paz",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Elimina las esporas de moho y purifica el aire.",
                    cost: "$18"
                },
                {
                    name: "Helecho de Boston",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Agrega humedad al aire y elimina toxinas.",
                    cost: "$20"
                },
                {
                    name: "Planta de caucho",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Fácil de cuidar para y eficaz para eliminar toxinas.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifica el aire y tiene propiedades curativas para la piel.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Plantas Aromáticas Fragantes",
            plants: [
                {
                    name: "Lavanda",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Aroma relajante, utilizado en aromaterapia.",
                    cost: "$20"
                },
                {
                    name: "Jazmín",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Fragancia dulce, promueve la relajación.",
                    cost: "$18"
                },
                {
                    name: "Romero",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Aroma vigorizante, a menudo utilizado en la cocina.",
                    cost: "$15"
                },
                {
                    name: "Melisa",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Aroma refrescante, utilizado en tés y cocina.",
                    cost: "$12"
                },
                {
                    name: "Melisa",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "$14"
                },
                {
                    name: "Jacinto",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Aroma cítrico, alivia el estrés y favorece el sueño.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Plantas repelentes de insectos",
            plants: [
                {
                    name: "Orégano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "Las plantas de orégano contienen compuestos que pueden disuadir a ciertos insectos.",
                    cost: "$10"
                },
                {
                    name: "Caléndula",
                    image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Repelente natural de insectos, también agrega color al jardín.",
                    cost: "$8"
                },
                {
                    name: "Geranios",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Conocidas por sus propiedades repelentes de insectos y por su agradable aroma.",
                    cost: "$20"
                },
                {
                    name: "Albahaca",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repele moscas y mosquitos, también se usa en la cocina.",
                    cost: "$9"
                },
                {
                    name: "Lavanda",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Aroma calmante, usado en aromaterapia.",
                    cost: "$20"
                },
                {
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repele mosquitos y atrae gatos.",
                    cost: "$13"
                }
            ]
        },
        {
            category: "Plantas medicinales",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Gel calmante utilizado para afecciones de la piel.",
                    cost: "$14"
                },
                {
                    name: "Equinácea",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Fortalece el sistema inmunológico, ayuda a combatir los resfriados.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Alivia los problemas digestivos y los dolores de cabeza.",
                    cost: "$13"
                },
                {
                    name: "Melisa",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calma los nervios y promueve la relajación.",
                    cost: "$14"
                },
                {
                    name: "Manzanilla",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Alivia la ansiedad y favorece el sueño.",
                    cost: "$15"
                },
                {
                    name: "Caléndula",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Cura heridas y alivia irritaciones de la piel.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Plantas de bajo mantenimiento",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Prospera con poca luz y requiere un riego mínimo.",
                    cost: "$25"
                },
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Tolera el descuido y puede crecer en diversas condiciones.",
                    cost: "$10"
                },
                {
                    name: "Planta serpiente",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Necesita riego poco frecuente y es resistente a la mayoría de las plagas.",
                    cost: "$15"
                },
                {
                    name: "Planta de hierro fundido",
                    image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                    description: "Planta resistente que tolera poca luz y descuido.",
                    cost: "$20"
                },
                {
                    name: "Suculentas",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Plantas resistentes a la sequía con formas y colores únicos.",
                    cost: "$18"
                },
                {
                    name: "Aglaonema",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Requiere un cuidado mínimo y agrega color a los espacios interiores.",
                    cost: "$22"
                }
            ]
        }
    ];
    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }
    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        if (addedToCart[product.name]) {
            dispatch(removeItem(product)); // Llama a la acción para eliminar el producto
            setAddedToCart((prevState) => ({
                ...prevState,
                [product.name]: false, // Marca el producto como no añadido
            }));
            setTotalQuantity((prevQuantity) => prevQuantity - 1);
        } else {
            dispatch(addItem(product));
            setAddedToCart((prevState) => ({
                ...prevState,
                [product.name]: true, // Set the product name as key and value as true to indicate it's added to cart
            }));
            setTotalQuantity((prevQuantity) => prevQuantity + 1);
        }
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Donde lo verde se encuentra con la serenidad</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plantas</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none" ></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1 className='plantname_heading'><div className='plant_heading'>{category.category}</div></h1>
                            <div className='product-list'>
                                {category.plants.map((plant, plantIndex) => (
                                    <div className='product-card' key={plantIndex}>
                                        <img className='product-image' src={plant.image} alt={plant.name} />
                                        <div className='product-title'>{plant.name}</div>
                                        <div className='product-description'>{plant.description}</div>
                                        <div className='product-price'>{plant.cost}</div>
                                        <button className={addedToCart[plant.name] ? 'product-button added-to-cart' : 'product-button'} onClick={() => handleAddToCart(plant)}>
                                            {addedToCart[plant.name] ? 'Añadido' : 'Añadir a la cesta'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
