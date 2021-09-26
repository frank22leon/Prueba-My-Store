const getDiscount = (product) => {
    const { amount, price, discount } = product;
    return (
      amount * price -
      (discount / 100) * (amount * price)
    )
}

export default getDiscount;