
# Eco-Adventure Experiences

**Eco-Adventure Experiences** is a blog website showcasing eco-friendly travel adventures, such as mountain treks, ocean dives, and more. The platform provides detailed information about each adventure, allowing users to explore, learn, and even consult experts. It includes user profiles, login, and registration features to enhance engagement.

## Live Demo  
[Live Application](https://eco-adventure-experiences.netlify.app/)  


## Key Features
- **Fully Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Firebase Authentication:** Includes Google login, email registration, and password reset.
- **Secure Environment:** Firebase configuration keys managed via environment variables.
- **Dynamic Adventure Data:** Adventures displayed dynamically using JSON data.
- **Adventure Detail Page:** Provides in-depth information about each eco-adventure.
- **Expert Consultation:** Google Meet integration or scheduled consultation messages based on time.
- **Private Routes:** Accessible only to logged-in users without redirection issues on reload.
- **Profile Management:** View and update user profiles.
- **404 Error Page:** Custom error page with a redirect to the homepage.
- **Interactive Animations:** Integrated with AOS for smooth animations.
- **Dynamic Titles:** Titles change dynamically based on the current route.
- **Winter-Themed Design:** Encourages eco-friendly travel with a visually pleasing theme.

## Example Adventures
Below are the types of eco-adventures included in the application:
- Mountain Treks
- Ocean Dives
- Forest Expeditions
- Camping Retreats
- Mangrove Forest Expeditions
- River Adventures

## Pages and Features

### **Homepage**
- **Banner Section:** Image slider showcasing eco-adventure themes.
- **Adventure Experiences Section:** Dynamic cards displaying:
  - Title, Image, Eco-Friendly Features, and an “Explore Now” button.
- **Additional Sections:** Two extra themed sections to enhance user engagement.

### **Authentication**
- **Login Page:** Email/password login with Google authentication option.
- **Register Page:** User registration with password validation.
- **Forgot Password:** Functional password reset via email redirection.

### **Adventure Details (Private Route)**
- Detailed adventure information with expert consultation options:
  - **Google Meet Integration** (10:00 AM - 8:00 PM).
  - **Scheduled Consultation Modal** (outside working hours).

### **My Profile (Private Route)**
- Displays user details and an update option for name and profile photo.

### **Error Page**
- 404 Not Found page with a home redirect.

## Technologies Used
### **Frontend**
- [React](https://reactjs.org/) - Core framework.
- [React Router DOM](https://reactrouter.com/) - For routing.
- [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/) - For responsive styling.
- [Swiper.js](https://swiperjs.com/) - For image sliders.
- [React Icons](https://react-icons.github.io/react-icons/) - For iconography.
- [AOS](https://michalsnik.github.io/aos/) - For animations.

### **Backend & Authentication**
- [Firebase](https://firebase.google.com/) - For authentication and hosting.

### **Utilities**
- [dotenv](https://www.npmjs.com/package/dotenv) - For managing environment variables.
- [react-toastify](https://fkhadra.github.io/react-toastify/) - For toast notifications.
- [useLocation] - For dynamic titles.


## Deployment
- Hosted on [Netlify]



