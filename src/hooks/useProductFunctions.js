import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/handleCart';
import { toast } from 'react-hot-toast';

const useProductFunctions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(
      <span>
        {product.title} <span className='fw-bold text-danger'>added to cart!</span>
      </span>
    )
  };

  const handleBuyNowClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return {
    handleAddToCart,
    handleBuyNowClick,
  };
};

export default useProductFunctions;
