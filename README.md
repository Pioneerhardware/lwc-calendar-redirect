# Lightning Web Component - Calendar Redirect

A Lightning Web Component for navigating to the Salesforce Events Calendar UI in the mobile app, especially for Partner Users or other community contexts where standard support of the Events Calendar is not officially supported.

## Features

- ✅ Automatic navigation on component load
- ✅ Fallback navigation methods for mobile apps
- ✅ Multiple error handling layers
- ✅ Works in Lightning Experience and Salesforce Mobile App

## Problem Solved

The standard `NavigationMixin` doesn't always work reliably in Salesforce mobile app contexts. This component provides multiple fallback methods to ensure users can always reach the calendar.

## Installation

### Using Salesforce CLI

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/lwc-calendar-redirect.git
   cd lwc-calendar-redirect
   ```

2. Deploy to your org:
   ```bash
   sf project deploy start --source-dir force-app
   ```

### Manual Installation

1. Download the component files
2. Copy the `calendarRedirect` folder to your `force-app/main/default/lwc/` directory
3. Deploy using your preferred method

## Usage

### Option 1: Automatic Redirect
Place the component on a page for automatic navigation:
```html
<c-calendar-redirect></c-calendar-redirect>
```

### Option 2: Manual Button
The component also provides a manual button for user-initiated navigation.

## Configuration

Add the component to:
- Lightning App Pages
- Home Pages  
- Record Pages
- Community Pages

## Browser Support

- ✅ Lightning Experience (Desktop)
- ✅ Salesforce Mobile App (iOS/Android)
- ✅ Mobile browsers

## Technical Details

### Navigation Methods (in order of attempt):
1. `NavigationMixin` - Standard Salesforce navigation
2. `window.location.replace()` - No history entry
3. `window.location.href` - Standard redirect
4. `window.open()` - Last resort fallback

### Error Handling
Each navigation method is wrapped in try-catch blocks to ensure graceful fallbacks.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

If you encounter issues, please [open an issue](https://github.com/yourusername/lwc-calendar-redirect/issues) on GitHub.