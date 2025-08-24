# EasyCRM

A modern Customer Relationship Management (CRM) application built with **Angular 20** and modern web technologies.

## 🚀 Features

- **Modern Angular 20**: Built with the latest Angular version featuring standalone components, signals, and modern control flow
- **Client Management**: Complete CRUD operations for managing restaurant clients
- **Responsive Design**: Modern, mobile-friendly user interface
- **Lazy Loading**: Optimized routing with lazy-loaded feature modules
- **Performance Optimized**: Built with Angular 20's latest performance optimizations

## 🛠️ Technology Stack

- **Frontend Framework**: Angular 20.2.1
- **Language**: TypeScript 5.9.2
- **Package Manager**: pnpm
- **Build Tool**: Angular CLI 20.2.0
- **Styling**: CSS with modern design principles
- **Testing**: Karma + Jasmine

## 📋 Prerequisites

- **Node.js**: Version 18+ (LTS recommended)
- **pnpm**: Version 8+ (recommended package manager)
- **Angular CLI**: Version 20+

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd easy-crm
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Development Server

```bash
pnpm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── features/
│   │   └── clients/           # Client management feature
│   │       ├── data/          # Data layer (services, models)
│   │       │   ├── container/ # Smart components
│   │       │   ├── models/    # Data models
│   │       │   └── services/  # Business logic services
│   │       ├── ui/            # Presentational components
│   │       └── clients.routes.ts
│   ├── app.component.ts       # Root component
│   ├── app.config.ts          # Application configuration
│   └── app.routes.ts          # Main routing
├── styles.css                 # Global styles
└── main.ts                    # Application entry point
```

## 🧪 Development Commands

### Code Generation

```bash
# Generate a new component
ng generate component component-name

# Generate a new service
ng generate service service-name

# Generate a new model
ng generate interface model-name
```

### Building

```bash
# Development build
pnpm run build

# Production build
pnpm run build --configuration production
```

### Testing

```bash
# Run unit tests
pnpm run test

# Run tests in watch mode
pnpm run test --watch
```

### Code Quality

```bash
# Format code with Prettier
pnpm run format

# Lint code
ng lint
```

## 🎯 Key Features

### Client Management
- **Create Clients**: Add new restaurant clients with contact and address information
- **List Clients**: View all clients in a responsive table format
- **Edit Clients**: Modify existing client information
- **Client Status**: Track active, inactive, and prospect clients

### Modern Angular Patterns
- **Standalone Components**: All components use Angular 20's standalone architecture
- **Modern Control Flow**: Uses `@if`, `@for` instead of structural directives
- **Signals**: Reactive state management with Angular signals
- **Lazy Loading**: Feature-based code splitting for optimal performance

## 🔧 Configuration

### Browserslist
The project includes a `.browserslistrc` file configured for modern browser support:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (version 79+)

### Angular Configuration
- **Zone.js Optimization**: Event coalescing enabled for better performance
- **Client Hydration**: SSR-ready configuration
- **Strict Mode**: TypeScript strict mode enabled for better code quality

## 📱 Browser Support

This application supports modern browsers with ES2022+ features. Legacy browser support (IE11, older Edge versions) is not provided.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular CLI Overview](https://angular.dev/tools/cli)
- [Angular 20 Features](https://angular.dev/guide/update-to-version-20)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📞 Support

For questions or support, please open an issue in the repository or contact the development team.
