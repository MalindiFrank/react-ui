# Inspirational Quotes App

A beautiful, responsive React TypeScript application that displays inspirational quotes with smooth animations and modern UI design.

## Features

- **Modern UI Design**: Clean, gradient-based design with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Navigation**: Previous, Next, and Random quote buttons
- **Share Functionality**: Share quotes via native sharing or copy to clipboard
- **Reusable Components**: Modular component architecture for maintainability
- **TypeScript**: Full type safety and better development experience
- **Smooth Animations**: Hover effects and transitions for better UX

## Components

### QuoteCard
- Displays individual quotes with author and category
- Includes share functionality
- Responsive design with hover effects

### Button
- Reusable button component with primary/secondary variants
- Icon support and accessibility features
- Smooth animations and ripple effects

## Technologies Used

- **React 18** with TypeScript
- **Vite** for fast development and building
- **CSS3** with modern features (Grid, Flexbox, Gradients)
- **Responsive Design** with mobile-first approach

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the provided local URL

## Project Structure

```
src/
├── components/
│   ├── QuoteCard.tsx
│   ├── QuoteCard.css
│   ├── Button.tsx
│   └── Button.css
├── data/
│   └── quotes.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Features in Detail

### Responsive Design
- Mobile-first approach with breakpoints at 768px and 480px
- Flexible layouts that adapt to different screen sizes
- Touch-friendly button sizes on mobile devices

### Accessibility
- Proper ARIA labels and semantic HTML
- Keyboard navigation support
- Focus indicators for better accessibility

### Performance
- Optimized CSS with efficient selectors
- Smooth 60fps animations
- Minimal bundle size with tree-shaking

## Customization

You can easily customize the app by:
- Adding new quotes in `src/data/quotes.ts`
- Modifying colors and gradients in CSS files
- Adding new button variants or quote card styles
- Implementing additional features like favorites or categories

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.