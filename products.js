// Products Data
const productsData = [
    {
        id: 1,
        name: "CÀ PHÊ ARABICA BRAZIL VCAFE",
        image: "./assets/product1.jpg",
        description: "Cà phê Arabica nguyên chất từ Brazil",
        badge: "Hot",
        badgeColor: "red",
        details: {
            ingredients: ["Sữa bò giàu canxi", "Chiết xuất gừng đen", "Hạt thi là đen (Habbatus sauda)", "Chiết xuất hoa sen tuyết", "Chiết xuất lộ yến", "Inulin", "Phù hợp cho tất cả trẻ em và người lớn"],
            countries: "Brunei, Campuchia, Indonesia, Lào, Malaysia, Singapore, Thái Lan, Việt Nam",
            usage: {
                children: "Trẻ em: 1 gói + 140ml nước ấm",
                adults: "Người lớn: 2 gói + 280ml nước ấm",
                morning: "Sáng sáng sử dụng. Dùng hai lần mỗi ngày."
            }
        }
    },
    {
        id: 2,
        name: "TRÀ SỮA GỪNG ĐEN VCAFE",
        image: "./assets/product2.png",
        description: "Trà sữa hòa quyện hương vị gừng đen",
        badge: null,
        details: {
            ingredients: ["Trà đen cao cấp", "Chiết xuất gừng đen", "Sữa tươi", "Đường tự nhiên"],
            countries: "Việt Nam",
            usage: {
                serving: "1 gói pha với 200ml nước",
                frequency: "1-2 lần/ngày"
            }
        }
    },
    {
        id: 3,
        name: "VEMAXX",
        image: "./assets/product3.png",
        description: "Sản phẩm bổ sung dinh dưỡng toàn diện",
        badge: "Mới",
        badgeColor: "green",
        details: {
            ingredients: ["Vitamin tổng hợp", "Khoáng chất", "Chiết xuất gừng đen", "Omega-3"],
            countries: "Việt Nam, Thái Lan",
            usage: {
                dosage: "2 viên/ngày",
                timing: "Sau bữa ăn sáng"
            }
        }
    },
    {
        id: 4,
        name: "VTAMEEN",
        image: "./assets/product4.png",
        description: "Sữa bò giàu canxi cùng chiết xuất gừng đen",
        badge: "VIP",
        badgeColor: "yellow",
        details: {
            ingredients: [
                "Sữa bò giàu canxi",
                "Chiết xuất gừng đen",
                "Hạt thi là đen (Habbatus sauda)",
                "Chiết xuất hoa sen tuyết",
                "Chiết xuất lộ yến",
                "Inulin",
                "Phù hợp cho tất cả trẻ em và người lớn"
            ],
            countries: "Brunei, Campuchia, Indonesia, Lào, Malaysia, Singapore, Thái Lan, Việt Nam",
            certifications: ["HACCP", "GMP", "Halal MS 1500:2019"],
            usage: {
                children: "Trẻ em: 1 gói + 140ml nước ấm",
                adults: "Người lớn: 2 gói + 280ml nước ấm",
                timing: "Sáng sáng sử dụng. Dùng hai lần mỗi ngày."
            },
            benefits: [
                "Làm ấm cơ thể",
                "Lưu thông khí huyết, tinh thần minh mẫn",
                "Tăng cường hệ miễn dịch, xây dựng hàng rào phòng vệ vững chắc"
            ]
        }
    },
    {
        id: 5,
        name: "VPRO10",
        image: "./assets/product5.webp",
        description: "Bổ sung protein và dưỡng chất",
        badge: null,
        details: {
            ingredients: ["Protein whey", "Vitamin nhóm B", "Khoáng chất", "Chiết xuất gừng đen"],
            countries: "Việt Nam",
            usage: {
                dosage: "1 muỗng/lần, 2 lần/ngày",
                timing: "Trước hoặc sau tập luyện"
            }
        }
    },
    {
        id: 6,
        name: "VR5 CHẤT LỎNG",
        image: "./assets/product6.png",
        description: "Dung dịch bổ sung năng lượng nhanh",
        badge: null,
        details: {
            ingredients: ["Chiết xuất gừng đen đậm đặc", "Vitamin C", "Kẽm", "Magie"],
            countries: "Việt Nam",
            usage: {
                dosage: "1 ống/ngày",
                timing: "Buổi sáng"
            }
        }
    },
    {
        id: 7,
        name: "V20",
        image: "./assets/product7.png",
        description: "Viên uống hỗ trợ sức khỏe tổng thể",
        badge: null,
        details: {
            ingredients: ["Gừng đen đông khô", "20 loại vitamin và khoáng chất", "Collagen"],
            countries: "Việt Nam, Nhật Bản",
            usage: {
                dosage: "2 viên/lần, 2 lần/ngày",
                timing: "Sau bữa ăn"
            }
        }
    }
];

