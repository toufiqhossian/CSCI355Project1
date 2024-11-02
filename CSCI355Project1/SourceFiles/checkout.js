// checkout.js

const { useState, useEffect } = React;
function Checkout() {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'credit',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  
  const [orderPlaced, setOrderPlaced] = useState(false);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.address || !formData.city || !formData.state || !formData.zip) {
      alert('Please fill in all required fields.');
      return;
    }
    localStorage.removeItem('cart');
    setCart([]);
    setOrderPlaced(true);
  };
  
  if (orderPlaced) {
    return (
      <div className="checkout-container">
        <h2>Thank you for your purchase, {formData.fullName}!</h2>
        <p>Your order has been successfully placed.</p>
        <a href="Home.html" className="checkout-form button">Return to Home</a>
      </div>
    );
  }
  
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Billing Information</h2>
        
        <label htmlFor="fullName">Full Name</label>
        <input 
          type="text" 
          id="fullName" 
          name="fullName" 
          value={formData.fullName} 
          onChange={handleChange} 
          required 
        />
        
        <label htmlFor="email">Email Address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        
        <label htmlFor="address">Address</label>
        <input 
          type="text" 
          id="address" 
          name="address" 
          value={formData.address} 
          onChange={handleChange} 
          required 
        />
        
        <label htmlFor="city">City</label>
        <input 
          type="text" 
          id="city" 
          name="city" 
          value={formData.city} 
          onChange={handleChange} 
          required 
        />
        
        <label htmlFor="state">State</label>
        <input 
          type="text" 
          id="state" 
          name="state" 
          value={formData.state} 
          onChange={handleChange} 
          required 
        />
        
        <label htmlFor="zip">ZIP Code</label>
        <input 
          type="text" 
          id="zip" 
          name="zip" 
          value={formData.zip} 
          onChange={handleChange} 
          required 
        />
        
        <h2>Payment Information</h2>
        
        <label>Payment Method</label>
        <div>
          <input 
            type="radio" 
            id="credit" 
            name="paymentMethod" 
            value="credit" 
            checked={formData.paymentMethod === 'credit'} 
            onChange={handleChange} 
          />
          <label htmlFor="credit">Credit Card</label>
          
          <input 
            type="radio" 
            id="paypal" 
            name="paymentMethod" 
            value="paypal" 
            checked={formData.paymentMethod === 'paypal'} 
            onChange={handleChange} 
          />
          <label htmlFor="paypal">PayPal</label>
        </div>
        
        {formData.paymentMethod === 'credit' && (
          <>
            <label htmlFor="cardNumber">Card Number</label>
            <input 
              type="text" 
              id="cardNumber" 
              name="cardNumber" 
              value={formData.cardNumber} 
              onChange={handleChange} 
              required 
            />
            
            <label htmlFor="expiryDate">Expiry Date</label>
            <input 
              type="text" 
              id="expiryDate" 
              name="expiryDate" 
              placeholder="MM/YY"
              value={formData.expiryDate} 
              onChange={handleChange} 
              required 
            />
            
            <label htmlFor="cvv">CVV</label>
            <input 
              type="text" 
              id="cvv" 
              name="cvv" 
              value={formData.cvv} 
              onChange={handleChange} 
              required 
            />
          </>
        )}
        
        <button type="submit">Place Order</button>
      </form>
      
      {}
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <div className="order-item" key={item.name}>
                <h3>{item.name} x {item.quantity}</h3>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="total-amount">
              <h3>Total:</h3>
              <p>${total}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Render the Checkout component into the DOM
ReactDOM.render(<Checkout />, document.getElementById('checkout-root'));

// Mobile Menu Toggle Script (Same as Cart Page)
document.getElementById('toggle').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});

// Update Cart Count in Navbar
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById('cart-count').textContent = totalItems;
}

// Initialize Cart Count on Page Load
updateCartCount();
