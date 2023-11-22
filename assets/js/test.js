/* Script for popup when clicking social media icon */

const socialMediaIcons = document.querySelectorAll('.icons svg');

    function openSocialMediaProfile(profile) {
        switch (profile) {
            case 'twitter':
                return 'https://twitter.com/your_twitter_handle';
            case 'linkedin':
                return 'https://www.linkedin.com/in/your_linkedin_profile';
            case 'facebook':
                return 'https://www.facebook.com/your_facebook_page';
            
            default:
                return '';
        }
    }

    function handleIconClick(event) {
        const icon = event.currentTarget; 
        const profile = icon.getAttribute('alt').toLowerCase(); 

        /* Ask for confirmation */
        const userConfirmed = window.confirm(`Do you want to go to the ${profile} profile?`);

        if (userConfirmed) {
            const profileUrl = openSocialMediaProfile(profile);
            if (profileUrl) {
                window.open(profileUrl, '_blank');
            } else {
                alert('Social media profile not found.');
            }
        }
    }

    socialMediaIcons.forEach(icon => {
        icon.addEventListener('click', handleIconClick);
    });