// Open Product Dialog
function openProductDialog(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const dialog = document.getElementById('product-dialog');
    const dialogContent = document.getElementById('dialog-content');
    
    let badgeHTML = '';
    if (product.details.certifications) {
        badgeHTML = product.details.certifications.map(cert => 
            `<span class="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mr-2">${cert}</span>`
        ).join('');
    }
    
    let ingredientsHTML = product.details.ingredients.map(item => 
        `<li class="flex items-start space-x-2">
            <i class="fas fa-check-circle text-primary mt-1"></i>
            <span>${item}</span>
        </li>`
    ).join('');
    
    let usageHTML = '';
    if (product.details.usage) {
        const usage = product.details.usage;
        usageHTML = `
            <div class="grid md:grid-cols-3 gap-4 mb-6">
                ${usage.children ? `
                <div class="bg-blue-50 p-4 rounded-xl text-center">
                    <i class="fas fa-child text-3xl text-blue-500 mb-2"></i>
                    <h4 class="font-bold text-gray-800 mb-2">Trẻ em</h4>
                    <p class="text-sm text-gray-700">${usage.children}</p>
                </div>` : ''}
                ${usage.adults ? `
                <div class="bg-purple-50 p-4 rounded-xl text-center">
                    <i class="fas fa-user text-3xl text-purple-500 mb-2"></i>
                    <h4 class="font-bold text-gray-800 mb-2">Người lớn</h4>
                    <p class="text-sm text-gray-700">${usage.adults}</p>
                </div>` : ''}
                ${usage.timing || usage.morning ? `
                <div class="bg-yellow-50 p-4 rounded-xl text-center">
                    <i class="fas fa-clock text-3xl text-yellow-500 mb-2"></i>
                    <h4 class="font-bold text-gray-800 mb-2">Thời gian</h4>
                    <p class="text-sm text-gray-700">${usage.timing || usage.morning}</p>
                </div>` : ''}
                ${usage.dosage ? `
                <div class="bg-green-50 p-4 rounded-xl text-center">
                    <i class="fas fa-pills text-3xl text-green-500 mb-2"></i>
                    <h4 class="font-bold text-gray-800 mb-2">Liều dùng</h4>
                    <p class="text-sm text-gray-700">${usage.dosage}</p>
                </div>` : ''}
                ${usage.serving ? `
                <div class="bg-pink-50 p-4 rounded-xl text-center">
                    <i class="fas fa-mug-hot text-3xl text-pink-500 mb-2"></i>
                    <h4 class="font-bold text-gray-800 mb-2">Pha chế</h4>
                    <p class="text-sm text-gray-700">${usage.serving}</p>
                </div>` : ''}
            </div>
        `;
    }
    
    let benefitsHTML = '';
    if (product.details.benefits) {
        benefitsHTML = `
            <div class="mb-6">
                <h3 class="text-xl font-bold text-gray-900 mb-4">
                    <i class="fas fa-heart text-red-500 mr-2"></i>Lợi ích
                </h3>
                <ul class="space-y-2">
                    ${product.details.benefits.map(benefit => `
                        <li class="flex items-start space-x-2">
                            <i class="fas fa-thumbs-up text-primary mt-1"></i>
                            <span class="text-gray-700">${benefit}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    
    dialogContent.innerHTML = `
        <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/3">
                <img src="${product.image}" alt="${product.name}" class="w-full rounded-2xl shadow-lg">
                ${badgeHTML ? `<div class="mt-4">${badgeHTML}</div>` : ''}
            </div>
            <div class="md:w-2/3">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">${product.name}</h2>
                <p class="text-lg text-gray-600 mb-6">${product.description}</p>
                
                <div class="mb-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-4">
                        <i class="fas fa-leaf text-green-500 mr-2"></i>Thành phần
                    </h3>
                    <ul class="space-y-2">
                        ${ingredientsHTML}
                    </ul>
                </div>
                
                ${benefitsHTML}
                
                ${product.details.countries ? `
                <div class="mb-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-4">
                        <i class="fas fa-globe text-blue-500 mr-2"></i>Các quốc gia có sản phẩm
                    </h3>
                    <p class="text-gray-700">${product.details.countries}</p>
                </div>
                ` : ''}
                
                <div class="mb-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-4">
                        <i class="fas fa-info-circle text-purple-500 mr-2"></i>Cách thức phục vụ
                    </h3>
                    ${usageHTML}
                </div>
                
                <div class="flex gap-4">
                    <button onclick="closeProductDialog()" class="flex-1 bg-gray-200 text-gray-800 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-300">
                        <i class="fas fa-times mr-2"></i>Đóng
                    </button>
                    <button class="flex-1 bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300">
                        <i class="fas fa-shopping-cart mr-2"></i>Đặt hàng ngay
                    </button>
                </div>
            </div>
        </div>
    `;
    
    dialog.classList.remove('hidden');
    dialog.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// Close Product Dialog
function closeProductDialog() {
    const dialog = document.getElementById('product-dialog');
    dialog.classList.add('hidden');
    dialog.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Close dialog when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('product-dialog');
    if (dialog) {
        dialog.addEventListener('click', function(e) {
            if (e.target === dialog) {
                closeProductDialog();
            }
        });
    }
});
