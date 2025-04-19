let selectedAllergy = ""; // المتغير لحفظ نوع الحساسية الذي اختاره المستخدم

// دالة لتحديد نوع الحساسية عند النقر على أيقونة
function selectAllergy(element, allergy) {
    selectedAllergy = allergy;
    console.log("تم اختيار الحساسية: " + selectedAllergy); // طباعة الحساسية المختارة (اختياري)

    // إزالة الإطار من جميع الأيقونات
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));

    // إضافة الإطار المربع للأيقونة المختارة
    element.classList.add('selected');

    // تفعيل الزر بعد الاختيار
    document.getElementById("nextButton").disabled = false;
    document.getElementById("nextButton").style.opacity = 1; // جعل الزر قابل للنقر
}

// دالة لتحويل الصفحة من الأولى إلى الثانية
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال التلقائي للنموذج

    // الحصول على قيم المدخلات
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // التحقق من صحة المدخلات
    if (name && age) {
        // إخفاء الصفحة الأولى وإظهار الصفحة الثانية
        document.getElementById("page1").style.display = "none";  // إخفاء الصفحة الأولى
        document.getElementById("page2").style.display = "block"; // إظهار الصفحة الثانية
    } else {
        alert("الرجاء إدخال الاسم والعمر.");
    }
});

// تفعيل التنقل عند الضغط على الزر في الصفحة الثانية
document.getElementById('nextButton').addEventListener('click', function() {
    if (selectedAllergy) {
        alert("تم اختيار الحساسية: " + selectedAllergy);
        // إخفاء الصفحة الثانية وإظهار الصفحة الثالثة
        document.getElementById("page2").style.display = "none";  // إخفاء الصفحة الثانية
        document.getElementById("page3").style.display = "block"; // إظهار الصفحة الثالثة
    } else {
        alert("الرجاء اختيار نوع الحساسية أولاً.");
    }
});

// التحقق من رقم الباركود في الصفحة الثالثة
document.getElementById('scanButton').addEventListener('click', function() {
    const barcode = document.getElementById('barcodeInput').value;

    // تحقق من صحة الباركود
    if (barcode === '1234567') {
        // إذا كان الباركود مناسب
        document.getElementById('resultText').innerText = 'هذا المنتج مناسب لك';
        document.getElementById('barcodeImage').style.display = 'none'; // إخفاء الصورة
        document.getElementById('result').style.display = 'block'; // عرض النتيجة
    } else if (barcode === '123456789') {
        // إذا كان الباركود غير مناسب
        document.getElementById('resultText').innerText = 'هذا المنتج غير مناسب لك';
        document.getElementById('barcodeImage').style.display = 'none'; // إخفاء الصورة عند عدم التوافق
        document.getElementById('result').style.display = 'block'; // عرض النتيجة
    } else {
        alert('الباركود غير صحيح!');
    }
});

// زر الرجوع في صفحة الفحص
document.getElementById('goBackButton').addEventListener('click', function() {
    // إخفاء النتيجة والعودة إلى الصفحة السابقة
    document.getElementById('result').style.display = 'none';
    document.getElementById('barcodeInput').value = ''; // إفراغ الحقل
});
