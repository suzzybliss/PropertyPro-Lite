


// Create property
router.post('/property', authenticator, validator.property, property.create);
