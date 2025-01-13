const getAdminPassword = (req, res) => {
    const adminPassword = process.env.ADMIN_PASSWORD; 

    if (!adminPassword) {
        return res.status(500).json({ error: "Adgangskode ikke fundet." });
    }

    res.json({ password: adminPassword });
};

export default { getAdminPassword };
