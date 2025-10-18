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
            },
            certifications: "./assets/chungchi.png"
        }
    },
    {
        id: 2,
        name: "TRÀ SỮA GỪNG ĐEN VCAFE",
        image: "./assets/product2.png",
        subImage: "./assets/chungchi.png",
        description: "Trà sữa trộn với chiết xuất gừng đen VCAFE",
        badge: null,
        details: {
            ingredients: ["Trà sữa với chiết xuất trà đen, chiết xuất vỏ măng cụt và inulin", "Hương vị và mùi thơm đặc biệt của trà sữa"],
            countries: "Brunei, Campuchia, Indonesia, Malaysia, Singapore, Thái Lan, Việt Nam",
            usage: {
                serving: "Khuấy đều",
                morning: "Sẵn sàng sử dụng. Thích hợp để uống 1 - 3 gói mỗi ngày",
                dosage: "Thêm 1 gói trà VCAFE TEA và đổ 140ml nước nóng"
            },
            certifications: "./assets/chungchi.png"
        }
    },
    {
        id: 3,
        name: "VEMAXX",
        image: "./assets/product3.png",
        subImage: "./assets/chungchi.png",
        description: "Sản phẩm bổ sung dinh dưỡng toàn diện",
        badge: "Mới",
        badgeColor: "green",
        details: {
            ingredients: ["Chứa chiết xuất rễ ba lần hỗ trợ tuần hoàn máu, tăng năng lượng, giảm mệt mỏi.", "Bù nước với dung dịch điện giải", "Giàu vitamin C từ xoài tự nhiên, không đường, không caffeine"],
            countries: "Brunei, Campuchia, Malaysia, Singapore, Việt Nam",
            usage: {
                serving: "Khuấy đều",
                morning: "Sẵn sàng sử dụng. Dùng hai lần mỗi ngày.",
                dosage: "Thêm VEMAXX và đổ 160ml nước"
            },
            certifications: "./assets/chungchi.png"
        }
    },
    {
        id: 4,
        name: "VTAMEEN",
        image: "./assets/product4.png",
        subImage: "./assets/chungchi.png",
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
            certifications: "./assets/chungchi.png",
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
        subImage: "./assets/chungchi.png",
        description: "Bổ sung protein và dưỡng chất",
        badge: null,
        details: {
            ingredients: ["Chiết xuất gừng đen", "Protein váng sữa", "Chiết xuất cà phê xanh", "Socola Bỉ", "Quả nụ", "Đậu thận trắng"],
            countries: "Brunei, Campuchia, Ấn Độ, Indonesia, Lào, Malaysia, Singapore, Thái Lan, Việt Nam",
            usage: {
                dosage: "Thêm 1 gói VPRO 10 + 2 gói VTAMEEN vào 300ml nước",
                serving: "Lắc đều và sẵn sàng để phục vụ"
            },
            benefits: [
                "Tái tạo cơ thể của bạn",
                "Xây dựng cơ bắp với Whey Protein",
                "Đốt cháy mỡ thừa trong cơ thể bằng chiết xuất gừng đen",
                "Hương vị sô cô la Bỉ",
                "Chứa chiết xuất cà phê xanh, Garcinia Cambogia và đậu thận trắng giúp kiểm soát cơn thèm ăn."
            ],
            certifications: "./assets/chungchi.png"
        }
    },
    {
        id: 6,
        name: "VR5 CHẤT LỎNG",
        image: "./assets/product6.png",
        subImage: "./assets/chungchi.png",
        description: "Dung dịch bổ sung năng lượng nhanh",
        badge: null,
        details: {
            ingredients: ["Lutein (Hoa cúc vạn thọ)", "Chiết xuất gừng đen", "Chiết xuất măng cụt", "Quả lựu", "Mật ong thô"],
            countries: "Brunei, Campuchia, Malaysia, Singapore, Việt Nam",
            usage: {
                children: "1 gói cho trẻ em mỗi ngày",
                adults: "2 gói cho người lớn mỗi ngày",
                serving: "Đổ 300ml nước",
            },
            certifications: "./assets/chungchi.png"
        }
    },
    {
        id: 7,
        name: "V20",
        image: "./assets/product7.png",
        subImage: "./assets/chungchi.png",
        description: null,
        badge: null,
        details: {
            ingredients: ["Chiết xuất gừng đen", "Chiết xuất tổ yến", "Quả lựu", "Mật ong thô", "Gia vị Ả Rập"],
            benefits: ["Tốt nhất cho phụ nữ"],
            countries: "Brunei, Campuchia, Lào, Malaysia, Singapore, Thái Lan, Việt Nam",
            usage: {
                timing: "1 hoặc 2 gói mỗi ngày (Trước khi đi ngủ hoặc vào buổi sáng)"
            },
            certifications: "./assets/chungchi.png"
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
        badgeHTML = `
            <span class="block px-3 py-1 bg-primary/10 text-primary rounded-full text-center">
                <img src="${product.details.certifications}" alt="Certification" class="h-12 mx-auto">
            </span>
        `;
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
                ${product.description ? `<p class="text-lg text-gray-600 mb-6">${product.description}</p>` : ''}
                
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

// Combos Data
const combosData = [
    {
        id: 1,
        name: "Combo Trí Tuệ",
        image: "./assets/combo1.jpg",
        description: "Combo sản phẩm chăm sóc sức khỏe toàn diện",
        price: "1.400.000đ",
        originalPrice: "2.000.000đ",
        discount: "-25%",
        rating: 5,
        detailImage: "./assets/combo_detail1.png",
        details: {
            title: "VUI LÒNG ĐIỀN BÊN DƯỚI",
            ingredients: ["Sữa bò giàu canxi", "Chiết xuất gừng đen", "Hạt thi là đen", "Vitamin tổng hợp"],
            description: "Bộ combo hoàn hảo kết hợp các sản phẩm bổ sung dinh dưỡng toàn diện",
            benefits: ["Tăng cường miễn dịch", "Cải thiện tiêu hóa", "Lưu thông máu", "Giúp cơ thể ấm áp"]
        }
    },
    {
        id: 2,
        name: "Combo Phụ Nữ Tuổi 20",
        image: "./assets/combo2.jpg",
        description: "Combo sản phẩm bổ sung dưỡng chất",
        price: "2.495.000đ",
        originalPrice: "3.000.000đ",
        discount: "-25%",
        rating: 5,
        detailImage: "./assets/combo_detail2.png",
        details: {
            title: "VUI LÒNG ĐIỀN BÊN DƯỚI",
            ingredients: ["Protein whey", "Vitamin nhóm B", "Khoáng chất", "Chiết xuất thảo dược"],
            description: "Combo đặc biệt dành cho những người muốn bổ sung dưỡng chất toàn diện",
            benefits: ["Tăng cơ bắp", "Bổ sung năng lượng", "Hỗ trợ phục hồi sau tập luyện", "Tăng sức đề kháng"]
        }
    },
    {
        id: 3,
        name: "Combo Phụng Dưỡng Yêu Thương",
        image: "./assets/combo3.jpg",
        description: "Combo chăm sóc sức khỏe gia đình",
        price: "2.496.000đ",
        originalPrice: "3.250.000đ",
        discount: "-29%",
        rating: 5,
        detailImage: "./assets/combo_detail3.png",
        details: {
            title: "VUI LÒNG ĐIỀN BÊN DƯỚI",
            ingredients: ["Sữa tươi", "Gừng đen nguyên chất", "Thảo dược quý", "Vitamin D"],
            description: "Combo toàn diện dành cho cả gia đình từ trẻ em đến người lớn",
            benefits: ["Phù hợp cho mọi độ tuổi", "Tăng cường hệ miễn dịch", "Cải thiện sức khỏe tổng thể", "An toàn và hiệu quả"]
        }
    },
    {
        id: 4,
        name: "Combo Lửa Yêu",
        image: "./assets/combo4.jpg",
        description: "Combo chuyên sâu cho người trung tuổi",
        price: "3.095.000đ",
        originalPrice: "4.000.000đ",
        discount: "-25%",
        rating: 5,
        detailImage: "./assets/combo_detail4.png",
        details: {
            title: "VUI LÒNG ĐIỀN BÊN DƯỚI",
            ingredients: ["Gừng đen", "Hắc mạch", "Linh chi", "Thiên đông"],
            description: "Combo đặc biệt hỗ trợ sức khỏe người trung tuổi và người lớn tuổi",
            benefits: ["Bổ khí huyết", "Lưu thông tuần hoàn", "Tăng cường tiêu hóa", "Hỗ trợ giấc ngủ"]
        }
    },
    {
        id: 5,
        name: "Combo Độ BODY",
        image: "./assets/combo5.jpg",
        description: "Combo cao cấp VIP special edition",
        price: "3.950.000đ",
        originalPrice: "4.750.000đ",
        discount: "-29%",
        rating: 5,
        detailImage: "./assets/combo_detail5.png",
        details: {
            title: "VUI LÒNG ĐIỀN BÊN DƯỚI",
            ingredients: ["Gừng đen nguyên chất cao cấp", "Sâm Ngọc Linh", "Nấm Linh Chi Đỏ", "Yến sào"],
            description: "Combo VIP cao cấp với những thành phần quý nhất, dành cho những ai muốn chăm sóc sức khỏe toàn diện nhất",
            benefits: ["Bổ dưỡng cao cấp", "Làm đẹp da", "Tăng sức đề kháng mạnh", "Phục hồi sức khỏe nhanh chóng"]
        }
    }
];

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
