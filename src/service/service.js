import DB from './DB.json';


const useCoffeeService = () => {
    const getProduct = (id) => {
        return DB.filter(item => item.id === id)
    }
    return { getProduct }
}

export default useCoffeeService;