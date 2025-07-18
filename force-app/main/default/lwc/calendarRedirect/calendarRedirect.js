import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CalendarRedirect extends NavigationMixin(LightningElement) {
    
    connectedCallback() {
        // Automatically navigate when component loads
        this.navigateToCalendar();
    }

    navigateToCalendar() {
        // Always use fallback navigation for mobile app contexts
        // NavigationMixin doesn't work reliably in mobile apps
        try {
            // Try NavigationMixin first, but wrap in try-catch
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Event',
                    actionName: 'home'
                }
            });
        } catch (error) {
            // Use fallback navigation when NavigationMixin fails
            this.fallbackNavigation();
        }
    }

    fallbackNavigation() {
        // Use replace() to avoid adding to browser history
        try {
            // Option 1: Try location replace (no history entry)
            window.location.replace('/lightning/o/Event/home');
        } catch (error) {
            try {
                // Option 2: Fallback to direct href
                window.location.href = '/lightning/o/Event/home';
            } catch (error2) {
                // Option 3: Last resort - use window.open
                window.open('/lightning/o/Event/home', '_self');
            }
        }
    }
}