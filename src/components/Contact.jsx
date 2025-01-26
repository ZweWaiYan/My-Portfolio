import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the specific error message when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleSignup = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }    
  };

  return (
    <div id='contact' className="w-full h-auto flex justify-center mb-10">

      {/* Popup */}
      {showPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='bg-[#1F1F2B] rounded-lg shadow-lg p-6 text-center'>
            <h2 className='text-lg text-neutral-100 font-bold'>Success!</h2>
            <p className='text-neutral-100'>Your message has been sent.</p>
            <button
              onClick={() => setShowPopup(false)}
              className='mt-4 px-4 py-2  bg-gradient-to-r from-blue-800 to-blue-900 text-neutral-100 rounded hover:bg-blue-300'
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="bg-[#1F1F2B] py-5 px-5 w-[500px] rounded-r-md">
        <h3 className="text-neutral-100 text-[30px] mb-8 font-black text-center">
          Contact
          <span className="text-neutral-500"> Me</span>
        </h3>
        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block mb-3 text-sm font-semibold text-neutral-100">
              NAME
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full h-[40px] px-4 rounded-md bg-[#333347] text-neutral-100 text-md ${errors.name && "border-red-500"
                }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-3 text-sm font-semibold text-neutral-100">
              EMAIL
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full h-[40px] px-4 rounded-md bg-[#333347] text-neutral-100 text-md ${errors.email && "border-red-500"
                }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block mb-3 text-sm font-semibold text-neutral-100">
              MESSAGE
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full h-[100px] px-4 py-1 rounded-md bg-[#333347] text-neutral-100 text-md ${errors.message && "border-red-500"
                }`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
        </div>

        <button
          onClick={handleSignup}
          className="w-full h-[50px] rounded-lg mt-10 text-[17px] border-[3px] bg-gradient-to-r from-purple-800 to-purple-900 text-neutral-100 hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-600 flex justify-center items-center"
        >
          SEND ME A MESSAGE
        </button>
      </div>
    </div>
  );
};

export default Contact;
