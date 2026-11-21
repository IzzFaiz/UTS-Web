// Animasi navigasi (.nav-item): garis bawah saat hover/focus dan efek saat diklik.
document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.nav-item');

    items.forEach(function (item) {
        // Garis bawah (menggantikan .nav-item::before di CSS)
        var line = document.createElement('span');
        line.style.cssText =
            'position:absolute;bottom:0;left:0;width:0;height:2px;' +
            'background:white;pointer-events:none;' +
            'transition:width 0.3s ease-in-out;';
        item.appendChild(line);

        var showLine = function () { line.style.width = '100%'; };
        var hideLine = function () { line.style.width = '0'; };

        // Efek klik (menggantikan .nav-item:active di CSS)
        var press = function () {
            item.style.color = '#f7d400';
            item.style.transform = 'scale(0.95)';
            item.style.transition = 'transform 0.1s ease-in-out';
        };
        var release = function () {
            item.style.color = '';
            item.style.transform = '';
        };

        item.addEventListener('mouseenter', showLine);
        item.addEventListener('focus', showLine);
        item.addEventListener('mouseleave', function () { hideLine(); release(); });
        item.addEventListener('blur', hideLine);
        item.addEventListener('mousedown', press);
        item.addEventListener('mouseup', release);
        item.addEventListener('touchstart', press, { passive: true });
        item.addEventListener('touchend', release);
    });
});
