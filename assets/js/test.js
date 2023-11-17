    const socialMediaIcons = document.querySelectorAll('.icons svg');

    function openSocialMediaProfile(profile) {
        switch (profile) {
            case 'twitter':
                return 'https://twitter.com/your_twitter_handle';
            case 'linkedin':
                return 'https://www.linkedin.com/in/your_linkedin_profile';
            case 'facebook':
                return 'https://www.facebook.com/your_facebook_page';
            // Add more social media profiles as needed
            default:
                return '';
        }
    }

    function handleIconClick(event) {
        const icon = event.currentTarget; // Use currentTarget for SVG elements
        const profile = icon.getAttribute('alt').toLowerCase(); // Assuming alt text matches the social media platform

        // Ask for confirmation
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

    // Attach click event listeners to each social media icon (SVG)
    socialMediaIcons.forEach(icon => {
        icon.addEventListener('click', handleIconClick);
    });
