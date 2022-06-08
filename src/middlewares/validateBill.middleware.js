const validateBill = (req, res, next) => {
    const { bill } = req.params;


    if (bill.length !== 47 && bill.length !== 48) {
        return res.status(400).json({ error: 'Número de caracteres inválido' });
    }

    if (!bill.match(/^[0-9]+$/)) {
        return res.status(400).json({ error: 'Código deve conter apenas números' });
    }

    return next();
}

export default validateBill;