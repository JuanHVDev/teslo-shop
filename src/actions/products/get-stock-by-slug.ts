"use server";

export const getStockBySlug = async (slug: string) => {
    try {
        const stock = await prisma?.product.findFirst({
            where: {
                slug: slug,
            },
            select: {
                inStock: true,
            },
        });

        return stock?.inStock ? stock.inStock : 0;
    } catch (error) {
        console.log(error);
        return 0;
    }
};
