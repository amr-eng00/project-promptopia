// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         appDir: true,
//         serverComponentsExternalPackages: ["mongoose"],
//     },
//     images: {
//         domains: ['lh3.googleusercontent.com'],
//     },
//     webpack(config) {
//         config.experiments = {
//             ...config.experiments,
//             topLevelAwait: true,
//         }
//         return config
//     }
// }

// export default nextConfig

// @type {import('next').NextConfig}
const nextConfig = {
    // نیازی به appDir نداری
    serverExternalPackages: ["mongoose"],

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com", // گوگل پروفایل
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com", // گیت‌هاب پروفایل (اگه بعداً خواستی)
            },
            {
                protocol: "https",
                hostname: "gravatar.com", // برای fallback ایمیل آواتار
            },
        ],
    },

    // // اگر عمداً می‌خوای Webpack رو نگه داری (و از Turbopack استفاده نکنی)، این بخش بمونه
    // // ولی با Turbopack این قسمت نادیده گرفته میشه
    // webpack(config) {
    //     config.experiments = {
    //         ...config.experiments,
    //         topLevelAwait: true,
    //     };
    //     return config;
    // },
};

export default nextConfig;
