/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            sm: "570px",
            tablet: "1100px"
        },
        fontFamily: {
            inter: ["Inter", "sans-serif"]
        },
        fontSize: {
            sm: "0.625rem",
            md: "0.75rem",
            base: "0.875rem",
            lg: "1rem",
            mainHeading: "2.5rem"
        },
        fontWeight: {
            semibold: "500",
            bold: "600"
        },
        colors: {
            grayText: "#626060",
            buttonBlue: "#4F46E5",
            white: "#FFFFFF",
            borderGray: "#DDDFE4",
            borderLightGray: "#E8EAED",
            red: "#FF0000",
            lightRed: "rgba(234,172,172,0.84)",
            lightGreen: "#DCFCE7",
            green: "#166534",
            darkBlueBackground: "#1F2937",
            darkBlueHover: "#111827",
            navBorder: "#2E3848",
            cardNavItemColor: "#9CA3AF",
            profileBgColor: "#374151",
            profileTextDescription: "#D1D5DB",
            productGrey: "#707784",
            productInformationGrey: "#6B7280",
            buyNowBlue: "#2563EB",
            addToCardGrey: "#47454E",
            addToCardGreen: "#357622",
            deliverToText: "#0E65E9",
            inStockGreenText: "#32741E",
            freeReturnsBlue: "#4D94C1",
            selectBackgroundGrey: "#F0F2F2",
            darkGreySelectBorder: "#D5D7D7",
            textLightBlue: "#4B91BE",
            darkGreyText: "#575959"
        }
    },
    plugins: []
};
