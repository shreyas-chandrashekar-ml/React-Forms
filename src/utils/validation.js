export const validateField = (name, value) => {
    switch (name) {
        case 'username':
            if (!value.trim()) return 'Username is required';
            return '';
            
        case 'email':
            if (!value.trim()) return 'Email is required';
            if (!/\S+@\S+\.\S+/.test(value)) return 'Email is invalid';
            return '';
            
        case 'password':
            if (!value) return 'Password is required';
            if (value.length < 6) return 'Password must be at least 6 characters';
            return '';
            
        default:
            return '';
    }
};

export const validateForm = (formData) => {
    const errors = {};
    Object.keys(formData).forEach(key => {
        const error = validateField(key, formData[key]);
        if (error) errors[key] = error;
    });
    return errors;
};
