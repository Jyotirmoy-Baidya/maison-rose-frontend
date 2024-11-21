import toast from "react-hot-toast";

const ComboToast = () => {
    toast(
        <span>
            Check out our <b>NEW Combo Menu</b> with exciting offers!{' '}
            <NavLink
                to="/cafe/combos"
                style={{
                    color: '#e0c097',
                    textDecoration: 'underline',
                    marginLeft: '8px',
                }}
            >
                View Combos
            </NavLink>
        </span>,
        {
            duration: 5000, // Duration: 5 seconds
            style: {
                background: '#1f1f1f', // Matches dark theme
                color: '#fff', // Text color
                border: '1px solid #e0c097', // Gold accent
                padding: '16px',
                fontSize: '1rem',
            },
            iconTheme: {
                primary: '#e0c097', // Gold icon
                secondary: '#1f1f1f', // Dark background for the icon
            },
            icon: '🍕', // Optional: Add an emoji for visual appeal
        }
    );
};