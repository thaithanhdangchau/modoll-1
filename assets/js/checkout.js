(function () {
    const qtyInput = document.getElementById("qtyInput");
    const qtyMinus = document.getElementById("qtyMinus");
    const qtyPlus = document.getElementById("qtyPlus");
    const removeItemBtn = document.getElementById("removeItemBtn");
    const subtotalPrice = document.getElementById("subtotalPrice");
    const shippingFee = document.getElementById("shippingFee");
    const totalPrice = document.getElementById("totalPrice");
    const checkoutForm = document.getElementById("checkoutForm");
    const itemPrices = document.querySelectorAll("[data-price-item]");

    const unitPrice = Array.from(itemPrices).reduce((sum, el) => {
        const value = Number(el.textContent.replace(/[^0-9.-]+/g, ""));
        return sum + (Number.isFinite(value) ? value : 0);
    }, 0);
    const baseShipping = Number(shippingFee.textContent.replace(/[^0-9.-]+/g, "")) || 0;

    function clampQty(raw) {
        const qty = parseInt(raw, 10);
        if (Number.isNaN(qty)) return 1;
        return Math.min(99, Math.max(0, qty));
    }

    function toCurrency(value) {
        return `$${Math.round(value)}`;
    }

    function updateTotals() {
        const qty = clampQty(qtyInput.value);
        qtyInput.value = String(qty);
        const subtotal = qty * unitPrice;
        const shipping = qty > 0 ? baseShipping : 0;
        const total = subtotal + shipping;
        subtotalPrice.textContent = toCurrency(subtotal);
        shippingFee.textContent = toCurrency(shipping);
        totalPrice.textContent = toCurrency(total);
    }

    qtyMinus?.addEventListener("click", function () {
        qtyInput.value = String(clampQty((Number(qtyInput.value) || 1) - 1));
        updateTotals();
    });

    qtyPlus?.addEventListener("click", function () {
        qtyInput.value = String(clampQty((Number(qtyInput.value) || 1) + 1));
        updateTotals();
    });

    qtyInput?.addEventListener("input", updateTotals);

    removeItemBtn?.addEventListener("click", function () {
        qtyInput.value = "0";
        updateTotals();
    });

    checkoutForm?.addEventListener("submit", function (event) {
        event.preventDefault();
        const selectedPayment = checkoutForm.querySelector("input[name='payment']:checked");
        const paymentMethod = selectedPayment ? selectedPayment.nextElementSibling.textContent : "Unknown";
        const total = totalPrice.textContent;
        alert(`Order submitted!\nPayment: ${paymentMethod}\nTotal: ${total}`);
    });

    updateTotals();
})();
