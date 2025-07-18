# Lightning Web Component - Calendar Redirect

A Lightning Web Component for navigating to the Salesforce Events Calendar UI in the mobile app, especially for Partner Users or in other community (Experience Cloud Site) contexts where standard support of the Events Calendar is not officially supported. 

## Problem

The standard Salesforce Events Calendar UI is not officially supported in the Salesforce Mobile App for Communtiy (Experience Cloud Site) Users.

This limitation is detailed here: https://help.salesforce.com/s/articleView?id=experience.networks_access_in_salesforce1_limitations.htm&type=5

This aims to restore that functionality by a simple redirect LWC. 

## Features

- ✅ Automatic navigation on component load
- ✅ Fallback navigation methods for mobile apps
- ✅ Multiple error handling layers
- ✅ Works in Lightning Experience and Salesforce Mobile App

## Usage

### Automatic Redirect
Place the component on a lightning page for automatic navigation on load.

### Manual Button
The component also provides a manual button for user-initiated navigation.

## Configuration

The user will need the following permissions to ensure the redirect and Events calendar work as expected:

As this is mainly created for Partner/Community Users in mind, I'll detail those only. This is assuming you place the component on a lightning page & create a Tab that uses the page.

### Partner License Profile
- Edit Events (Enabled)
- Access Activities (Enabled)
- Ensure Tab visilbiity (Default ON)

### Community Site Administration
- Add Tab to Community Tab Navigation

## Technical Details

### Navigation Methods (in order of attempt):
1. `NavigationMixin` - Standard Salesforce navigation
2. `window.location.replace()` - No history entry
3. `window.location.href` - Standard redirect
4. `window.open()` - Last resort fallback

### Error Handling
Each navigation method is wrapped in try-catch blocks to ensure graceful fallbacks.

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
