# 🍽️ Pi Eats - Food Delivery Platform with Pi Cryptocurrency

![Pi Eats Banner](public/banner.png)

A revolutionary food delivery platform that seamlessly integrates Pi cryptocurrency payments, offering a complete bilingual experience in English and Arabic.

## ✨ Key Features

### 🛍️ Ordering System
- Browse restaurants and home chefs
- Real-time order tracking
- Smart search and filtering
- Favorite items and restaurants
- Order history and reordering

### 💰 Payment Integration
- Secure Pi cryptocurrency payments
- Dual wallet system (Pi & PTM)
- Instant payment processing
- Transaction history
- Secure payment verification

### 🎁 Rewards & Mining
- Earn PTM tokens through mining
- Daily rewards and bonuses
- Tier-based loyalty program
- Special weekend bonuses
- Mining leaderboard

### 🌐 Language Support
- Full Arabic and English support
- Automatic language detection
- RTL/LTR layout adaptation
- Localized date and number formats
- Cultural content adaptation

### 📱 Progressive Web App
- Install on mobile devices
- Offline functionality
- Push notifications
- Fast loading times
- Native-like experience

### 🛠️ Admin Dashboard
- Comprehensive management system
- Real-time analytics
- User management
- Order tracking
- Financial monitoring

## 🏗️ Project Structure

```
pi-eats-crypto-now-88-main/
├── src/
│   ├── components/         # UI Components
│   │   ├── admin/         # Admin Dashboard Components
│   │   ├── ui/            # Core UI Components
│   │   ├── cart/          # Shopping Cart Components
│   │   ├── wallet/        # Wallet Components
│   │   └── mining/        # Mining Feature Components
│   │
│   ├── contexts/          # React Contexts
│   │   ├── auth/          # Authentication Context
│   │   ├── cart/          # Cart Context
│   │   └── language/      # Language Context
│   │
│   ├── hooks/             # Custom React Hooks
│   ├── lib/               # Utility Libraries
│   ├── locales/           # Translation Files
│   │   ├── ar.json       # Arabic Translations
│   │   └── en.json       # English Translations
│   │
│   ├── pages/             # Application Pages
│   │   ├── admin/        # Admin Dashboard Pages
│   │   ├── auth/         # Authentication Pages
│   │   └── main/         # Main Application Pages
│   │
│   ├── utils/             # Helper Functions
│   └── App.tsx           # Application Entry Point
│
├── public/                # Static Assets
└── package.json          # Project Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Modern web browser
- Pi Network account

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/pi-eats-crypto-now-88-main.git
   cd pi-eats-crypto-now-88-main
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Configure your `.env` file:
   ```
   VITE_PI_APP_ID=your_pi_app_id
   VITE_PI_API_KEY=your_pi_api_key
   ```

4. **Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Production Build**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🔐 Admin Dashboard

### Access
- Navigate to `/admin/login`
- Use secure admin credentials
- Two-factor authentication available

### Features
- **Dashboard**: System overview and key metrics
- **User Management**: User accounts and permissions
- **Order Management**: Order tracking and processing
- **Restaurant Management**: Restaurant and menu control
- **Wallet Management**: Transaction monitoring
- **Analytics**: Detailed reports and statistics
- **Activity Logs**: System activity tracking
- **Security Settings**: Access control and security
- **System Settings**: Platform configuration

## 🌐 Internationalization

### Language Support
- Automatic language detection
- Manual language switching
- RTL/LTR layout support
- Localized content
- Cultural adaptations

### Features
- Bilingual interface
- Localized dates and numbers
- Cultural content adaptation
- RTL support for Arabic
- Translation management

## 📱 Progressive Web App

### Features
- Mobile installation
- Offline functionality
- Push notifications
- Fast loading
- Native-like experience

### Benefits
- Improved performance
- Better user experience
- Reduced data usage
- Instant updates
- Cross-platform support

## 🔒 Security Features

### Authentication
- Secure admin login
- Account lockout system
- Auto-logout on inactivity
- Session management
- Activity monitoring

### Data Protection
- Encrypted data storage
- Secure API communication
- XSS protection
- CSRF protection
- Input validation

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation
- Ensure cross-browser compatibility
- Maintain performance standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and assistance:

- Open an issue on GitHub
- Contact: support@pieats.com
- Documentation: [docs.pieats.com](https://docs.pieats.com)
- Community Forum: [community.pieats.com](https://community.pieats.com)

## 🌟 Acknowledgments

- Pi Network Team
- Open Source Contributors
- Beta Testers
- Community Members

---

Made with ❤️ by the Pi Eats Team
